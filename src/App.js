import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Content from "./Components/Section/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  let users = [
    {
      Name: "Крош",
      lastName: "Некрасов",
      age: 15,
      id: 9890898,
    },
    {
      Name: "Ежик",
      lastName: "Брагин",
      age: 18,
      id: 8798798,
    },
    {
      Name: "Копатыч",
      lastName: "Иванов",
      age: 35,
      id: 4646654,
    },
  ];
  return (
    <div>
      <Navbar />
      <Content user={users} />
      <Footer />
    </div>
  );
}

export default App;
