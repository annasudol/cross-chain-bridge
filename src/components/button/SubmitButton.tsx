'use client';

import type { ButtonProps } from '@nextui-org/button';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import MyButton, { ButtonRightIcon } from '@/components/button/MyButton';

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div className="flex w-full flex-col text-center">
      <MyButton
        className="min-w-56 bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-center font-semibold text-white disabled:opacity-50"
        isDisabled={!address || props.isDisabled}
        size="lg"
        color="primary"
        variant="solid"
        iconRight={ButtonRightIcon.ArrowRight}
        {...props}
      >
        {!address ? 'Wallet is not connected' : children}
      </MyButton>
      {!address && (
        <button
          className="mt-4 text-center text-sm text-gray-300 underline hover:opacity-80"
          onClick={openConnectModal}
        >
          Connect your wallet
        </button>
      )}
    </div>
  );
};

export { SubmitButton };
