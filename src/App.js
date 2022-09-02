import React, { useState, useEffect } from "react";
import MyRoutes from './Components/MyRoutes/MyRoutes'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("/");


    return (
      <MyRoutes/>
    );
  
}

export default App;
