import Work from "../../../components/work";

const About = () => {
  return (
    <section>
      <div className="d-flex">
        <div>image</div>
        <div>image</div>
      </div>
      <div>
        <p>
          Hi again! I’m Gerardo Villalobos, but I think that you already know,
          I’m <span className="gradient-text">FullStack Developer</span> and a{" "}
          <span className="gradient-text">creative</span> person to solve
          problems coding and not coding. Graduated from the{" "}
          <span className="red-text">Universidad Tecnologica de Tijuana</span>{" "}
          at 2023 as a IT Engineer. Since 2021 I’ve been working as Software
          Developer, since I’ve started I’ve had success moments and fails that
          have learnt me how be better. I never stop to learn something, for me,
          learn anything is the best way to improve as person.
        </p>
        <h2>
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <div className="d-flex flex-direction-column align-items-center w-100">
          <Work
            title="BajaDevelopers"
            date="Sept/2021 - Jul/2022"
            color="#76C3D5"
            logo="/bajadevelopers.jpg"
            job="FullStack Developer"
          />
          <Work
            title="Multitaskr"
            date="Aug/2022 - Currently"
            color="#4D04AF"
            logo="/multitaskr.jpg"
            job="Backend Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
