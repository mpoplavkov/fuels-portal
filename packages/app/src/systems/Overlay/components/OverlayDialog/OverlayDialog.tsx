import { cssObj } from '@fuel-ui/css';
import { Dialog } from '@fuel-ui/react';

import { useOverlay } from '~/systems/Overlay';

const OVERLAY_HEIGHT = 600;
const OVERLAY_WIDTH = 600;

export function OverlayDialog() {
  const overlay = useOverlay();

  return (
    <Dialog isOpen={overlay.isDialogOpen}>
      <Dialog.Content css={styles.content}>
        {/* {overlay.is('accounts.list') && <Accounts />} */}
      </Dialog.Content>
    </Dialog>
  );
}

const styles = {
  content: cssObj({
    width: OVERLAY_WIDTH,
    height: OVERLAY_HEIGHT,
    maxWidth: OVERLAY_WIDTH,
    maxHeight: 'none',
    background: '$bodyColor',

    '.fuel_dialog--heading, .fuel_dialog--footer': {
      borderColor: '$gray2',
    },
    '.fuel_dialog--description': {
      flex: 1,
      overflowY: 'auto',
      height: '100%',
    },
    '.fuel_dialog--heading': cssObj({
      display: 'flex',
      justifyContent: 'space-between',
    }),
    '.fuel_dialog--footer': cssObj({
      button: {
        width: '100%',
      },
    }),
    form: cssObj({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }),
    'button[data-action="closed"]': {
      px: '$1',
    },
  }),
};