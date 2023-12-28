import React from "react";
import Feature from "./Feature";

const About = () => {
  return (
    <div id="about">
      <div className="normalHero aboutHero">
        <h2>#KnowUS</h2>
        <p>More Than Clothing Redefining Fashion, Defining You.</p>
      </div>
      <div className="aboutHead">
        <img
          src="https://res.cloudinary.com/jatin-patel/image/upload/v1703404942/Trendfy/esfxhheztjga6nrk9ni9.jpg"
          alt="about"
        />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Welcome to Trendfy, where style meets individuality. We're more than
            a clothing brand; we're a collective of creators passionate about
            empowering your unique expression through fashion. Born out of a
            shared love for fashion and a desire to redefine the way people
            connect with their clothing, Trendfy was founded with a simple yet
            powerful vision: to empower individuals to express their unique
            identity through the art of fashion. Our journey began in 2024 with
            a small team of dedicated designers and creators who believed in the
            transformative power of clothing.
          </p>
        </div>
      </div>
      <div className="aboutApp">
        <h1>
          Download Our <a href="#/">App</a>
        </h1>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src="https://res.cloudinary.com/jatin-patel/video/upload/v1703405866/Trendfy/dl2szyjowvtlkwdpmy2m.mp4"
          ></video>
        </div>
      </div>
      <Feature />
    </div>
  );
};

export default About;
