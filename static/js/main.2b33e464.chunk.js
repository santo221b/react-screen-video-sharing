(this.webpackJsonpReactVideoRecordingAndScreenSharing=this.webpackJsonpReactVideoRecordingAndScreenSharing||[]).push([[0],{17:function(e,t,i){},19:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n,r=i(0),c=i(2),a=i.n(c),o=i(10),s=i.n(o),d=(i(17),i(4)),l=i.n(d),h=i(8),p=i(3),g=(i.p,i.p+"static/media/screen.04305a48.svg"),u=i.p+"static/media/video.433a10ed.svg",m=i.p+"static/media/record.44b2eb0e.svg",w=i.p+"static/media/default.fe61671c.svg",v=i.p+"static/media/live.41bc718e.svg",j=(i(19),i(20),i(5)),b=i.n(j),f=i(11),x=i(6),y=(document.getElementById("video"),[]);var O=function(){var e=new Date;e.setSeconds(e.getSeconds()+36e3);var t=Object(c.useState)(!1),i=Object(p.a)(t,2),a=i[0],o=i[1],s=Object(c.useState)(!1),d=Object(p.a)(s,2),O=d[0],S=d[1],k=Object(c.useState)(!1),T=Object(p.a)(k,2),R=T[0],N=T[1],I=Object(c.useState)("recorded"),C=Object(p.a)(I,2),M=C[0],E=C[1],U=Object(c.useState)(""),z=Object(p.a)(U,2),H=z[0],V=z[1],W=Object(c.useState)(""),_=Object(p.a)(W,2),q=_[0],L=_[1],D=Object(f.useStopwatch)({expiryTimestamp:e}),A=D.minutes,B=D.hours,F=D.seconds,P=(D.isRunning,D.start),J=D.reset;function Y(){return(Y=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{O||E("screen"),navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(G,K)}catch(t){console.error("Error: "+t)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){o(!0);var t=document.querySelector("video#screen");window.stream=e,t.srcObject=e,O&&(clearInterval(H),V(""),$()),q&&(clearInterval(q),L(""),$());var i=window.setInterval((function(){return Z({recording:O,screenshare:!0,type:"screenshare",aspectRatio:e.getVideoTracks()[0].getSettings().aspectRatio,height:e.getVideoTracks()[0].getSettings().height,width:e.getVideoTracks()[0].getSettings().width})}),1e3/60);L(i),e.getVideoTracks()[0].addEventListener("ended",(function(){o(!1)}))}function K(e){j.store.addNotification({title:e.message,message:" ",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}function Q(){return(Q=Object(h.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||E("recorded"),i={audio:{echoCancellation:{exact:!0}},video:{width:1280,height:720}},console.log("Using media constraints:",i),e.prev=3,e.next=6,navigator.mediaDevices.getUserMedia(i);case 6:X(e.sent),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),S(!1),console.error("navigator.getUserMedia error:",e.t0),K(new Error("navigator.getUserMedia error:".concat(e.t0.toString())));case 15:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function X(e){if(S(!0),console.log("getUserMedia() got stream:",e),document.querySelector("video#recorded").srcObject=e,window.videoHeight=e.getVideoTracks()[0].getSettings().height,window.videoWidth=e.getVideoTracks()[0].getSettings().width,a)Z({recording:!0,screenshare:a});else{var t=window.setInterval((function(){return Z({recording:!0,screenshare:a})}),1e3/60);V(t)}}function Z(e){e.aspectRatio;var t=e.width,i=e.height,n=(e.recording,e.screenshare,window.canvas=document.querySelector("canvas"));n.width=window.innerWidth,n.height=window.innerHeight;var r=document.querySelector("video#recorded"),c=document.querySelector("video#screen");window.recording&&window.screenshare?"screen"==window.expanded?(n.getContext("2d").drawImage(c,0,0,t,i),n.getContext("2d").drawImage(r,window.innerWidth-205,window.innerHeight-125-150,134400/720,105)):(window.width=105*t/i,n.getContext("2d").drawImage(r,0,0,window.innerWidth,window.videoHeight),n.getContext("2d").drawImage(c,window.innerWidth-205,window.innerHeight-125-150,105*t/i,105)):(window.recording&&n.getContext("2d").drawImage(r,0,0,window.innerWidth,window.videoHeight*window.innerWidth/1280),window.screenshare&&n.getContext("2d").drawImage(c,0,0,t,i))}function $(){window.canvas.getContext("2d").clearRect(0,0,window.canvas.width,window.canvas.height)}function ee(e){console.log("handleDataAvailable",e),e.data&&e.data.size>0&&y.push(e.data)}return D.restart,window.screenshare=a,window.recording=O,window.expanded=M,Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b.a,{}),Object(r.jsxs)("header",{className:"App-header",id:"content",children:[O||a?null:Object(r.jsxs)("div",{style:{marginTop:-115},children:[Object(r.jsx)("img",{src:w,width:"400px",height:"auto"}),Object(r.jsx)("div",{className:"circular text-center",style:{marginTop:30},children:"You are not sharing anything"})]}),Object(r.jsx)("div",{className:"overlay",style:{background:O||a?"#f5f5f538":"whitesmoke"}}),Object(r.jsxs)("div",{className:"action-buttons",children:[Object(r.jsx)("div",{"data-tip":!0,"data-for":"shareScreen",onClick:function(){return a?function(){var e=document.querySelector("video#screen");O||clearInterval(q),e.srcObject.getTracks().forEach((function(e){return e.stop()})),o(!1),$()}():function(){return Y.apply(this,arguments)}()},className:"circular start",id:a?"stop":"start",children:Object(r.jsx)("img",{src:g,width:"30px",height:"30px",className:"v-middle"})}),Object(r.jsx)(x.a,{id:"shareScreen",type:"dark",place:"top",effect:"solid",children:Object(r.jsx)("span",{className:"circular",style:{fontSize:15},children:a?"Stop screen":"Share screen"})}),Object(r.jsx)("div",{"data-tip":!0,"data-for":"recording",onClick:function(){return O?function(){var e=document.querySelector("video#recorded");H&&clearInterval(H),e.srcObject.getTracks().forEach((function(e){return e.stop()})),S(!1),$()}():function(e){return Q.apply(this,arguments)}()},className:"circular start2",id:O?"stop":"start",children:Object(r.jsx)("img",{src:u,width:"30px",height:"30px",className:"v-middle"})}),Object(r.jsx)(x.a,{id:"recording",type:"dark",place:"top",effect:"solid",children:Object(r.jsx)("span",{className:"circular",style:{fontSize:15},children:O?" Stop video":"Share video"})}),Object(r.jsx)("div",{"data-tip":!0,"data-for":"storing",onClick:function(){return R?void n.stop():function(){y=[];var e={mimeType:"video/webm;codecs=vp9,opus"};MediaRecorder.isTypeSupported(e.mimeType)||(console.error("".concat(e.mimeType," is not supported")),e={mimeType:"video/webm;codecs=vp8,opus"},MediaRecorder.isTypeSupported(e.mimeType)||(console.error("".concat(e.mimeType," is not supported")),e={mimeType:"video/webm"},MediaRecorder.isTypeSupported(e.mimeType)||(console.error("".concat(e.mimeType," is not supported")),e={mimeType:""})));try{var t=window.canvas.captureStream();n=new MediaRecorder(t,e)}catch(i){return console.error("Exception while creating MediaRecorder:",i),void K(new Error("Exception while creating MediaRecorder: ".concat(JSON.stringify(i))))}console.log("Created MediaRecorder",n,"with options",e),n.onstop=function(e){console.log("Recorder stopped: ",e),console.log("Recorded Blobs: ",y);var t=new Blob(y,{type:"video/webm"}),i=window.URL.createObjectURL(t),n=document.createElement("a");n.style.display="none",n.href=i,n.download="test.webm",document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(i)}),100),N(!1),J()},n.ondataavailable=ee,n.start(),N(!0),console.log("MediaRecorder started",n),P()}()},className:"circular start3 ".concat(O||a||R?null:"disabled"),id:R?"stop":"start",children:Object(r.jsx)("img",{src:m,width:"30px",height:"30px",className:"v-middle"})}),Object(r.jsx)(x.a,{id:"storing",type:"dark",place:"top",effect:"solid",children:Object(r.jsx)("span",{className:"circular",style:{fontSize:15},children:R?"Stop recording":"Start recording"})})]}),Object(r.jsx)("video",{id:"screen",className:"".concat("recorded"==M&&"bottom-right"),autoPlay:!0,playsInline:!0,muted:!0,style:{position:"absolute",visibility:"hidden",height:0}}),Object(r.jsx)("video",{id:"recorded",className:"".concat("screen"==M&&"bottom-right"),playsInline:!0,autoPlay:!0,muted:!0,style:{position:"absolute",visibility:"hidden",height:0}}),Object(r.jsx)("div",{id:"errorMsg"}),a&&O&&Object(r.jsxs)("div",{style:{right:20,top:20,zIndex:22},className:"switch v-middle",onClick:function(){return E("screen"==M?"recorded":"screen")},children:[Object(r.jsx)("img",{src:"https://image.flaticon.com/icons/svg/125/125868.svg",width:"20px",height:"20px",className:"v-middle"}),Object(r.jsx)("span",{className:"circular v-middle",style:{fontSize:17},children:"Switch views"})]}),R&&Object(r.jsx)("div",{id:"animate-flicker",style:{left:20,top:8,zIndex:22,position:"fixed"},title:"Recording",children:Object(r.jsx)("img",{src:v,width:"50px",height:"50px",className:"v-middle"})}),Object(r.jsx)("canvas",{style:{zIndex:10,position:O||a?!a&&O?"absolute":"null":"absolute",top:!a&&O&&(window.innerHeight-window.videoHeight*window.innerWidth/1280)/2}}),R&&Object(r.jsxs)("div",{className:"timer circular",style:{color:"#f3f1f1"},children:[Object(r.jsxs)("div",{style:{display:"inline-block"},children:[B<=9?"0"+B:B,":"]}),Object(r.jsxs)("div",{style:{display:"inline-block"},children:[A<=9?Object(r.jsxs)("span",{children:["0",A]}):A,":"]}),Object(r.jsx)("div",{style:{display:"inline-block"},children:F<=9?"0"+F:F})]})]})]})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),r(e),c(e),a(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.2b33e464.chunk.js.map