// components
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./components/context";
import './App.css'
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <CartContainer />
    </main>
  );
}

export default App;
