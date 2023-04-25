# Assignment II: Context

# Answer the following

### What problem does the context API solve?
  - context API allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels
  - context Api helps us to avoid the duplication of the code

### What is prop drillign?
 - Prop drilling is the process of passing data from one component via several interconnected components to the component that needs it.
 - When we have to use data in child component then we have to pass the data from parent to child component.

### Give an example of how to create a context, provide value to it and different ways of using it.
 ```jsx
 import {createContext} from 'react'
 export let context=createContext()
 import context from './Context'

 class App extends React.Component{
    state={
        isDark:false
    }

    changeMode=()=>{
        this.setState({isDark:!this.isDark})
    }

    render(){
        return (
            <context.Provider value={{state:this.state,changeMode:this.changeMode}}>
              <Header/>
              <Main/>
            </context.Provider>
        )
    }
 }
 ```

### Convert the code below to use context API to pass data rather than using props. Create the context API and use it in respective component.
```jsx
function App() {
  return <ParentComponent theme="light" />;
}

function ParentComponent(props) {
  return <Child theme={props.theme} />;
}

function Child(props) {
  return (
    <>
      <Grandchild theme={props.theme} />
      <SecondGrandchild theme={props.theme} />
    </>
  );
}

function Grandchild(props) {
  return <p>Theme: {props.theme}</p>;
}
class Grandchild extends React.Component {
  render() {
    return <p>Theme: {this.props.theme}</p>;
  }

```
```jsx
  //using context API
import { createContext, useContext } from "react";
export let ModeContext = createContext();
import React from 'react';
import ReactDOM from 'react-DOM';

let theme='light'

reactDOM.render(
    <ModeContext.provide value={theme}>
      <App/>
    </ModeContext.provide>
)

function App() {
  return <ParentComponent />;
}

function ParentComponent(props) {
  return <Child  />;
}

function Child(props) {
  return (
    <>
      <Grandchild  />
      <SecondGrandchild/>
    </>
  );
}

function Grandchild(props) {
    let mode=useContext(ModeContext)
  return <p>Theme: {mode.theme}</p>;
}
class Grandchild extends React.Component {
    static contextType=ModeContext
  render() {
    return <p>Theme: {this.context.theme}</p>;
  }
```