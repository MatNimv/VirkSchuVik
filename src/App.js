import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import ArticleDetails from './components/articleDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route path="/articles/:id">
            <ArticleDetails></ArticleDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
