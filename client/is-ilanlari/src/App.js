import './App.css';
import Home from './pages/Home';
import Arama from './pages/Arama';
import Bildirimler from './pages/Bildirimler';
import Blog from './pages/Blog';
import BlogYazı from './pages/BlogYazı';
import DetaylıArama from './pages/DetaylıArama';
import İlanDetaylıBilgi from './pages/İlanDetaylıBilgi';
import İşVerenGiriş from './pages/İşVerenGiriş';
import İşVerenÜyeOl from './pages/İşVerenÜyeOl';
import İşArayanGiriş from './pages/İşArayanGiriş';
import İşArayanÜyeOl from './pages/İşArayanÜyeOl';
import İşVerenProfil from './pages/İşVerenProfil';
import Mesajlaşma from './pages/Mesajlaşma';
import AramaSonuçları from './pages/AramaSonuçları';
import AdminGiriş from './pages/AdminGiriş';
import AdminYazıPaylaşım from './pages/AdminYazıPaylaşım';
import İşAlanı from './pages/İşAlanı';
import İşArayanProfil from './pages/İşArayanProfil'
import ŞirketProfil from './pages/ŞirketProfil'
import İşçiProfil from './pages/İşçiProfil'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Başka bir sayfaya geçiş nasıl olacak ? Componet değişmeli peki nasıl ? 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Arama">
            <Arama />
          </Route>
          <Route path="/Bildirimler">
            <Bildirimler />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/BlogYazı/:id1">
            <BlogYazı />
          </Route>
          <Route path="/DetaylıArama">
            <DetaylıArama />
          </Route>
          <Route path="/İlanDetaylıBilgi/:id" component={İlanDetaylıBilgi}>
          </Route>
          <Route path="/Mesajlaşma/:id" component={Mesajlaşma}>
          </Route>
          <Route path="/İşVerenGiriş">
            <İşVerenGiriş />
          </Route>
          <Route path="/İşVerenÜyeOl">
            <İşVerenÜyeOl />
          </Route>
          <Route path="/İşArayanGiriş">
            <İşArayanGiriş />
          </Route>
          <Route path="/İşArayanÜyeOl">
            <İşArayanÜyeOl />
          </Route>
          <Route path="/AramaSonuçları">
            <AramaSonuçları />
          </Route>
          <Route path="/AdminYazıPaylaşım">
            <AdminYazıPaylaşım />
          </Route>
          <Route path="/İşVerenProfil">
            <İşVerenProfil />
          </Route>
          <Route path="/İşArayanProfil">
            <İşArayanProfil />
          </Route>
          <Route path="/AdminGiriş">
            <AdminGiriş />
          </Route>
          <Route path="/İşAlanı">
            <İşAlanı />
          </Route>
          <Route path="/ŞirketProfil/:id">
            <ŞirketProfil />
          </Route>
          <Route path="/İşçiProfil/:id">
            <İşçiProfil />
          </Route>
        </Switch >
          
      </div>
    </Router>
  );
}

export default App;
