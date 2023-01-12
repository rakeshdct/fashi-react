import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeData, homeSelector } from "./home-dux";
import HeroSection from "./heroSection";
/*import Singlebanner from "./singleBanner";
import DealoftheWeek from "./dealoftheWeek";
import Instaphoto from "./instaPhoto";
import Latestblog from "./latestBlog";
import { homeData } from "./data";*/
import "./../../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { homeData, loading } = useSelector(homeSelector);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach(function (currdiv, i) {
      var bg = currdiv.getAttribute("data-setbg");
      currdiv.style.backgroundImage = "url(" + bg + ")";
    }, []);
  });
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
          <HeroSection
            heroSectionOwlConfig={homeData.heroSectionOwlConfig}
            heroSections={homeData.heroSections}
          />
      )}
    </>
  );
};

export default Home;
