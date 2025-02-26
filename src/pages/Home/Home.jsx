import "./Home.scss";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";

export function Home() {
    return (
        <div className="home-container">
            <Header />
            <InfoCard />
        </div>
    )
}