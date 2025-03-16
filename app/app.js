import Kiact from './kiact-library';

Kiact.createRoot(document.getElementById('app')).render(
  Kiact.createElement('div', {id: 'app'}, 'Hello Kiact!'),
);
