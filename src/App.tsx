import "./app.css";
import Players from "./components/Players/Players";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams/Teams";
import Games from "./components/Games/Games";
import Stats from "./components/Stats/Stats";
import Season from "./components/Season/Season";
import { GlobalContext } from "./contexts/globalContext";
import useApp from "./hooks/useApp";
import Home from "./components/HomePage/Home";

function App() {
  const { globalContextValue } = useApp();

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/teams" Component={Teams} />
          <Route path="/players" Component={Players} />
          <Route path="/games" Component={Games} />
          <Route path="/stats" Component={Stats} />
          <Route path="/season" Component={Season} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
