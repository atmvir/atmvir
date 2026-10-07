import { createClient } from "@base44/sdk";

const appId = import.meta.env.VITE_BASE44_APP_ID;

export const base44 = appId
  ? createClient({ appId })
  : null;

export const trackPortfolioEvent = async (event: string) => {
  if (!base44) return;
  try {
    await base44.analytics.trackCustomEvent({ eventName: event });
  } catch {
    // Analytics is optional; the portfolio must remain fully static/deployable.
  }
};