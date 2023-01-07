import Navbar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage,setSelectPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectPage={setSelectPage}
      />
    </div>
  );
}

export default App;
