
function journals() {
    const today = new Date()
  return (
    <>
        <h1 className="text-6xl">Journals</h1>
        <section>
            <ul>
                <li>
                    <a href="#">
                        <p>{today.toLocaleDateString()}</p>
                        <h2>Journal Entry Title</h2>
                        <p>Small description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minima.</p>
                    </a>
                </li>
            </ul>
        </section>
    </>
  )
}

export default journals