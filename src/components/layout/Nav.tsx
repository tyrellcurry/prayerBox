import ThemeToggler from "../darkmode/ThemeToggler";
import AuthButton from "../auth/AuthButton";
import Padding from "./Padding";
function Nav() {
  return (
    <div className="bg-slate-800/[.75] dark:bg-slate-500/[0.15]">
      <Padding>
        <nav className="flex w-full items-center justify-between p-3">
          <h2>Logo</h2>
          <div className="login">
            <AuthButton />
          </div>
          <div className="fixed top-10 right-0 rounded-l-md bg-slate-700 p-2 dark:bg-blue-400">
            <ThemeToggler />
          </div>
        </nav>
      </Padding>
    </div>
  );
}

export default Nav;
