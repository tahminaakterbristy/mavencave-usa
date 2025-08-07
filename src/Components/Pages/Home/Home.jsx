import ExploreCountries from "../ExploreCountries/ExploreCountries";
import ExploreOptions from "../ExploreOptions/ExploreOptions";
import FAQ from "../FAQ/FAQ";
import Universities from "../Universities/Universities";



const Home = () => {
    return (
        <div>
            <Universities></Universities>
          <div className="pl-64">
              <ExploreCountries></ExploreCountries>
            
          </div>
          <FAQ></FAQ>
            <ExploreOptions></ExploreOptions>
        </div>
    );
};

export default Home;