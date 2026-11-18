import React from "react";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  { tab: "Home", url: "/" },
  { tab: "Projects", url: "/projects" },
];

const Navbar = () => {
  return (
    <div>
      <div className="bg-background fixed top-0 right-0 left-0 z-50 mx-auto flex max-w-2xl items-center justify-between px-6 backdrop-blur-md py-4">
        <div className="text-foreground flex flex-1 gap-6 sm:flex-row sm:items-center sm:gap-6">
          {links.map((link, index) => (
            <p key={index}>
              <a href={link.url}>{link.tab}</a>
            </p>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
