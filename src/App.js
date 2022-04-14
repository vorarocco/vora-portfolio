import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';

function App() {
  return (
    <div>
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
    </div>
  );
}

export default App;
