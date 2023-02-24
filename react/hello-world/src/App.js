 function App(props) {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>hello world {props.name} 👋</h1>
        {/* <h2>-{props.job}</h2> */}
      </header>
    </div>
  );
}

export default App;
