(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{640:function(e,t,n){"use strict";var i=n(1742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,s,r,c,l,o,d,u,A=!1;t||(t={}),r=t.debug||!1;try{if(l=i(),o=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),o.selectNodeContents(u),d.addRange(o),!document.execCommand("copy"))throw Error("copy command was unsuccessful");A=!0}catch(i){r&&console.error("unable to copy using execCommand: ",i),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),A=!0}catch(i){r&&console.error("unable to copy using clipboardData: ",i),r&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",s=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,s),window.prompt(c,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(o):d.removeAllRanges()),u&&document.body.removeChild(u),l()}return A}},8609:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(5675),a=n.n(i),s=n(5426),r=n(691),c=n(4184),l=n.n(c),o=n(7294),d=n(2640),u=n(640),A=n.n(u),m=n(5893),x=function(e){var t,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,m.jsx)(r.CK,{}),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,m.jsx)("div",{className:"text-xs text-white font-medium",children:"copied"}),i=o.useState(!1),a=(0,d.Z)(i,2),s=a[0],c=a[1],l=o.useCallback(function(e){"string"==typeof e||"number"==typeof e?(A()(e.toString()),c(!0)):(c(!1),console.error("Cannot copy typeof ".concat(typeof e," to clipboard, must be a string or number.")))},[]);return o.useEffect(function(){var t;return s&&e&&(t=setTimeout(function(){return c(!1)},e)),function(){clearTimeout(t)}},[s,e]),{isCopied:s,handleCopy:l,render:s?n:t}}(),i=n.handleCopy,c=n.render,u=(0,o.useState)({icon:e.icon,name:e.name}),x=u[0],h=u[1],f=(0,o.useState)(!1),g=f[0],p=f[1],b=function(){p(!g)},j=function(t){h({icon:t.icon,name:t.name}),e.handleChange&&e.handleChange(t.name),b()};return(0,o.useEffect)(function(){h({icon:e.icon,name:e.name})},[]),(0,m.jsxs)("div",{className:"relative w-full mb-7",children:[(0,m.jsx)("div",{className:l()("text-primary-1100 font-bold lg:text-base text-sm mb-1",{hidden:!e.label}),children:e.label}),(0,m.jsxs)("div",{className:"rounded px-5 xl:px-8 h-16 bg-secondary-400 outline-none flex items-center justify-between",children:[(0,m.jsxs)("div",{className:"flex items-center gap-4",children:[(0,m.jsx)(a(),{priority:!0,height:44,width:38,src:x.icon,alt:"icon",className:l()({hidden:!e.icon})}),(0,m.jsx)("div",{className:"text-white font-medium text-sm xl:text-lg",children:e.name})]}),e.hasCopy?(0,m.jsx)("div",{onClick:function(){return i(e.name)},className:"cursor-pointer pl-4",children:c}):(0,m.jsx)("div",{onClick:b,className:"cursor-pointer",children:(0,m.jsx)(r.Hd,{})})]}),g&&(0,m.jsx)(s.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.2},className:"absolute z-10 w-full bg-primary-800 p-4 rounded max-h-56 overflow-y-auto mt-2",children:null===(t=e.items)||void 0===t?void 0:t.map(function(e){return(0,m.jsxs)(s.E.div,{onClick:function(){return j(e)},transition:{duration:.2},className:"font-bold text-white hover:text-primary-100 flex items-center gap-4 text-base cursor-pointer p-2.5 rounded w-full hover:bg-primary-900",children:[e.icon&&(0,m.jsx)(a(),{priority:!0,height:44,width:38,src:e.icon,alt:"icon"}),(0,m.jsx)("div",{children:e.name})]},e.name)})})]})}},1887:function(e,t,n){"use strict";n.d(t,{zx:function(){return a.ZP},h4:function(){return i.Z},HY:function(){return R}});var i=n(3685),a=n(8467),s=n(29),r=n(7794),c=n.n(r),l=n(691),o=n(5675),d=n.n(o),u=n(1700),A=n(4014),m={src:"/_next/static/media/paypal.481fc38e.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAtElEQVR42jVNPwtBcRQ98gXYZDNgkJGeTyAZjBZlZTYaGP0ZKJs3GV9mX4F6o2KQwWaSkkV+917Hq3fqdO45p+4BCDNLisjSOXlQF/SJuOio6ok6J9Pkiv5MbUNEPzxKADxgtKUW6T3mDnwVgihUZ0EmP7BUP7iAUJEjVC0qsy3/mpuGBv/WA/Gfgpq9zKQJbBqY3Osgvk66zN9Q1RqPA3fWZNmJ7qh75hXE4PZYVJ8shnH2A9gIh/n0s7WAAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},x=n(9759),h=n(6466),f=n(5634),g={src:"/_next/static/media/success.9feb26f0.png",height:560,width:560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42mMAAZW17ZpAfFB1bccvIP1LZ13nQWWgGFhSEchQX9fxDoj/AwX/a63r/M+wuuk/UOE7tXUdmgwa6zoOiq5p/S+8pvWn6Ybu/wwrav93HVv/M3HHrP8MqxoPMgitaf3ltXnif28gZlhc8r/p8Or/M05vB5uiua7jF4MgUIH35kn/55/b83/iic3/Z53Z+Z9hZQPIiv9qIAUgBzGsbv5vtaHnJ0iB7No2EP4JdBNI0SEG6bVtmlpAR4IkQParAiWgku9UYT5RgvjkoP76zl8gY0E6gV4GSwIA02iH7aMmVlMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/failed.18365ef1.png",height:596,width:596,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX0RDfzRDf0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjXzQjX0QjX0QjXzQjX0QzbzQzbxrAXwAAAAE3RSTlMAAAAAanN0dK+vsLDDw9ra2+zsFAWl/AAAAD9JREFUeNolxskRgDAMA0A5J0cccKT+a4WZ7GuRUN07MuwQqdNQ9a542DAUpQR9Z/1pmhGTHbgo8TZka8O7pQ9mKwLZ6O38EAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},b=n(7294),j=n(8609),v=n(6154),N=n(9473),w=n(9269),C=n(3009),S=n(7921),E=n(5893),y=[{icon:x.Z,name:"BUSD",ratio:1},{icon:A.Z,name:"USDT",ratio:1},{icon:f.Z,name:"CAKE",ratio:2},{icon:m,name:"USD",ratio:1},{icon:h.Z,name:"BITP",ratio:.06}],U=[{icon:x.Z,name:"BUSD",ratio:1},{icon:A.Z,name:"USDT",ratio:1},{icon:f.Z,name:"CAKE",ratio:2},{icon:m,name:"USD",ratio:1},{icon:h.Z,name:"BITP",ratio:.06},{icon:u.Z,name:"Quest Credit",ratio:3}],R=function(){var e=(0,b.useState)(0),t=e[0],n=e[1],i=function(e){void 0!==e?n(t-1):n(t+1)},a=[(0,E.jsx)(D,{next:i}),(0,E.jsx)(Q,{next:i,isSuccessful:!0}),(0,E.jsx)(Q,{next:i,isSuccessful:!1}),(0,E.jsx)(T,{})];return(0,E.jsx)("div",{className:"w-full xl:px-3",children:a[t]})},D=function(e){e.next;var t,n=(0,N.v9)(function(e){return e.auth}).currentUser,i=(0,b.useState)("BUSD"),a=i[0],r=i[1],o=(0,b.useState)("BUSD"),d=o[0],u=o[1],A=(0,b.useRef)({}),m=(0,b.useRef)({}),x=(0,b.useState)(0),h=x[0],f=x[1],g=(0,b.useState)(0),p=g[0],R=g[1],D=(0,b.useState)(1),Q=D[0],T=D[1];""!==a&&y.forEach(function(e){a===e.name&&(A.current=e.icon)}),""!==d&&U.forEach(function(e){d===e.name&&(m.current=e.icon)}),(0,b.useEffect)(function(){B()},[]),(0,b.useEffect)(function(){y[2].ratio=Q,U[2].ratio=Q},[Q]);var B=(t=(0,s.Z)(c().mark(function e(){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,S.e)().then(function(e){T(e)});case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,b.useEffect)(function(){R(h*y.filter(function(e){return e.name==a})[0].ratio/U.filter(function(e){return e.name==d})[0].ratio)},[h,a]),(0,b.useEffect)(function(){var e=y.filter(function(e){return e.name==a})[0].ratio;f(p*U.filter(function(e){return e.name==d})[0].ratio/e)},[p,d]);var Z=function(){f(0),R(0),r("BUSD"),u("BUSD")},O=function(){if(a==d){C.Z.warning({message:"Warning!",description:"Please choose differnt coins to swap"});return}if(0==h){C.Z.warning({message:"Warning!",description:"Please select token amount"});return}var e={user:n.id,coinFrom:a,fromTokenAmount:h,coinTo:d,toTokenAmount:p};v.Z.post("".concat(w.M,"/swap"),e).then(function(e){e.data.success?C.Z.success({message:"Success!",description:e.data.message}):C.Z.warning({message:"Warning!",description:e.data.message})})},I=function(){r(d),u(a),f(p),R(h)};return(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{className:"lg:text-2xl text-xl font-bold text-primary-900",children:"SWAP"}),(0,E.jsxs)("div",{className:"relative",children:[(0,E.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,E.jsx)("div",{className:"lg:text-lg text-base font-bold text-primary-450",children:"SWAP TOKENS IN AN INSTANT"}),(0,E.jsx)("div",{onClick:function(){return Z()},children:(0,E.jsx)(l.HY,{})})]}),(0,E.jsx)("div",{className:"absolute opacity-40 right-0 lg:-left-8 mt-5 lg:w-modal w-full thin-line bg-white"})]}),(0,E.jsxs)("div",{className:"mt-24 flex items-center justify-between gap-2",children:[(0,E.jsx)(j.Z,{name:a,icon:A.current,handleChange:function(e){r(e)},items:y,label:"SWAP FROM"},0),(0,E.jsx)("input",{type:"number",placeholder:"0.00",className:"bg-secondary-400 text-xl text-right px-4 h-12 lg:w-60 lg:h-14 placeholder:text-white placeholder:font-medium font-medium text-white rounded border-none outline-none",value:h,onChange:function(e){return f(Number(e.target.value))}})]}),(0,E.jsx)("div",{className:"flex justify-center items-center mt-14",children:(0,E.jsx)("div",{onClick:function(){return I()},children:(0,E.jsx)(l.Td,{})})}),(0,E.jsxs)("div",{className:"mt-14 flex items-center justify-between gap-2",children:[(0,E.jsx)(j.Z,{name:d,icon:m.current,handleChange:function(e){u(e)},items:U,label:"SWAP TO"},0),(0,E.jsx)("input",{type:"number",placeholder:"0.00",className:"bg-secondary-400 text-xl text-right px-4 h-12 lg:w-60 lg:h-14 placeholder:text-white placeholder:font-medium font-medium text-white rounded border-none outline-none",value:p,onChange:function(e){return R(Number(e.target.value))}})]}),(0,E.jsx)("button",{onClick:function(){return O()},className:"mt-14 bg-secondary-300 text-white w-full rounded font-bold text-xl h-14",children:"SWAP"})]})},Q=function(e){var t=e.next,n=e.isSuccessful;return(0,E.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,E.jsxs)("div",{className:"lg:w-96 flex flex-col justify-center items-center",children:[(0,E.jsx)(d(),{className:"h-20 mt-10 w-20 lg:h-28 lg:w-28 object-contain",priority:!0,src:n?g:p,alt:"success"}),(0,E.jsx)("h3",{className:"text-primary-900 mt-10 font-bold text-3xl",children:n?"SWAP SUCCESSFUL":"SWAP UNSUCCESSFUL"}),(0,E.jsx)("p",{className:"mt-3 text-sm font-bold text-primary-450 text-center",children:"THE TRANSACTION HAS BEEN SUCCESSFULLY PROCESSED. THE TRANSFER MAY STILL BE IN PROCESS. PLEASE CHECK THE TRANSACTION RECORD LATER."}),(0,E.jsxs)("div",{className:"pb-7 gap-10 mt-3 flex justify-between px-5 items-center",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{className:"mt-3 text-left text-sm font-bold text-primary-450",children:"FROM"}),(0,E.jsx)("p",{className:"text-white font-medium lg:text-xl text-base",children:"0.00 BUSD"})]}),(0,E.jsx)(l.Ni,{}),(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{className:"mt-3 text-left text-sm font-bold text-primary-450",children:"TO"}),(0,E.jsx)("p",{className:"text-white font-medium lg:text-xl text-base",children:"0.00 USDT"})]})]}),(0,E.jsx)("div",{className:"opacity-40 w-full thin-line bg-white"})]}),(0,E.jsxs)("div",{className:"mt-16 flex justify-between gap-5",children:[(0,E.jsx)("button",{onClick:function(){return t(0)},className:" bg-secondary-300 px-5 lg:px-8 rounded font-bold text-base h-12",children:"BACK TO SWAP"}),(0,E.jsx)("button",{onClick:function(){return t()},className:" bg-primary-1150 whitespace-nowrap px-5 lg:px-8 rounded font-bold text-base h-12",children:"VIEW SWAP HISTORY"})]})]})},T=function(){return(0,E.jsxs)("div",{className:"pb-32",children:[(0,E.jsx)("div",{className:"lg:text-2xl text-xl font-bold text-primary-900",children:"SWAP TO QUEST CREDIT"}),(0,E.jsxs)("div",{className:"relative",children:[(0,E.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,E.jsx)("div",{className:"lg:text-lg text-base font-bold text-primary-450",children:"RECENT TRANSACTION"}),(0,E.jsx)(l.HY,{})]}),(0,E.jsx)("div",{className:"absolute opacity-40 right-0 lg:-left-8 mt-5 lg:w-modal w-full thin-line bg-white"})]}),(0,E.jsxs)("div",{className:"mt-14 w-full",children:[(0,E.jsxs)("div",{className:"flex gap-7 items-center font-bold text-xs text-primary-1100",children:[(0,E.jsx)("div",{className:"hidden lg:block",children:"COIN"}),(0,E.jsx)("div",{children:"COIN NAME"}),(0,E.jsx)("div",{children:"AMOUNT"}),(0,E.jsx)(l.Ni,{}),(0,E.jsx)("div",{className:"hidden lg:block",children:"COIN"}),(0,E.jsx)("div",{children:"COIN NAME"}),(0,E.jsx)("div",{children:"AMOUNT"})]}),(0,E.jsxs)("div",{className:"grid grid-cols-5 lg:grid-cols-7 mt-5 items-center font-medium text-sm text-white",children:[(0,E.jsx)(d(),{className:"h-6 hidden lg:block w-7 lg:h-8 lg:w-9 object-contain",priority:!0,src:x.Z,alt:"coin"}),(0,E.jsx)("div",{children:"BUSD"}),(0,E.jsx)("div",{className:"ml-4 lg:ml-3",children:"20.00"}),(0,E.jsx)("div",{className:"ml-2.5 lg:ml-3.5",children:(0,E.jsx)(l.Ni,{})}),(0,E.jsx)(d(),{className:"h-6 hidden lg:block w-7 lg:-ml-3 lg:h-8 lg:w-9 object-contain",priority:!0,src:u.Z,alt:"quest credit"}),(0,E.jsx)("div",{children:"QUEST"}),(0,E.jsx)("div",{children:"2.00"})]})]})]})}},6466:function(e,t){"use strict";t.Z={src:"/_next/static/media/bitp.3f6c9850.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAYklEQVR42h3FsQ0BYQAG0O+cUayAqE2g09wmjECjNYDWEkQnwQ4aheRyxRUv9+fyihdRO/o6qCQabyczZx/b6CxltNbHTdRFVTzjISamIl7xt5FRo42Vu4uFa3kehb2fncgArO1K91+TxUYAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}},9759:function(e,t){"use strict";t.Z={src:"/_next/static/media/busd.41031c74.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAn0lEQVR42mMAgTe7GZnf7mbse7ub6TWQ7n2zm4ERJhEDFLzyZg/j5Nd7GcSB7LlABVeBOIIByPkOlDBiAIIPO7gdGYAAyHcAiv8CSR5jAIL3O7nqgfgFEFdDTGS6CJI8CZUsB+LXQNwFlbwCkvwENMYXYiyPNdTYSKD4F6AKRkug5ceBnJVv9jBoAtkbQXwgNmWAASCnFqjgA5CugYkBAOuRXY0KtFf1AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},5634:function(e,t){"use strict";t.Z={src:"/_next/static/media/cake.9e204e9a.png",height:450,width:450,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42mNoefeFkQEKmh48TC558CCZAQbuP4PILXj82Kj/8dM9dc9e/s958vx/9v2He5tv3zYCS3bfvq5c9+rt95l3b/xfs3PxnzXbF/6pP3/mf9LDp99bLp5TYWi6fcMo6+Xb3wvOHvx7Y33hv+trsv/17Fj31/X2w995Z04bM+Q8emiUd+/Br5vbmv4+3Fby7/7mvH8Xlmf+dT566nfY9evGDGW3rynH3n/8fdXhTf9vban6c31j8Z/ZC3v+a+0/9j3j+iUVsDtib982trxya2/A4eP/vbbv/c+w8/Bel+MnjcGSbp9+wb1pe/12it3VmykMMHDvFSMAfQKNMALgKB4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},1700:function(e,t){"use strict";t.Z={src:"/_next/static/media/qc.ec077b38.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAlklEQVR42jXMsQqCUBTG8QvRM7UELYFu1VRRZE01hHcPqjeIwNnRJ3DSTQcHuVffwMVdRHD3f0EP/Dh85+NeYca11Bx/VPhhNhbaIRRsj32Aj5J8olQdNtjCwQoXyl5IW0XS0nsOV5SQOFJmpowpCeqGFE/X1jt2br5t8MAZH6x59UJLqZdIEFDcESIlL8Q0hC9qvKfbADpKZazihXUYAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},4014:function(e,t){"use strict";t.Z={src:"/_next/static/media/usdt.96355908.png",height:277,width:239,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAx0lEQVR42mP4//8/Q+D6qcxhG6ZPAOI3QNzvsWYSI0icwX/dlNiA9VOvKC7v7GRgYBDRWNE1Gaj4GlA8AiT5zWnNBFOgyhQgXgLECRareh2AGn4xeK6ddBgowPrrz2+vv//+Hvz796/rj9+/uL3WTj7H4LtuygmgJMO3nz/k/vz9ux7IlgBiRqD4JZBjPpmu7PUFCjAAcRIQM9iv7o8Cin8B2WkJZBwH2rGCoT9OC8jeCGQfB4qbglSDMVCgNmTDtA9AugYmBgDNWYsJDyPXfgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],i=0;i<e.rangeCount;i++)n.push(e.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);