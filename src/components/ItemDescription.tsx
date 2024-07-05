interface props {
  title: string
  description: string
}

export const ItemDescription: React.FC<props> = ({ title, description }) => {
  return (
    <div className="">
      <h3 className="font-semibold">{title}</h3>
      <p className="-text--color-light-grey text-sm">{description}</p>
    </div>
  )
}