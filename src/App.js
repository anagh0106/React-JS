// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { Home } from './components/Home';
import { Content } from './components/Content';

function App() {

  var title = "React JS"
  var city = "Gandhinagar"

  const address = {
    city: "Gandhinagar",
    state: "Gujarat",
    country: "India"
  }

  return (
    <div className="App">
      <Header title={title} city={city}></Header>
      {/* <Home></Home> */}
      <Content address={address}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
