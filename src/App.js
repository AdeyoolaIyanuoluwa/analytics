import { BrowserRouter } from "react-router-dom";

import Herosection from "./pages/hero-section/herosection";
import Mainfeatures from "./pages/Main-features/mainfeatures";
import Content from "./pages/content/content";
import Footer from "./pages/footer/footer";
import Card from "./components/Card/card";


function App() {
  return (
    <div>
          <BrowserRouter>
                      <Herosection/>
                      <Mainfeatures/>
                      <Content/>
                      <Footer/>
          </BrowserRouter>
    </div>
  );
}

export default App;
