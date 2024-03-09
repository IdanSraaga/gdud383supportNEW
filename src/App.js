import './App.css';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyComponents/SurveyForm';
import Form from './components/SurveyComponents/Form';
import SLA from "./components/SLA"
 import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorialsPage from './pages/TutorialPages';
import TutorialPage from './pages/TutorialPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<Form />} />
        <Route path="/sla" element={<SLA />}/>
        <Route path ="/tutorials" element={<TutorialsPage />}/>
        <Route path ="/tutorial" element={<TutorialPage />}/>
      </Routes>
    </Router>
  );
}
export default App;
