import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import InProgress from './pages/InProgress';

const Main = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={InProgress} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={InProgress} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main;