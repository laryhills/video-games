import { Helmet } from "react-helmet";

//Components
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Video Games</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Abel&family=Cuprum:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        </style>
      </Helmet>
      <Sidebar />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
