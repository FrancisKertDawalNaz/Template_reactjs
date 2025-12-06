import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section
        id="home"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", background: "#f8f9fa", paddingTop: "8px" }}
      >
        <div className="text-center">
          <h1 className="text-danger">Home Section</h1>
          <p>Welcome to our website!</p>
        </div>
      </section>

      <section
        id="about"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", paddingTop: "80px" }}
      >
        <div className=" text-center">
          <h1 class="text-success">About Section</h1>
          <p>This is the About section of the website.</p>
        </div>
      </section>

      <section
        id="contact"
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "100vh", paddingTop: "80px", background: "#f8f9fa" }}
      >
       <div className="text-center">
          <h1 class="text-primary">Contact Section</h1>
          <p>Get in touch with us!</p>
       </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
