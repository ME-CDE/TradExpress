import './Styles/home.css';
import Home1 from './Component/Home1'
import Coins from './Component/Coins';
import Section from './Component/Sections';
const Home =()=> {
  return (
    <div className="Home" >
      <Home1/>
      <Coins/>
      <Section/>
    </div>
  );
}

export default Home;
