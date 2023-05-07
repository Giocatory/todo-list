import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
      
        const newItemText = this._inputElement.value.trim();
        if (!newItemText) {
          return;
        }
      
        const newItemKey = Date.now();
        const newItem = { text: newItemText, key: newItemKey };
        const items = this.state.items;
      
        if (items.some(item => item.text === newItem.text)) {
          alert('Такая задача уже существует!');
          return;
        }
      
        this.setState({
          items: [newItem, ...items],
        });
      
        this._inputElement.value = '';
      }
      

    deleteItem(key){
        let filteredItems = this.state.items.filter(
            function(item) {
                return item.key!== key;
            }
        );
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder="Введите задачу"
                               ref={a => this._inputElement = a}
                        />
                        <button type="submit">OK</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;