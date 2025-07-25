import { Button } from "@/components/ui/button";
import axios from "axios";
import { User } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:3000/users", {
        user: { email, password, passwordConfirmation }
      });

      const token = response.headers['authorization']?.split(' ')[1];

      if (token) {
        console.log("JWT Token:", token);
        localStorage.setItem("token", token);
        navigate("/")
      } else {
        setErrorMessage("SignUp succeeded but no token found")
        console.log("SignUp succeeded but no token found");
      }
    } catch (err) {
      console.error("SignUp error", err);
      setErrorMessage("Invalid email or password")
    }
  };

  return (
    <div className="text-white min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex flex-col">

        {/* Back */}
      <div className="p-6">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-gray-500 p-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
              Back
          </Button>
        </Link>
      </div>

      {/* SignUp Section */}
      <div className="container mx-auto flex flex-1 items-center justify-center px-6 pb-25">
        <div className="flex flex-col items-center space-y-5">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-8">
            <User className="h-8 w-8 text-gray-300" />
          </div>

          <div className="text-3xl font-bold px-10">
            Welcome
          </div>
              
          <input
            className="border-b border-gray-600 focus:border-gray-400 focus:outline-0 transition-all duration-500 p-2 rounded-2xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            className=" border-b border-gray-600 focus:border-gray-400 focus:outline-0 transition-all duration-500 p-2 rounded-2xl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className=" border-b border-gray-600 focus:border-gray-400 focus:outline-0 transition-all duration-500 p-2 rounded-2xl"
            type="password"
            placeholder="Confirm your password"
            value={password}
            onChange={(e) => setpasswordConfirmation(e.target.value)}
          />
          
          <div className="flex justify-between w-full opacity-80">
            <Link to="/login">
              <Button className="hover:bg-gray-900 w-24 transition-all duration-300">
                Login
              </Button>
            </Link>

            <Button onClick={handleSignUp} className="hover:bg-gray-900 w-24 transition-all duration-300">
              Sign up
            </Button>

          </div>
            {errorMessage && (<p>{errorMessage}</p>)}
          </div>
    
      </div>
    </div>
  );
}

export default SignUp;