import { Typography } from "@material-tailwind/react";
import todoIcon from "../assets/todo.svg";

function Header() {
  return (
    <header className="flex w-full items-center bg-black bg-opacity-70 py-2">
      <img src={todoIcon} alt="image/svg+xml" className="w-16 ml-4 mr-2" />
      <Typography
        variant="h1"
        color="blue"
        className="drop-shadow-1px uppercase">
        To-Do
      </Typography>
    </header>
  );
}

export default Header;
