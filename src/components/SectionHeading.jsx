import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full py-1 px-4 text-red-800 ring-1 ring-inset ring-red-800'
      )}
      {...props}
    >
      <span className="font-mono text-sm" aria-hidden="true">
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-red-800/20" />
      <span className="ml-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}
