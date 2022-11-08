import Navbar from './Components/navbar';
import { Welcome } from './Components/welcome';
import Services from './Components/services';
import Features from './Components/features'
import Timeline from './Components/timeline'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Services></Services>
      <Features></Features>
      <Timeline></Timeline>
      <Footer></Footer>
    </div>
  );
}

export default App;
