const Button = ({ text, style }) => {
  return <button style={style}>{text}</button>;
};

function App() {
  return (
    <>
      <Button text="My Button" style={{ backgroundColor: "red" }} />
      <Button text="Press Me" style={{ color: "blue" }} />
      <Button text="OK" style={{ backgroundColor: "grey", color: "white" }} />
      <Button text="Cancel" />
    </>
  );
}

export default App;
