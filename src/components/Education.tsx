export const Education = () => {
  return (
    <section className="">
      <header className="my-2">
        <h2 className="text-2xl font-semibold -text--color-dark-orange">Education</h2>
      </header>
      <section className="p-4 -bg--color-dark-violet rounded-xl bg-opacity-70 shadow-md -shadow--color-orange">
        <article className='text-sm'>
          <h3 className='text-base'>High School Diploma in <span className='-text--color-live-pink '>Social Sciences</span></h3>
          <div className="p-2 -text--color-light-grey">
            <p>San Patricio College</p>
            <p className=''>Mercedes, Buenos Aires, Argentina</p>
          </div>
        </article>
        <article className='text-sm'>
          <h3 className='text-base'>Bachelor in <span className='-text--color-live-pink '>Information System</span></h3>
          <div className="p-2 -text--color-light-grey">
            <p>Universidad Nacional de Luján</p>
            <p className=''>Luján, Buenos Aires, Argentina</p>
            <p className=''>Since 2019. Currently studying the 5° year</p>
          </div>
        </article>
      </section>
    </section>
  )
}