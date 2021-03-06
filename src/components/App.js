import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';



import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Featured from './Featured';
const App = () => (
  <BrowserRouter>
	  <div className="container">
  		<Header />
  		<Switch>
		  	<Route exact path="/" component={Home} />
		  	<Route path="/about" render={() => <About title="About from app" />} />
		  	<Route exact path="/teachers" component={Teachers} />
		  	<Route path="/teachers/:course/:name" component={Featured} />
		  	<Route path="/courses" component={Courses} />

		  	<Route component={NotFound}/>
	  	</Switch>
	  </div>
  </BrowserRouter>
);

export default App;