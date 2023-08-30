import clsx from 'clsx'

export function TagList({ children, className }) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export function TagListItem({ children, className }) {
  return (
    <li
      className={clsx(
        'rounded-full bg-primary px-4 py-1.5 text-base text-white',
        className,
      )}
    >
      {children}
    </li>
  )
}
