import React from "react";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <div className={styled.headerWrapper}>
      <header className={styled.header}>
        <div className={styled.logo}>myfitnesspal</div>
        <div className={styled.login_btn}>
          <button>Log In</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
