import { Alert } from '@nextui-org/react';
import React from 'react';

import type { MyNotification } from '@/types';

export function MyAlert({ title, type, description }: MyNotification) {
  return (
    <div className="flex w-full items-center">
      <Alert color={type} title={title} description={description} />
    </div>
  );
}
