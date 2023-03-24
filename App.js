const parent1=React.createElement("div",{id:"parent1"},[React.createElement("h1",{},"children H1!!"),React.createElement("h2",{},"children H2!!")]);
const parent2=React.createElement("div",{id:"parent2"},[React.createElement("h1",{},"children H1!!"),React.createElement("h2",{},"children H2!!")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
const main=React.createElement("div",{},[parent1,parent2]);
 root.render(main);