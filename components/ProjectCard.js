"use client"
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

export default function ProjectCard({ title, description, image, moreInfo, githubUrl }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/40 border border-slate-700/40 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform">
        <div className="relative w-full h-44">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform" />
          ) : (
            <div className="w-full h-full bg-sky-900 flex items-center justify-center text-sky-100">{title}</div>
          )}
        </div>
        <div className="p-4">
          <div className="text-lg font-semibold text-slate-100">{title}</div>
          <div className="mt-2 text-sm text-sky-200/80">{description}</div>

          <div className="mt-4 flex gap-3 items-center">
            <button onClick={() => setOpen(true)} className="rounded-lg px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm">معلومات أكثر</button>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-white/10 text-sky-100 hover:bg-white/5" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.05c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <div className="space-y-3">
          <div>{moreInfo || description}</div>
          {githubUrl && (
            <div>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sky-300 underline">فتح مستودع GitHub</a>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
