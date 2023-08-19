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
    constructor();
    trackPageView(page: string): void;
    trackEvent(eventName: string, data?: any): void;
}
export {};
