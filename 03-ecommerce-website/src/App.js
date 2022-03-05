import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Loading from './Pages/Loading';
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext();
  console.log(loading);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
