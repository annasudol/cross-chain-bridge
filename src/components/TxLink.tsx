import { Link } from '@nextui-org/react';

import { ChainName } from '@/types';

const transactionLink: Record<ChainName, string> = {
  [ChainName.Sepolia]: 'https://sepolia.etherscan.io/tx/',
};

interface TxLinkProps {
  txHash: string;
  chain?: ChainName;
  children?: React.ReactNode;
}

export function TxLink({
  txHash,
  chain = ChainName.Sepolia,
  children,
}: TxLinkProps) {
  const tokenLink = transactionLink[chain] + txHash;
  return <Link href={tokenLink}>{children || 'Transaction dedails'}</Link>;
}
