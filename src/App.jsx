import Header from "./Components/Header";
import AdvisingSection from "./Components/AdvisingSection";
import Marketing from "./Components/Marketing";
import Cta_section from "./Components/Cta_section";
import Records from "./Records";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
function App() {


  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <main className="w-full">
          <AdvisingSection />
          <Marketing />
          <Cta_section />
          <Records />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
