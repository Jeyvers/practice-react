import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
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
