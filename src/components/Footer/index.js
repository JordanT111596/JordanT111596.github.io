import React from "react";

function Footer() {
  return (
    // Footer contains centered, light text
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
          {/* Just my name, the year, and the copyright symbol to be displayed as the footer on all my pages */}
            <span className="text-muted">&copy; Copyright Jordan Triplett 2021</span>
        </div>
    </footer>
  );
}

export default Footer;
