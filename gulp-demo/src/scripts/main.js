(function () {

  const math = {
    cube(x) {
      return x * x * x;
    },
    square(x) {
      return x * x;
    }
  }

  function component() {
    var container = document.createElement('div');
    var element = document.createElement('h1');

    container.setAttribute('class', 'container');
    element.setAttribute('class', 'title');
    element.innerHTML = '5 cubed is equal to ' + math.cube(5);
    container.appendChild(element);

    return container;
  }

  document.body.appendChild(component());

})()
