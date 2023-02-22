import ThemeToggler from "../darkmode/ThemeToggler";
function Nav() {
  return <div className="bg-slate-400">
    {/* <h2>Logo</h2> */}
    <div className="fixed top-10 right-0 p-2 bg-slate-700 dark:bg-blue-400 rounded-l-md">

    <ThemeToggler />
    </div>
  </div>;
}

export default Nav;
