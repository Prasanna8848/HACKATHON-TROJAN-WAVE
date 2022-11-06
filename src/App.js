// import logo from './logo.svg';
import './App.css';
import Selection from './Selection'
import Hero from "./Hero"
import Courses from './Courses'
import {Routes, Route, Navigate, createBrowserRouter} from 'react-router-dom'
import Student from './Student'
import Teacher from './Teacher'
import AvailableTeachers from './AvailableTeachers'
function App() {
  return (
    <div className="App">
            <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/GetStarted" element={<Selection />}  />
        <Route path="/GetStarted/Student" element={<Student/>}/>
        <Route path="/GetStarted/Teacher" element={<Teacher/>}/>
        
        <Route path="/GetStarted/Student/JoinNow" element={<AvailableTeachers/>}/>
      </Routes>
    </div>
  );
}

export default App;


