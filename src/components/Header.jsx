import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("No token found");
        return;
      }

      await axios.delete("http://127.0.0.1:3000/users/sign_out", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      localStorage.removeItem("token");

      navigate("/login")
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <header className=" bg-black/95 border-b border-pink-600/20 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className=" text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Elysium
            </Link>
          </div>
          
          <div>
            <Button
              onClick = {handleLogout} 
              className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-900 hover:to-fuchsia-700 border-0">
                Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;