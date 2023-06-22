import './App.css';
import Analytice from './Componets/Analytice';
import Cards from './Componets/Card';
import Hero from './Componets/Hero';
import Navbar from './Componets/Navbar';
import NewsLatter from './Componets/NewsLatter';
import Footer from './Componets/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytice />
      <Cards />
      <NewsLatter />
      <Footer />
    </>
  );
}

export default App;
