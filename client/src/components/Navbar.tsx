import { NavbarProps } from "../types/types";

const Navbar = ({ setIsLoggedIn }: NavbarProps) => {
  return (
    <div className="h-20 bg-[#173c69] py-4 px-2 flex flex-row">
      <img src="./logo-white.svg" className="h-10 w-30" />
      <button
        className="border border-white text-white p-2 mr-0 ml-auto"
        onClick={() => setIsLoggedIn(false)}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
