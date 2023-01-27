import aboutImage from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <>
    <section className="section" id="about">
    <Title title="About" subTitle="us"/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImage}
            className="about-photo"
            alt="about-img"
          />
        </div>
        
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          Don't wait untill tommorow, discover your 
          adventure now and feel the sensation of 
          closness to nature around you.
          </p>
          <p>
          See and discover what adventures tell us about their journey 
          with us, we always listen to whatever experience they have to say.
          </p>
          <a href="/#" className="btn">read more</a>
        </article>
      </div>
    </section>
    </>
  )
}
export default About