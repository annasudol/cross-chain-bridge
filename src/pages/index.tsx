import React from 'react';

import MyButton from '@/components/button/MyButton';
import { MainLayout } from '@/components/layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-8 py-12 md:flex-row">
        template
        <MyButton>hr</MyButton>
        <button className="rounded bg-gradient-to-r from-blue-500 to-purple-500 p-1 font-semibold text-white">
          <span className="flex w-full rounded-full bg-gray-900 p-2 text-white">
            Gradient border
          </span>
        </button>
      </div>
    </MainLayout>
  );
};
export default HomePage;
