import Kiact from 'kiact';
import App from './src/index';

Kiact.createRoot(document.getElementById('app')).render(
  Kiact.createElement('div', {id: 'app'}, 'Hello Kiact!'),
);

document.getElementById('app').innerHTML = App();

3;

// "Kiact": "file:../build/Kiact",
// "kiact-dom": "file:../build/kiact-dom"
