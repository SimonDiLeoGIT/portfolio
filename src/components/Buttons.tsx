import { Button } from "./Button"

interface props {
  b1icon: string
  b1text: string
  b1url: string
  b2icon: string
  b2text: string
  b2url: string
  b3icon: string
  b3text: string
  b3url: string
}

export const Buttons: React.FC<props> = ({ b1icon, b1text, b1url, b2icon, b2text, b2url, b3icon, b3text, b3url }) => {
  return (
    <section className="flex space-x-4">
      <Button icon={b1icon} text={b1text} url={b1url} />
      <Button icon={b2icon} text={b2text} url={b2url} />
      <Button icon={b3icon} text={b3text} url={b3url} />
    </section>
  )
}