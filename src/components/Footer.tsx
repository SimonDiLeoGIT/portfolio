export const Footer = () => {
  return (
    <footer className="w-full p-8  -bg--color-medium-violet bg-opacity-10">
      <form className="grid gap-2 m-auto max-w-md p-4 -bg--color-white bg-opacity-5 rounded-xl shadow-md -shadow--color-pink">
        <h4 className="text-lg font-semibold">Contact me</h4>
        <div>
          <label className="block">Email</label>
          <input className="w-full p-2 rounded-lg -bg--color-dark-violet bg-opacity-80" />
        </div>
        <div >
          <label className="block">Message</label>
          <input className="w-full p-2 rounded-lg -bg--color-dark-violet bg-opacity-80" />
        </div>
        <input type="submit" />
      </form>
    </footer>
  )
}