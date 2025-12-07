import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ReactLogo from "./assets/react.svg"; 
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section
        id="home"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", paddingTop: "8px" }}
      >
        <div className=" container">
          <div className=" row align-items-center">
            <div className=" col-md-6 text-center text-md-start">
              <h1 class="text-primary">Welcome to FKDN.</h1>
              <p>Your trusted partner in innovative solutions.</p>
              <a href="#contact" className="btn btn-primary btn-lg">Contact Us</a>
            </div>
            <div className=" col-md-6 text-center">
              <img
                src={ReactLogo}
                alt="Placeholder"
                className="img-fluid"
              />
            </div>
          </div>
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
        style={{ height: "100vh", paddingTop: "80px"}}
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
