// Dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Internal imports
import Navbar from "./components/Navbar";
import About from "./components/views/About";
import Deploy from "./components/views/Deploy";
import Home from "./components/views/Home";
import RPS from "./components/views/RPS";

// Styles
import "./css/style.css"

const App = () => {
  return (
    // Enables routing inside the app
    <Router>
      <div className="root">
        <Navbar />
        {/* Loads one route at once */}
        <Switch>
          {/* 
              Each route has a path and a component to render 
              when URL matches the path 
          */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/deploy" exact component={Deploy} />
          <Route path="/app" exact component={RPS} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;