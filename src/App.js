import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import {Switch, Route} from 'react-router-dom'
import Modal from './components/Modal'
class App extends Component {

  render(){
  return (
    <React.Fragment>
     <Navbar />
     <Switch>
     <Route exact path="/" component={ProductList} />
       <Route path="/details" component={Details} />
       <Route path ="/store" component={Cart} />
       <Route component={Default} />
     </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
}}

export default App;
