import React from "react";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <NavigationManager />
        </BrowserRouter>
    </div>
  );
};

export default App;
