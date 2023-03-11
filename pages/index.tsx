
import Header from "../components/header/header";
import Article from "../components/article/article";
import Feed from "../components/feed/feed";


export default function Home() {
  return (
    <>
      <div className="container">
      <Header />
      <Article />
      <Feed />
      </div>
    </>
  )
}
