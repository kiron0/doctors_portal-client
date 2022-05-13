import React from "react";
import footer from "../../Assets/images/footer.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: '100%',
      }}
      className="py-14 px-6 lg:px-12 mx-auto"
    >
      <div className="footer mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">Branding</a>
          <a href="/" className="link link-hover">Design</a>
          <a href="/" className="link link-hover">Marketing</a>
          <a href="/" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright © {year} - All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
