var wtChart=function(){function t(t){this.context=t,this.paddingTop=60,this.paddingLeft=this.paddingRight=60,this.paddingBottom=60}function i(i,e){this.type=e,t.apply(this,[i]),this.color=["yellow","pink","blue","green","orange","black","red"],this.deg=[],this.value=[]}function e(i,e){return t.apply(this,[i]),this.type=e,this.color=["red","green","blue","black","orange","brown"],this}function a(i,e){this.type=e,t.apply(this,[i]),this.color=["red","yellow","blue","green","orange","brown"],this.value=[]}function s(i,e){return this.type=e,t.apply(this,[i]),this.color=["red","green","blue","black","orange","brown"],this}var h=function(t,h){switch(h){case"pie":this.type=i;break;case"bar":this.type=a;break;case"radar":this.type=e;break;case"ring":this.type=i;break;case"line":this.type=s}return new this.type(t,h)},o=function(t){function i(){}return Object.create?Object.create(t):"function"!=typeof t&&"object"!=typeof t?(i.prototype=t,new i):void 0},l=function(t){var i,e;return t.layerX||0==t.layerX?(i=t.layerX,e=t.layerY):(t.offsetX||0==t.offsetX)&&(i=t.offsetX,e=t.offsetY),{x:i,y:e}},n=function(t){return function(i,e){var a=i[t],s=e[t];return a>s?-1:s>a?1:0}};return t.prototype.config=function(t){for(prop in t)this[prop]=t[prop];if(this.data&&this.index){this.rad=360/this.index.length;var i=0;this.max=0;for(var e=0;e<this.data.length;e++)i=Math.max.apply(null,this.data[e].value),this.max=this.max>i?this.max:i;for(this.levels=5,this.distance=1;this.distance*this.levels<this.max;)this.distance=this.distance+1}if(this.data&&"[object Array]"!=Object.prototype.toString.call(this.data[0].value)&&"[object Function]"!=Object.prototype.toString.call(this.data[0].value)&&(this.data=this.data.sort(n("value"))),this.data&&this.data[0].type){this.group=[],this.data.forEach(function(t){this[t.type]?(this[t.type]=this[t.type].concat(t.value),this.group[t.type]=this[t.type]):(this[t.type]=t.value,this.group[[t.type]]=t.value,this.group.length=this.group.length+1)}.bind(this)),this.max=0;for(item in this.group)for(var a=this.group[item],s=a.length/this.xAxis.length,i=0,h=0;h<this.xAxis.length;h++){for(var e=0;s>e;e++)i=this.group[item][h+6*e]+i;this.max=i>this.max?i:this.max,i=0}for(this.distance=5;6*this.distance<this.max;)this.distance=this.distance+5}if(this.data&&"line"==this.type){this.max=0;for(var e=0;e<this.data.length;e++)for(var h=0;h<this.data[e].value.length;h++)this.max=this.max>this.data[e].value[h]?this.max:this.data[e].value[h];for(this.distance=5;6*this.distance<this.max;)this.distance=this.distance+5}return this.configMessage(),this},i.prototype=o(t.prototype),i.constructor=i,i.prototype.addEvent=function(t,i){var e=-Math.PI/2,a=this.circleCenter,s=this.radius,h=document.createElement("div"),o=(t.offsetHeight,t.offsetWidth);h.style.padding="10px",h.style.color="white",h.style.backgroundColor="rgba(0,0,0,0.45)",h.style.display="none",document.body.appendChild(h),t.addEventListener("mousemove",function(t){var n,d=l(t);i.clearRect(0,0,9999,9999),i.textAlign="center",i.fillStyle="black",i.globalAlpha=.6,i.fillText(this.title,o/2,this.paddingTop/2);for(var r=0;r<=this.deg.length-1;r++){if(i.strokeStyle=this.color[r],i.beginPath(),i.moveTo(a,a),i.arc(a,a,s,e,this.deg[r]+e),e=this.deg[r]+e,i.globalAlpha=.4,i.fillStyle=this.color[r],i.fill(),i.isPointInPath(d.x,d.y)){i.clearRect(0,0,9999,9999),i.textAlign="center",i.fillStyle="black",i.globalAlpha=.6,i.fillText(this.title,o/2,this.paddingTop/2),n=r,e=-Math.PI/2;for(var r=0;r<=this.deg.length-1;r++)i.strokeStyle=this.color[r],i.beginPath(),i.moveTo(a,a),r!=n?i.arc(a,a,s,e,this.deg[r]+e):i.arc(a,a,s+20,e,this.deg[r]+e),e=this.deg[r]+e,i.fillStyle=this.color[r],i.globalAlpha=.4,i.fill()}"ring"==this.type&&(i.beginPath(),i.arc(a,a,s/2.5,0,2*Math.PI),i.fillStyle="white",i.globalAlpha=1,i.fill())}var g=Math.pow(d.x-a,2)+Math.pow(d.y-a,2);if(this.message&&g<Math.pow(s-5,2))for(var r=0;r<this.mge.length;r++){var p=this.mge[r].replace(/{{name}}/,this.data[n].name);h.style.display="block",h.style.position="absolute",h.style.left=t.pageX+20+"px",h.style.top=t.pageY+20+"px";var c=(p.replace(/{{value}}/,this.data[n].value),this.message.replace(/{{name}}/,this.data[n].name).replace(/{{value}}/,this.data[n].value));h.innerHTML=c}else h.style.display="none";t.stopPropagation()}.bind(this)),t.addEventListener("mouseout",function(t){t.stopPropagation();var e=-Math.PI/2;i.clearRect(0,0,9999,9999),i.textAlign="center",i.fillStyle="black",i.globalAlpha=.6,i.fillText(this.title,o/2,this.paddingTop/2);for(var h=0;h<=this.deg.length-1;h++)i.fillStyle=this.color[h],i.strokeStyle=this.color[h],i.beginPath(),i.moveTo(a,a),i.arc(a,a,s,e,this.deg[h]+e),e=this.deg[h]+e,i.globalAlpha=.4,i.fill(),"ring"==this.type&&(i.beginPath(),i.arc(a,a,s/2.5,0,2*Math.PI),i.fillStyle="white",i.globalAlpha=1,i.fill())}.bind(this))},i.prototype.draw=function(){var t=this.context,i=t.canvas,e=i.offsetHeight,a=i.offsetWidth,s=a>e?e/2:a/2;this.circleCenter=s;var h=e>a?(a-2*this.paddingRight)/2:(e-2*this.paddingTop)/2;this.radius=h,this.value=this.data.map(function(t){return t.value});var o=this.value.reduce(function(t,i){return t+i});this.deg=this.value.map(function(t){var i=360*t/o;return i*Math.PI/180}),this.percent=this.value.map(function(t){return t/o});var l=-Math.PI/2;t.clearRect(0,0,9999,9999),t.textAlign="center",t.globalAlpha=.6,t.fillStyle="black",t.fillText(this.title,a/2,this.paddingTop/2);for(var n=0;n<=this.deg.length-1;n++)t.fillStyle=this.color[n],t.strokeStyle=this.color[n],t.beginPath(),t.moveTo(s,s),t.arc(s,s,h,l,this.deg[n]+l),l=this.deg[n]+l,t.globalAlpha=.4,t.fill(),"ring"==this.type&&(t.beginPath(),t.arc(s,s,h/2.5,0,2*Math.PI),t.fillStyle="white",t.globalAlpha=1,t.fill());return this.addEvent(i,t),this},i.prototype.configMessage=function(){this.message&&this.data&&(this.mge=[],this.message=this.message.replace(/ \s+/g,""),this.mge=this.message.split("/n"))},e.prototype=o(t.prototype),e.constructor=e,e.prototype.draw=function(){var t=this.context,i=t.canvas,e=i.offsetHeight,a=i.offsetWidth,s=a>e?e/2:a/2;this.circleCenter=s;var h=e>a?(a-2*this.paddingRight)/2:(e-2*this.paddingTop)/2;this.radius=h,t.clearRect(0,0,9999,9999),t.globalAlpha=.6,t.textAlign="center",t.fillText(this.title,a/2,this.paddingTop/2),t.translate(s,s);for(var o=this.levels;o>0;o--)for(var l=this.radius*(5*this.distance-(o-1)*this.distance)/(5*this.distance),n=0;n<this.index.length;n++){t.beginPath(),t.globalAlpha=.4,t.rotate(this.rad*Math.PI/180),t.moveTo(0,0),t.lineTo(0,-l),1!=o?t.strokeStyle="rgba(0,0,0,0)":t.strokeStyle="black",t.stroke(),t.beginPath(),t.moveTo(0,-l);var d=l*Math.sin(this.rad*Math.PI/180),r=l*Math.cos(this.rad*Math.PI/180);t.strokeStyle="black",t.lineTo(d,0-r),t.stroke()}t.translate(-s,-s);for(var n=0;n<this.index.length;n++){var g=n*this.rad,d=s+Math.sin(g*Math.PI/180)*(this.radius+8),r=s-Math.cos(g*Math.PI/180)*(this.radius+8);0==g||g>84&&96>g?t.textAlign="center":180>g?t.textAlign="left":t.textAlign="right",t.fillStyle="black",t.fillText(this.index[n],d,r)}for(var o=0;o<this.data.length;o++){t.beginPath();for(var n=0;n<this.index.length;n++){var p=this.data[o].value[n]*this.radius/(5*this.distance),g=n*this.rad,d=s+Math.sin(g*Math.PI/180)*p,r=s-Math.cos(g*Math.PI/180)*p;0==n?t.moveTo(d,r):t.lineTo(d,r)}t.closePath(),t.fillStyle=this.color[o],t.fill()}return this.addEvent(i,t),this},e.prototype.addEvent=function(t,i){var e=document.createElement("div");e.style.padding="10px",e.style.color="white",e.style.backgroundColor="rgba(0,0,0,0.45)",e.style.display="none",document.body.appendChild(e),t.addEventListener("mousemove",function(a){i.clearRect(0,0,9999,9999);var s=l(a),h=[],o=t.offsetHeight,n=t.offsetWidth,d=n>o?o/2:n/2;i.textAlign="center",i.globalAlpha=.6,i.fillText(this.title,n/2,this.paddingTop/2),this.circleCenter=d,i.translate(d,d);for(var r=this.levels;r>0;r--)for(var g=this.radius*(5*this.distance-(r-1)*this.distance)/(5*this.distance),p=0;p<this.index.length;p++){i.beginPath(),i.globalAlpha=.4,i.rotate(this.rad*Math.PI/180),i.moveTo(0,0),i.lineTo(0,-g),1!=r?i.strokeStyle="rgba(0,0,0,0)":i.strokeStyle="black",i.stroke(),i.beginPath(),i.moveTo(0,-g);var c=g*Math.sin(this.rad*Math.PI/180),f=g*Math.cos(this.rad*Math.PI/180);i.strokeStyle="black",i.lineTo(c,0-f),i.stroke()}i.translate(-d,-d);for(var p=0;p<this.index.length;p++){var v=p*this.rad,c=d+Math.sin(v*Math.PI/180)*(this.radius+8),f=d-Math.cos(v*Math.PI/180)*(this.radius+8),y=d+Math.sin(v*Math.PI/180)*this.radius,m=d-Math.cos(v*Math.PI/180)*this.radius;h.push({x:y,y:m}),0==v||v>84&&96>v?i.textAlign="center":180>v?i.textAlign="left":i.textAlign="right",i.fillStyle="black",i.fillText(this.index[p],c,f)}for(var r=0;r<this.data.length;r++){i.beginPath();for(var p=0;p<this.index.length;p++){var b=this.data[r].value[p]*this.radius/(5*this.distance),v=p*this.rad,c=d+Math.sin(v*Math.PI/180)*b,f=d-Math.cos(v*Math.PI/180)*b;0==p?i.moveTo(c,f):i.lineTo(c,f)}i.closePath(),i.fillStyle=this.color[r],i.fill()}for(var T=-1,u=h.map(function(t){return T++,Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2)}),x=Math.min.apply(null,u),p=0;p<this.index.length;p++)if(u[p]==x){T=p;break}for(var p=0;p<this.data.length;p++){var b=this.data[p].value[T]*this.radius/(5*this.distance),v=T*this.rad,c=d+Math.sin(v*Math.PI/180)*b,f=d-Math.cos(v*Math.PI/180)*b;i.beginPath(),i.arc(c,f,5,0,2*Math.PI),i.globalAlpha=.7,i.fillStyle=this.color[p],i.fill()}e.style.display="block",e.style.position="absolute",e.style.left=a.pageX+20+"px",e.style.top=a.pageY+20+"px";for(var k=this.message.replace(/{{index}}/,this.index[T]),p=0;p<this.data.length;p++)k=k.replace(/{{name}}/,this.data[p].name).replace(/{{value}}/,this.data[p].value[T]);e.innerHTML=k}.bind(this)),t.addEventListener("mouseout",function(){var t=this.context,i=t.canvas,a=i.offsetHeight,s=i.offsetWidth,h=s>a?a/2:s/2;this.circleCenter=h,t.clearRect(0,0,9999,9999),t.textAlign="center",t.globalAlpha=.6,t.fillText(this.title,s/2,this.paddingTop/2),t.translate(h,h);for(var o=this.levels;o>0;o--)for(var l=this.radius*(5*this.distance-(o-1)*this.distance)/(5*this.distance),n=0;n<this.index.length;n++){t.beginPath(),t.globalAlpha=.4,t.rotate(this.rad*Math.PI/180),t.moveTo(0,0),t.lineTo(0,-l),1!=o?t.strokeStyle="rgba(0,0,0,0)":t.strokeStyle="black",t.stroke(),t.beginPath(),t.moveTo(0,-l);var d=l*Math.sin(this.rad*Math.PI/180),r=l*Math.cos(this.rad*Math.PI/180);t.strokeStyle="black",t.lineTo(d,0-r),t.stroke()}t.translate(-h,-h);for(var n=0;n<this.index.length;n++){var g=n*this.rad,d=h+Math.sin(g*Math.PI/180)*(this.radius+8),r=h-Math.cos(g*Math.PI/180)*(this.radius+8);0==g||g>84&&96>g?t.textAlign="center":180>g?t.textAlign="left":t.textAlign="right",t.fillStyle="black",t.fillText(this.index[n],d,r)}for(var o=0;o<this.data.length;o++){t.beginPath();for(var n=0;n<this.index.length;n++){var p=this.data[o].value[n]*this.radius/(5*this.distance),g=n*this.rad,d=h+Math.sin(g*Math.PI/180)*p,r=h-Math.cos(g*Math.PI/180)*p;0==n?t.moveTo(d,r):t.lineTo(d,r)}t.closePath(),t.fillStyle=this.color[o],t.fill()}e.style.display="none"}.bind(this))},e.prototype.configMessage=function(t){for(var i=this.message,e=0;e<this.data.length-1;e++)this.message=this.message+"<br/>"+i;this.message="{{index}}<br/>"+this.message},a.prototype=o(t.prototype),a.constructor=a,a.prototype.addEvent=function(t,i){var e=document.createElement("div");e.style.padding="10px",e.style.color="white",e.style.backgroundColor="rgba(0,0,0,0.45)",e.style.display="none",document.body.appendChild(e),t.addEventListener("mousemove",function(a){var s=l(a);i.clearRect(0,0,9999,9999);var h=t.offsetHeight,o=t.offsetWidth;i.textAlign="center",i.fillStyle="black",i.globalAlpha=.6,i.fillText(this.title,o/2,this.paddingTop/2),i.strokeStyle="black",i.globalAlpha=.6,i.lineWidth=2,i.beginPath(),i.moveTo(this.paddingLeft,this.paddingTop),i.lineTo(this.paddingLeft,h-this.paddingBottom),i.lineTo(o-this.paddingRight,h-this.paddingBottom),i.stroke();for(var n=(h-this.paddingBottom-this.paddingTop)/6,d=(o-this.paddingBottom-this.paddingTop)/this.xAxis.length,r=0;r<this.xAxis.length;r++){if(i.globalAlpha=.3,i.beginPath(),i.moveTo(this.paddingLeft+r*d,h-this.paddingBottom),i.lineTo(this.paddingLeft+r*d,this.paddingTop),i.lineTo(this.paddingLeft+(r+1)*d,this.paddingTop),i.lineTo(this.paddingLeft+(r+1)*d,h-this.paddingBottom),i.closePath(),i.isPointInPath(s.x,s.y)){var g=r;i.moveTo(this.paddingLeft+g*d,h-this.paddingBottom),i.lineTo(this.paddingLeft+g*d,this.paddingTop),i.lineTo(this.paddingLeft+(g+1)*d,this.paddingTop),i.lineTo(this.paddingLeft+(g+1)*d,h-this.paddingBottom),i.closePath(),i.fillStyle="black",i.fill(),e.style.display="block",e.style.position="absolute",e.style.left=a.pageX+20+"px",e.style.top=a.pageY+20+"px";for(var p=this.message.replace(/{{xAxis}}/,this.xAxis[g]),c=0;c<this.data.length;c++)p=p.replace(/{{value}}/,this.data[c].value[g]);e.innerHTML=p;break}e.style.display="none",i.fillStyle="rgba(3,3,3,0)",i.fill()}for(var r=0;6>=r;r++){i.globalAlpha=1,i.beginPath(),i.lineWidth=.5,i.moveTo(this.paddingLeft-5,this.paddingTop+r*n),i.textAlign="right";var f=this.distance*(6-r);i.fillStyle="black",i.fillText(f+this.yAxis,55,5+this.paddingTop+r*n),i.lineTo(this.paddingLeft,this.paddingTop+r*n),i.strokeStyle="black",i.stroke(),i.globalAlpha=.2,i.lineTo(o-this.paddingLeft,this.paddingTop+r*n),i.strokeStyle="black",i.stroke()}i.strokeStyle="black";for(var r=0;r<this.xAxis.length;r++){i.globalAlpha=1,i.beginPath(),i.strokeStyle="black",i.lineWidth=.5,i.moveTo(this.paddingLeft+(r+1)*d,h-this.paddingBottom+5),i.textAlign="center";var f=this.xAxis[r];i.fillText(f,this.paddingLeft+(r+1)*d-d/2,h-this.paddingBottom+20),i.lineTo(this.paddingLeft+(r+1)*d,h-this.paddingBottom),i.stroke(),i.globalAlpha=.2,i.lineTo(this.paddingLeft+(r+1)*d,this.paddingTop),i.stroke()}i.globalAlpha=.4;var v=(d-16)/this.group.length,y=0;for(var m in this.group){y++;for(var b=this.group[m].length/this.xAxis.length,T=this.xAxis.length,g=0;T>g;g++){i.strokeStyle=this.color[0];for(var u=h-this.paddingBottom,r=0;b>r;r++){i.beginPath(),i.lineWidth=1,i.moveTo(this.paddingLeft+8+g*d+v*(y-1),u),i.lineTo(this.paddingLeft+8+g*d+v*y,u);var x=(h-this.paddingTop-this.paddingBottom)/(6*this.distance),k=this.group[m][g+6*r]*x;i.lineTo(this.paddingLeft+8+g*d+v*y,u-k),i.lineTo(this.paddingLeft+8+g*d+v*(y-1),u-k),u-=k,i.closePath(),i.stroke(),i.fillStyle=this.color[r],i.fill()}}}}.bind(this))},a.prototype.draw=function(){var t=this.context,i=t.canvas,e=i.offsetHeight,a=i.offsetWidth;t.textAlign="center",t.globalAlpha=.6,t.fillText(this.title,a/2,this.paddingTop/2),t.strokeStyle="black",t.globalAlpha=.6,t.lineWidth=2,t.beginPath(),t.moveTo(this.paddingLeft,this.paddingTop),t.lineTo(this.paddingLeft,e-this.paddingBottom),t.lineTo(a-this.paddingRight,e-this.paddingBottom),t.stroke();for(var s=(e-this.paddingBottom-this.paddingTop)/6,h=0;6>=h;h++){t.globalAlpha=1,t.beginPath(),t.lineWidth=.5,t.moveTo(this.paddingTop-5,this.paddingTop+h*s),t.textAlign="right";var o=this.distance*(6-h);t.fillText(o+this.yAxis,this.paddingTop-5,this.paddingTop+5+h*s),t.lineTo(this.paddingLeft,this.paddingTop+h*s),t.stroke(),t.globalAlpha=.2,t.lineTo(a-this.paddingTop,this.paddingTop+h*s),t.stroke()}s=(a-this.paddingBottom-this.paddingTop)/this.xAxis.length;for(var h=0;h<this.xAxis.length;h++){t.globalAlpha=1,t.beginPath(),t.lineWidth=.5,t.moveTo(this.paddingLeft+(h+1)*s,e-this.paddingBottom+5),t.textAlign="center";var o=this.xAxis[h];t.fillText(o,this.paddingLeft+(h+1)*s-s/2,e-this.paddingBottom+20),t.lineTo(this.paddingLeft+(h+1)*s,e-this.paddingBottom),t.stroke(),t.globalAlpha=.2,t.lineTo(this.paddingLeft+(h+1)*s,this.paddingTop),t.stroke()}t.globalAlpha=.4;var l=(s-16)/this.group.length,n=0;for(var d in this.group){n++;for(var r=this.group[d].length/this.xAxis.length,g=this.xAxis.length,p=0;g>p;p++){t.strokeStyle=this.color[0];for(var c=e-this.paddingBottom,h=0;r>h;h++){t.beginPath(),t.lineWidth=1,t.moveTo(this.paddingLeft+8+p*s+l*(n-1),c),t.lineTo(this.paddingLeft+8+p*s+l*n,c);var f=(e-this.paddingBottom-this.paddingTop)/(6*this.distance),v=this.group[d][p+6*h]*f;t.lineTo(this.paddingLeft+8+p*s+l*n,c-v),t.lineTo(this.paddingLeft+8+p*s+l*(n-1),c-v),c-=v,t.closePath(),t.stroke(),t.fillStyle=this.color[h],t.fill()}}}return this.addEvent(i,t),this},a.prototype.configMessage=function(t){var i=this.message,e=0,a=[];this.data=this.data.sort(n("type"));for(var s=0;s<this.data.length-1;s++)this.data[s+1].type==this.data[s].type?this.message=this.message+"<br/>"+i:(a[e++]=this.data[s].type,this.message=this.message+"<br/>{{type}}<br/>"+i);a[e++]=this.data[this.data.length-1].type;for(var s=0;s<this.data.length;s++)this.message=this.message.replace(/{{name}}/,this.data[s].name);this.message="{{xAxis}}<br/>{{type}}<br/>"+this.message;for(var s=0;e>s;s++)this.message=this.message.replace(/{{type}}/,a[s])},s.prototype=o(t.prototype),s.constructor=s,s.prototype.draw=function(){var t=this.context,i=t.canvas,e=i.offsetHeight,a=i.offsetWidth;t.textAlign="center",t.globalAlpha=.6,t.fillText(this.title,a/2,this.paddingTop/2),t.strokeStyle="black",t.globalAlpha=.6,t.lineWidth=2,t.beginPath(),t.moveTo(this.paddingLeft,this.paddingTop),t.lineTo(this.paddingLeft,e-this.paddingBottom),t.lineTo(a-this.paddingLeft,e-this.paddingBottom),t.stroke();for(var s=(e-this.paddingBottom-this.paddingTop)/6,h=0;6>=h;h++){t.globalAlpha=1,t.beginPath(),t.lineWidth=.5,t.moveTo(this.paddingLeft-5,this.paddingTop+h*s),t.textAlign="right";var o=this.distance*(6-h);t.fillText(o+this.yAxis,55,this.paddingTop+5+h*s),t.lineTo(this.paddingLeft,this.paddingTop+h*s),t.stroke(),t.globalAlpha=.2,t.lineTo(a-this.paddingLeft,this.paddingTop+h*s),t.stroke()}s=(a-this.paddingBottom-this.paddingTop)/this.xAxis.length;for(var h=0;h<this.xAxis.length;h++){t.globalAlpha=1,t.beginPath(),t.lineWidth=.5,t.moveTo(this.paddingLeft+(h+1)*s,e-this.paddingBottom+5),t.textAlign="center";var o=this.xAxis[h];t.fillText(o,this.paddingLeft+(h+1)*s,e+20-this.paddingBottom),t.lineTo(this.paddingLeft+(h+1)*s,e-this.paddingBottom),t.stroke(),t.globalAlpha=.2,t.lineTo(this.paddingLeft+(h+1)*s,this.paddingBottom),t.stroke()}t.globalAlpha=.75;for(var h=0;h<this.data.length;h++)if(this.data[h].curve)for(var l=0;l<this.data[h].value.length;l++){t.beginPath();var n=(e-this.paddingBottom-this.paddingTop)*this.data[h].value[l]/this.max;n=e-this.paddingBottom-n;var d=(e-this.paddingBottom-this.paddingTop)*this.data[h].value[l+1]/this.max;d=e-this.paddingBottom-d,t.moveTo(this.paddingLeft+(l+1)*s,n),t.bezierCurveTo(this.paddingLeft+(l+1)*s+16,n,this.paddingLeft+(l+2)*s-16,d,this.paddingLeft+(l+2)*s,d),t.strokeStyle=this.color[h],t.stroke(),t.beginPath(),t.arc(this.paddingLeft+(l+1)*s,n,3,0,2*Math.PI),t.stroke()}else for(var l=0;l<this.data[h].value.length;l++){t.beginPath();var n=(e-this.paddingBottom-this.paddingTop)*this.data[h].value[l]/this.max;n=e-this.paddingBottom-n;var d=(e-this.paddingBottom-this.paddingTop)*this.data[h].value[l+1]/this.max;d=e-this.paddingBottom-d,t.moveTo(this.paddingLeft+(l+1)*s,n),t.lineTo(this.paddingBottom+(l+2)*s,d),t.strokeStyle=this.color[h],t.stroke(),t.beginPath(),t.arc(this.paddingLeft+(l+1)*s,n,3,0,2*Math.PI),t.stroke()}this.addEvent(i,t)},s.prototype.addEvent=function(t,i){var e=document.createElement("div");e.style.padding="10px",e.style.color="white",e.style.backgroundColor="rgba(0,0,0,0.45)",e.style.display="none",document.body.appendChild(e),t.addEventListener("mousemove",function(t){var i=l(t),a=this.context,s=a.canvas,h=s.offsetHeight,o=s.offsetWidth;a.clearRect(0,0,99999,99999),a.textAlign="center",a.globalAlpha=.6,a.fillText(this.title,o/2,this.paddingTop/2),a.strokeStyle="black",a.globalAlpha=.6,a.lineWidth=2,a.beginPath(),a.moveTo(this.paddingLeft,this.paddingTop),a.lineTo(this.paddingLeft,h-this.paddingBottom),a.lineTo(o-this.paddingRight,h-this.paddingBottom),a.stroke();for(var n=(h-this.paddingBottom-this.paddingTop)/6,d=0;6>=d;d++){a.globalAlpha=1,a.beginPath(),a.lineWidth=.5,a.moveTo(55,this.paddingTop+d*n),a.textAlign="right";var r=this.distance*(6-d);a.fillText(r+this.yAxis,55,this.paddingTop+5+d*n),a.lineTo(60,this.paddingTop+d*n),a.stroke(),a.globalAlpha=.2,a.lineTo(o-this.paddingRight,this.paddingTop+d*n),a.stroke()}n=(o-this.paddingBottom-this.paddingTop)/this.xAxis.length;for(var d=0;d<this.xAxis.length;d++){a.globalAlpha=1,a.beginPath(),a.lineWidth=.5,a.moveTo(60+(d+1)*n,h-55),a.textAlign="center";var r=this.xAxis[d];a.fillText(r,60+(d+1)*n,h-40),a.lineTo(60+(d+1)*n,h-60),a.stroke(),a.globalAlpha=.2,a.lineTo(60+(d+1)*n,this.paddingTop),a.stroke()}a.globalAlpha=.75;for(var d=0;d<this.data.length;d++)if(this.data[d].curve)for(var g=0;g<this.data[d].value.length;g++){var p;i.x>60+g*n&&i.x<60+(g+1)*n&&(p=g),i.x>60&&(a.beginPath(),a.moveTo(60+(p+1)*n,h-60),a.lineTo(60+(p+1)*n,this.paddingTop),a.strokeStyle="black",a.stroke()),a.beginPath();var c=(h-this.paddingBottom-this.paddingTop)*this.data[d].value[g]/this.max;c=h-60-c;var f=(h-this.paddingBottom-this.paddingTop)*this.data[d].value[g+1]/this.max;f=h-60-f,a.moveTo(60+(g+1)*n,c),a.bezierCurveTo(60+(g+1)*n+16,c,60+(g+2)*n-16,f,60+(g+2)*n,f),a.strokeStyle=this.color[d],a.stroke(),a.beginPath(),a.arc(60+(g+1)*n,c,3,0,2*Math.PI),a.stroke()}else for(var g=0;g<this.data[d].value.length;g++){a.beginPath();var c=(h-this.paddingBottom-this.paddingTop)*this.data[d].value[g]/this.max;c=h-60-c;var f=(h-this.paddingBottom-this.paddingTop)*this.data[d].value[g+1]/this.max;f=h-60-f,a.moveTo(60+(g+1)*n,c),a.lineTo(60+(g+2)*n,f),a.strokeStyle=this.color[d],a.stroke(),a.beginPath(),a.arc(60+(g+1)*n,c,3,0,2*Math.PI),a.stroke()}e.style.display="block",e.style.position="absolute",e.style.left=t.pageX+20+"px",e.style.top=t.pageY+20+"px";for(var v=this.message,d=0;d<this.data.length;d++)v=v.replace(/{{value}}/,this.data[d].value[p]);i.x>this.paddingLeft&&i.x<o-this.paddingRight&&i.y<h-this.paddingBottom&&i.y>this.paddingTop||(e.style.display="none"),e.innerHTML=v}.bind(this))},s.prototype.configMessage=function(t){for(var i=this.message,e=0;e<this.data.length-1;e++)this.message=this.message+"<br/>"+i;for(var e=0;e<this.data.length;e++)this.message=this.message.replace(/{{name}}/,this.data[e].name)},{init:h}}();