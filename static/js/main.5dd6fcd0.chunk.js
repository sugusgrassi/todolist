(this["webpackJsonpreact-crash-todo"]=this["webpackJsonpreact-crash-todo"]||[]).push([[0],{22:function(t,e,a){t.exports=a(33)},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),c=a(16),i=a(6),d=a(7),u=a(9),s=a(8),p=a(12),m=a(1),f=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todoState.completed?"line-through":"none"}},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.todoState,e=t.id,a=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"x")))}}]),a}(n.Component),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},h=f,v=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return this.props.todoState.map((function(e){return o.a.createElement(h,{key:e.id,todoState:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),a}(n.Component);a(27);function y(){return o.a.createElement("header",{style:E},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:S,to:"/todolist/"},"Home")," | ",o.a.createElement(p.b,{style:S,to:"/about"},"About"))}var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},S={color:"#fff",textDecoration:"none"},g=a(21),j=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),a}(n.Component);function O(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app v1.0.0"))}var k=a(35),x=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todoState:[]},t.markComplete=function(e){t.setState({todoState:t.state.todoState.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todoState:Object(c.a)(t.state.todoState.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var a={id:Object(k.a)(),title:e,completed:!1};t.setState({todoState:[].concat(Object(c.a)(t.state.todoState),[a])})},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(y,null),o.a.createElement(m.a,{exact:!0,path:"/todolist/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{addTodo:t.addTodo}),o.a.createElement(v,{todoState:t.state.todoState,markComplete:t.markComplete,delTodo:t.delTodo})," ")}}),o.a.createElement(m.a,{path:"/about",render:O}))))}}]),a}(n.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5dd6fcd0.chunk.js.map