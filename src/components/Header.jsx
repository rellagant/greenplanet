import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <p className="header__headline">New Technology 2024 ⚡️</p>
        <h1 className="header__title">Solar Solutions for a Greener Planet</h1>
        <p className="header__description">
          Discover renewable energy with our cutting-edge solar panels.
        </p>
        <p className="header__description">
          Designed for sustainability and cost-efficiency.
        </p>
        <button className="header__button">
          Get Started <i className="bi bi-arrow-up-right-circle-fill"></i>
        </button>
      </header>
    </>
  );
}
