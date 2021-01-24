import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header_wrapper">
      <div className="header">
        <h1 className="header_title">Семейное древо</h1>
      </div>
    </header>
  );
}

export default React.memo(Header);
