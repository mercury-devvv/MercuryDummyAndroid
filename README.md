# MercuryDummyAndroid

Android counterpart of the MercuryDummy iOS app. The login screen matches it:

- **Log in** stays disabled until both the username and the password are exactly 6 characters.
- Tapping **Log in** opens a new screen that says **Hoşgeldiniz**.

Open the project in Android Studio and run the `app` configuration.

## Login E2E tests (Mercury Sage / TestArmy)

The TestArmy mobile suite covers the six-character login rule and navigation
to the welcome screen. Use Node.js 22.22.3+ and pnpm, build the debug APK,
start one Android emulator, then run:

```sh
./gradlew :app:assembleDebug
pnpm install --frozen-lockfile
ANDROID_HOME="$HOME/Library/Android/sdk" PATH="$HOME/Library/Android/sdk/platform-tools:$HOME/Library/Android/sdk/emulator:$PATH" pnpm test:e2e
```

Set `E2E_DEVICE` to a device name reported by `node_modules/.pnpm/agent-device@*/node_modules/agent-device/bin/agent-device.mjs devices`
when more than one Android emulator is booted. TestArmy writes its report,
JUnit output, screenshots, and video under `.e2e/`; failed runs also retain traces.
