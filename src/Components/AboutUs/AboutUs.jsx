const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us">
        <div className="about-us-content">
          <h1>About Our Company</h1>
          <p>
            Welcome to [Your Company Name], your trusted source for quality products.
            We're dedicated to giving you the very best of products, with a focus on
            dependability, customer service, and uniqueness.
          </p>
          <p>
            Founded in [Year of Establishment] by [Founder's Name], [Your Company Name]
            has come a long way from its beginnings. When [Founder's Name] first started
            out, their passion for [your company's mission] drove them to start their own
            business.
          </p>
          <p>
            We offer a wide range of products, including [mention some key product categories].
          </p>
          <h2>Our Mission</h2>
          <p>
            At [Your Company Name], our mission is to [describe your mission and values].
            We aim to [mention any specific goals or objectives].
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>High-quality products with a focus on durability and performance.</li>
            <li>Exceptional customer service and support.</li>
            <li>Unique and innovative product offerings.</li>
            <li>Fast and reliable shipping.</li>
            <li>[Add any other reasons that set you apart.]</li>
          </ul>
        </div>
        <div className="about-us-image">
          <img src="about_us_image.jpg" alt="About Us" />
        </div>
      </section>
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <p>
          Behind [Your Company Name] is a team of dedicated individuals who are passionate
          about [your industry or products]. We are committed to providing you with the best
          products and services.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="team_member_1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="team_member_2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Product Manager</p>
          </div>
          </div>
      </section>
    </div>
  );
};

export default AboutUs;