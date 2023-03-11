import AppNav from "../../components/layout/AppNav"

function journals() {
    const today = new Date()
    const testTitles = ['Journal Entry One', 'Journal Entry Two']
  return (
    <>
        <AppNav />
        <main className="ml-[250px] pt-6">
        <h1 className="text-6xl pb-4">Journal Entries</h1>
        <section>
            <ul>
                {
                    testTitles.map(titles => (
                        <li className="pb-4">
                            <a className="block w-fit text-white bg-slate-600 dark:bg-slate-200 dark:text-slate-800 p-4 rounded-md" href="#">
                                <p>{today.toLocaleDateString()}</p>
                                <h2>{titles}</h2>
                                <p>Small description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minima.</p>
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </section>
        </main>
    </>
  )
}

export default journals