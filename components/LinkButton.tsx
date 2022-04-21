import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Props {
  text: string
  href: string
}

const LinkButton = ({ text, href }: Props) => {
  const [isActive, setIsActive] = useState<Boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (href === router.pathname) {
      setIsActive(true)
    }
  }, [router])

  const activeClasses = isActive && 'bg-white'

  return (
    <Link href={href}>
      <button
        className={`w-36 rounded-lg py-3 px-10 transition-colors hover:bg-white ${activeClasses}`}
      >
        {text}
      </button>
    </Link>
  )
}

export default LinkButton
