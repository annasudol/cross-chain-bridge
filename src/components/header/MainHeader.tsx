import { AppConfig } from '@/config/AppConfig';

const MainHeader = () => (
  <header className="">
    <div className="mx-auto my-4 max-w-screen-lg">
      <div className="mx-6 text-center">
        <h1 className="text-center text-2xl font-bold">
          web3{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Bridge{' '}
          </span>
        </h1>
        <div className="text-md mt-4 md:px-20">{AppConfig.description}</div>
      </div>
    </div>
  </header>
);

export { MainHeader };
