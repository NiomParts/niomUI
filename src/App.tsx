import { Button } from "./components/atoms/Button/Button";

function App() {
  const Click = () => {
    alert("Button clicked!");
  };
  return (
    <div className="justify-center items-center flex h-screen">
      <Button
        as={"button"}
        variant="secondary"
        className=""
        onClick={() => Click()}
      >
        Test 1
      </Button>
    </div>
  );
}

export default App;
