import './App.css';
import EffectTutorial from './components/EffectTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';
import MemoTutorial from './components/MemoTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import RefTutorial from './components/RefTutorial';
import StateTutorial from './components/StateTutorial';

function App() {
  return (
    <div className="App">
     <StateTutorial/>
     <RefTutorial/>
     <ReducerTutorial/>
     <EffectTutorial/>
     <MemoTutorial/>
     <LayoutEffectTutorial/>
    </div>
  );
}

export default App;
