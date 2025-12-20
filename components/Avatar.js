import Image from 'next/image'

export default function Avatar({ src, alt, size = 56 }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-full overflow-hidden flex-shrink-0">
      {src ? (
        <Image src={src} alt={alt || 'avatar'} width={size} height={size} className="object-cover" />
      ) : (
        <div className="avatar-placeholder">{(alt || 'ف').charAt(0)}</div>
      )}
    </div>
  )
}
