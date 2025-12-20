export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 py-8">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://x.com/buzogcom" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent border border-white/10 text-sky-100 hover:bg-white/5" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.6 0-4.7 2.34-4.1 4.89A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </a>

          <a href="https://t.me/buzogcom" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent border border-white/10 text-sky-100 hover:bg-white/5" aria-label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3L3 10.5l4.9 1.8L10 20l2.6-3 4.4 3 3-15z"/></svg>
          </a>

          <a href="https://github.com/buzog" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent border border-white/10 text-sky-100 hover:bg-white/5" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.05c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>

          <a href="mailto:buzogcom@gmail.com" className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent border border-white/10 text-sky-100 hover:bg-white/5" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4.5A2.5 2.5 0 014.5 2h15A2.5 2.5 0 0122 4.5v15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15zM4 6l8 5 8-5"/></svg>
          </a>
        </div>

        <div className="text-sm text-sky-200/70">جميع الحقوق محفوظة © فريق بزوغ {year}</div>
      </div>
    </footer>
  )
}
