import React from 'react';
import Navbar from '../home/navbar'; 
import Footer from '../home/Footer'; 
import './AboutUs.css'; 


const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="breadcrumb">
          <a href="/home">Home</a> &gt; About Us
        </div>
        <h1>About Us</h1>
        <section className="section">
          <p> Welcome to Cellular World Your one-stop shop for all your mobile phone needs!</p>
        </section>
        <section className="section">
          <h2>Our Story</h2>
          <p>
            At Cellular World, our journey began with a simple idea: to make cutting-edge mobile technology accessible
            to everyone. Founded in 2024, we started as a small team of tech enthusiasts who shared a passion for
            innovation and a commitment to excellence. Over the years, we have grown into a trusted destination for
            mobile phones and accessories, offering an extensive range of products from the world's leading brands like
            Apple, Samsung, Google, Xiaomi, Vivo, and more.
          </p>
          <p>
            We understand that your smartphone is more than just a device; it's your connection to the world, your
            productivity tool, and your entertainment hub. That's why we strive to bring you the latest models,
            competitive prices, and an unmatched shopping experience. From the hottest flagship releases to reliable
            budget-friendly options, we are here to ensure you find the perfect mobile phone to suit your lifestyle.
          </p>
        </section>
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower our customers with the technology they need to stay connected, productive, and
            entertained.
          </p>
          <ul>
            <li>Provide a seamless shopping experience through a user-friendly website and excellent customer support.</li>
            <li>Offer a curated selection of the latest and most reliable mobile phones and accessories.</li>
            <li>Deliver exceptional value by combining competitive pricing with quality assurance.</li>
            <li>Foster trust by ensuring transparency, authenticity, and timely delivery.</li>
          </ul>
        </section>
        <section className="section">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading online destination for mobile technology, recognized for our commitment
            to quality, innovation, and customer satisfaction.
          </p>
          <ul>
            <li>
              Provide a seamless shopping experience through a user-friendly website and excellent customer support.
            </li>
            <li>
              Continuously expand our product offerings to include the most advanced and diverse mobile solutions.
            </li>
            <li>Lead the way in delivering cutting-edge technology to customers worldwide.</li>
            <li>Create a community where technology enthusiasts can explore, learn, and connect.</li>
            <li>
              Set new standards for excellence in the online retail space by integrating sustainability and social
              responsibility into our operations.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
