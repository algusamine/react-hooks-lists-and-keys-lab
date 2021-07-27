import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return (
    <nav>
           <a href="#home" >{links[0]}</a>
           <a href="#about" >{links[1]}</a>
           <a href="#projects" >{links[2]}</a>
    </nav>
  );
//   another way of doing it:
}

export default NavBar;
