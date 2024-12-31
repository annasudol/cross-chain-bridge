import { AppConfig } from '@/config/AppConfig';

const MainHeader = () => (
  <header className="">
    <div className="mx-auto my-12 max-w-screen-lg">
      <div className="mx-8 mb-12 text-center">
        <h1 className="text-center text-2xl font-bold">
          Next.js{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Web3{' '}
          </span>
          Starter
        </h1>
        <div className="text-md mt-4 md:px-20">{AppConfig.description}</div>
      </div>
    </div>
  </header>
);

export { MainHeader };
