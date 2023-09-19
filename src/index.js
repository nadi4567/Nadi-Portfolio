import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import Project from './components/Project';
import Form from './components/Form'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

const test = ReactDOM.createRoot(document.getElementById('project'));
test.render(
  <React.StrictMode>
    <Project/>
  </React.StrictMode>
)
const form = ReactDOM.createRoot(document.getElementById('form-component'));
form.render(
  <React.StrictMode>
    <Form/>
  </React.StrictMode>
)
