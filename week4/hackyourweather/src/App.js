import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import SearchForm from "./Components/searchForm";
import CityDetails from "./Components/CityDetails";

// const About = () => {
//   return (
//     <div>
//       welcome
//       <button>Go home</button>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={SearchForm} />
          <Route path="/:cityId" component={CityDetails} />
          {/* <SearchForm /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
