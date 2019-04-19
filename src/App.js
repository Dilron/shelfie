import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      editTarget: null,
    }
    
  }

  componentDidMount(){
    axios.get('/api/start').then(response => console.log(response.data))
    .catch(err => console.log('did not connect with server: ', err))
    this.getInventory()
  }
  
  getInventory = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({inventory: response.data})
      console.log('got inventory: ', response)
    })
    .catch(err => console.log('error component did update get: ', err))
  }
  
  
  addItem = (newItem) => {
    axios.post('/api/inventory', newItem).then(response => {
      console.log('add item log: ', response)
      this.getInventory()
    })
    .catch(err => console.log('error add item post: ', err))
  }
  
  removeItem = (itemId) => {
    console.log('check remove: ', itemId)
    axios.delete(`/api/inventory/${itemId}`).then(response => {
      console.log('removed item: ', response)
      this.getInventory()
    })
    .catch(err => console.log('error delete item: ', err))
  }

  updateItem = (newItem) => {
    axios.put(`/api/inventory/${newItem.id}`, newItem).then(response => {
      console.log('update item log: ', response)
      this.getInventory()
    })
    .catch(err => console.log('error add item post: ', err))
  }

  beginEdit = (itemId) => {
    let editObj = this.state.inventory.find((ele) => ele.id === itemId)
    this.setState({editTarget: editObj})
  }

  endEdit = () => {
    this.setState({editTarget: null})
  }

  render() {
    let {inventory} = this.state
    return (
      <div className="App">
        <Header/>
        <div className='app-body'>
        <Dashboard
        inventory={inventory}
        removeItem={this.removeItem}
        beginEdit={this.beginEdit}/>
        <Form
        addItem={this.addItem}
        editTarget={this.state.editTarget}
        endEdit={this.endEdit}
        updateItem={this.updateItem}/>
        </div>
        
      </div>
    );
  }
}

export default App;
