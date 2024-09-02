function Contact() {
  return (
    <div className="grow bg-Charcoal">
      <form className="flex flex-col">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Name" className="h-8 pr-16 rounded-md" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="Email Address" className="h-8 rounded-md" />
        </div>
        <textarea rows="4" cols="40" defaultValue="Enter your Message Here"></textarea>
      </form>
    </div>
  )
}

export default Contact

