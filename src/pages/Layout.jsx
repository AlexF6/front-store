import axios from 'axios'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Layout = () => {

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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header/>
      <main className="flex-grow relative">
        <Hero/>
      </main>
      <div>
        <Footer/>
      </div>
      <div>
        <Button onClick = {handleLogout}>
          Logout
        </Button>
      </div>
      {/* <TryComp/> */}
    </div>
  )
}

export default Layout;