import Hero from "../components/homepage/Hero";
import SearchBarWithFilter from "../components/homepage/SearchBarWithFilter";
import ImageCarousel from "../components/homepage/Carousel";
function Homepage() {
  return (
    <div className="Homepage">
      <SearchBarWithFilter />
      <ImageCarousel />
      <Hero />
    </div>
  );
}

export default Homepage;
