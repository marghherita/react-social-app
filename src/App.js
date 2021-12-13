
import Header from "./components/Headers";
import Footer from "./components/Footer/index";

function App() {

  const name = 'Feisbrut';
  const nav = [
    { link: "/home", label: "Home" },
    { link: "/friends", label: "Friends" },
    { link: "/messages", label: "Messages" }
  ];

  return (

    <div>
      <Header name = {name} links={nav}/>
      <Footer />
    </div>

  );
}

export default App;
