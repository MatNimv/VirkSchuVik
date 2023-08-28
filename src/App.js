import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import OmOss from './routes/OmOss';
import Projekt from './routes/Projekt';
import ProjektArt from './components/projekt/projektArt';
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
        <main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/*<Route path="/articles/:id">
            <ArticleDetails></ArticleDetails>
          </Route>*/}
          <Route path="/projekt/:id">
            <ProjektArt></ProjektArt>
          </Route>
          <Route path="/projekt/:author">
            <ProjektArt></ProjektArt>
          </Route>
          <Route path="/projekt">
            <Projekt></Projekt>
          </Route>
          <Route path="/omOss">
            <OmOss></OmOss>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </main>
      <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
