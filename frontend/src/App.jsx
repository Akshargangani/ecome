import './App.css';
import Outlet from './pages/Home.jsx'
  import Header from './components/header.jsx';
  import Footer from './components/Footer.jsx'

function App() {
  return (

 <>


 <Header/>
<main>
<Outlet /> 
  </main>
  <Footer/>

 </>
  );
}

export default App;
