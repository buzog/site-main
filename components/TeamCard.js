import Avatar from './Avatar'

function IconLink({ href, title, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title} className="text-sky-200/80 hover:text-sky-100">
      {children}
    </a>
  )
}

export default function TeamCard({ name, role, image, githubUrl, profileUrl }) {
  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <Avatar src={image} alt={name} size={64} />
        <div>
          <div className="text-lg font-semibold text-slate-100">{name}</div>
          <div className="text-sm text-sky-200/80">{role}</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/30 border border-slate-700/40 flex items-center justify-center text-sky-300 hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.05c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>
        )}

        {profileUrl && (
          <a href={profileUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/30 border border-slate-700/40 flex items-center justify-center text-sky-300 hover:scale-105 transition" title="الصفحة الشخصية">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </a>
        )}
      </div>
    </div>
  )
}
