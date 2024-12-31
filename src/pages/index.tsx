import React from 'react';

import { MainLayout } from '@/components/layout/MainLayout';
import MyTabs from '@/components/Tabs';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-8 py-12 md:flex-row">
        <MyTabs />
      </div>
    </MainLayout>
  );
};
export default HomePage;
