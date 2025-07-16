import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/95 text-white">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className=" text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Elysium
            </Link>
          </div>
          
          <div>
            <button className="flex items-center justify-center px-6 py-2 rounded-md
                                    bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600
                                    text-white text-lg font-medium transition-colors duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;