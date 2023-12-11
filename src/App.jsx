import NavBar from "./components/navBar/NavBar";
import "./App.css";
import PageContent from "./components/pageContent/PageContent";
import AppFooter from "./components/footer/AppFooter";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <PageContent />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
