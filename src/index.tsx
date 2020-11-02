import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BodyWidget } from './components/BodyWidget';
import { Application } from './Application';
import './App.css'
// export default () => {
// 	var app = new Application();
// 	//return <BodyWidget app={app} />;
// 	ReactDOM.render(<BodyWidget app={app} />, document.getElementById('root'));
// };

var app = new Application();

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<BodyWidget app={app} />, document.getElementById('root'));
});
