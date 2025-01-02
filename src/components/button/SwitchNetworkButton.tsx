import { ConnectButton } from '@rainbow-me/rainbowkit';

import MyButton, { ButtonRightIcon } from './MyButton';

interface ISwitchNetworkBtn {
  label?: string;
  children: React.ReactNode;
}
export const SwitchNetworkButton = ({ label, children }: ISwitchNetworkBtn) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, authenticationStatus, mounted }) => {
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
                      className="min-w-56 bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-center font-semibold text-white disabled:opacity-50"
                      disabled={!connected || chain?.unsupported}
                      size="lg"
                      color="primary"
                      variant="solid"
                      iconRight={ButtonRightIcon.ArrowRight}
                      onPress={openChainModal}
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
