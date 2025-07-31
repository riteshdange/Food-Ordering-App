import { LOGO_URL } from "../utils/constants";
const RestauntantCards = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restData?.info;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="Restaurant-Img"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestauntantCards;
