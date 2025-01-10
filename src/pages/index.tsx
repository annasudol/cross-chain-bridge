import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { MainLayout } from '@/components/MainLayout';
import MyTabs from '@/components/Tabs';
import useLocalStorage from '@/hooks/useLocalStorage';

const HomePage = () => {
  const { chain } = useAccount();
  const router = useRouter();

  const { localstoragestate } = useLocalStorage(`redeem-${[chain?.id]}`);

  useEffect(() => {
    if (localstoragestate?.hash) {
      router.push(`/redeem/${localstoragestate.hash}`);
    }
  }, [localstoragestate, router]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-8 px-6 sm:py-12 md:flex-row">
        <MyTabs />
      </div>
    </MainLayout>
  );
};

export default HomePage;
