import AboutUs from "../pages/AboutUs/ui/AboutUs";
import Career from "../pages/Career/ui/Career";
import Footer from "../pages/Footer/ui/Footer";
import Header from "../pages/Header/ui/Header";
import HomePage from "../pages/HomePage/ui/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <main className={'app'}>
        <HomePage />
        <AboutUs />
        <Career />
      </main>
      <Footer />
    </>
  )
}
