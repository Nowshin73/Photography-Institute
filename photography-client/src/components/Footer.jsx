const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="f-wrapper">
          <h3>Customer Service</h3>
          <a>FAQ</a>
          <a>Contact Us</a>
          <a>COVID-19</a>

          <div className="brandname text-white font-bold text-2xl mt-10">
            <span>Photography Institute</span>
          </div>
        </div>

        <div className="f-wrapper">
          <h3>About Us</h3>
          <a>About Us</a>
          <a>Sustainability</a>
          <a>Jobs & Career</a>
          <a>Corporate Gifts</a>
          <a>For Professionals</a>
          <a>Sitemap</a>
        </div>

        <div className="f-wrapper">
          <h3>Legal</h3>
          <a>Terms Of Use</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Cookie Consent</a>
          <a>Imprint</a>
          <a>REACH information</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="f-left">
          <span>Copyright ⓒ 2023 Photography Institute. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
