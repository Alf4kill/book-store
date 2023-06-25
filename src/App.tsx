import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePath from './routes'


const App: React.FC = () =>{
 return <div className="App">
  <BrowserRouter>
  <RoutePath/>
  </BrowserRouter>
 </div>;
}


export default App;
