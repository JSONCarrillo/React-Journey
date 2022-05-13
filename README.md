# React

This repository is meant to be a sort of journal, to help me write and further understand this powerful technology.

If you find this, I hope it helps you understand it as well.

## Simple Time App

This app is meant to just play with updating the DOM. Simply, I start out with saving the DOM root to a variable. I then created a function to display the current time.
After which I then set an interval to update the time every second.

## Components and Props

This is a simple name display app that takes a user input and renders it

This helps demonstrate how props and components work.

Components can be functional or class-based. Which means if we did a class for the component, we could initiate the class and extend the React.Component parent class. If we wanted to do a funciton, we could simply pass "props" as an argument
and get the same outcome.

## State

This app is an extension of the simple time app. Whereas instead of using a functional approach to making a component, I recreated it to a class-based component. From here, there are a few differences.

### Changing the Render Method

In the render, I did it as such:

```
render() {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    );
}
```

This makes it so instead of rendering a new instance of the Date class, I call it from the state of the component.

### Setting Up Local State

Setting your state is within the constructor looks like this:

```
constructor(props) {
    super(props);
    this.state = { date: new Date() };
}
```

As you can see, I create the this.state object within the constructor, with the key of date, and the value of new Date(). This then allows us to use this.state.date to then access the toLocaleTImeString method in the render method. Doing this, allows for greater reusability of the component.

### Lifecycle Methods

Next, we want to start making the component update itself while also ensuring recourses are freed once a component is removed. We can do this with a componentDidMount to set up the timer when its first rendered, and the componentWillUnmount method to clear the timer when it's removed from the DOM.

Below, we set up the timer when it is first rendered:

```
// Sets up timer when it is first rendered using the special method below
componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
}
```

We create a this.timerID variable and save a setInterval function to use the tick method every second.

Below, we have a method to clear the timer once it is removed from the DOM:

```
// clears the timer when the DOM produced by the component is removed
componentWillUnmount() {
    clearInterval(this.timerID);
}
```

Finally, we create a tick method to update the state every time it is called:

```
// tick method to update the state
tick() {
    this.setState({
        date: new Date(),
    });
}
```

## React App

This app is a culmination of what I've learned, as well as building a react app from scratch.

### Building the React App

I started out with the following command:

```
mkdir react-app && cd react-app && npm init -y
```

This creates the react-app directory, cds into it, and initializes npm.

Next, I ran:

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

This installs all the needed webpack modules as a dependency. After that, we install react with:

```
npm install react react-dom
```

From here, we need to install babel using:

```
npm install --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react babel-eslint @babel/runtime
```

Now we create the file .babelrc and write out the presets, and plugins (see the .babelrc file in the react-app directory). Next, I made that actual config file for webpack webpack.config.js.
From here, we will configure the package.json file and add two lines into the "scripts" section.

```
"start": "webpack-dev-server",
"build": "Webpack ."
```

With that done, I went ahead and added a src and public folder into the root directory. Within the public folder, I add an index.html file and added the basic boilerplate and the root element.
After that, we will create two .js files. Index and App, Index will be the main entry point to the app, and App will be the root component. Once that's done, run:

```
npm run build
```
