'use client';

import { useAccount } from 'wagmi';

import { SwitchNetworkButton } from '@/components/button/SwitchNetworkButton';
import { useReadData } from '@/hooks/useReadVault';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { balance, token } = useReadData();
  const { address, chain } = useAccount();

  return (
    <>
      <div className="h-70 flex flex-col justify-between py-4 sm:px-8">
        <SwitchNetworkButton />
        <p className="mt-12 text-sm text-white">
          {address && chain?.id && (
            <>
              Your balance:
              <span className="mx-2 text-white">
                {balance?.value?.int} {token.value?.symbol}
              </span>
            </>
          )}
        </p>
        {children}
      </div>
    </>
  );
}
