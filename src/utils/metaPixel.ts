// Meta Pixel (Facebook Pixel) Utility for Event Tracking

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Tracks standard and custom Meta Pixel events safely.
 * @param eventName Standard event (e.g., 'Lead', 'Contact', 'PageView', 'ViewContent') or custom event
 * @param params Optional event properties
 */
export function trackMetaEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (params) {
      window.fbq('track', eventName, params);
    } else {
      window.fbq('track', eventName);
    }
  } else {
    // Graceful fallback for development / before Meta Pixel script loads
    console.debug(`[Meta Pixel] Track Event: ${eventName}`, params || '');
  }
}

/**
 * Tracks custom Meta Pixel events.
 * @param customEventName Name of the custom event
 * @param params Optional event parameters
 */
export function trackMetaCustomEvent(customEventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (params) {
      window.fbq('trackCustom', customEventName, params);
    } else {
      window.fbq('trackCustom', customEventName);
    }
  } else {
    console.debug(`[Meta Pixel] Track Custom Event: ${customEventName}`, params || '');
  }
}
