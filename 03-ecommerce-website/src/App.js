import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Loading from './Pages/Loading';
import { useGlobalContext } from './context';
import CartContainer from './Components/CartContainer';
import SemiLoading from './Pages/SemiLoading';

function App() {
  const { loading, semiLoading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {semiLoading ? (
        <SemiLoading />
      ) : (
        <>
          <CartContainer />
          <Hero />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
