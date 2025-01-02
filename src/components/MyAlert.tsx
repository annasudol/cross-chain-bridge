import { Alert } from '@nextui-org/react';
import React from 'react';

import { TxLink } from '@/components/TxLink';
import type { MyNotification } from '@/types';

export function MyAlert({ title, type, tx }: MyNotification) {
  const description = tx ? (
    <TxLink txHash={tx.href} chainId={tx.chainid} />
  ) : null;
  return (
    <div className="flex w-full items-center">
      <Alert color={type} title={title} description={description} />
    </div>
  );
}
