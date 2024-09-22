import MyButton from "../components/MyButton.jsx";
import MyCountDown from "../components/MyCountdown.jsx";

function App() {
  return (
    <>
      <MyButton>Hello!</MyButton>
      <MyButton style={{ color: "red" }}>Press Me!</MyButton>
      <MyButton style={{ backgroundColor: "red", color: "white" }}>
        OK!
      </MyButton>
      <MyButton>Cancel!</MyButton>
    </>
  );
}

export default App;
