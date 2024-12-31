import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { UIProvider } from '@/providers/UIProvider';
import { Web3Provider } from '@/providers/Web3';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3Provider>
    <UIProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </UIProvider>
  </Web3Provider>
);

export default MyApp;
