import React, { Component, useState, useEffect } from "react";
import axios from "axios";
// import { setConfig } from 'react-hot-loader';
// import ErrorBoundary from './ErrorBoundary';

// ErrorBoundary will be given error and errorInfo prop.

// import"./Todo.css";

function Todo(props) {
    let [title, setTitle] = useState("");
    let [id, setId] = useState("");
    let [complete, setComplete] = useState(false);

    let setData = () => {
        if (props.todo) {
            setTitle(props.todo.title);
            setId(props.todo._id);
            setComplete(props.todo.complete);
        }
    };

    console.log(title, id, complete, props.todo);
    // setConfig({ errorReporter: ErrorBoundary });

    // let style = () => {
    //     // const { complete } = props.todo;
    //     return {  };
    // };

    // let floatLeft = () => {
    //     return { float: "left" };
    // };

    // let floatRight = () => {
    //     return { float: "right" };
    // };

    let remove = () => {

        axios
            .delete(`/api/Tasks`, {
                data: { id: id },
            })
            .then((res) => {
                console.log(res.data);
            });

        // window.location.reload();
    };

    let toggle = (e) => {
        // e.preventDefault();

        // this.setState((prevState) => { complete: !prevState.complete });

        // const { _id, title, complete } = this.props.todo;

        axios
            .put(`/api/Tasks`, {
                data: { id: id, complete: !complete },
            })
            .then((res) => {
                console.log(res.data);
            });

        // window.location.reload();
    };

    useEffect(() => {
        console.log("First useEffect");
        setData();
    });

    // let getData = async () => {
    //     await axios
    //     .get("/api/Tasks")
    //     .then((res) => {
    //         let
    //         setTitle(res.da)
    //     });
    // }

    return (
        <div>
            <h3 style={{textDecoration: complete ? "line-through" : "none"}}>
                <button
                    className="btn btn-sm"
                    style={{float: "left"}}
                    onClick={() => { remove(); props.getData(); }}
                >
                    <i className="far fa-times-circle fa-lg m-1 text-danger"></i>
                </button>
                {title}
                <input
                    type="checkbox"
                    className="m-1"
                    style={{float: "right"}}
                    onChange={ () => { toggle(); props.getData(); }}
                    checked={complete ? "checked" : ""}
                />
            </h3>
        </div>
    );
}

export default Todo;

// export class Todo extends Component {
//     style = () => {
//         const { complete } = this.props.todo;
//         return { textDecoration: complete ? "line-through" : "none" };
//     };

//     floatLeft = () => {
//         return { float: "left" };
//     };

//     floatRight = () => {
//         return { float: "right" };
//     };

//     remove = () => {
//         const { _id, title, complete } = this.props.todo;

//         axios
//             .delete(`/api/Tasks`, {
//                 data: { id: _id },
//             })
//             .then((res) => {
//                 console.log(res.data);
//             });

//         window.location.reload();
//     };

//     toggle = (e) => {
//         e.preventDefault();

//         this.setState((prevState) => { complete: !prevState.complete });

//         const { _id, title, complete } = this.props.todo;

//         axios
//             .put(`/api/Tasks`, {
//                 data: { id: _id, complete: complete },
//             })
//             .then((res) => {
//                 console.log(res.data);
//             });

//         // window.location.reload();
//     };

//     render() {
//         return (
//             <div>
//                 <h3
//                     className="text-dark bg-light text-center border"
//                     style={this.style()}
//                 >
//                     <button
//                         className="btn btn-sm float-left"
//                         style={this.floatLeft()}
//                         onClick={this.remove.bind(this)}
//                     >
//                         <i className="far fa-times-circle fa-lg m-1 text-danger"></i>
//                     </button>
//                     {this.props.todo.title}
//                     <input
//                         type="checkbox"
//                         className="m-1"
//                         style={this.floatRight()}
//                         onChange={this.toggle.bind(this)}
//                         checked={this.props.todo.complete ? "checked" : ""}
//                     />
//                 </h3>
//             </div>
//         );
//     }
// }

// export default Todo;
