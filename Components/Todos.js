import React, { Component } from "react";
import Todo from "./Todo";
import axios from "axios";

export class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };
    }

    async componentDidMount(){
        console.log("Component mounted");
        await axios
            .get("/api/Tasks")
            .then((res) => this.setState({ todos: res.data }));
    }

    render() {
        return this.state.todos.map((t) => <Todo todos={this.state.todos} todo={t} key={t._id}></Todo>);
    }
}

// export const getStaticProps = async () => {
//     const data = await getData();
  
//     return {
//       props: data,
//     };
//   }

export default Todos;
