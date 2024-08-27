import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </form>
          </div>
        </section>
        <div className="footer-as">
          <div className="footer-a-wrapper">
            <div className="footer-a-items">
              <h2>About Us</h2>
              <a href="#">How it works</a>
              <a href="#">Testimonials</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-a-items">
              <h2>Contact Us</h2>
              <a href="#">Contact</a>
              <a href="#">Support</a>
              <a href="#">Destinations</a>
              <a href="#">Sponsorships</a>
            </div>
          </div>
          <div className="footer-a-wrapper">
            <div className="footer-a-items">
              <h2>Videos</h2>
              <a href="#">Submit Video</a>
              <a href="#">Ambassadors</a>
              <a href="#">Agency</a>
              <a href="#">Influencer</a>
            </div>
            <div className="footer-a-items">
              <h2>Social Media</h2>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <a href="#" className="social-logo">
                TRVL
                <i className="fa fa-typo3" />
              </a>
            </div>
            <small className="website-rights">TRVL © 2020</small>
            <div className="social-icons">
              <a href="#" className="social-icon-a facebook">
                <i className="fa fa-facebook-f" />
              </a>
              <a href="#" className="social-icon-a instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="#" className="social-icon-a youtube">
                <i className="fa fa-youtube" />
              </a>
              <a href="#" className="social-icon-a twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" className="social-icon-a twitter">
                <i className="fa fa-aedin" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
