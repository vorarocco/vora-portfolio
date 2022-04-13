import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';

function App() {
  return (
    <div>
    {/* <h1>portfolio</h1> */}
    <Intro/>
    <About/>
    <ProjectList/>
    </div>
  );
}

export default App;
