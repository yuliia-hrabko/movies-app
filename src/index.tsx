import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import {store} from './store';

import App from './App';

import '@/assets/styles/global.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App/>
			</Router>
		</Provider>
	</React.StrictMode>
);
