
import './App.css';
import List from './components/List';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (  
 <Router> 
    <Header/>
    <List/>  
    </Router>
  );
}

export default App;
