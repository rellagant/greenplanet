import "./Home.scss";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import ArticleList from "../../components/ArticleList/ArticleList";
export function Home() {
    return (
        <div className="home-container">
            <Header />
            <InfoCard />
            <ArticleList />
        </div>
    )
}