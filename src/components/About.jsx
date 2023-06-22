import { logo, jungle } from "../assets";

const About = () => {
  return (
    <section className="h-screen relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black z-10"></div>
      <div className="absolute inset-0 bg-black opacity-75 z-20"></div>
      <img src={jungle} alt="jungle" className="w-full blur-sm " />

      <div className="absolute flex justify-center items-center inset-0 px-40 z-30">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-[48px] font-bold text-orange-500 mt-5 mb-10">
            About us
          </h1>
          <p className="text-white text-xl leading-relaxed ">
            We, a passionate group of creative and curious minds, find ourselves
            united by a common love: video games. From an early age, we marveled
            at the interactive experiences that these virtual worlds offered us.
            The idea of creating our own games, of bringing imaginary worlds to
            life and sharing our vision with other players, became a fascination
            that prompted us to take the first step.
          </p>
        </div>
        <div className="w-full flex justify-center items-center ml-10">
          <img src={logo} alt="logo" className="w-[450px] mt-10" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default About;
