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

const images = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/06/Grief-Pet-Talk.png",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1800&auto=format&fit=crop",
  ];

const pillars = [
  {
    title: "CAPACITY BUILDING",
    description:
      "We offer tailored training programs, essential funding assistance, and critical technological support to enhance the operational efficiency and program effectiveness of our partner NGOs. This includes workshops on project management, financial literacy, fundraising strategies, and digital tools. We believe in strengthening their internal capabilities so they can serve their communities even better.",
    highlight:
      "Care in Action: Providing the tools and knowledge that empower grassroots leaders to sustain their vital work, ensuring their dedication translates into lasting impact.",
  },
  {
    title: "VISIBILITY",
    description:
      "We are dedicated to amplifying the impactful stories of these silent warriors. We help them effectively communicate their achievements, document their journeys, and gain the recognition they truly deserve through strategic communication and media outreach. This includes developing compelling narratives, creating impact reports, and connecting them with broader audiences.",
    highlight:
      "Care in Action: Shining a spotlight on the tireless efforts of those who work selflessly on the ground, ensuring their dedication inspires more support and change.",
  },
  {
    title: "NETWORKING",
    description:
      "We connect grassroots NGOs with each other, fostering collaborative learning and shared solutions. We also link them with larger philanthropic organizations, corporate CSR initiatives, academic institutions, and government bodies. This builds a robust ecosystem of collective action and greater synergy for wider reach and sustainable impact.",
    highlight:
      "Care in Action: Building bridges of partnership and shared purpose, creating a stronger, more united front for social transformation.",
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
      "As a testament to our unwavering commitment to direct and impactful support, Adhishrihaan Foundation proudly offers the “Shrihgan Sahyog” Grant.",
    description2:
      "This annual grant provides crucial, catalytic funding to 3–5 carefully selected micro-NGOs that are undertaking powerful ground-level work but are often constrained by a lack of visibility or financial resources.",
    button: "Know More",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Empowering Rural Communities",
    description1:
      "We support initiatives focused on education, healthcare, and sustainable livelihoods for underserved communities.",
    description2:
      "Our mission is to create long-term social impact through collaboration, innovation, and grassroots empowerment.",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare Support Programs",
    description1:
      "Providing healthcare assistance and awareness programs in remote villages and communities.",
    description2:
      "We work closely with local organizations to ensure accessible and meaningful healthcare support.",
    button: "Read More",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
      title: 'Health & Wellness Programs',
      description:
        'We work closely with health professionals to provide better access to care and awareness campaigns.',
      description2:
        'These initiatives are designed to improve quality of life for vulnerable populations.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Education for Every Child',
      description:
        'Scholarships, school supplies, and digital learning support help children continue their education.',
      description2:
        'We believe education is the strongest foundation for a brighter future.',
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Creating Lasting Impact',
      description:
        'Every initiative is designed to create measurable and sustainable change at the community level.',
      description2:
        'With collaboration and compassion, we continue building stronger futures together.',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
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
        "India faces significant healthcare challenges, particularly in rural and underserved areas. Many communities still lack access to essential healthcare services and awareness.",
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
        "An initiative focused on financial literacy, self-employment opportunities, and leadership training for women in local communities.",
    },
    
  ];

 

function Home() {
    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  // NEXT BUTTON
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  // PREV BUTTON
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">Adhishrihaan</div>

        <nav>
          <ul className="nav-links">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>THE SHRIHAAN SAHYOG GRANT</li>
            <li>INITIATIVES</li>
            <li>OUR IMPACT</li>
            <li>EVENTS</li>
            <li>NEWS & MEDIA</li>
            <li>GET INVOLVED</li>
          </ul>
        </nav>
      </header>
 <section
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <h1 className="bg-text">ENVIRONMENT</h1>

      <button
        className="arrow left-arrow"
        onClick={() =>
          setCurrentImage(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
      >
        &#10094;
      </button>

      <button
        className="arrow right-arrow"
        onClick={() =>
          setCurrentImage((prev) => (prev + 1) % images.length)
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
          the roots. We are the steadfast support system for the unsung heroes
          of community development: grassroots NGOs, nurturing their vital work
          with unwavering care and commitment.
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
              <div className="pillar-title-area">
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>

              <div className="pillar-content">
                <p className="pillar-description">{pillar.description}</p>

                <div className="highlight-box">
                  <p>
                    <span>Care in Action:</span> {pillar.highlight}
                  </p>
                </div>
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
              className={`focus-card ${index === 0 ? "large-card" : ""}`}
              key={index}
            >
              <img src={item.image} alt={item.title} />

              <div className="overlay"></div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section> <div className="slider-section">
      <div className="slider-container">
        {/* LEFT CONTENT */}
        <div className="slider-content">
          <h2>{slides[current].title}</h2>

          <p>{slides[current].description1}</p>

          <p>{slides[current].description2}</p>

          <button>{slides[current].button}</button>
        </div>

        <div className="slider-image">
          <img src={slides[current].image} alt="slide" />
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "active-dot" : ""}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
    </section>

 <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2>Our Events</h2>
          <p>What's Next & What's Been</p>
        </div>

*        <div className="events-slider">


          <div className="event-card">
            <div className="event-image">
              <img
                src={events[currentSlide].image}
                alt={events[currentSlide].title}
              />
            </div>

            <div className="event-content">
              <h3>{events[currentSlide].title}</h3>

              <div className="event-meta">
                <span>📅 {events[currentSlide].date}</span>
                <span>📍 {events[currentSlide].location}</span>
                <span>🏢 {events[currentSlide].organization}</span>
              </div>

              <div className="event-tags">
                <span className="blue-tag">
                  {events[currentSlide].type}
                </span>

                <span className="green-tag">
                  {events[currentSlide].category}
                </span>
              </div>

              <p>{events[currentSlide].description}</p>

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
              className={currentSlide === index ? "active-dot" : ""}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>

       <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
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

          <button className="donate-btn">DONATE NOW</button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2025 Adhishrihaan | All rights reserved | Designed by Akki
          Studios
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