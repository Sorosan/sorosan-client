# Sorosan SDK 

*Note this will be deprecated in use for `sorosan-sdk/core`. This package is now outdated and deprecated. Please update to the latest version to ensure continued functionality and avoid potential issues.*

Introducing the Sorosan SDK, your gateway to a seamless Stellar network development experience. With the Sorosan SDK, we're empowering developers to harness the full potential of Stellar with ease. Keep an eye on our updates for exciting features and releases as we embark on this journey together. Star and watch to stay in the loop!

## Install

### To use as a module in a Node.js project

1. Install it using npm:
```bash
npm install --save @sorosan-client/core
```

2. require/import it in your JavaScript/Typescript:
```ts
import { 
    SorosanSDK,     
    FUTURENET_DETAILS,
    MAINNET_DETAILS,
    TESTNET_DETAILS
} from '@sorosan-client/core'

const sdk: SorosanSDK = SorosanSDK(FUTURENET_DETAILS)   // Currently only support futurenet and testnet
const contractSDK = sdk.contract;		                // To access other SDK
```

### To use as a module locally

1. Clone this repo
```bash
git clone https://github.com/sorosan/sorosan-client
```

1. Install packages and build
```bash
cd sorosan-client
npm i
npm run build
```
This should generate a `dist/` where  you can use `SorosanSDK()` like in **node.js**

## Testing

```bash
npm run test
```

## [Documentation](https://sorosan.github.io/sorosan-doc/)

Documentation source for repo can be found [here](https://github.com/Sorosan/sorosan-client/tree/master/sorosan-doc)

## Others

- [Sorosan App](https://sorosan-dapp.vercel.app/sdk)
- [Documentation](https://sorosan.github.io/sorosan-doc)
- [React SDK](https://www.npmjs.com/package/@sorosan-client/react)
- [Sample App using Sorosan SDK](https://github.com/Sorosan/create-sorosan-app)