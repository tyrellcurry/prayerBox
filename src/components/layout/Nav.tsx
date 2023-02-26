import AuthButton from "../auth/AuthButton";
import Padding from "./Padding";
function Nav() {
  return (
    <div className="bg-slate-800/[.75] dark:bg-slate-500/[0.15]">
      <Padding>
        <nav className="flex w-full items-center justify-between p-3">
          <h2>Logo</h2>
          <div className="login flex items-center gap-5">
            <AuthButton />
          </div>
        </nav>
      </Padding>
    </div>
  );
}

export default Nav;
