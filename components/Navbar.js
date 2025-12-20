export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold tracking-tight text-slate-100">فريق بزوغ</div>
          <div className="text-sm text-sky-200/80">نشر المعرفة وصناعة التأثير</div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#team" className="text-sm text-sky-100/90 hover:underline">أعضاء الفريق</a>
          <a href="#contact" className="text-sm text-sky-200/80">تواصل</a>
        </nav>
      </div>
    </header>
  )
}
