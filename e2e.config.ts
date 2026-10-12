import type { E2EConfig } from 'e2e';
import { mobile } from '@e2e-dev/mobile';

const android = mobile({
  platform: 'android',
  device: process.env.E2E_DEVICE,
});

export default {
  tests: 'tests/**/*.e2e.ts',
  targets: [
    {
      name: 'android',
      engine: android,
      app: {
        bundleId: 'com.mercurydevvv.mercurydummy',
        appPath: 'app/build/outputs/apk/debug/app-debug.apk',
      },
    },
  ],
  workers: 1,
  video: 'on',
} satisfies E2EConfig;
