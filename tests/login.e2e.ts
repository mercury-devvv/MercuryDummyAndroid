import { expect } from 'e2e';
import { test } from '@e2e-dev/mobile';

test(
  'login button requires exactly six characters in both fields',
  async ({ device, app, screen }) => {
    await device.installApp();
    await app.open();
    await expect(screen.getByText('Welcome back')).toBeVisible();

    const username = screen.getByRole('textbox').nth(0);
    const password = screen.getByRole('textbox').nth(1);
    const login = screen.getByRole('button');

    await username.fill('12345');
    await password.fill('123456');
    await login.tap();
    await expect(screen.getByText('Hoşgeldiniz')).toBeHidden();

    await username.clear();
    await username.fill('123456');
    await login.tap();
    await expect(screen.getByText('Hoşgeldiniz')).toBeVisible();

    await app.open();
    await password.fill('1234567');
    await login.tap();
    await expect(screen.getByText('Hoşgeldiniz')).toBeHidden();
  },
);

test(
  'valid six-character credentials open the welcome screen',
  async ({ device, app, screen }) => {
    await device.installApp();
    await app.open();
    await expect(screen.getByText('Welcome back')).toBeVisible();

    await screen.getByRole('textbox').nth(0).fill('user01');
    await screen.getByRole('textbox').nth(1).fill('pass01');
    await screen.getByRole('button').tap();

    await expect(screen.getByText('Hoşgeldiniz')).toBeVisible();
  },
);
