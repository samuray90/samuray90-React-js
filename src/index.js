import React from 'react'
import { App } from './component/app'
import './index.css'
import { render } from 'react-dom';

const root = document.querySelector('root')

const app = <App />

render(root, app) 