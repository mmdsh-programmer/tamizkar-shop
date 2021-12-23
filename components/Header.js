import React from "react";

export default function Header() {
  return (
    <header className="w-full absolute left-0 top-0 z-10">
      <div className="container mx-auto py-6">
        <img
          className="mx-auto w-32 h-auto object-cover"
          src="/images/logo.webp"
          alt="tamzkar shop logo"
        />
      </div>
    </header>
  );
}
