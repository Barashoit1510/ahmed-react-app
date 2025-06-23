import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/Counter";
import ThemeToggler from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/welcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <ThemeToggler />
      <Header />
      <Notification hasNewMessages={false} />
      <Notification hasNewMessages={true} />
      <Dashboard IsloggedIn={true} />
      <Inputer />
      <Greeting name="Ahmed" surname="Hassan" />
      <WelcomeMessage />
      <Clicker IsloggedIn={true} />
      <Greeting name="Ahmed" surname="Hassan" />
      <Tiriye />
    </>
  );
}

export default App;
