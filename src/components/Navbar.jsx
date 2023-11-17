import { NavLink } from "react-router-dom";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying, audioRef]);
  return (
    <header className="header relative">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">DRT</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium justify-center items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <div className="">
          <img
            src={!isPlaying ? soundoff : soundon}
            alt="soundControl"
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlaying(!isPlaying)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
