interface TelegramWebApp {
  ready(): void; expand(): void; enableClosingConfirmation?(): void
  colorScheme?: 'light' | 'dark'
  initDataUnsafe?: { user?: { first_name?: string; username?: string } }
}
interface Window { Telegram?: { WebApp: TelegramWebApp } }