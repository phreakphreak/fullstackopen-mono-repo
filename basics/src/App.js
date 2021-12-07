const Hello = (props) => {
  return <div>{props?.message}</div>;
};

const App = () => {
  return <Hello message="Hello World" />;
};

export default App;
