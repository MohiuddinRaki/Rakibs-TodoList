import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/FV65KYq/task-management-software-38-1024x511.png')`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* <h1 className="mb-5 text-5xl font-bold uppercase">
           <span className="text-[#ed1b2f]">To Give</span> Is Human
          </h1> */}
          {/* <p className="mt-10 text-xl font-medium text-gray-300">
            We save lifes by helping some of the worlds poorest  countries collect sufficient, safe blood
          </p> */}
          <div className="flex justify-center gap-7 mt-8">
          <h1><Link to="/register"><button className="btn bg-orange-500 btn-outline text-white text-xl">Let’s Explore</button></Link></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
