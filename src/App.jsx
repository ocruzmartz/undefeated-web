import { Navbar, GetStarted, About, Welcome, Footer } from "./components";

function App() {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-black flex w-full px-44 py-5 sticky top-0 z-50">
        <Navbar />
      </div>
      <GetStarted />
      <Welcome />
      <About />
      <section className="bg-black h-screen"></section>
      <Footer />
    </div>
  );
}

export default App;
