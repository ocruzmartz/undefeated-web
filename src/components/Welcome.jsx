import { jack } from "../assets";

const Welcome = () => {
  return (
    <section className="bg-black flex flex-col px-10 pt-32 md:flex-row md:px-32 md:py-64">
      <div className="w-full flex justify-center items-center ">
        <img src={jack} alt="jack" className=" object-fill" />
      </div>
      <div className="w-full flex flex-col items-center text-center md:text-left md:items-start">
        <h1 className="text-[36px] md:text-[48px] font-bold text-orange-500 my-7 md:mb-10">
          Hi, I&apos;m Jack!
        </h1>
        <div className="text-[18px] md:text-xl text-white leading-relaxed">
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
