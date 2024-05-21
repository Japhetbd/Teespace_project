import Footer from "./component/Footer";
import Body from "./component/Body";
import Navbar from "./component/Navbar";
import Firstbar from "./component/Firsbar";
import Blogbar from "./component/Blogbar";
import "./App.css";
function App() {
  return (
    <>
      <div className="bars">
        <Firstbar />
        <Navbar />
      </div>
      <Blogbar />
      <Body />
      <Footer />
    </>
  );
}
export default App;
