const Banner = ({ isDarkmode }) => {
  return (
    <div
      className={` hero min-h-screen ${isDarkmode ? "bg-black text-white" : "bg-blue-gray-100"
      } `}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/VNTTskSY/download.jpg"
          className="lg:w-[70%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
