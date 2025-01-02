import '../styles/global.css';

import type { AppProps } from 'next/app';

import { MyNotificationProvider } from '@/providers/Notifications';
import { UIProvider } from '@/providers/UIProvider';
import { Web3Provider } from '@/providers/Web3';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3Provider>
    <UIProvider>
      <MyNotificationProvider>
        <Component {...pageProps} />
      </MyNotificationProvider>
    </UIProvider>
  </Web3Provider>
);

export default MyApp;
