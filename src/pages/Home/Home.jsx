import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";

const Home = () => {
  return (
    <div className="dark:bg-[#040506]">
      <Banner></Banner>
      <div className="max-w-[1440px] w-11/12 mx-auto">
        <CraftItems></CraftItems>
      </div>
    </div>
  );
};

export default Home;
