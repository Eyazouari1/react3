
import './App.css';
import Profile from './Profile/Profile';
import imagepro from './fac.jpg'
import Footer from './Profile/Footer';
function App() {
const data={
  fullname:"Eya Zouari",
  bio:'My name Eya Zouari I m 22 years old ,Im graduated with licence appliqueé an electrique electrotechnique automatique  in faculté des siences de Sfax I did my end-of-study internship in the company STEG as a result I am interested in computer science in the field of website developer ',
  profession:" electrique electrotechnique automatique speciality system electrique "
}
    const handleName=(name)=>{ alert(`the name of the profile user is ${name}`)}
  return (
    <div className="App">
    <Profile test={data} handleName={handleName}>
    <img src={imagepro} alt='' />
    </Profile>
    <Footer></Footer>
    {/* <footer style={{backgroundColor:"yellowgreen"}}>
      <h1>Helooooooooooooooooo</h1>
    </footer> */}
    </div>
  )
}

export default App
