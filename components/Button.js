export default function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition'
  const solid = 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg'
  const ghost = 'bg-transparent text-sky-100/90 hover:bg-white/5 border border-white/5'

  return (
    <button {...props} className={`${base} ${variant === 'solid' ? solid : ghost} ${className}`}>
      {children}
    </button>
  )
}
