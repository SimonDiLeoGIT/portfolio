interface props {
  icon: string
  text: string
  url: string
}

export const Button: React.FC<props> = ({ icon, text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-sm -bg--color-pink -text--color-dark-violet flex items-center justify-center font-semibold p-2 rounded-full hover:opacity-90 shadow-md -shadow--color-light-grey"
    >
      <img
        src={icon}
        className="w-6 md:mr-2"
      />
      <p className="hidden md:block">{text}</p>
    </a>
  )
}