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
    }

    addItem(e){
        let itemArray = this.state.items;

        if(this._inputElement.value !== ""){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });
        }
        console.log(itemArray);

        e.preventDefault();
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
                <TodoItems entries={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;