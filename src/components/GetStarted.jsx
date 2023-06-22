import { volcano } from "../assets";

const GetStarted = () => {
  return (
    <section className="relative h-[100vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
      <img src={volcano} alt="volcano" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center mb-64 md:mb-0 md:items-start md:justify-start p-10 md:px-16 lg:px-36 py-16 md:py-36">
        <h1 className="text-orange-500 text-[32px] md:text-[48px] font-bold text-center mb-3">
          Are you ready for action?
        </h1>
        <p className="text-white text-[14px] md:text-xl text-center mb-8">
          Now Undefeated is available for Android devices.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-5 py-3 rounded-full mt-2 md:mt-0 font-bold text-black from-orange-500 bg-gradient-to-r to-yellow-500"
          >
            Download now
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default GetStarted;
