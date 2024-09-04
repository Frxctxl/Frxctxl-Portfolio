function Contact() {
  return (
    <div className="grow bg-Charcoal flex flex-col">
      <h1 className="text-3xl self-center mt-16">Email Me</h1>
      <form className="flex flex-col w-4/6 self-center text-black">
        <div className="self-center my-8">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Name" className="h-8 pr-16 rounded-md text-black" />
        </div>
        <div className="self-center my-8">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="Email Address" className="h-8 rounded-md text-black" />
        </div>
        <textarea rows="4" cols="30" defaultValue="Enter your Message Here" className="rounded-2xl text-black p-2"></textarea>
      </form>
    </div>
  )
}

export default Contact

