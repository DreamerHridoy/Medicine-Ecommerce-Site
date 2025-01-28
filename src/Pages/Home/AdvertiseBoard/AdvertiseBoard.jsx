import img1 from "../../../assets/home/medicineslider3.jpg";

const AdvertiseBoard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-5">
        Advertisement Board
      </h2>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-blue-900"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Your Health, Our Priority
            </h1>
            <p className="mb-5 text-lg">
              Discover world-class healthcare solutions designed for your
              well-being. From innovative treatments to compassionate care,
              we're here to support you on every step of your health journey.
            </p>
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseBoard;
