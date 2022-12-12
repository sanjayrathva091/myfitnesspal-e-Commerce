import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styled.footerWrapper}>
      <footer>
        <div className={styled.footerMenu}>
          <div>
            <ul>
              <li>About</li>
              <li>Food</li>
              <li>Exercise</li>
              <li>Apps</li>
              <li>Community</li>
              <li>Premium</li>
            </ul>
          </div>
          <div>
            <select name="language">
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <div className={styled.footerSubMenu}>
          <div>Calorie Counter</div>
          <div>Blog</div>
          <div>Terms</div>
          <div>Privacy</div>
          <div>Contact Us</div>
          <div>API</div>
          <div>Jobs</div>
          <div>Feedback</div>
          <div>Community Guidelines</div>
          <div>Cookie Preferences</div>
          <div>Ad Choices</div>
          <div>Do not sell my personal information</div>
        </div>
        <div className={styled.copyrightdiv}>© 2022 MyFitnessPal, Inc</div>
      </footer>
    </div>
  );
};

export default Footer;
