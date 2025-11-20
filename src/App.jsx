import { useState } from "react";
import "./App.css";

function App() {
  const skills = [
    {
      title: "Generative AI",
      students: "1M+",
      img: "/Generative-AI-1.jpg",
    },
    {
      title: "IT Certifications",
      students: "14.4M+",
      img: "/0x0.webp",
    },
    {
      title: "Data Science",
      students: "8M+",
      img: "/images.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState("Artificial Intelligence (AI)");

  const tabs = [
    "Artificial Intelligence (AI)",
    "Python",
    "Microsoft Excel",
    "AI Agents",
    "Digital Marketing",
    "Amazon AWS",
  ];

  const courses = [
    {
      id: 1,
      title: "The AI Engineer Course 2025: Complete AI Bootcamp",
      author: "365 Careers",
      rating: 4.6,
      count: "11,778",
      price: "E£309.99",
      oldPrice: "E£349.99",
      tag: "Bestseller",
      img: "/medium-shot-smiley-woman-with-laptop.avif",
    },
    {
      id: 2,
      title: "Intro to AI Agents and Agentic AI",
      author: "365 Careers",
      rating: 4.4,
      count: "1,806",
      price: "E£309.99",
      oldPrice: "E£349.99",
      tag: "Bestseller",
      img: "/medium-shot-smiley-woman-with-laptop.avif",
    },
    {
      id: 3,
      title: "Artificial Intelligence for Business + ChatGPT Prize",
      author: "Hadelin de Ponteves",
      rating: 4.4,
      count: "4,859",
      price: "E£579.99",
      oldPrice: "E£719.99",
      tag: "Premium",
      img: "/medium-shot-smiley-woman-with-laptop.avif",
    },
    {
      id: 4,
      title: "Data Science & AI Masters 2025 - From Python To Gen AI",
      author: "Dr. Satyajit Pattnaik",
      rating: 4.5,
      count: "1,623",
      price: "E£309.99",
      oldPrice: "E£349.99",
      tag: "Bestseller",
      img: "/medium-shot-smiley-woman-with-laptop.avif",
    },
  ];

  const companies = [
    { name: "Volkswagen", logo: "/logo-volkswagen.svg" },
    { name: "Samsung", logo: "/logo-samsung.svg" },
    { name: "Cisco", logo: "/logo-cisco.svg" },
    { name: "Vimeo", logo: "/logo-vimeo.svg" },
    { name: "P&G", logo: "/logo-pg.svg" },
    { name: "Citi", logo: "/logo-citi.svg" },
    { name: "Ericsson", logo: "/logo-ericsson.svg" }
  ];

  return (
    <div className="app">
      <nav>
        <div className="logo">Udemy</div>
        <div className="elements">Explore</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
        </div>
        <button className="elements">Plans & Pricing</button>
        <button className="elements">Udemy Business</button>
        <button className="elements">Teach on Udemy</button>
        <div className="nav-buttons">
          <button className="white-btn">Log in</button>
          <button className="purple-btn">Sign up</button>
        </div>
      </nav>

      <header className="hero">
        {/* Placeholder image */}
        <img src="/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg" alt="Banner" />
        <div className="hero-card">
          <h2>Learn more, spend less — Black Friday Sale from E£279.99</h2>
          <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
        </div>
      </header>

      <section className="skills-container">
        <div className="text-content">
          <h2>Learn essential career and life skills</h2>
          <p>
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market.
          </p>
        </div>

        {/* 2. The Right Side: The Cards */}
        <div className="cards-wrapper">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.title} className="card-bg" />

              {/* The White Box Overlay */}
              <div className="white-box">
                <span className="badge">👥 {skill.students}</span>
                <h3>{skill.title}</h3>
                <div className="arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-container">
        <div className="ai-content">
          <h2>Reimagine your career in the AI era</h2>
          <p className="subtitle">
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <span className="icon">✨</span> Learn AI and more
            </div>
            <div className="feature-item">
              <span className="icon">🏆</span> Prep for a certification
            </div>
            <div className="feature-item">
              <span className="icon">💻</span> Practice with AI coaching
            </div>
            <div className="feature-item">
              <span className="icon">💡</span> Advance your career
            </div>
          </div>

          <div className="cta-group">
            <button className="white-button">Learn more</button>
            <span className="price-text">Starting at E£204.00/month</span>
          </div>
        </div>

        <div className="img-col">
          <img
            src="/ai-career@2x.webp"
            alt="black dude working on laptop"
            className="tall-img"
          />
        </div>
      </section>

      <section className="transform-section">
        <div className="section-header">
          <h2>Skills to transform your career and life</h2>
          <p>
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="courses-container">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="card-image">
                <img src={course.img} alt={course.title} />
              </div>

              <div className="card-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-author">{course.author}</p>

                <div className="rating-row">
                  <span className="rating-num">{course.rating}</span>
                  <span className="stars">⭐</span>
                  <span className="rating-count">({course.count})</span>
                </div>

                <div className="price-row">
                  <span className="current-price">{course.price}</span>
                  <span className="old-price">{course.oldPrice}</span>
                </div>

                {course.tag && (
                  <div
                    className={`badge ${
                      course.tag === "Premium" ? "badge-purple" : "badge-yellow"
                    }`}
                  >
                    {course.tag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="trusted-section">
      <h3 className="trusted-heading">
        Trusted by over 17,000 companies and millions of learners around the world
      </h3>
      
      <div className="logos-container">
        {companies.map((company, index) => (
          <div className="logo-wrapper" key={index}>
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="company-logo"
            />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default App;
