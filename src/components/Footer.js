import React from "react";

let currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
    </div>
  );
}
