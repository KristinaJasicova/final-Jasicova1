import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import people from './people';
/*import Blog from './Blog'; */
import About from './About';
import prihlasenie from './prihlasenie';
import contact from './contact';
import blog from './blog';
import article1 from './article1';




ReactDOM.render(<BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/users" component={people} />
       <Route path="/about" component={About} />
        <Route path="/prihlasenie" component={prihlasenie} />
        <Route path="/contact" component={contact} />
        <Route path="/blog" component={blog} />
        <Route path="/article1" component={article1} />






    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
