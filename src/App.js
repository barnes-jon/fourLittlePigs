import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHomepage from "./main-section/MainHomepage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainHomepage />
      <Footer />
    </div>
  );
}
