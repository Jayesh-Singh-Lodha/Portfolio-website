import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jayesh Singh Lodha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            As a software developer,
            <br />I excel in crafting sophisticated digital solutions through my proficient coding skills and collaborative approach.
          </p>
        </div>
        <button className="btn btn-primary" >
          <Link to="Footer">Get In Touch</Link>
          </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/main.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
