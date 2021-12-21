import React from "react";

const {
  default: { src: logo },
} = require("src/images/logo.webp");

export default function Header() {
  return (
    <header className="w-full absolute left-0 top-0 z-10">
      <div className="container mx-auto py-6">
        <img
          className="mx-auto w-24 h-auto object-cover"
          src={logo}
          alt="tamzkar shop logo"
        />
      </div>
    </header>
  );
}
