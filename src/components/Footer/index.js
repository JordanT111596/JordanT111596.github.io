import React from "react";

function Footer() {
  return (
    <footer className="py-3 text-center">
      <span className="text-muted">&copy; {new Date().getFullYear()} Jordan Triplett</span>
    </footer>
  );
}

export default Footer;
