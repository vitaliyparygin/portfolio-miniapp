export function initTelegram() {
  const app = window.Telegram?.WebApp
  if (!app) return { firstName: '' }
  app.ready()
  app.expand()
  return { firstName: app.initDataUnsafe?.user?.first_name ?? '' }
}