import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';
import TodoItems from './TodoItems.js';
import './index.css';

class App extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  inputElement =React.createRef();

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem}
        inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
         />
         <TodoItems entries={this.state.items} 
           deleteItem={this.deleteItem}
         />
      </div>
    )
  }
}

export default App
