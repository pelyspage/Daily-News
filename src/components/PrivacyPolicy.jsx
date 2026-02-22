import React from 'react'
import '../CSS/PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="privacy-date">Last updated: February 2026</p>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Daily News. We are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use and protect your information when you visit our website.</p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>We do not collect any personal information directly. However third party services we use may collect data including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on site</li>
            <li>Device and operating system information</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Google Analytics</h2>
          <p>We use Google Analytics to understand how visitors use our site. Google Analytics collects anonymous data about your visit. You can opt out by installing the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout.</p>
        </section>

        <section className="privacy-section">
          <h2>4. Google AdSense</h2>
          <p>We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting google.com/settings/ads.</p>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies</h2>
          <p>Our site uses cookies to improve your experience. Third party services like Google Analytics and Google AdSense also use cookies. You can control cookies through your browser settings.</p>
        </section>

        <section className="privacy-section">
          <h2>6. Third Party Links</h2>
          <p>Our site displays news articles that link to third party websites. We are not responsible for the privacy practices of those websites and encourage you to read their privacy policies.</p>
        </section>

        <section className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy please contact us at:</p>
          <a href="mailto:olaniyioluwapelumiisraelite@gmail.com">olaniyioluwapelumiisraelite@gmail.com</a>
        </section>

      </div>
    </div>
  );
}

export default PrivacyPolicy;