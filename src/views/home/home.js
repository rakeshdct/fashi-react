import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeData, homeSelector } from "./home-dux";
import HeroSection from "./heroSection";
import Singlebanner from "./singleBanner";
import DealoftheWeek from "./dealoftheWeek";
import Instaphoto from "./instaPhoto";
import Latestblog from "./latestBlog";
import PreLoader from './../../components/pagePreLoader'
import ErrorBoundry from "../../components/errorBoundry"
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
        <PreLoader />
      ) : (
        <>
          <ErrorBoundry>
            <HeroSection
              heroSectionOwlConfig={homeData.heroSectionOwlConfig}
              heroSections={homeData.heroSections}
            />
          </ErrorBoundry>
          <ErrorBoundry>
            {<Singlebanner singleBanners={homeData.singleBanners} />}
          </ErrorBoundry>
          <DealoftheWeek />
          <ErrorBoundry>
            <Instaphoto instaPhotos={homeData.instaPhotos} />
          </ErrorBoundry>
          <ErrorBoundry>
            <Latestblog latestBlogs={homeData.latestBlogs} benefitItems={homeData.benefitItems} />
          </ErrorBoundry>
        </>
      )}
    </>
  );
};

export default Home;
