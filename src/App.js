// import logo from './logo.svg';
import './App.css';
// import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { Home } from './components/Home';
// import { Content } from './components/Content';
import { University } from './components/University';
import { Category } from './components/Category';

function App() {

  // const users = ["Aman", "Anagh", "Achyut", "Ram"]

  // const students = [
  //   {
  //     id: 1,
  //     name: "Aman",
  //     age: 20
  //   },
  //   {
  //     id: 2,
  //     name: "Anagh",
  //     age: 21
  //   },
  //   {
  //     id: 3,
  //     name: "Achyut",
  //     age: 22
  //   },
  // ]
  return (

    <div className="App">
      <Header></Header>

      {/* Normal Printed */}
      {/* {
        <h1>{users}</h1>
      } */}

      {/* Iterate Using Map Method 
          => Map method return 
          => forEach Can't return
      */}
      {/* {
        users.map((user) => {
          return <h1 style={{ color: user.length > 4 ? "red" : "green" }}>{user}</h1>
        })
      }

      {/* Want to do it with json Object */}
      {/* {
        students.map((stu) => {
          return <h1>{stu.name}</h1>
        })
      }  */}
      <University />
      <Category></Category>
    </div>
  );
}

export default App;
