import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route 
          component={Home}
          path='/'
          exact
        />
        <Route exact path="/home">
          <Redirect to="/" /> : <Home />
        </Route>
        <Route 
          component={About}
          path='/about'
        />
        <Route 
          component={Contact}
          path='/contact'
        />
        <Route 
          component={Portfolio}
          path='/portfolio'
        />
        <Route 
          component={Blog}
          path='/blog'
        />
        <Route 
          component={Pricing}
          path='/pricing'
        />
        <Route 
          component={SinglePost}
          path='/post/:slug'
        />
        <Route 
          component={Post}
          path='/post'
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
