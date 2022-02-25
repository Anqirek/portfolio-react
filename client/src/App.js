import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Blog from './Blog';
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar'
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/About">
            <AboutMe/>
          </Route>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;