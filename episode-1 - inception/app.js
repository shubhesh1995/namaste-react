//    steps 
// 1.  Create element uisng  React.createElement("tag",{atribute},"content inside the tag")
// 2.  Create root using ReactDOM.createRoot(document.getElementById('root'))
// 3.  render the element using root.render(element)


// basic structure
/*<h1>hello i'm basic structure</h1> 
const h1 = React.createElement("h1", { className: 'h1',id:"h1" }, "Namaste React using React") -> at the end this will be a javascript object and on the browser it will be convert into a Html
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "child",
        "id": "child",
        "children": "Namaste React using React"
    },
    "_owner": null,
    "_store": {}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); // this will replace the content inside the root.
*/
// -----------------------------------------------------------------------------------------------------
// nested structure
//  <div id="parent"><h1>hello i'm basic structure</h1></div> 

// const span = React.createElement("span", { className: 'child',id:"child" }, "Namaste React using React")
// const parent = React.createElement("div", { className: 'parent',id:"parent" }, span)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

/* <div id="parent"><h1>hello i'm basic structure</h1></div>  */

const span = React.createElement("h1", { className: 'child',id:"child" }, "Namaste React using React")
const parent = React.createElement("div", { className: 'parent',id:"parent" }, [{...span,key:1},{...span,key:2}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);