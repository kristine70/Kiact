import {KiactElementType} from '@types';

export function createRoot(container: HTMLElement) {
  return {
    render(element: KiactElementType) {
      container.innerHTML = '';
      render(element, container);
    },
  };
}

function render(element: KiactElementType, container: HTMLElement) {
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

  if (Array.isArray(element.props?.children)) {
    element.props.children.forEach((child: KiactElementType) => {
      render(child, dom);
    });
  }
  container.appendChild(dom);
}
