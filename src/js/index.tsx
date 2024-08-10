// import react
import React from 'react';
import { createRoot } from 'react-dom/client';

// importing the styles file
import '../scss/style.scss';
// import App file
import App from './App';

// Renders it to the root element

// query select the root element in template.html
const domEl = document.getElementById('root')! as HTMLElement;
// return the root via createRoot
const root = createRoot(domEl);

// now we can render the component on root

root.render(<App />);
