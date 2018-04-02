import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Foot from "../container/Foot";
import Header from "../container/Header";
import App from "../container/App";
import Detail from "../container/Detail";
 // const RouterMap = () =>(
 //   <Router>
 //      <div>


 //         <ul>
 //            <li><Link to="/">App</Link></li>
 //            <li><Link to="/foot">foot</Link></li>
 //            <li><Link to="/">App</Link></li>
 //            <li><Link to="/home">home</Link></li>
 //        </ul>
 //         <Route exact  path="/" componet={App} />
 //         <Route path ="/foot" componet={Foot}/>
 //         <Route path ="/home" componet={Home}/>
 //         {/*<Route path = "/detail/:id" componet={Detail} />*/}
 //      </div>
     
 //   </Router>
 //   )

 const RouterMap = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/foot">ot</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />

      <Route  path="/home" component={Home} />
      <Route  path ="/foot" component={App}/>
       {/*<Route path="/about" component={About} />*/}
      {/*<Route path="/about" component={About} />*/}
      {/*<Route path="/topics" component={Topics} />*/}
    </div>
  </Router>
);

  

   



   const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

  const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default RouterMap 