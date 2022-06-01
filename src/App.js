
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Intro } from './components/Intro';

// import { Urlitem } from './components/Urlitem';

import Urlstate from './context/Urlstate';



function App() {
 // document.body.style.backgroundColor="cadetblue";

  return (
   <Router>
     <Urlstate>
     <div >
     <Navbar/>
     <Intro/>

 
       <Routes>
       <Route path='/' element={<>    <Outside/></>}/>
   <Route path='/inside' element={ <><Inside/></>}/>
         
        
         
        
         <Route path='/login' element={<><Outside/><Login/></>}/>
         <Route path='/signup' element={<><Outside/><Signup/></>}/>
        
   
     {/* <Addurl/>
     <Urls/> */}
     {/* <Urlitem/> */}
     </Routes>
     </div>
     </Urlstate>
   </Router>
  )
}

export default App;
