import { Link } from '@nextui-org/react';

import type { ChainID } from '@/types';

const transactionLink: Record<ChainID, string> = {
  11155111: 'https://sepolia.etherscan.io/tx/',
  97: 'https://testnet.bscscan.com/tx/',
};

interface TxLinkProps {
  txHash: string;
  chainId?: ChainID;
  children?: React.ReactNode;
}

export function TxLink({ txHash, chainId = 97, children }: TxLinkProps) {
  const tokenLink = transactionLink[chainId] + txHash;
  return <Link href={tokenLink}>{children || 'Transaction dedails'}</Link>;
}
