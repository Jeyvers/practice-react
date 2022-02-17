import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Header = ({ lightMode, setLightMode }) => {
  const setLightModeBody = () => {
    setLightMode(!lightMode);
  };
  if (lightMode === true) {
    console.log(true);
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  return (
    <header>
      <span className='title'>TODO</span>
      <span className='mode-symbol' onClick={setLightModeBody}>
        {lightMode ? <BsMoonFill /> : <BsSunFill />}
      </span>
    </header>
  );
};

export default Header;
