
import './App.css';
import Profile from './Profile/Profile';
import imagepro from './fac.jpg'
function App() {
const data={
  fullname:"Eya Zouari",
  bio:"My name Eya Zouari I m 22 years old Im etudiant",
  profession:" electrique electrotechnique automatique"
}

    const handleName=(name)=>{ alert(`the name of the profile user is ${name}`)}
  return (
    <div className="App">
    <Profile test={data} handleName={handleName}>
    <img src={imagepro} alt='' style={{marginLeft: '-600px', marginTop: '80px', width:'250px',height:'150px'}}/>
    </Profile>
    </div>
  )
}

export default App
