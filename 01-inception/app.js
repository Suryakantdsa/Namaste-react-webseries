{/* <div class="parent">
  <div class="child1">
    <h1>im h1 tag</h1>
    <h2>im h2 tag</h2>
  </div>
  <div class="child2">
    <h1>im h1 tag</h1>
    <h2>im h2 tag</h2>
  </div>
</div>; */}

const parent = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", {}, "im h1 tag"),
    React.createElement("h2", {}, "im h2 tag"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h1", {}, "im h1 tag child2"),
    React.createElement("h2", {}, "im h2 tag child2"),
  ]),
]);

// const heading = React.createElement("h1", {}, "hello form react component");
// this heading is not the dom element ..this is as simple js object it is called as react element.
const root = ReactDOM.createRoot(document.getElementById("root"));
//it is used to create a root of the DOM where all react element wull render
root.render(parent);
// this render is simple a function which will take the react element (just a js object) and create the dom structure which the broswer understand

// this render function will replace the HTML (broswer understand) with waht ever html element will root div have previouly. 
