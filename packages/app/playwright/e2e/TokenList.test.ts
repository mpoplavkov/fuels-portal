import type { Browser, Page } from '@playwright/test';
import test, { chromium, expect } from '@playwright/test';

import { getButtonByText, getByAriaLabel, hasText } from '../commons';

const addUnknownToken = async (page: Page) => {
  // Go to the bridge page
  const bridgePage = page.locator('a').getByText('Bridge');
  await bridgePage.click();

  const tokenListButton = getByAriaLabel(page, 'Coin Selector');
  await tokenListButton.click();

  const manageTokenListButton = getButtonByText(page, 'Manage token list');
  await manageTokenListButton.click();

  const addressInput = page.getByPlaceholder('Search or paste custom address');
  await addressInput.fill('0xB8c77482e45F1F44dE1745F52C74426C631bDD52');

  await hasText(page, '0xB8c7...DD52');

  const addAssetButton = getByAriaLabel(page, 'AddEthAsset');
  await addAssetButton.click();

  // Test add asset
  await hasText(page, 'Add token 0xB8c7...DD52');

  const addTokenButton = getButtonByText(page, 'Add token to list');
  await expect(addTokenButton).toBeDisabled();

  const tokenSymbolInput = page.getByPlaceholder('SYMBOL');
  await tokenSymbolInput.fill('bnb');
  const tokenDecimalsInput = page.getByPlaceholder('18');
  await tokenDecimalsInput.fill('18');

  await addTokenButton.click();
};

test.describe('Token List', () => {
  let browser: Browser;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  test.beforeEach(async () => {
    await page.goto('/');
  });

  test('should be able to remove token', async () => {
    await addUnknownToken(page);
    await hasText(page, 'BNB');

    const manageTokenListButton = getButtonByText(page, 'Manage token list');
    await manageTokenListButton.click();

    const removeAssetButton = page
      .locator('article')
      .filter({ hasText: 'BNB Icon SquareRoundedX' })
      .getByLabel('RemoveEthAsset');
    await removeAssetButton.click();

    await hasText(page, 'Are you sure?');
    const confirmButton = getButtonByText(page, 'Confirm');
    await confirmButton.click();

    expect(await page.getByText('BNB').count()).toBe(0);
  });

  test('should be able to add unknown token', async () => {
    await addUnknownToken(page);
    await hasText(page, 'BNB');
  });

  test('should be able to add known token', async () => {
    // Go to the bridge page
    const bridgePage = page.locator('a').getByText('Bridge');
    await bridgePage.click();

    const tokenListButton = getByAriaLabel(page, 'Coin Selector');
    await tokenListButton.click();

    const manageTokenListButton = getButtonByText(page, 'Manage token list');
    await manageTokenListButton.click();

    const addressInput = page.getByPlaceholder(
      'Search or paste custom address'
    );
    await addressInput.fill('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');

    await hasText(page, 'USDC');

    const addAssetButton = getByAriaLabel(page, 'AddEthAsset');
    await addAssetButton.click();

    await hasText(page, 'USDC');
    await hasText(page, 'Manage token list');
  });

  test('should be able to search for token', async () => {
    const bridgePage = page.locator('a').getByText('Bridge');
    await bridgePage.click();
    const tokenListButton = getByAriaLabel(page, 'Coin Selector');
    await tokenListButton.click();
    const addressInput = page.getByPlaceholder(
      'Search or paste custom address'
    );

    await addressInput.fill('BNB');
    await hasText(page, 'BNB');
  });

  test('should be able to select token', async () => {
    const bridgePage = page.locator('a').getByText('Bridge');
    await bridgePage.click();
    const tokenListButton = getByAriaLabel(page, 'Coin Selector');
    await tokenListButton.click();

    const bnbButton = page.getByText('BNB');
    await bnbButton.click();
    await hasText(page, 'BNB');
  });

  test('should be able to change between editable mode', async () => {
    const bridgePage = page.locator('a').getByText('Bridge');
    await bridgePage.click();
    const tokenListButton = getByAriaLabel(page, 'Coin Selector');
    await tokenListButton.click();

    await hasText(page, 'Select token');
    await hasText(page, 'Manage token list');

    const manageTokenListButton = getButtonByText(page, 'Manage token list');
    await manageTokenListButton.click();

    await hasText(page, 'Manage token list');

    const removeEthAssetButton = page
      .locator('article')
      .filter({ hasText: 'ETH Icon SquareRoundedX' })
      .getByLabel('RemoveEthAsset');
    expect(removeEthAssetButton).toBeDisabled();
  });
});