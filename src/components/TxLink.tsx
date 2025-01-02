import { Link } from '@nextui-org/react';

import type { ChainID } from '@/types';

const transactionLink: Record<ChainID, string> = {
  11155111: 'https://sepolia.etherscan.io/tx/',
  97: 'https://testnet.bscscan.com/tx/',
};

const transactionName: Record<ChainID, string> = {
  11155111: 'etherscan',
  97: 'bscscan',
};

interface TxLinkProps {
  txHash: string;
  chainId?: ChainID;
}

export function TxLink({ txHash, chainId = 97 }: TxLinkProps) {
  const tokenLink = transactionLink[chainId] + txHash;
  const txLinkType = transactionName[chainId];

  return <Link href={tokenLink}>{txLinkType}</Link>;
}
