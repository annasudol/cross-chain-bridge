// eslint-disable-next-line import/no-extraneous-dependencies
import { createEnv } from '@t3-oss/env-nextjs';

import { ADDRESS, STRING_NOT_EMPTY } from '@/lib/zod';

export const envs = createEnv({
  client: {
    // RainbowKit
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID: STRING_NOT_EMPTY,

    // Contract Addresses
    NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS: ADDRESS,
    NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS: ADDRESS,
  },
  runtimeEnv: {
    // RainbowKit
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID:
      process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,

    // Etherscan
    NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS:
      process.env.NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS,
    NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS:
      process.env.NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS,
  },
  emptyStringAsUndefined: true,
});
