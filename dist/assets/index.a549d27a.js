import{j as e,r,R as s,a as t}from"./vendor.fa3805be.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var n="_root_n69bk_1";const o=e.exports.jsx,i=e.exports.jsxs,c=e.exports.Fragment;function a(e){const{setCounter:r,sessionTime:s,setSessionTime:t,breakTime:c,setBreakTime:a,counterName:l,setCounterName:d,setStatus:u,status:m,beep:p}=e,b=e=>{if("break"==l)switch(e.target.id){case"break-increment":c+1<=60&&(a(c+1),r(60*(c+1)));break;case"break-decrement":c-1>0&&(a(c-1),r(60*(c-1)));break;default:console.log("error whoops")}else switch(e.target.id){case"break-increment":c+1<=60&&a(c+1);break;case"break-decrement":c-1>0&&a(c-1);break;default:console.log("whoops, error")}},h=e=>{if("session"==l)switch(e.target.id){case"session-increment":s+1<=60&&(t(s+1),r(60*(s+1)));break;case"session-decrement":s-1>0&&(t(s-1),r(60*(s-1)));break;default:console.log("error whoops")}else switch(e.target.id){case"session-increment":s+1<=60&&t(s+1);break;case"session-decrement":s-1>0&&t(s-1);break;default:console.log("whoops, error")}};return i("div",{className:n,children:[i("div",{children:[o("button",{id:"start_stop",onClick:()=>{"counting"==m?(console.log("pause!"),u("paused")):(console.log("resume!"),u("counting"))},children:"paused"==m?"Start":"Pause"}),o("button",{id:"reset",onClick:()=>{console.log("reset"),r(1500),t(25),a(5),d("session"),u("paused"),p.pause(),p.currentTime=0},children:"Reset"})]}),i("div",{children:[o("button",{id:"break-decrement",onClick:b,children:"▼ break decrement"}),o("button",{id:"break-increment",onClick:b,children:"▲ break increment"}),o("button",{id:"session-decrement",onClick:h,children:"▼ session decrement"}),o("button",{id:"session-increment",onClick:h,children:"▲ session increment"})]})]})}var l="_root_ij4tk_1";function d(e){const{counterName:r,counter:s,breakTime:t,sessionTime:n}=e,c=s/60>=1?Math.floor(s/60)>=10?Math.floor(s/60):`0${Math.floor(s/60)}`:"00";return i("div",{className:l,children:[i("div",{id:"timer",children:[i("span",{id:"time-left",children:[c,":",s%60>=10?s%60:s%60>0?"0"+s%60:"00"]}),o("span",{id:"timer-label",children:r})]}),i("div",{children:[i("label",{id:"break-label",htmlFor:"",children:["Break Length: ",o("span",{id:"break-length",children:t})]}),i("label",{id:"session-label",htmlFor:"",children:["Session Length: ",o("span",{id:"session-length",children:n})]})]})]})}function u(){const[e,s]=r.exports.useState(1500),[t,n]=r.exports.useState("paused"),[l,u]=r.exports.useState(25),[m,p]=r.exports.useState(5),[b,h]=r.exports.useState("session"),f=document.querySelector("#beep");return function(e,s){const t=r.exports.useRef();r.exports.useEffect((()=>{t.current=e}),[e]),r.exports.useEffect((()=>{if(null!==s){let e=setInterval((function(){t.current()}),s);return()=>clearInterval(e)}}),[s])}((()=>{if("counting"==t)if(e>0)s(e-1),e<=1&&(console.log("beep"),f.play());else if(0==e)switch(console.log("done"),b){case"session":s(60*m),h("break");break;case"break":s(60*l),h("session");break;default:console.log("an error occurred")}}),1e3),i(c,{children:[i("header",{children:[o("h1",{children:"Pomodoro Productivity Clock"}),o("p",{children:"Break up your work sessions with short breaks to increase concentration!"})]}),o(d,{counterName:b,counter:e,breakTime:m,sessionTime:l}),o(a,{setCounter:s,sessionTime:l,setSessionTime:u,breakTime:m,setBreakTime:p,counterName:b,setCounterName:h,status:t,setStatus:n,beep:f}),o("audio",{id:"beep",src:"./assets/renatalmar_SFX-Magic.mp3",alt:"SFX Magic by renatalmar https://freesound.org/people/renatalmar/sounds/264981/"})]})}s.render(o(t.StrictMode,{children:o(u,{})}),document.getElementById("root"));