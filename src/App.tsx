import React, { lazy, Suspense, useCallback, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import MemoComponent from "./components/MemoComponent";

const Home = lazy(() => import("./components/Home"));
const Pokemon = lazy(() => import("./components/Pokemon"));
const App = () => {
  const [count, setCount] = React.useState(0);

  const array = useMemo(() => {
    return ["A", "B", "C"];
  }, []);
  const fetchData = useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  React.useEffect(() => {
    fetchData("todos");
  }, [fetchData]);
  return (
    <>
      <Router>
        <LandingPage></LandingPage>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/pokemon"
              component={Pokemon}
              fetchdata={fetchData}
            />
          </Switch>
        </Suspense>
      </Router>
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          Add
        </button>
      </div>
      <MemoComponent
        title="New title"
        array={array}
        fetchData={fetchData}
      ></MemoComponent>
    </>
  );
};

export default App;
