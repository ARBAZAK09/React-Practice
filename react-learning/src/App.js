import "./App.css";
// import { Form1 } from "./Components/Form/Form1";
// import {Form2} from "./Components/Form/Form2";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Togglecomps} from "./Components/Togglecomps";
// import { CarouselParent } from "./Components/Carousel/CarouselParent";
// import Counter from "./Components/UseStatePractice/Counter";
import {Emicalculator} from "./Components/Emicalculator";
// import {Pianoparent} from "./Components/Pianoparent";
// import {Audioplayer} from "./Components/Audioplayer";
// import {Cardparent} from "./Components/Cardparent";
//  import {Home} from "./Components/Home";
//  import {Navigation1} from "./Components/Navigation1";
//  import Home from "./Components/Routes/Pages/Home";
//  import Aboutus from "./Components/Routes/Pages/Aboutus";
//  import {Contactus} from "./Components/Routes/Pages/Contactus";
//  import {Courses} from "./Components/Routes/Pages/Courses";
//  import {Service} from "./Components/Routes/Pages/Service";
//  import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
//  import { Login } from "./Components/Login";
//  import {Clock} from "./Components/Clock";


function App() {
  return (
    <div className="App">
      {/* <CarouselParent /> */}
      {/* <Counter /> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Togglecomps/> */}
      <Emicalculator/>
      {/* <Pianoparent/> */}
      {/* <Audioplayer/> */}
      {/* <Cardparent/> */}
      {/* {<Home/>} */}
{/* {/*        */}
      {/* <Router>
       <Navigation1/>
       <Switch>
         <Route path="/Login">
         <Login/>
         </Route>
         <Route path="/Home">
       <Home/>
       </Route>
       <Route path="/Aboutus">
            </Route>
            <Route path="/Contactus">
      <Contactus/>
      </Route>
      <Route path="/Courses">
      <Courses/>
      </Route>
      <Route path="Service">
      <Service/>
      </Route>
      </Switch>

      </Router>  
      {/* <Clock/> */}
 {/* */} 
    </div>
  );
}

export default App;
