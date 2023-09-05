import Image from "next/image";
import Profile from "public/profile.jpg";
import Social from "../../components/social";

const Welcome = () => {
  return (
    <section className="d-flex">
      <Image
        className="border-radius"
        src={Profile}
        width={350}
        quality={100}
        alt="profile"
      />
      <div className="d-flex justify-space-center pl-3 flex-direction-column">
        <h1 className="gradient-text">
          Hi! <span className="d-block">I'm Gerardo Villalobos</span>
        </h1>
        <h2 className="text-gray-2 m-0">Fullstack Developer</h2>
        <div className="d-flex">
          <Social
            text="Resume"
            url="www.linkedin.com/in/gerardo-villalobos-gamiño"
            className="mr-3"
          />
          <Social
            text="Linkedin"
            url="https://www.linkedin.com/in/gerardo-villalobos-gamiño"
            image="/linkedin.png"
            className="mr-3"
          />
          <Social
            text="Instagram"
            url="https://www.instagram.com/ggerardius/"
            image="/instagram.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
