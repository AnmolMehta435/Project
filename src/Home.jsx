import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import "./Home.css";

const heroImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/06/Grief-Pet-Talk.png",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1800&auto=format&fit=crop",
];
const pillars = [
  {
    title: "CAPACITY BUILDING",
    description:
      "We offer tailored training programs, essential funding assistance, and critical technological support to enhance the operational efficiency and program effectiveness of our partner NGOs.",
    highlight:
      "Providing tools and knowledge that empower grassroots leaders to sustain their vital work.",
  },
  {
    title: "VISIBILITY",
    description:
      "We amplify the impactful stories of silent warriors through communication, media outreach, and impact reporting.",
    highlight:
      "Shining a spotlight on the tireless efforts of those who work selflessly on the ground.",
  },
  {
    title: "NETWORKING",
    description:
      "We connect grassroots NGOs with larger organizations, CSR initiatives, academic institutions, and government bodies.",
    highlight:
      "Building bridges of partnership and shared purpose for stronger collective action.",
  },
];

const focusAreas = [
  {
    title: "Woman and Child Welfare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Skill Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Animal Welfare",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Elderly Care",
    image:
      "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Environment",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
  },
];

const slides = [
  {
    title: "The Shrihaan Sahyog Grant",
    description1:
      "As a testament to our commitment to direct and impactful support, Adhishrihaan Foundation proudly offers the Shrihaan Sahyog Grant.",
    description2:
      "This annual grant provides funding to selected micro-NGOs doing impactful grassroots work.",
    button: "Know More",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Empowering Rural Communities",
    description1:
      "We support initiatives focused on education, healthcare, and sustainable livelihoods.",
    description2:
      "Our mission is to create long-term social impact through collaboration and empowerment.",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare Support Programs",
    description1:
      "Providing healthcare assistance and awareness programs in remote villages.",
    description2:
      "We work closely with local organizations for accessible healthcare support.",
    button: "Read More",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
   {
    title: "Education for Every Child",
    description1:
      "We believe every child deserves access to quality education and learning opportunities.",
    description2:
      "Our programs provide scholarships, digital learning tools, and school support for underprivileged children.",
    button: "Learn More",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Women Empowerment Initiatives",
    description1:
      "Supporting women through leadership programs, skill training, and self-employment opportunities.",
    description2:
      "We aim to create confident, financially independent, and empowered women in every community.",
    button: "Discover",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Protecting Nature & Environment",
    description1:
      "Our environmental programs focus on tree plantation drives, clean surroundings, and sustainability awareness.",
    description2:
      "Together with communities and volunteers, we work toward building a greener and healthier future.",
    button: "Join Us",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
  },
];

const events = [
  {
    title: "Mega Health Checkup Camp",
    image:
      "https://adhishrihaan.org/wp-content/uploads/2025/10/IMG_9672-1024x768.jpg",
    date: "11-09-2025",
    location: "Faidan, Chandigarh",
    organization: "Don Bosco Navjeevan Society",
    type: "Past Events",
    category: "Healthcare",
    description:
      "India faces significant healthcare challenges, particularly in rural and underserved areas.",
  },
  {
    title: "Women Empowerment Workshop",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    date: "18-10-2025",
    location: "Delhi, India",
    organization: "Hope Foundation",
    type: "Upcoming Events",
    category: "Women Welfare",
    description:
      "An initiative focused on financial literacy and leadership training for women.",
  },
];

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Adhishrihaan</div>

        <nav>
          <ul className="nav-links">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>INITIATIVES</li>
            <li>OUR IMPACT</li>
            <li>EVENTS</li>
            <li>GET INVOLVED</li>
          </ul>
        </nav>
      </header>

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImages[heroIndex]})`,
        }}
      >
        <h1 className="bg-text">ENVIRONMENT</h1>

        <button
          className="arrow left-arrow"
          onClick={() =>
            setHeroIndex(
              (prev) =>
                (prev - 1 + heroImages.length) % heroImages.length
            )
          }
        >
          &#10094;
        </button>

        <button
          className="arrow right-arrow"
          onClick={() =>
            setHeroIndex((prev) => (prev + 1) % heroImages.length)
          }
        >
          &#10095;
        </button>

        <div className="hero-buttons">
          <button>KNOW MORE</button>
          <button>VOLUNTEER</button>
          <button>DONATE</button>
        </div>
      </section>

      <section className="tagline">
        <h2>
          Empowering Those Who Empower Others: Investing in Grassroots,
          Investing in India's Future.
        </h2>
      </section>

      <section className="description">
        <p>
          At Adhishrihaan Foundation, we believe true transformation begins at
          the roots.
        </p>
      </section>

      <section className="what-we-do-section">
        <div className="container-wrapper">
          <div className="section-header">
            <h2 className="main-heading">What We Do</h2>
            <p className="sub-heading">Our Pillars of Support</p>
          </div>

          <div className="pillar-list">
            {pillars.map((pillar, index) => (
              <div className="pillar-card" key={index}>
                <h3 className="pillar-title">{pillar.title}</h3>

                <p className="pillar-description">
                  {pillar.description}
                </p>

                <div className="highlight-box">
                  <p>{pillar.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="focus-container">
          <div className="focus-header">
            <h2>Our Focus Areas</h2>
            <p>Touching Lives with Compassion</p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((item, index) => (
              <div
                key={index}
                className={`focus-card ${
                  index === 0 ? "large-card" : ""
                }`}
              >
                <img src={item.image} alt={item.title} />

                <div className="overlay"></div>

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slider-section">
        <div className="slider-container">
          <div className="slider-content">
            <h2>{slides[slideIndex].title}</h2>

            <p>{slides[slideIndex].description1}</p>

            <p>{slides[slideIndex].description2}</p>

            <button>{slides[slideIndex].button}</button>
          </div>

          <div className="slider-image">
            <img
              src={slides[slideIndex].image}
              alt={slides[slideIndex].title}
            />
          </div>
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={slideIndex === index ? "active-dot" : ""}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <section className="events-section">
        <div className="events-container">
          <div className="events-header">
            <h2>Our Events</h2>
            <p>What's Next & What's Been</p>
          </div>

          <div className="events-slider">
            <div className="event-card">
              <div className="event-image">
                <img
                  src={events[eventIndex].image}
                  alt={events[eventIndex].title}
                />
              </div>

              <div className="event-content">
                <h3>{events[eventIndex].title}</h3>

                <div className="event-meta">
                  <span>📅 {events[eventIndex].date}</span>
                  <span>📍 {events[eventIndex].location}</span>
                  <span>🏢 {events[eventIndex].organization}</span>
                </div>

                <div className="event-tags">
                  <span className="blue-tag">
                    {events[eventIndex].type}
                  </span>

                  <span className="green-tag">
                    {events[eventIndex].category}
                  </span>
                </div>

                <p>{events[eventIndex].description}</p>

                <button className="read-more-btn">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="slider-dots">
            {events.map((_, index) => (
              <span
                key={index}
                className={eventIndex === index ? "active-dot" : ""}
                onClick={() => setEventIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h1 className="logo">Adhishrihaan</h1>

            <div className="contact-wrapper">
              <div>
                <h4>Email</h4>
                <p>info@adhishrihaan.com</p>
              </div>

              <div>
                <h4>Phone</h4>
                <p>+970 66 00 00 7</p>
              </div>
            </div>
          </div>

          <div className="footer-center">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <h3>Changing Lives, Building Futures.</h3>

            <button className="donate-btn">
              DONATE NOW
            </button>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            © 2025 Adhishrihaan | All rights reserved |
            Designed by Akki Studios
          </p>

          <div className="footer-links">
            <a href="#">
              <FaHome className="home-icon" /> Home
            </a>

            <a href="#">About Us</a>
            <a href="#">Initiatives</a>
            <a href="#">Our Impact</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;