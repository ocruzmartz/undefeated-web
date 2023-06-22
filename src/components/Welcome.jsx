import { jack } from "../assets";

const Welcome = () => {
  return (
    <section className="bg-black flex h-scren flex-col px-10 pt-32 md:flex-row md:h-[500px] md:px-18 md:py-10 gap-5 lg:h-screen lg:px-36">
      <div className="w-auto flex justify-center items-center ">
        <img
          src={jack}
          alt="jack"
          className="max-w-[300px] lg:max-w-[450px] h-full object-contain"
        />
      </div>
      <div className="w-full flex flex-col items-center text-center md:text-left md:items-start md:justify-center lg:ml-8">
        <h1 className="text-[36px] md:text-[36px] font-bold text-orange-500 md:m-0 md:p-0 mt-8 mb-8 lg:mb-10">
          Hi, I&apos;m Jack!
        </h1>
        <div className="text-[18px] md:text-[14px] lg:text-lg lg:pr-14 text-white leading-relaxed">
          <p>
            Welcome to the world of adrenaline and overflowing excitement! Get
            ready to immerse yourself in a gaming experience like no other in
            our new action video game. In this exciting universe, you will be
            the protagonist of epic battles, intense challenges and adventures
            full of dangers and rewards.
          </p>
          <br />
          <p>
            Face off against formidable enemies, use your skills and strategies
            to overcome seemingly insurmountable obstacles, and prove yourself
            in fast-paced combat. Each step you take will bring you closer to
            victory and plunge you deeper into a plot full of unexpected twists
            and secrets to discover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
