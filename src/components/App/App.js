import "./App.scss";
import Header from "../Header";
import Footer from "../Footer";
import SearchPage from "../SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviePage from "../MoviePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__content">
          <Switch>
            <Route path="/movie/:id">
              <MoviePage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
