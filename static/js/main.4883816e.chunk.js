(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,a,t){e.exports=t(208)},112:function(e,a,t){},114:function(e,a,t){},158:function(e,a,t){},208:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(112),t(106)),s=t(13),i=t(14),u=t(17),m=t(15),h=t(16),d=t(225),p=t(219),g=t(224),f=t(12),E=t(217),b=(t(114),t(211)),v=t(220),k=t(212),y=t(90),w=(t(43),t(213)),j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).goToTransferPage=function(){t.props.history.push("/save")},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"element-root"},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement("h5",null,"Remaining Balance : ",this.props.remainingBalance))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(y.a,{onClick:this.goToTransferPage},r.a.createElement("b",null,"Transfer"))))))}}]),a}(r.a.Component),O=Object(w.a)(j),B=t(179),C=t(214),S=t(221),A=t(215),N=t(216),x=t(223),F=(t(158),t(23)),T=t.n(F);function M(){JSON.parse(localStorage.getItem("piggy-app-user"))&&(this.user=JSON.parse(localStorage.getItem("piggy-app-user")),this.isAuthenticated=!0)}M.prototype.saveUser=function(e){this.user=e,localStorage.setItem("piggy-app-user",JSON.stringify(this.user)),console.log(this),this.isAuthenticated=!0},M.prototype.getUser=function(){return this.user};var D=new M,P=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).createList=function(){for(var e=[],a=t.props.funds,n=0;n<a.length;n++){var l=[];l.push(r.a.createElement(k.a,{key:new Date+"name"+n,className:"fund-name",xs:6,md:6,lg:6},a[n].name," : ")),l.push(r.a.createElement(k.a,{key:new Date+"amt"+n,className:"fund-amount",xs:6,md:6,lg:6},a[n].amount," ")),e.push(r.a.createElement(B.a,{key:new Date+"items"+n},r.a.createElement(b.a,null,l)))}return e},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,this.createList())}}]),a}(r.a.Component),U=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(m.a)(a).call(this,e,t))).addNewPiggyBank=n.addNewPiggyBank.bind(Object(f.a)(Object(f.a)(n))),n.handleClose=n.handleClose.bind(Object(f.a)(Object(f.a)(n))),n.handleChange=n.handleChange.bind(Object(f.a)(Object(f.a)(n))),n.saveNewPiggyBank=n.saveNewPiggyBank.bind(Object(f.a)(Object(f.a)(n))),n.state={showModal:!1,newBankvalue:""},n}return Object(h.a)(a,e),Object(i.a)(a,[{key:"saveNewPiggyBank",value:function(){var e=this,a={method:"POST",url:"http://bank-piggy.herokuapp.com/v1/account/piggy-bank",headers:{authorization:"Bearer "+D.getUser().token,"content-type":"application/json"},data:{name:this.state.newBankvalue},json:!0};T()(a).then(function(a){e.props.refresh(),e.handleClose()}).catch(function(e){alert(e)})}},{key:"handleChange",value:function(e){this.setState({newBankvalue:e.target.value})}},{key:"handleClose",value:function(){this.setState({showModal:!1,newBankvalue:""})}},{key:"addNewPiggyBank",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"piggy-bank-root"},r.a.createElement(v.a,null,r.a.createElement(v.a.Heading,null,r.a.createElement(v.a.Title,{componentClass:"h3"},"Piggy Banks ")),r.a.createElement(v.a.Body,null,r.a.createElement(b.a,{className:"add-piggy-bank-row"},r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(y.a,{onClick:function(){return e.addNewPiggyBank()},className:"add-piggy-bank-button"},r.a.createElement("b",null,"Add")))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(P,{funds:this.props.funds}))))),r.a.createElement("div",{className:"static-modal"},r.a.createElement(S.a,{show:this.state.showModal,onHide:this.handleClose},r.a.createElement(S.a.Header,null,r.a.createElement(S.a.Title,null,"Enter Name")),r.a.createElement(S.a.Body,null,r.a.createElement("form",null,r.a.createElement(A.a,{controlId:"formBasicText"},r.a.createElement(N.a,null,"Working example with validation"),r.a.createElement(x.a,{onChange:this.handleChange,type:"text",value:this.state.newBankvalue,placeholder:"Enter text"}),r.a.createElement(x.a.Feedback,null)))),r.a.createElement(S.a.Footer,null,r.a.createElement(y.a,{onClick:this.handleClose},"Close"),r.a.createElement(y.a,{onClick:this.saveNewPiggyBank,bsStyle:"primary"},"Save changes")))))}}]),a}(r.a.Component),H=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(m.a)(a).call(this,e,t))).handleChange=function(e){n.setState({newBankvalue:e.target.value})},n.handleClose=function(){n.setState({showModal:!1,newBankvalue:""})},n.updateMainBal=function(){n.handleClose(),n.props.onUpdate(n.state.newBankvalue)},n.state={showModal:!1,newBankvalue:""},n}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.showModal!==this.state.showModal&&this.setState({showModal:e.showModal})}},{key:"render",value:function(){return r.a.createElement("div",{className:"static-modal"},r.a.createElement(S.a,{show:this.state.showModal,onHide:this.handleClose},r.a.createElement(S.a.Header,null,r.a.createElement(S.a.Title,null,"Enter Name")),r.a.createElement(S.a.Body,null,r.a.createElement("form",null,r.a.createElement(A.a,{controlId:"formBasicText"},r.a.createElement(N.a,null,"Working example with validation"),r.a.createElement(x.a,{onChange:this.handleChange,type:"text",value:this.state.newBankvalue,placeholder:"Enter text"}),r.a.createElement(x.a.Feedback,null)))),r.a.createElement(S.a.Footer,null,r.a.createElement(y.a,{onClick:this.handleClose},"Close"),r.a.createElement(y.a,{onClick:this.updateMainBal,bsStyle:"primary"},"Save changes"))))}}]),a}(r.a.Component),I=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(m.a)(a).call(this,e,t))).openUpdateModal=function(){n.setState({showModal:!0})},n.updateMainBal=function(e){var a=Object(f.a)(Object(f.a)(n)),t={method:"POST",url:"http://bank-piggy.herokuapp.com/v1/account",headers:{authorization:"Bearer "+D.getUser().token,"content-type":"application/json"},data:{balance:e},json:!0};T()(t).then(function(e){console.log(e),a.setState({showModal:!1}),a.props.refresh()}).catch(function(e){alert(e)})},n.state={showModal:!1},n}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"element-root"},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement("h5",null,"Main Account Balance : ",this.props.mainBalance))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(y.a,{onClick:function(){return e.openUpdateModal()}},r.a.createElement("b",null,"Update"))))),r.a.createElement(H,{showModal:this.state.showModal,onUpdate:function(a){e.updateMainBal(a)}}))}}]),a}(r.a.Component),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={remainingBalance:4400,funds:[],mainBalance:90500},t.getDataFromServer=t.getDataFromServer.bind(Object(f.a)(Object(f.a)(t))),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"getDataFromServer",value:function(){var e=this,a={method:"GET",url:"http://bank-piggy.herokuapp.com/v1/account",headers:{authorization:"Bearer "+D.getUser().token}};T()(a).then(function(a){console.log(a.data.account.piggybanks),a.data.account.piggybanks.forEach(function(e){e.amount||(e.amount=0)});var t=Object.assign({},e.state);t.funds=a.data.account.piggybanks,t.remainingBalance=a.data.account.remainingBalance,t.mainBalance=a.data.account.mainBalance,e.setState(t)}).catch(function(e){alert(e)})}},{key:"componentDidMount",value:function(){this.getDataFromServer()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(O,{remainingBalance:this.state.remainingBalance}),r.a.createElement(U,{funds:this.state.funds,refresh:this.getDataFromServer}),r.a.createElement(I,{mainBalance:this.state.mainBalance,refresh:this.getDataFromServer}))}}]),a}(n.Component),V=t(218),J=t(222),z=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(m.a)(a).call(this,e,t))).onFundSelected=function(e){if(n.state.dropDownTitle!==e){var a=Object.assign({},n.state);a.dropDownTitle=n.props.funds[e].name,n.setState(a),n.props.onFundSelected(e)}},n.createDropDown=function(){for(var e=[],a=n.props.funds,t=0;t<a.length;t++)e.push(r.a.createElement(V.a,{key:t+new Date,onSelect:n.onFundSelected,eventKey:t},a[t].name));return e},n.state={dropDownTitle:"Select Piggy Bank"},n}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{bsStyle:"default",title:this.state.dropDownTitle,key:"dropDownButtonInSaveToBank",id:"dropdown-basic"},this.createDropDown())}}]),a}(r.a.Component),L=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(u.a)(this,Object(m.a)(a).call(this,e,t))).currentFund=0,n.forceUpdateAmounts=!1,n.onFundSelected=function(e){n.currentFund=e;var a=Object.assign({},n.state);if(a.fundSelected=!0,!isNaN(Number(n.state.transferAmountValue))){var t={target:{value:a.transferAmountValue}};n.forceUpdateAmounts=!0,n.handleTransferAmountChange(t)}n.setState(a)},n.handleTransferAmountChange=function(e){var a=Object.assign({},n.state);a.transferAmountValue=e.target.value,!n.state.fundSelected&&!n.forceUpdateAmounts||isNaN(Number(n.state.transferAmountValue))||(console.log("value changed"),a.funds[n.currentFund].newAmount=a.funds[n.currentFund].amount+Number(a.transferAmountValue),a.newRemainingBalance=a.remainingAccountBalance-Number(a.transferAmountValue),console.log(a.funds[n.currentFund].newAmount)),n.setState(a)},n.goToHomePage=function(){n.props.history.push("/")},n.executeTransfer=function(){var e=Object(f.a)(Object(f.a)(n)),a={method:"PATCH",url:"http://bank-piggy.herokuapp.com/v1/account/piggy-bank",headers:{authorization:"Bearer "+D.getUser().token,"content-type":"application/json"},data:{amount:n.state.funds[n.currentFund].newAmount,id:n.state.funds[n.currentFund]._id},json:!0};T()(a).then(function(a){console.log(a.data),e.goToHomePage()}).catch(function(e){alert(e)})},n.state={remainingAccountBalance:14400,transferAmountValue:"",fundSelected:!1,funds:[{name:"",amount:0}]},n}return Object(h.a)(a,e),Object(i.a)(a,[{key:"getDataFromServer",value:function(){var e=this,a={method:"GET",url:"http://bank-piggy.herokuapp.com/v1/account",headers:{authorization:"Bearer "+D.getUser().token}};T()(a).then(function(a){console.log(a.data.account.piggybanks),a.data.account.piggybanks.forEach(function(e){e.amount||(e.amount=0)});var t=Object.assign({},e.state);t.funds=a.data.account.piggybanks,t.remainingAccountBalance=a.data.account.remainingBalance,t.currentBalance=a.data.account.remainingBalance,e.setState(t)}).catch(function(e){alert(e)})}},{key:"componentDidMount",value:function(){this.getDataFromServer()}},{key:"render",value:function(){return r.a.createElement(b.a,{className:"element-root"},r.a.createElement(v.a,null,r.a.createElement(b.a,{style:{textAlign:"left"}},r.a.createElement(k.a,{xs:3},r.a.createElement(y.a,{onClick:this.goToHomePage},"<"))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement("h5",null,"Current Remaining Balance : ",this.state.currentBalance?this.state.currentBalance:this.state.remainingAccountBalance))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(z,{funds:this.state.funds,onFundSelected:this.onFundSelected}))),r.a.createElement(b.a,null,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement("form",null,r.a.createElement(A.a,{controlId:"formBasicText"},r.a.createElement(N.a,null,"Enter Amount to transfer"),r.a.createElement(x.a,{onChange:this.handleTransferAmountChange,type:"text",placeholder:"Enter Amount"}),r.a.createElement(x.a.Feedback,null))))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:6,md:6,sm:6},r.a.createElement("h5",{hidden:this.state.fundSelected},"No fund selected"),r.a.createElement("h5",{hidden:!this.state.fundSelected}," ",this.state.funds[this.currentFund].name," balance : ",this.state.funds[this.currentFund].newAmount?this.state.funds[this.currentFund].newAmount:this.state.funds[this.currentFund].amount)),r.a.createElement(k.a,{xs:6,md:6,sm:6},r.a.createElement("h5",null," New Remaining balance :",void 0!=this.state.newRemainingBalance?this.state.newRemainingBalance:this.state.remainingAccountBalance))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12},r.a.createElement(y.a,{onClick:this.executeTransfer,bsStyle:"primary"},"Confirm Transfer")))))}}]),a}(r.a.Component),W=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).attemptLogin=function(){var e=Object(f.a)(Object(f.a)(t));T()({method:"post",url:"http://bank-piggy.herokuapp.com/v1/user/login",data:{email:t.email,password:t.password}}).then(function(a){D.saveUser({email:"jafar912@gmail.com",token:a.data.token}),e.props.history.push("/")}).catch(function(e){console.log(e),alert(JSON.stringify(e.response.data.msg))})},t.handleEmailChange=function(e){t.email=e.target.value},t.handlePasswordChange=function(e){t.password=e.target.value},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"element-root"},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(A.a,null,r.a.createElement(x.a,{onChange:this.handleEmailChange,type:"email",placeholder:"Enter email"}),r.a.createElement("br",null),r.a.createElement(x.a,{onChange:this.handlePasswordChange,type:"password",placeholder:"Enter password"}),r.a.createElement(x.a.Feedback,null)))),r.a.createElement(b.a,null,r.a.createElement(k.a,{xs:12,md:12,sm:12},r.a.createElement(y.a,{onClick:this.attemptLogin,bsStyle:"primary"},r.a.createElement("b",null,"Login"))))))}}]),a}(r.a.Component),G=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(K,{exact:!0,path:"/",component:R}),r.a.createElement(K,{path:"/save",component:L}),r.a.createElement(p.a,{path:"/login",component:W})))}}]),a}(r.a.Component),K=function(e){var a=e.component,t=Object(o.a)(e,["component"]);return r.a.createElement(p.a,Object.assign({},t,{render:function(e){return D.isAuthenticated?r.a.createElement(a,e):r.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=G;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,a,t){}},[[107,2,1]]]);
//# sourceMappingURL=main.4883816e.chunk.js.map