import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">Daily<span>News</span></h2>
          <p className="footer-tagline">Stay informed. Stay ahead.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Categories</h4>
          <Link to="/sport">Sport</Link>
          <Link to="/business">Business</Link>
          <Link to="/entertainment">Entertainment</Link>
          <Link to="/health">Health</Link>
          <Link to="/science">Science</Link>
          <Link to="/technology">Technology</Link>
        </div>

        {/* Pages */}
        <div className="footer-links">
          <h4>Pages</h4>
          <Link to="/">Home</Link>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com/olaniyi.oluwapelumi.israel" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/israelxalt?igsh=bnhieGI1M2Zsc3g1" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a 
            href="https://wa.me/2348012345678?text=Hello%20Daily%20News" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            What's App
          </a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Have a tip or feedback? Email us anytime.</p>
          <a 
            href="https://mail.google.com/mail/?view=cm&to=olaniyioluwapelumiisraelite@gmail.com&su=Hello Daily News" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to email us
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DailyNews. All rights reserved.</p>
        <p>Powered by NewsAPI</p>
      </div>
    </footer>
  );
}

export default Footer;