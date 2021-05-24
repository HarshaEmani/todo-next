import React, { Component } from "react";
import axios from "axios";

export default class Addtodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
        };
    }

    // axios.post("/api/Tasks")
    // .then();

    update = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    add = (e) => {
        if (this.state.title !== "") {
            // e.preventDefault();
            const newTodo = this.state;

            axios
                .post("/api/Tasks", newTodo)
                .then((res) => console.log(res.data));

            this.setState({ title: "" });
        }
    };

    render() {
        return (
            <div>
                <form
                    input="text"
                    className="form-control rounded-0"
                    onSubmit={this.add.bind(this)}
                >
                    <input
                        className="form-control rounded-0"
                        placeholder="Write your todo here..."
                        onChange={this.update}
                        value={this.state.title}
                    />
                    <button
                        className="form-control rounded-0 btn-secondary"
                        type="submit"
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}
