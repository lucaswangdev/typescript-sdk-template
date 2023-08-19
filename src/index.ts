/**
 * Trace
 * 定义功能接口
 */
interface Trace {
  trackPageView: (page: string) => void;
  trackEvent: (eventName: string, data?: any) => void;
}

/**
 * TraceSDK
 * 实现功能接口
 */
export default class TraceSDK implements Trace {
  constructor() {
    console.log(`TraceSDK constructor init`);
  }
  trackPageView(page: string) {
    // 发送页面访问事件到后端或第三方分析平台
    console.log(`Tracked page visit: ${page}`);
  }

  trackEvent(eventName: string, data?: any) {
    // 发送自定义事件到后端或第三方分析平台
    console.log(`Tracked event: ${eventName}`, data);
  }
}
