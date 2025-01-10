import { ConnectButton } from '@rainbow-me/rainbowkit';

import { MyButton } from './MyButton';

interface ISwitchNetworkBtn {
  children: React.ReactNode;
  label?: string;
  click?: () => void;
}
export const SwitchNetworkButton = ({
  label,
  children,
  click,
}: ISwitchNetworkBtn) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, authenticationStatus, mounted }) => {
        const handleClick = () => {
          openChainModal();
          if (click) click();
        };
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (connected) {
                return (
                  <div>
                    {label && (
                      <span className="mx-1 text-lg text-white">{label}</span>
                    )}
                    <MyButton
                      onPress={handleClick}
                      disabled={!connected || chain?.unsupported}
                      type="button"
                      size="lg"
                      variant="solid"
                      className="mt-12 w-full px-12"
                    >
                      {children}
                    </MyButton>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
