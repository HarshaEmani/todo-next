import Head from 'next/head'
import styles from '../styles/Home.module.css';
// import "../styles/globals.css";
import Header from '../Components/Header'
import Addtodo from '../Components/Addtodo';
import Todos from '../Components/Todos';

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <Addtodo></Addtodo>
      <Todos></Todos>
    </div>
  )
}
