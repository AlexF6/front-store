import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Navigate } from "react-router";

const Header = () => {
  return (
    <header className=" bg-black/95 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className=" text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Elysium
            </Link>
          </div>
          
          <div>
            <Link to="/login">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-900 hover:to-fuchsia-700 border-0">
                  Login
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;