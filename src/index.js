import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import App from './App'
import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store = { store }>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById( 'root' )
);

serviceWorker.register();
