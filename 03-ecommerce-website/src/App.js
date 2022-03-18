import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Loading from './Pages/Loading';
import { useGlobalContext } from './context';
import CartContainer from './Components/CartContainer';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <CartContainer />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
