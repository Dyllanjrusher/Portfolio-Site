import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import InProgress from './pages/InProgress';
import Projects from './pages/Projects';

import ScrollToTop from './components/ScrollToTop';

const Main = () => {

    return (

        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/blog" component={InProgress} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main;