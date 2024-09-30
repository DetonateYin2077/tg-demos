(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3799:function(){},3938:function(){},7124:function(e,n,t){Promise.resolve().then(t.bind(t,767))},767:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(9854),o=t(5837),i=t.n(o),a=t(3584),c=t.n(a),r=t(4821),l=t(2721),d=t(1012),h=t(7732);class u{getId(){return this.eventId++,h.Z.setItem(this.eventIdStoreKey,String(this.eventId)).catch(()=>{}),this.eventId}constructor(){this.eventIdStoreKey="ton-connect-service-event-id",this.eventId=0,h.Z.getItem(this.eventIdStoreKey).then(e=>{this.eventId=Number(e)}).catch(()=>{})}}let g=new u,f=new d.x;class p{init(e){this.chain=e.chain}genClientId(e){let n=new r.m6(null!=e?e:void 0),t=n.stringifyKeypair(),s=n.sessionId;return console.log("genClientId sessionKeyPair",t),{sessionKeyPair:t,sessionId:s}}onStatusChange(e,n){return f.subscribe({next:n=>{console.log("observerA: ".concat(n)),e({...this.walletInfo,...n})}})}async handleMessage(e){console.log("handleMessage",e);try{var n,t,s,o;let{from:i,message:a}=JSON.parse(e.data);this.connection.from=i;let c=new r.m6(this.connection.sessionKeyPair),l=JSON.parse(c.decrypt(r.DS.decode(a).toUint8Array(),(0,r.SW)(i)));console.log("handleMessage request",l),"connect"===l.event&&(this.walletInfo.address=null===(n=l.result)||void 0===n?void 0:n.address,f.next({address:null===(t=l.result)||void 0===t?void 0:t.address})),("signMessage"===l.event||"signTransaction"===l.event)&&(this.walletInfo.signature=null===(s=l.result)||void 0===s?void 0:s.signature,f.next({signature:null===(o=l.result)||void 0===o?void 0:o.signature}))}catch(e){console.log("handleMessage error"),console.error(e)}}async send(e,n,t,s){try{let o="".concat(this.bridgeUrl,"/message?client_id=").concat(n.sessionId,"&to=").concat(t,"&ttl=").concat(s||this.defaultTtl),i=n.encrypt(JSON.stringify(e),(0,r.SW)(t));await fetch(o,{body:r.DS.encode(i),method:"POST"})}catch(e){console.log("send fail",e)}}async connect(){let{sessionKeyPair:e,sessionId:n}=this.genClientId(),t="".concat(this.bridgeUrl,"/events?client_id=").concat(n);this.eventSource=new(i())(t),this.eventSource.addEventListener("message",c()(this.handleMessage.bind(this),200)),this.eventSource.addEventListener("open",async()=>{this.connection.sessionKeyPair=e,console.log("sse connect: opened"),console.log(t);let s="v=2&id=".concat(encodeURIComponent(n),"&r=").concat(encodeURIComponent(JSON.stringify({manifestUrl:"https://app.ston.fi/tonconnect-manifest.json",items:[{name:"ton_addr"}]})),"&ret=none");console.log("search",s);let o="".concat(this.deeplink,"?startapp=bgwconnect-").concat(s.replaceAll(".","%2E").replaceAll("-","%2D").replaceAll("_","%5F").replaceAll("&","-").replaceAll("=","__").replaceAll("%","--"));console.log("link",o),await (0,l.F6)()?(0,l.RH)().openTelegramLink(o):window.open(o,"_blank","noreferrer noopener")}),this.eventSource.addEventListener("error",e=>{console.log("sse connect: error",e)})}close(){this.eventSource&&(this.eventSource.removeAllEventListeners(),this.eventSource.close(),this.eventSource=null,console.log("sse close"))}async signMessage(){let e=this.connection.from,n=this.connection,t=new r.m6(n.sessionKeyPair);this.send({id:g.getId(),chain:"eth",method:"signMessage",payload:JSON.stringify({__type:"personal",message:"Personal:FOMO NUCN, just beyond FOMO3D",address:this.walletInfo.address})},t,e);let s="".concat(this.deeplink,"?startapp=bgwconnect");await (0,l.F6)()?(0,l.RH)().openTelegramLink(s):window.open(s,"_blank","noreferrer noopener")}async signTransaction(){let e=this.connection.from,n=this.connection,t=new r.m6(n.sessionKeyPair);this.send({id:g.getId(),chain:"eth",method:"sendTransaction",payload:JSON.stringify([{data:"0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000066f9115700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000100000000000000000000000000a90ff932b72727bf9f2ff42b2ba7034853888714000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000a7b727e497660200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b55d398326f99059ff775485246999027b31979550001f40e09fabb73bd3ade0a17ecc321fd13a19e81ce82000000000000000000000000000000000000000000",from:"0xa90FF932b72727Bf9F2fF42B2bA7034853888714",gas:"0x28b40",to:"0x1A0A18AC4BECDDbd6389559687d1A73d8927E416",value:"0x0"}])},t,e);let s="".concat(this.deeplink,"?startapp=bgwconnect");await (0,l.F6)()?(0,l.RH)().openTelegramLink(s):window.open(s,"_blank","noreferrer noopener")}sendTransaction(){}constructor(e){this.defaultTtl=300,this.bridgeUrl="https://ton-connect-bridge-local.bgwapi.io/bridge",this.deeplink="https://t.me/MatzohBot/bgw_local_demo",this.eventSource=null,this.connections=[],this.activeRequests={},this.chain="eth",this.connection={sessionKeyPair:{publicKey:"",secretKey:""},from:""},this.walletInfo={address:"",signature:""},this.init(e)}}var v=t(3901);function b(){let[e,n]=(0,v.useState)({}),[t,o]=(0,v.useState)({});return(0,v.useEffect)(()=>{let e=new p({chain:["eth"],menifestUrl:"https://<YOUR_APP_URL>/tonconnect-manifest.json"});n(e);let t=e.onStatusChange(e=>{console.log("onStatusChange",e),o(e)});return()=>{null==t||t.unsubscribe()}},[]),(0,s.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:[(null==t?void 0:t.address)&&(0,s.jsxs)("div",{style:{wordBreak:"break-all"},children:["address: ",null==t?void 0:t.address]}),(0,s.jsx)("button",{type:"button",onClick:()=>{e.connect()},children:"connect"}),(null==t?void 0:t.signature)&&(0,s.jsxs)("div",{style:{wordBreak:"break-all"},children:["signature: ",null==t?void 0:t.signature]}),(0,s.jsx)("button",{type:"button",onClick:()=>{e.signMessage()},children:"signMessage"}),(0,s.jsx)("button",{type:"button",onClick:()=>{e.signTransaction()},children:"signTransaction"})]})}}},function(e){e.O(0,[942,610,481,744],function(){return e(e.s=7124)}),_N_E=e.O()}]);