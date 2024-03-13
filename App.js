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
  "William Shakespeare": "A rose by any other name would smell as sweet.", 
  "William Shakespeare": "All that glitters is not gold.",
  "William Shakespeare": "All the world’s a stage, and all the men and women merely players.", 
  "Jean-Paul Sartre": "Hell is other people.",
  " Charles-Guillaume Étienne": "If you want something done right, do it yourself.",
  "Michael Corleone": "Keep your friends close, but your enemies closer.",
  " Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Neil Armstrong": "That’s one small step for a man, a giant leap for mankind.",
  "Franklin D. Roosevelt": "The only thing we have to fear is fear itself.", 
  "Friedrich Nietzsche": "What doesn't kill us makes us stronger.",
  "Robert Frost": "In three words I can sum up everything I've learned about life: it goes on.",
  "Mark Twain": "If you tell the truth, you don't have to remember anything.",
  "Oscar Wilde": "Be yourself; everyone else is already taken",
  "Chinese Proverb": "The best time to plant a tree was 20 years ago. The second best time is now",
  "Mark Twain": "The secret of getting ahead is getting started",
  "Joseph Joubert": "Kindness is loving people more than they deserve."
};

  const values = Object.values(quotes);
  const names = Object.keys(quotes);
  const firstRandomIndex = Math.floor(Math.random() * values.length)

  textOutput.textContent = values[firstRandomIndex]
  author.textContent = names[firstRandomIndex]


btn.addEventListener("click", () => { 
  const randomIndex = Math.floor(Math.random() * values.length);
   
  textOutput.textContent = values[randomIndex]
  author.textContent = '- ' + names[randomIndex]
})


