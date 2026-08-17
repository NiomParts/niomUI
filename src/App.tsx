import { useState } from "react";

import { Button, Cross, Menu } from "./components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Click = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="justify-center items-center flex h-screen">
      <Button
        as={"button"}
        variant="secondary"
        className=""
        onClick={() => Click()}
      >
        {isMenuOpen ? <Cross color="red" /> : <Menu color="red" />}
      </Button>
    </div>
  );
}

export default App;
