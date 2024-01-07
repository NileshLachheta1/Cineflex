import logo from './logo.svg';
import './App.css';
import Sidenavbar from './Component/NavbarComponent/Sidenavbar.js';
import Topnavbar from './Component/NavbarComponent/Topnavbar.js';
import Homepage from './Component/HomepageComponent/Homepage.js';
import Profilesidebar from './Component/ProfileComponent/profilesidebar.js';
import EditprofileComponent from './Component/ProfileComponent/editprofileComponent.js';
function App() {
  return (
    <>
    <Topnavbar/>
    <Sidenavbar/>
    <Homepage/>
    <Profilesidebar/>
    < EditprofileComponent/>

    </>
  );
}

export default App;
