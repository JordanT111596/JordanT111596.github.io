import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    // Footer contains centered, light text
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
            <span className="text-muted">&copy; Copyright Jordan Triplett 2021</span>
        </div>
    </footer>
  );
}

export default Footer;
