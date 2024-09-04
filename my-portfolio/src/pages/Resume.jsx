function Resume() {
  return (
    <div className="grow bg-Charcoal">
      <a href="../assets/Jayden Benston Resume.pdf">My Portfolio</a>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl">Front-end Skills</h3>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>JQuery</li>
          <li>React</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl m-4">Backend Skills</h3>
        <ul className="list-disc list-inside">
          <li>Javascript</li>
          <li>MongoDB</li>
          <li>PostGresQL</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
