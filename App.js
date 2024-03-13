/*
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Estou aprendendo REACT</p>
    </div>
  );
}

    class MyComponent extends React.Component {
        constructor(props){
            super(props);
        }
        render(){
            return <div>
                <h1>My First React Component</h1>
                </div>
        }

    }
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

export default App;
*/
const textOutput = document.getElementById('text')
const author = document.getElementById('author')
const btn = document.getElementById("new-quote")

const quotes = {
  Jhope: "burn burn burn burn", 
  Jimin: "Ei mané, saia daí",
  Yoongi: "Auguei Auguei", 
  Namjoon: "Cultura Livre por Bala Desejo",
  Zoe: "Ralf Ralf",
  "Karl Marx": "Trabalhadores do mundo, uni-vos"
};

  const values = Object.values(quotes);
  const names = Object.keys(quotes);

  textOutput.textContent = values[Math.floor(Math.random() * values.length)]


btn.addEventListener("click", () => { 
  const randomIndex = Math.floor(Math.random() * values.length);
   
  textOutput.textContent = values[randomIndex]
  author.textContent = '- ' + names[randomIndex]
})


