import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import OmOss from './routes/OmOss';
//import ArticleDetails from './components/articleDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  //för varje sida som finns i appen behövs en
  //<Route></Route> vara omringad kring komponenten som innehåller sidan. 

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/*<Route path="/articles/:id">
            <ArticleDetails></ArticleDetails>
          </Route>*/}
          <Route exaxt path="/OmOss">
            <OmOss></OmOss>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
