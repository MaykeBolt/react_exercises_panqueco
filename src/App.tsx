import './App.css'
import Pessoa from './Model/Pessoa.ts'

const p1 = new Pessoa('Red', 16, false);
const p2 = new Pessoa('Blue', 16, false);
const p3 = new Pessoa('Green', 17, true);
const p4 = new Pessoa('Yellow', 14, true);

function App() {
return ( /* LEMBRE-SE DE SEMPRE COLOCAR O RETURN EM REACT/REACT-NATIVE */
<div>
  <p className='determined'>{p1.name}, {p1.age}, {p1.getGenre()}</p>
  <p className='quiet'>{p2.name}, {p2.age}, {p2.getGenre()}</p>
  <p className='smug'>{p3.name}, {p3.age}, {p3.getGenre()}</p>
  <p className='precious'>{p4.name}, {p4.age}, {p4.getGenre()}</p>
</div> 
)
}

export default App
