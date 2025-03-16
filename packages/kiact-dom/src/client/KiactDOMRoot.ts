export function createRoot(container) {
  return {
    render(element) {
      container.innerHTML = '';
      render(element, container);
    },
  };
}

function render(element, container) {
  if (typeof element === 'string' || typeof element === 'number') {
    container.appendChild(document.createTextNode(element));
    return;
  }

  const dom = document.createElement(element.type);

  if (element.props) {
    Object.keys(element.props)
      .filter(key => key !== 'children')
      .forEach(name => {
        dom[name] = element.props[name];
      });
  }

  element.props.children.forEach(child => render(child, dom));
  container.appendChild(dom);
}
