import "./App.css";
import Header from "./components/header/header";
import AppRouter from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter/>
    </div>
  );
}

export default App;
