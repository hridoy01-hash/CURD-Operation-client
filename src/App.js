import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import Services from './components/Services/Services';
import UpdateCourse from './components/UpdateCourse/UpdateCourse';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route  path="/services">
            <Services></Services>
          </Route>
          <Route  path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route  path="/courses/update/:id">
            <UpdateCourse></UpdateCourse>
          </Route>
          <Route  path="/registration">
            <Registration></Registration>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
