import { Twitch } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return(
    <footer className="bg-black border-t border-pink-600/20 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="text-md font-bold text-gray-400">
            © 2025 Elysium. All rights reserved.
          </div>
          <div className="flex flex-row gap-2" >
            <Instagram/>
            <Twitch/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;