import Hero from "../components/homepage/Hero";
import SearchBarWithFilter from "../components/homepage/SearchBarWithFilter";
function Homepage() {
  return (
    <div className="Homepage">
      <SearchBarWithFilter />
      <Hero />
    </div>
  );
}

export default Homepage;
