# React

This repository is meant to be a sort of journal, to help me write and further understand this powerful technology.

If you find this, I hope it helps you understand it as well

## Components

All components are sub classes of the React.Component class. It takes properties (or "props") as a perameter, and uses
the render method to return JSX (which is HTML on HGH).

## Props

Props is essentially like a functional argument.

lets take this element as an example:

```
class Square extends React.Component {
    // sets the constructor of the class and passes a properties argument
    constructor(props) {
        // super(props) allows for "this.props" in a constructor and "super" calls the constructor of the parent class
        super(props);
        // sets the state of the component
        this.state = {
            value: null,
        };
    }
}
```

You will often call a constructor for your class, within this class you will pass the props argument. You will then want to use super(props). The
reason for this is, you will often need to use the properties within the constructor, otherwise any use of this.props will be undefined in your constructor.

## State

State is a tricky one, as I hear many developers struggle understanding it, so let me try and explain it, so that you hopefully will actually know what your code is doing.

## Render

With render, you will have 2-ish arguments... lemme explain. Within ReactDom.render(), you will have an element (your JSX/HTML), your container, and your callback. Your container is the variable with which you save the callback using
document.getElementById("root"). With this, you can use render to, well, render what it is you want to put on a page.

```
element = document.getElementById("root")

ReactDOM.render(<h1>Hi, Mom!</h1>, element)
```
