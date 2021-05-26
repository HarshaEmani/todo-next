import React, { Component, useState, useEffect } from "react";
import Todo from "./Todo";
import axios from "axios";

function Todos() {
    let [todos, setTodos] = useState([]);

    let getData = async () => {
        await axios.get("/api/Tasks").then((res) => setTodos(res.data));
    };

    useEffect(async () => {
        console.log("Component mounted");
        getData();
    }, []);

    return todos.map((t) => <Todo todos={todos} todo={t} key={t._id} getData={getData}></Todo>);
}

// export class Todos extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             todos: [],
//         };
//     }

//     async componentDidMount(){
//         console.log("Component mounted");
//         await axios
//             .get("/api/Tasks")
//             .then((res) => this.setState({ todos: res.data }));
//     }

//     render() {
//         return this.state.todos.map((t) => <Todo todos={this.state.todos} todo={t} key={t._id}></Todo>);
//     }
// }

// export const getStaticProps = async () => {
//     const data = await getData();

//     return {
//       props: data,
//     };
//   }

export default Todos;
