import React from 'react'
import { App } from './component/app'
import './index.css'
import { render } from 'react-dom';

const here = document.querySelector('#here')

const app = <App />

render(app, here)