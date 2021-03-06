export function createDOM(fiber) {
  /*
  let node;
  if (elem.type === 'TEXT_ELEMENT') {
    node = document.createTextNode('');
  } else {
    node = document.createElement(elem.type);
  }
  const isProperty = key => key !== "children"
  Object.keys(elem.props)
    .filter(isProperty)
    .forEach((key) => {
      node[key] = elem.props[key];
    });
  elem.props.children.forEach((child) => {
    render(child, node);
  });
  elem.node = node;
  container.appendChild(elem.node);
  */
  let node;
  if (fiber.type === 'TEXT_ELEMENT') {
    node = document.createTextNode('');
  } else {
    node = document.createElement(fiber.type);
  }
  const isProperty = key => key !== "children"
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((key) => {
      node[key] = fiber.props[key];
    });
  return node;
}
