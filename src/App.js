import Day from './components/Day';
import Day01 from './components/Day01';

function App() {
  return (
    <div className="App pb-16 w-screen h-min-screen bg-black mx-auto">
      <div className="pt-4 mx-auto max-w-lg flex flex-col">
        <h1 className="mb-4 text-4xl text-green-500 text-center font-Audiowide drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]">Advent of Code 2025</h1>
        <Day dayNum="01" />
        <Day01 />
      </div>
    </div>
  );
}

export default App;

