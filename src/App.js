import './App.css';
import './common/colors.css'
import Header from './features/header'
import About from './features/about'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sponsors from "./features/sponsors";
import Events from "./features/events";
import Committee from "./features/committee";
import Contact from "./features/contact";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Sponsors />
            <Events />
            <Committee />
            <Contact />
        </div>
    );
}

export default App;
