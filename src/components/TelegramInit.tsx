import WebApp from "@twa-dev/sdk";

export function initTelegram() {
  const app = window.Telegram?.WebApp
  if (!app) return { firstName: '' }
  app.ready()
  app.expand()
  WebApp.setHeaderColor("#000000");
  WebApp.setBackgroundColor("#000000");
  return { firstName: app.initDataUnsafe?.user?.first_name ?? '' }
}