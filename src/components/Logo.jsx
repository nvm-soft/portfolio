import { useId } from 'react'
import clsx from 'clsx'
import greenLogo from '@/images/logo/green.png'
import whiteLogo from '@/images/logo/white.png'
import Image from 'next/image'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <Image
      src={invert ? whiteLogo : greenLogo}
      alt="Logo"
      width={130}
      height={32}
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <Image
      src={invert ? whiteLogo : greenLogo}
      alt="Logo"
      width={130}
      height={32}
    />
  )
}
