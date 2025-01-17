import { Button } from '@fuel-ui/react';

import { useBridgeButton } from '../hooks';

export const BridgeButton = () => {
  const { text, handlers, isLoading, isDisabled } = useBridgeButton();

  return (
    <Button
      onPress={handlers.action}
      isLoading={isLoading}
      isDisabled={isDisabled}
      variant={isDisabled ? 'ghost' : 'solid'}
      intent={isDisabled ? 'base' : 'primary'}
      size="lg"
      aria-label={text}
    >
      <b>{text}</b>
    </Button>
  );
};
