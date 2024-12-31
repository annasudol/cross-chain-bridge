import { Navbar } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { LinkComponent } from '@/components/MyLink';
import { AppConfig } from '@/config/AppConfig';

const MainNavbar = () => (
  <Navbar className="w-full" shouldHideOnScroll>
    <div className="mx-auto flex w-full flex-wrap items-center justify-between">
      <nav className="py-6">
        <LinkComponent href="/">
          <h1 className="text-xl font-bold">{AppConfig.emoji}</h1>
        </LinkComponent>
      </nav>
      <ConnectButton />
    </div>
  </Navbar>
);

export { MainNavbar };
