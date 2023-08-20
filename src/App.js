import NavBar from './components/NavBar';
import Home from './routes/Home';
import Create from './routes/Create';
import NotFound from './routes/NotFound';
import ArticleDetails from './components/articleDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  //för varje sida som finns i appen behövs en
  //<Route></Route> vara omringad kring komponenten som innehåller sidan. 

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
