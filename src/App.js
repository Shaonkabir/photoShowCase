import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import LatestPhotos from './component/LatestPhotos';
import Photo from './component/Photo';
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Blog from './component/pages/Blog'
import NotFound from './component/pages/NotFound';

const App = () => {
	return (
		<Router>
			<Header/>
			<div className="content-block">
				<div className="container">
					<div className="row">
						<div className="col">
							<Switch>
								<Route exact path="/" component={LatestPhotos} />
								<Route path="/about" component={About} />
								<Route path="/blog" component={Blog} />
								<Route path="/contact" component={Contact} />
								<Route path="/photo" component={Photo} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</Router>
	)
}
export default App;

