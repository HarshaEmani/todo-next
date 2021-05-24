import React, { Component } from "react";
import axios from "axios";
// import"./Todo.css";

export class Todo extends Component {
    style = () => {
        const { complete } = this.props.todo;
        return { textDecoration: complete ? "line-through" : "none" };
    };

    floatLeft = () => {
        return { float: "left" };
    };

    floatRight = () => {
        return { float: "right" };
    };

    remove = () => {
        const { _id, title, complete } = this.props.todo;

        axios
            .delete(`/api/Tasks`, {
                data: { id: _id },
            })
            .then((res) => {
                console.log(res.data);
            });

        window.location.reload();
    };

    toggle = () => {
        const { _id, title, complete } = this.props.todo;

        axios
            .put(`/api/Tasks`, {
                data: { id: _id, complete: complete },
            })
            .then((res) => {
                console.log(res.data);
            });

        window.location.reload();
    };

    render() {
        return (
            <div>
                <h3
                    className="text-dark bg-light text-center border"
                    style={this.style()}
                >
                    <button
                        className="btn btn-sm float-left"
                        style={this.floatLeft()}
                        onClick={this.remove.bind(this)}
                    >
                        <i className="far fa-times-circle fa-lg m-1 text-danger"></i>
                    </button>
                    {this.props.todo.title}
                    <input
                        type="checkbox"
                        className="m-1"
                        style={this.floatRight()}
                        onChange={this.toggle.bind(this)}
                        checked={this.props.todo.complete ? "checked" : ""}
                    />
                </h3>
            </div>
        );
    }
}

export default Todo;
