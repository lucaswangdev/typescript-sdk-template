# track-sdk
This is a typeScript sdk template.

# Install dependencies
```
npm install trace-sdk
```

# How to use
```
const sdk = new TraceSDK();
sdk.trackPageView("home");
sdk.trackEvent("buttonClick", { buttonText: "Submit" });
```

## Features
- TypeScript for type checking.


## NPM Scripts

This template has a few built-in NPM scripts:

| Script              | Action                                                                                                                                                                          |
| - | - |
| `npm start`         | Run `index.ts`.                                                                                                                                                                 |
| `npm run typecheck` | Type check using the TypeScript compiler.                                                                                                                                       |
| `npm run format`    | Format using Prettier (also recommended: the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) if you're using VS code.) |
| `npm run build`     | Build JavaScript into the `dist/` directory. You normally shouldn't need this if you're using `npm start`.                                                                      |
