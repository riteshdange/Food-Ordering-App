import RestauntantCards from "./RestaurantCards";
import restList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="restaurant-card-container">
        {restList.map((restaurant) => (
          <RestauntantCards key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
