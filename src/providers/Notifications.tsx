'use client';

// import 'react-toastify/dist/ReactToastify.min.css';

// import '@/assets/notifications.css';
import dayjs from 'dayjs';
import type { PropsWithChildren } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAccount } from 'wagmi';

import { StatusIcon } from '@/components/Alert';
import type { Notification } from '@/types';

type NotificationOptions = Partial<Omit<Notification, 'message'>>;

interface NotificationContext {
  Add: (message: string, options?: NotificationOptions) => void;
  Clear: () => void;
  notifications: Notification[];
}

const defaultNotificationContext: NotificationContext = {
  Add: (_message?: string, _options?: NotificationOptions) => {},
  Clear: () => {},
  notifications: [],
};

const MyNotificationContext = createContext(defaultNotificationContext);

export const useNotifications = () => {
  const context = useContext(MyNotificationContext);
  if (!context) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
  }

  return context;
};

export function NotificationProvider(props: PropsWithChildren) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { address } = useAccount();

  useEffect(() => {
    const storedNotifications = localStorage?.getItem('notifications');
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
  }, []);

  function Add(message: string, options?: NotificationOptions) {
    const notification: Notification = {
      message,
      type: options?.type || 'info',
      timestamp: options?.timestamp || dayjs().valueOf(),
      from: options?.from || address,
      ...options,
    };
    localStorage.setItem(
      'notifications',
      JSON.stringify([...notifications, notification]),
    );
    setNotifications([...notifications, notification]);
    toast(message, {
      type: notification.type,
      icon: <StatusIcon type={notification.type || 'info'} />,
    });
  }

  function Clear() {
    localStorage.removeItem('notifications');
    setNotifications([]);
  }

  return (
    <MyNotificationContext.Provider value={{ Add, Clear, notifications }}>
      {props.children}
      <ToastContainer
        limit={20}
        autoClose={10000}
        theme="dark"
        position="bottom-center"
        toastClassName={() =>
          'flex relative bg-base-300 rounded-xl justify-between overflow-hidden p-2 mb-2 min-w- w-96'
        }
        className={() => 'flex text-sm gap-2 px-4 py-2'}
      />
    </MyNotificationContext.Provider>
  );
}
