const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-col lg:flex-row p-16 gap-6  ">
      <div className="flex1">
        <img src="https://i.postimg.cc/3RQjxmr8/about2.webp" alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Our Company</h1>
        <p className="text-2xl mt-5">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo volup. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent eu nisi ac mi malesuada vestibulum. Phasellus tempor
          nunc eleifend cursus molestie. Mauris lectus arcu, pellentesque at
          sodales sit amet, condimentum id nunc. Donec ornare mattis suscipit.
          Praesent fermentum accumsan vulputate.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;