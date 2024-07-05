import { Buttons } from "./Buttons"
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import email from '../assets/icons/mail.svg'

export const Header = () => {
  return (
    <header className='max-w-sm m-auto my-4 md:max-w-3xl xl:max-w-5xl'>
      <h1 className='text-5xl font-semibold -text--color-orange'>Simón Di Leo</h1>
      <div className=' -text--color-light-grey mb-4 mt-2'>
        <h2 className='text-lg font-semibold -text--color-white'><span className='-text--color-live-pink'>Fullstack</span> Developer</h2>
        <p>I’m 23 years old. I'm currently seeking new job opportunities to face new challenges and demonstrate my capabilities as a developer. I am committed to continuous learning and constant improvement of my technical and professional skills.</p>
      </div>
      <Buttons
        b1icon={github}
        b1text='SimonDiLeoGIT'
        b1url='https://github.com/SimonDiLeoGIT'
        b2icon={linkedin}
        b2text='Simón Di Leo'
        b2url='https://www.linkedin.com/in/sim%C3%B3n-di-leo-8782a4256/'
        b3icon={email}
        b3text='Email me'
        b3url='mailto:simondileocontact@gmail.com'
      />
    </header>
  )
}