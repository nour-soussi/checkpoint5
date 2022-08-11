import Profile from './Component/Profile/ProfilePhoto.js';
import Name from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';
import './App.css';

function App() {
  return (
    
    <div style={{textAlign:"center"}}>
    <Profile/>
    <Name/>
    <Address/>
    </div>
    
  );
}

export default App;
