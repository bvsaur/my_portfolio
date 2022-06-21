const SOCIALS = {
  github: {
    url: 'https://github.com/bvsaur',
  },
  gitlab: {
    url: 'https://gitlab.com/bvsaur',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/bveranoc/',
  },
}

interface Props {
  network: 'github' | 'gitlab' | 'linkedin'
}

const SocialLink = ({ network }: Props) => {
  return (
    <a
      href={`${SOCIALS[network].url}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <i
        className={`fa-brands fa-${network} text-2xl transition-colors hover:text-sky-500`}
      ></i>
    </a>
  )
}

export default SocialLink
