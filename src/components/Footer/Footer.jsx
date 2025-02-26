import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="row footer__top">
          {/* Left Side */}
          <div className="col-md-6 footer__left">
            {/* Logo and Brand */}
            <div className="footer__brand">
              <a href="#" className="footer__brand-link">
                <i className="bi bi-fan footer__brand-icon"></i>
                <span className="footer__brand-text">Solix</span>
              </a>
              <p className="footer__text">
                Solar energy reduces greenhouse gases and air pollutants,
                helping combat climate change. Explore the top financial.
              </p>
            </div>

            {/* browse topics */}
            <nav className="footer__nav">
              <h5 className="footer__nav-title">Browse</h5>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Countries & Regions
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Energy Systems
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Programs
                  </a>
                </li>
              </ul>
            </nav>

            {/* legal links */}
            <nav className="footer__legal">
              <ul className="footer__legal-list">
                <li className="footer__legal-item">
                  <a href="#" className="footer__legal-link">
                    Terms
                  </a>
                </li>
                <li className="footer__legal-item">
                  <a href="#" className="footer__legal-link">
                    Privacy
                  </a>
                </li>
                <li className="footer__legal-item">
                  <a href="#" className="footer__legal-link">
                    Cookies
                  </a>
                </li>
                <li className="footer__legal-item">
                  <a href="#" className="footer__legal-link">
                    Legal
                  </a>
                </li>
                <li className="footer__legal-item">
                  <a href="#" className="footer__legal-link">
                    Recalls
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* right side  */}
          <div className="col-md-6 footer__right">
            {/* newsletter */}
            <div className="footer__newsletter">
              <h5 className="footer__newsletter-title">Stay Updated</h5>
              <div className="footer__newsletter-form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footer__newsletter-input"
                  aria-label="Enter YourEmail"
                />
                <button
                  className="footer__newsletter-button"
                  aria-label="Subscribe">
                  <i className="bi bi-arrow-up-right-circle-fill"></i>
                </button>
              </div>
            </div>

            {/* Three Columns */}
            <div className="row footer__columns">
              {/* Column 1: Learn */}
              <div className="col-md-4 footer__column">
                <h5 className="footer__column-title">Learn</h5>
                <ul className="footer__column-list">
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      About
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Pricing
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Our Mission
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Contact */}
              <div className="col-md-4 footer__column">
                <h5 className="footer__column-title">Contact</h5>
                <ul className="footer__column-list">
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Community
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Knowledge Base
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Academy
                    </a>
                  </li>
                  <li className="footer__column-item">
                    <a href="#" className="footer__column-link">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Address */}
              <div className="col-md-4 footer__column">
                <h5 className="footer__column-title">Address</h5>
                <ul className="footer__column-list">
                  <li className="footer__column-item">
                    475 Cherry Dr. Troy, Michigan 46546, United States
                  </li>
                  <li className="footer__column-item">(258) 525–2353</li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <img
                  src="facebook-icon.png"
                  alt="Facebook"
                  className="footer__social-icon"
                />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <img
                  src="twitter-icon.png"
                  alt="Twitter"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Instagram">
                <img
                  src="instagram-icon.png"
                  alt="Instagram"
                  className="footer__social-icon"
                />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <img
                  src="linkedin-icon.png"
                  alt="LinkedIn"
                  className="footer__social-icon"
                />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <img
                  src="youtube-icon.png"
                  alt="YouTube"
                  className="footer__social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
