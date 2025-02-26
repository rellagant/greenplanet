import "./InfoCard.scss";
import map from "../../assets/images/map.png";
import turbine from "../../assets/images/turbine.png";

export default function InfoCard() {
  return (
    <div className="info-card">
        <div className="info-card__top">
      <div className="info-card__container-left">
        <h5 className="info-card__cta">Who are we?</h5>
        <h2 className="info-card__title">
          Experts in the World of Solar Energy
        </h2>
        <div className="info-card__content">
          <div className="info-card__content-left">
            <i className="bi bi-tree"></i>
            <h3 className="info-card__content-left-title">
              Environmentally Friendly
            </h3>
            <p className="info-card__content-left-description">
              Solar energy reduces greenhouse gasses and air pollutants, helping
              combat climate change.
            </p>
          </div>
          <div className="info-card__content-right">
            <i className="bi bi-gear"></i>
            <h3 className="info-card__content-right-title">Low Maintenance</h3>
            <p className="info-card__content-right-description">
              Solar panels are durable, with low maintenance costs, requiring
              only occasional cleaning and minimal upkeep.
            </p>
          </div>
        </div>
      </div>
      <div className="info-card__container-right">
        <img
          className="info-card__container-right-image"
          src={map}
          alt="World Map"
        />
      </div>
      </div>

      <div className="info-card__bottom">
    <div className="info-card__bottom-container">
      {/* Left Section */}
      <div className="info-card__bottom-left">
        <h2 className="info-card__bottom-title">
          Powering Your Future with Clean Energy
        </h2>
        <p className="info-card__bottom-description">
          Join hundreds of companies embracing global solar initiatives
        </p>
        <button className="info-card__bottom-button">
          Learn More <i className="bi bi-arrow-up-right-circle-fill"></i>
        </button>
        <h3 className="info-card__bottom-fact">
          Environmentally Friendly
        </h3>
        <p className="info-card__bottom-description">
          Renewable energy little or no carbon emission, helping reduce global consumption
        </p>
        <p className="info-card__bottom-link">Learn more</p>
      </div>

      {/* Middle Section */}
      <div className="info-card__bottom-middle">
        <img src={turbine} alt="Turbine" className="info-card__bottom-image" />
      </div>

      {/* Right Section */}
      <div className="info-card__bottom-right">
  <div className="info-card__bottom-section">
    <p className="info-card__bottom-subtitle">Certifications: </p>
    <h4 className="info-card__bottom-factoid">IEC/UL 61730 CEC <br></br> Listed</h4>
  </div>
  <div className="info-card__bottom-section-middle">
    <p className="info-card__bottom-subtitle">Inverter Power:</p>
    <h4 className="info-card__bottom-factoid">3.8KW/7.6KW</h4>
  </div>
  <div className="info-card__bottom-section-middle">
    <p className="info-card__bottom-subtitle">Dimensions: </p>
    <h4 className="info-card__bottom-factoid">74.4&quot; x 41.2&quot; x 1.57&quot; (including frame)</h4>
  </div>
  <div className="info-card__bottom-section">
    <p className="info-card__bottom-subtitle">Dimensions: </p>
    <h4 className="info-card__bottom-factoid">74.4&quot; x 41.2&quot; x 1.57&quot; (including frame)</h4>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
