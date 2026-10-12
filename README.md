# MercuryDummyAndroid

Android counterpart of the MercuryDummy iOS app. The login screen matches it:

- **Log in** stays disabled until both the username and the password are exactly 6 characters.
- Tapping **Log in** opens a new screen that says **Hoşgeldiniz**.

Open the project in Android Studio and run the `app` configuration.

## Login E2E tests

The Compose UI instrumentation tests cover the six-character login rule and
navigation to the welcome screen. Start an Android emulator, then run:

```sh
./gradlew :app:connectedDebugAndroidTest
```

The task runs on every connected emulator. Use a single API 35 ARM64 emulator
for the supported local test configuration.
