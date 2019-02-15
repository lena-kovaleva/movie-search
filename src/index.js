import React from 'react';
import { render } from 'react-dom';
import './common.scss';

import './index.scss';

import App from './components/App';

render(
    <App/>,
    document.getElementById('app')
);