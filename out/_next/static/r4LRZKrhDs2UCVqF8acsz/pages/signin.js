(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{DB6d:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),l=t.n(o),s=t("cOF7"),u=t("CafY"),i=(t("YFqc"),t("nOHt")),a=t.n(i),c=l.a.createElement;n.default=function(){return c(u.a,null,c("h1",{style:{color:"white"}},"SIGN IN"),c("input",{type:"text",placeholder:"email",id:"email"}),c("br",null),c("br",null),c("input",{type:"password",placeholder:"password",id:"pass"}),c("br",null),c("button",{className:"submit",onClick:function(){document.getElementById("status").innerHTML="Checking credentials...",Object(s.a)().signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("pass").value).then((function(){document.getElementById("pass").value="",document.getElementById("email").value="",a.a.push("/blog")})).catch((function(e){document.getElementById("status").innerHTML=e.code,console.log("Error code: ",e.code),console.log("Error Message: ",e.message)}))}},"Login"),c("button",{onClick:function(){return a.a.push("/register")}},"Register"),c("p",{id:"status",style:{color:"red"}}))}},hMb1:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t("DB6d")}])}},[["hMb1",1,2,3,4,0,5]]]);