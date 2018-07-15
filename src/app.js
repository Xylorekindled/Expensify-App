// Modules
import React from 'react';
import ReacDOM from 'react-dom';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// App Components
import AppRouter from './routes/AppRouter';

ReacDOM.render(<AppRouter/>, document.getElementById('app'));