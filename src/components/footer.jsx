import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Vinay Deora</p>
    </footer>
  );
}

export default Footer;
