import Image from "next/image";

const Work = ({ title, date, color, logo, job }) => {
  return (
    <div className="d-flex justify-space-center align-items-center w-75 bg-gray-1 border-radius mb-3">
      <div className="d-flex justify-space-center align-items-center w-25">
        <Image className="border-circle" src={logo} width={50} height={50} />
      </div>
      <div className="w-75">
        <h3>
          <span style={{ color: color }}>{title}</span>{" "}
          <span className="text-gray-2">{date}</span>
        </h3>
        <p className="text-gray-2">{job}</p>
      </div>
    </div>
  );
};

export default Work;
