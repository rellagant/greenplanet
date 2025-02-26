import "./Home.scss";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import ArticleList from "../../components/ArticleList/ArticleList";
import Footer from "../../components/Footer/Footer";

export function Home() {
    return (
        <div className="home-container">
            <Header />
            <InfoCard />
            <ArticleList />
            <Footer />
        </div>
    )
}