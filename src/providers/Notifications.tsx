'use client';

import type { PropsWithChildren } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import type { MyNotification } from '@/types';

interface MyNotificationContext {
  Add: (options: MyNotification) => void;
  Clear: () => void;
  notifications: MyNotification[];
}

const defaultMyNotificationContext: MyNotificationContext = {
  Add: (_options?: MyNotification) => {},
  Clear: () => {},
  notifications: [],
};

const MyMyNotificationContext = createContext(defaultMyNotificationContext);

export const useMyNotifications = () => {
  const context = useContext(MyMyNotificationContext);
  if (!context) {
    throw new Error(
      'useMyNotifications must be used within a MyNotificationProvider',
    );
  }

  return context;
};

export function MyNotificationProvider(props: PropsWithChildren) {
  const [notifications, setNotifications] = useState<MyNotification[]>([]);

  useEffect(() => {
    const storedMyNotifications = localStorage?.getItem('MyNotifications');
    if (storedMyNotifications) {
      setNotifications(JSON.parse(storedMyNotifications));
    }
  }, []);

  function Add(options: MyNotification) {
    const myNotification: MyNotification = {
      title: options.title,
      id: options.id || new Date().getTime().toString(),
      type: options?.type || 'default',
    };
    localStorage.setItem(
      'MyNotifications',
      JSON.stringify([...notifications, myNotification]),
    );
    setNotifications([...notifications, myNotification]);
    if (options.type === 'success') {
      toast.success(myNotification.title, {
        toastId: myNotification.id,
      });
    }
    if (options.type === 'danger') {
      toast.error(myNotification.title, {
        toastId: myNotification.id,
      });
    }
    if (options.type === 'warning') {
      toast.warning(myNotification.title, {
        toastId: myNotification.id,
      });
    } else {
      toast.info(myNotification.title, {
        toastId: myNotification.id,
      });
    }
  }

  function Clear() {
    localStorage.removeItem('MyNotifications');
    setNotifications([]);
  }

  return (
    <MyMyNotificationContext.Provider value={{ Add, Clear, notifications }}>
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
    </MyMyNotificationContext.Provider>
  );
}
