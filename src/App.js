import Widgets from './components/Widgets';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useStateValue } from './components/context/StateProvider'
import Login from './components/LoginPage/Login';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Chats from './components/ChatComponents/Chats';
import Shop from './components/Shopping.js/Shop';
import HomePage from './components/HomePageComponents/HomePage';
import Game from './components/Games/Game';



function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
    <div className="app">
      {!user ? (<Login />) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        </>
      )}


    </div>
    </Route>
    <Route exact path='/chat'>
      <Chats/>
    </Route>

    <Route exact path='/shop'>
        <Shop/>
    </Route>

    <Route exact path='/homepage'>
        	<HomePage/>
    </Route>

    <Route exact path='/game'>
        <Game/>
    </Route>
    
    </Switch>
    </Router>
   
  );
}

export default App;
