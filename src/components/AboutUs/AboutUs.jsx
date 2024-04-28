import CountUp from "react-countup";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AboutUs = () => {
  const [text] = useTypewriter({
    words: ["Passion", "Purpose", "Dedication"],
    loop: {},
  });
  return (
    <div className="bg-[#F6F6F5] dark:bg-[#040506] dark:text-white pt-10 pb-20">
      <div className="flex flex-col lg:flex-row gap-6 justify-evenly lg:items-center max-w-[1440px] w-11/12 mx-auto">
        <div className="lg:max-w-[40%]">
          <p className="bg-white dark:bg-transparent dark:border w-fit px-4 py-2 rounded-full font-medium">About us</p>
          <h1 className="max-w-[33rem] mt-4 text-4xl font-serif">
            Unveiling Our Artistic Journey: Crafting Creativity with <span className="text-[#A38556] dark:text-[#e2b266]">{text}</span>
            <Cursor cursorColor="#A38556" />
          </h1>
          <p className="max-w-[28rem] mt-3 text-lg text-gray-600 dark:text-gray-300">
            Discover the story behind our Art & Craft Store, where passion meets creativity. We&apos;re dedicated to curating quality painting and drawing
            products.
          </p>
        </div>

        <div className="lg:max-w-[40%] grid gap-y-6 gap-x-8 grid-cols-2">
          <div className="border-t-4 border-t-[#A38556]">
            <h6 className="text-2xl font-bold mt-4">
              <CountUp end={10} duration={4} />+ Years
            </h6>
            <p className="text-lg dark:text-gray-300">Decades of experience in artistic excellence.</p>
          </div>

          <div className="border-t-4 border-t-[#A38556]">
            <h6 className="text-2xl font-bold mt-4">
              <CountUp end={150} duration={4} />+ Brands
            </h6>
            <p className="text-lg dark:text-gray-300">Celebrating collaborations with renowned brands.</p>
          </div>

          <div className="border-t-4 border-t-[#A38556]">
            <h6 className="text-2xl font-bold mt-4">
              <CountUp end={4500} duration={4} />+ Customers
            </h6>
            <p className="text-lg dark:text-gray-300">Serving thousands, striving for perfection always.</p>
          </div>

          <div className="border-t-4 border-t-[#A38556]">
            <h6 className="text-2xl font-bold mt-4"><CountUp end={99} duration={4} />%</h6>
            <p className="text-lg dark:text-gray-300">Customer satisfaction rate soaring at 99%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
