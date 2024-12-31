'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

import { useReadData } from '@/hooks/useReadVault';

import { SwitchNetworkButton } from './button/SwitchNetworkButton';

// import { TokenQuantityInput } from '@/components/TokenQuantityInput';
// import BridgeAbi from '@/abi/BridgeAbi.json';
// import { useBalance } from '@/app/hooks/useBalance';
// import useLocalStorage from '@/app/hooks/useLocalStorage';
// import { getChainById } from '@/chains';
// import { ConnectWallet } from '@/components/ConnectWallet';
// import { useNotifications } from '@/context/Notifications';

export function Bridge() {
  const [amount, setAmount] = useState('0.01');
  const [swapTxIsSuccess, setSwapTxIsSuccess] = useState(false);
  const {} = useReadData();
  // const { openChainModal } = useChainModal();

  // const { Add } = useNotifications();
  const { address, chain } = useAccount();
  // const { formattedBalance } = useBalance({
  //   address,
  //   tokenAddress: getChainById(chain?.id).tokenAddress,
  // });

  // const { setValue } = useLocalStorage(
  //   `redeem-${getChainById(chain?.id).swapTokens[0]}`,
  // );
  const handleClick = () => {
    // openChainModal && openChainModal();
    setSwapTxIsSuccess(false);
  };
  async function handleSendTransaction() {
    if (chain && chain?.id && address) {
      // writeContract({
      //   address: getChainById(chain?.id).bridgeAddress,
      //   abi: BridgeAbi,
      //   functionName: 'swap',
      //   args: [
      //     address,
      //     parseEther(amount),
      //     BigInt(0),
      //     BigInt(chain?.id),
      //     getChainById(chain?.id).name,
      //   ],
      // });
      //    function swap(address to, uint256 amount, uint256 nonce, uint256 chainId, string memory symbol)
    } else {
      // Add(`Unknown chain ID or an address`, {
      //   type: 'error',
      // });
    }
  }

  // useEffect(() => {
  //   // if (txSuccess && hash && address) {
  //   //   setValue(amount, address, hash);
  //   //   // Add(`Transaction successful`, {
  //   //   //   type: 'success',
  //   //   //   href: chain?.blockExplorers?.default.url
  //   //   //     ? `${chain.blockExplorers.default.url}/tx/${hash}`
  //   //   //     : undefined,
  //   //   // });
  //   //   if (!isLoading && !isPending && !isPendingSwap) setSwapTxIsSuccess(true);
  //   // } else if (txError) {
  //   //   console.warn('error', txError);
  //   //   // Add('Transaction failed', {
  //   //   //   type: 'error',
  //   //   // });
  //   // } else if (error) {
  //   //   console.warn('error', error);
  //   //   // Add('Transaction failed', {
  //   //   //   type: 'error',
  //   //   // });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [txSuccess, txError, error, isLoading, isPending, isPendingSwap]);

  return (
    <>
      <div className="flex h-96 flex-col justify-between px-2 py-4">
        <SwitchNetworkButton />
        <div className="py-2 pl-1 text-white">
          {address && chain?.id && (
            <>
              {/* Your balance: {formattedBalance}
              <span className="mx-2 text-white">
                {getChainById(chain?.id)?.name}
              </span> */}
            </>
          )}
        </div>
        {/* {swapTxIsSuccess ? (
          <ButtonSubmit onClick={handleClick}>
            click to change network to{' '}
            {getChainById(chain?.id).swapTokensChains[0]}
          </ButtonSubmit>
        ) : (
          <div className="m-2">
            <div className="form-control w-full">
              <TokenQuantityInput
                id="swap-amount"
                label={getChainById(chain?.id).name}
                onChange={setAmount}
                quantity={amount}
                maxValue={formattedBalance}
                disabled={isPending || isLoading}
              />
            </div>
            <ButtonSubmit
              onClick={handleSendTransaction}
              disabled={!address || Number(amount) < 0.01}
              isLoading={isPending || isLoading}
            >
              {formattedBalance && Number(formattedBalance) < 0.01
                ? 'Insufficient balance'
                : `Swap ${amount} ${getChainById(chain?.id)?.name} to
              ${getChainById(chain?.id)?.name === 'sETH' ? 'sBCS' : 'sETH'}`}
            </ButtonSubmit>
          </div>
        )} */}
      </div>
    </>
  );
}
