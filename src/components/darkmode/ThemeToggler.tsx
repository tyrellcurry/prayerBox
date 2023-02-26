import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { blue, yellow, blueGrey } from "@mui/material/colors";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const label = { inputProps: { "aria-label": "Switch demo" } };

const BlueSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: yellow[600],
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: blueGrey[200],
  },
  "& .MuiSwitch-switchBase": {
    color: blue[400],
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: blueGrey[200],
  },
}));

const ThemeToggler = () => {
  const [checked, setChecked] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setChecked(theme !== "dark");
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "light" : "dark");
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className="toggle flex items-center gap-3 rounded-lg bg-slate-100/[.05] px-3 w-fit">
        {theme === "dark" ? (
          <MoonIcon className="h-5 w-5 text-[#42a5f5]" />
        ) : (
          <MoonIcon className="h-5 w-5 text-slate-300" />
        )}
        <BlueSwitch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          color="warning"
        />
        {theme === "light" ? (
          <SunIcon className="h-5 w-5 text-[#fdd835]" />
        ) : (
          <SunIcon className="h-5 w-5 text-slate-300" />
        )}
      </div>
    </>
  );
};

export default ThemeToggler;
