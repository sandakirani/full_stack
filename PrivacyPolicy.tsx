import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p>
        At Cellular World, your privacy is our priority. We are committed to
        safeguarding the personal information you share with us. This Privacy
        Policy outlines how we collect, use, and protect your information when
        you interact with our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you use our website, we may collect the following information:
      </p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, shipping and billing address, and payment details.
        </li>
        <li>
          <strong>Account Information:</strong> Login credentials, order
          history, and preferences.
        </li>
        <li>
          <strong>Technical Information:</strong> IP address, browser type,
          operating system, and website usage patterns.
        </li>
        <li>
          <strong>Communication Data:</strong> Queries, feedback, and
          correspondence with our customer support team.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and fulfill your orders.</li>
        <li>Provide a personalized shopping experience.</li>
        <li>Improve our website functionality and services.</li>
        <li>
          Communicate with you regarding updates, offers, and support.
        </li>
        <li>Comply with legal obligations and protect against fraud.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We respect your privacy and do not sell or rent your personal
        information. However, we may share your data with trusted third parties
        to:
      </p>
      <ul>
        <li>Facilitate payment processing.</li>
        <li>Enable shipping and delivery of your orders.</li>
        <li>Analyze website performance and improve user experience.</li>
        <li>Comply with legal requirements.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement robust security measures to protect your personal
        information. This includes encryption, secure servers, and access
        controls. However, no method of transmission over the internet is
        entirely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar technologies to enhance your browsing
        experience. Cookies help us:
      </p>
      <ul>
        <li>Remember your preferences and login details.</li>
        <li>Analyze website traffic and usage patterns.</li>
        <li>
          Deliver targeted advertisements. You can adjust your browser settings
          to disable cookies, but some features of our website may not function
          properly.
        </li>
      </ul>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with a revised "Last Updated" date. We encourage
        you to review this policy periodically to stay informed.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
