import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section id="home" style={{ height: "100vh", paddingTop: "80px" }}>
        <h1 class=" text-danger">Home Section</h1>
        <p>Welcome to our website!</p>
      </section>

      <section id="about" style={{ height: "100vh", paddingTop: "80px", background: "#f8f9fa" }}>
        <h1 class="text-success">About Section</h1>
        <p>This is the About section of the website.</p>
      </section>

      <section id="contact" style={{ height: "100vh", paddingTop: "80px" }}>
        <h1>Contact Section</h1>
        <p>Contact us here.</p>
      </section>
    </>
  );
}

export default App;
