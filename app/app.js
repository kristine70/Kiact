import Kiact from './kiact-library';
import App from './src/index';

Kiact.createRoot(document.getElementById('app')).render(
  Kiact.createElement('div', {id: 'app'}, 'Hello Kiact!'),
);

document.getElementById('app').innerHTML = App();
