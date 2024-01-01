import { Routes, Route } from 'react-router-dom';
// import TheaterRegFormComponent from './components/TheaterRegistrationForm/TheaterRegFormComponent.js'
import Sidenavbar from './components/NavbarComponent/SideNavbar.js';
import Topnavbar from './components/NavbarComponent/TopNavbar.js';
import Homepage from './components/HomepageComponent/Homepage.js';
import EventHomeComponent from './components/EventComponent/EventHomeComponent';
import EventMainComponent from './components/EventComponent/EventMainComponent';
import FormComponent from './components/FormComponent/FormComponent';
import Footer from './components/FooterComponent/FooterComponent.js';
import './App.css';


function App() {
  return (<>
    <Topnavbar />
    <Sidenavbar />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<FormComponent />}></Route>
      <Route path="/eventhome" element={<EventHomeComponent />}></Route>
      <Route path="/eventmain" element={<EventMainComponent />}></Route>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
