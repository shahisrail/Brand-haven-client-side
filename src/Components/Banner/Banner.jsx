const Banner = ({ isDarkmode }) => {
  return (
    <div
      className={` hero min-h-screen ${
        isDarkmode ? "bg-black text-white" : "bg-blue-gray-100"
      } `}
    >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/0NXtVHz2/3513206013.png)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
