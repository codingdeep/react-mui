import React from 'react';
import {render} from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import {ThemeConfig} from "./config/theme.config";

render(
    <ThemeConfig>
        <App/>
    </ThemeConfig>,
    document.getElementById('root'),
);

