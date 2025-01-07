import React from 'react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { RedeemForm } from '@/components/form/RedeemForm';
import { MainLayout } from '@/components/layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-8 px-6 sm:py-12 md:flex-row">
        <BalanceUIwrapper>
          <RedeemForm />
        </BalanceUIwrapper>
      </div>
    </MainLayout>
  );
};

export default HomePage;
