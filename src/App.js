import logo from './logo.svg';
import './App.css';
import Sidenavbar from './Component/NavbarComponent/Sidenavbar.js';
import Topnavbar from './Component/NavbarComponent/Topnavbar.js';
import Homepage from './Component/HomepageComponent/Homepage.js';
function App() {
  return (
    <>
    <Topnavbar/>
    <Sidenavbar/>
    <Homepage/>
    </>
  );
}

export default App;
