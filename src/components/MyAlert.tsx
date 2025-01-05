import { Alert } from '@nextui-org/react';
import React from 'react';

interface MyAlertProps {
  message: string;
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  description?: React.ReactNode;
}

export function MyAlert({ message, color, description }: MyAlertProps) {
  return (
    <div className="my-3 flex w-full items-center">
      <Alert color={color} title={message} description={description} />
    </div>
  );
}
