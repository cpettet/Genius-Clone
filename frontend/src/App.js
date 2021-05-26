import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import { checkUserLogin } from "../src/store/session";
import TrackForm from "./components/TrackForm";
import TracksChart from "./components/TracksChart";
import TrackShow from "./components/TrackShow";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(checkUserLogin()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <Switch>
        <Route exact path="/">
          <TracksChart />
        </Route>
        <Route path="/tracks/new">
          <TrackForm />
        </Route>
        <Route path="/tracks/:id">
          <TrackShow />
        </Route>
      </Switch>
    </>
  );
}

export default App;
