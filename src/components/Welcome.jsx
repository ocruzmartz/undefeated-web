
import { jack } from "../assets";

const Welcome = () => {
  return (
    <section className="bg-black flex px-32 pt-64">
      <div className="w-full flex justify-center items-center ">
        <img src={jack} alt="jack" className=" object-fill" />
      </div>
      <div className="w-full flex flex-col items-start">
        <h1 className=" text-[48px] font-bold text-orange-500 mt-5 mb-10">
          Hi, I&apos;m Jack!
        </h1>
        <p className="text-white text-xl leading-relaxed"> 
          Welcome to the world of adrenaline and overflowing excitement! Get
          ready to immerse yourself in a gaming experience like no other in our
          new action video game. In this exciting universe, you will be the
          protagonist of epic battles, intense challenges and adventures full of
          dangers and rewards.
        </p>
        <br />
        <p className="text-white text-xl leading-relaxed">
          Face off against formidable enemies, use your skills and strategies to
          overcome seemingly insurmountable obstacles, and prove yourself in
          fast-paced combat. Each step you take will bring you closer to victory
          and plunge you deeper into a plot full of unexpected twists and
          secrets to discover.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
