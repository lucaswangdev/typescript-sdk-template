import TraceSDK from '../src/index'

const sdk = new TraceSDK();
sdk.trackPageView("home");
sdk.trackEvent("buttonClick", { buttonText: "Submit" });