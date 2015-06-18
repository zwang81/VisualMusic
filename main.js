define("util",[],function(){function r(e){return n.getElementById(e)}function i(e){return e.replace(/\.[0-9a-z]+$/i,"")}function s(e,t){return Math.floor(Math.random()*(t-e)+e)}function o(){var e=n.documentElement;n.fullscreenElement||n.webkitFullscreenElement?n.cancelFullScreen?n.cancelFullScreen():n.webkitCancelFullScreen&&n.webkitCancelFullScreen():e.requestFullScreen?e.requestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}function u(t){e.removeClass(),e.addClass("bg"+t)}function a(){t.removeClass("hidden")}function f(){t.addClass("hidden")}var e=$("#background"),t=$("#visual-canvas"),n=document;return{getById:r,getRidOfExtention:i,intRandom:s,fullscreenSwitch:o,setBg:u,showCanvas:a,hideCanvas:f}}),define("analyser",["util"],function(e){function o(){return r.getByteFrequencyData(s),s}function u(){return r.fftSize}var t=e.getById("music"),n=new AudioContext,r=n.createAnalyser(),i=n.createMediaElementSource(t);r.fftSize=512;var s=new Uint8Array(r.frequencyBinCount);return i.connect(r),r.connect(n.destination),{getData:o,getFftSize:u}}),define("e0",["analyser","util"],function(e,t){function h(){i.save(),s=e.getData(),i.clearRect(0,0,r.width,r.height);for(u=0,o=s.length;u<o;u+=5){f=l[u],f.size==0?f.size=s[u]:f.size<s[u]?(f.size+=Math.floor((s[u]-f.size)/5),f.opacity=f.opacity+.02,f.opacity>1&&(f.opacity=1)):(f.size-=Math.floor((f.size-s[u])/5),s[u]==0?f.opacity=0:(f.opacity=f.opacity-.02,f.opacity<0&&(f.opacity=0,f.x=Math.random()*r.width,f.y=Math.random()*r.height)));var t=f.color.replace("0)",f.opacity+")");i.fillStyle=t,i.beginPath(),i.arc(f.x,f.y,f.size,0,2*Math.PI,!0),i.closePath(),i.fill()}i.restore()}function p(){t.setBg(0);var n,i=e.getFftSize()/2,s=r.width,o=r.height,u=c.length;for(n=0;n<i;n++)l[n]={x:Math.random()*s,y:Math.random()*o,color:"rgba("+c[Math.floor(Math.random()*u)]+", 0)",size:0,opacity:Math.random()+.2};a=!0}function d(){return a}function v(){t.showCanvas()}function m(){t.hideCanvas()}var n="e0.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o=0,u=0,a=!1,f,l=[],c=["105, 210, 231","27, 103, 107","190, 242, 2","235, 229, 77","0, 205, 172","22, 147, 165","249, 212, 35","255, 78, 80","231, 32, 78","12, 202, 186","255, 0, 111"];return{draw:h,init:p,isInit:d,cover:n,enable:v,disable:m}}),define("e1",["analyser","util"],function(e,t){function h(){var t=0,n=0;s=e.getData(),i.clearRect(0,0,r.width,r.height);for(o=0;o<64;o++)u=a[o],u.h==0?u.h=s[o]:u.h<s[o]?u.h+=Math.floor((s[o]-u.h)/2):u.h-=Math.floor((u.h-s[o])/1.2),i.fillStyle="rgba("+u.color+", 0.8)",u.h*=1.8,i.fillRect(u.x,r.height-u.h,u.w,u.h),f[o]<u.h?f[o]=u.h:f[o]--,i.fillStyle=i.fillStyle.replace("0.8)","0.5)"),i.fillRect(u.x,r.height-f[o]-u.w,u.w,u.w),t+=s[o];n=Math.floor(t/64),i.fillStyle="rgba(255, 255, 255, 0.5)",i.fillRect(0,r.height-n,r.width,n),i.fillRect(r.width-n,0,n,r.height),i.fillRect(0,0,r.width,n),i.fillRect(0,0,n,r.height)}function p(){t.setBg(1);var e=r.width,n=r.height,i=l.length,s=Math.ceil(e/64);for(var o=0;o<64;o++)f[o]=0,a[o]={x:o*s,w:s,h:0,color:l[Math.floor(Math.random()*l.length)]};c=!0}function d(){return c}function v(){t.showCanvas()}function m(){t.hideCanvas()}var n="e1.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o,u,a=[],f=[],l=["157, 193, 243","245, 232, 153","226, 51, 110"],c=!1;return{draw:h,init:p,isInit:d,cover:n,enable:v,disable:m}}),define("e2",["analyser","util"],function(e,t){function d(){h=t.intRandom(0,9),h<3?(c.r=c.r+c.rS*c.rD,c.r>225?c.rD=-1:c.r<100&&(c.rD=1)):h<6?(c.g=c.g+c.gS*c.gD,c.g>225?c.gD=-1:c.g<100&&(c.gD=1)):(c.b=c.b+c.bS*c.bD,c.b>225?c.bD=-1:c.b<100&&(c.bD=1))}function v(){var t=r.width/128,n=0,h=0,p=1,v=r.height/2,m=0,g=0,y=0,b=l;s=e.getData(),i.save(),i.clearRect(0,0,r.width,r.height),d();var w=i.createLinearGradient(0,0,r.width,r.height),E=c.r,S=c.g,x=c.b;i.shadowColor="rgba("+(E+70)+", "+(S+70)+", "+(x+70)+", 1)",i.shadowBlur=f,i.strokeStyle="rgba("+E+", "+S+", "+x+", 1)",i.lineWidth=5,i.lineJoin="miter",i.miterLimit=100,i.beginPath(),i.moveTo(0,v);if(a==0){a=Math.floor(Math.random()*50)+20;for(var T=0;T<128;T++)u[T]=0;g=Math.floor(Math.random()*15);for(var T=0;T<g;T++){m=Math.floor(Math.random()*15);var N=Math.floor(Math.random()*128);u[N]=1;for(var C=1;C<m;C++)u[N+C]=1}}else a--;for(var T=0;T<128;T++)h=s[T]-(100-T)*.5,h=h-80<0?0:h-80,h>v&&(h=v),u[T]==1?(o[T]-=20,o[T]<0&&(o[T]=0),h=o[T]):h-o[T]>20?(o[T]+=20,h=o[T]):o[T]=h,h=h*p+v,i.lineTo(n,h),y+=h,p=-p,n+=t;l=y/128,b>l?f--:f++,i.lineTo(r.width,v),i.stroke(),i.restore()}function m(){t.setBg(2);for(var e=0;e<256;e++)o[e]=0;c={r:100,g:100,b:100,rS:t.intRandom(1,3),gS:t.intRandom(1,3),bS:t.intRandom(1,3),rD:1,gD:1,bD:1},p=!0}function g(){return p}function y(){t.showCanvas()}function b(){t.hideCanvas()}var n="e2.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o=[],u=[],a=0,f=0,l=0,c=null,h,p=!1;return{draw:v,init:m,isInit:g,cover:n,enable:y,disable:b}}),define("e3",["analyser","util"],function(e,t){function c(){i.save();var t=0,n=a;s=e.getData(),i.clearRect(0,0,r.width,r.height);for(var f=0;f<s.length;f++)t+=s[f];a=t/s.length;var l=a-n,c=Math.abs(l);for(var f=0,h=o.length;f<h;f+=2){var p=o[f];l>0?(p.r+=c/10,p.r>p.maxR&&(p.r-=(p.r-p.maxR)/5),p.o+=.05,p.o>1&&(p.o=1)):(p.r-=c/5,p.r<0&&(p.r=.01),p.r<p.minR&&(p.r+=(p.minR-p.r)/10),p.o-=.05,p.o<p.minO&&(p.o=p.minO)),u+=1e-4,p.y+=Math.cos(u+p.d)-2,p.x+=Math.sin(u+p.d),p.x>r.width+5?(p.x=-5,p.d=Math.random()*50):p.x<-5?(p.x=r.width+5,p.d=Math.random()*50):p.y<0&&(p.y=r.height+5,p.d=Math.random()*50);var d=i.createRadialGradient(p.x,p.y,2,p.x,p.y,p.r+3);d.addColorStop(0,"rgba(255, 255, 255, "+p.o+")"),d.addColorStop(1,"rgba("+p.c+", 0)"),i.fillStyle=d,i.beginPath(),i.moveTo(p.x,p.y),i.arc(p.x,p.y,p.r+3,0,Math.PI*2,!0),i.closePath(),i.fill()}var v=r.width/2,m=r.height,g=a*5;d=i.createRadialGradient(v,m,g/8,v,m,g),d.addColorStop(0,"rgba(175, 221, 255, 0.5)"),d.addColorStop(1,"rgba(76, 159, 219, 0)"),i.fillStyle=d,i.beginPath(),i.arc(v,m,g,0,Math.PI*2,!0),i.closePath(),i.fill(),i.restore()}function h(){t.setBg(3);var n=e.getFftSize()/2,i=r.width,s=r.height,u=f.length;for(var a=0;a<n;a++)o[a]={x:Math.random()*i,y:Math.random()*s,r:Math.random()*5,minR:Math.random()*5+1,maxR:Math.random()*12+5,d:Math.random()*50,c:f[t.intRandom(0,u)]},o[a].minO=o[a].o=Math.random()*.8+.2;l=!0}function p(){return l}function d(){t.showCanvas()}function v(){t.hideCanvas()}var n="e3.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o=[],u=0,a=0,f=["105, 210, 231","255, 255, 255","248, 37, 77","248, 225, 16"],l=!1;return{draw:c,init:h,isInit:p,cover:n,enable:d,disable:v}}),define("e4",["analyser","util"],function(e,t){function d(){i.save();var n=0,p=0,d={x:Math.floor(r.width/2),y:Math.floor(r.height/2)};s=e.getData(),i.clearRect(0,0,r.width,r.height);for(var v=0,m=s.length;v<m;v+=10)p+=s[v];n=p/m*10,i.fillStyle=o,i.beginPath(),i.arc(d.x,d.y,n,0,l,!0),i.closePath(),i.fill(),i.lineWidth=4;for(var v=0,m=h.length,g=r.width/1.5;v<m;v++){var y=h[v];if(y.a==0)continue;i.strokeStyle=y.c,i.beginPath(),i.arc(d.x,d.y,y.r,0,l,!0),i.closePath(),i.stroke(),y.r+=u,y.r>g&&(y.a=0)}if(n<f){if(a>2){for(var v=0,m=h.length;v<m;v++)if(h[v].a==0){h[v].c=o,h[v].r=n,h[v].a=1;break}}else a>0&&(o=c[t.intRandom(0,c.length)]);a=0}else a++;f=n,i.restore()}function v(){t.setBg(4),o=c[t.intRandom(0,c.length)];for(var e=0;e<10;e++)h[e]={c:"",r:0,a:0};p=!0}function m(){return p}function g(){t.showCanvas()}function y(){t.hideCanvas()}var n="e4.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o,u=20,a=0,f=0,l=2*Math.PI,c=["#fd2700","#64d700","fdfb00","#8314fd","#b8009c","#fa60fd","#fa0000","#e64200","#0093f0","#fda0c0"],h=[],p=!1;return{draw:d,init:v,isInit:m,cover:n,enable:g,disable:y}}),define("e5",["analyser","util"],function(e,t){function y(){this.x=Math.round(Math.random()*r.width),this.y=Math.round(Math.random()*r.height),this.rad=Math.round(Math.random()*10)+15,this.rgba=a[t.intRandom(0,5)],this.vx=Math.round(Math.random()*3)-1.5,this.vy=Math.round(Math.random()*3)-1.5}function b(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function w(){i.save(),s=e.getData(),p=s.length/2,i.clearRect(0,0,r.width,r.height),i.globalCompositeOperation="lighter",i.linewidth=.5;for(c=0,v=0;c<p;c++)v+=s[c];m=v/p;for(c=0;c<p;c++){f=o[c],d=1;for(h=0;h<p;h++)l=o[h],f.rgba==l.rgba&&b(f,l)<m&&(i.strokeStyle=f.rgba,i.beginPath(),i.moveTo(f.x,f.y),i.lineTo(l.x,l.y),i.stroke(),d+=.6);i.fillStyle=f.rgba,i.strokeStyle=f.rgba,i.beginPath(),i.arc(f.x,f.y,f.rad*d,0,Math.PI*2,!0),i.fill(),i.closePath(),i.beginPath(),i.arc(f.x,f.y,(f.rad+5)*d,0,Math.PI*2,!0),i.stroke(),i.closePath(),f.x+=f.vx,f.y+=f.vy,f.x>r.width+f.rad&&(f.x=0),f.x<-f.rad&&(f.x=r.width),f.y>r.height+f.rad&&(f.y=0),f.y<-f.rad&&(f.y=r.height)}i.restore()}function E(){t.setBg(5);for(var e=0;e<u;e++)o.push(new y);g=!0}function S(){return g}function x(){t.showCanvas()}function T(){t.hideCanvas()}var n="e5.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o=[],u=e.getFftSize()/4,a=["#f35d4f","#f36849","#c0d988","#6ddaf1","#f1e85b"],f,l,c,h,p,d,v,m,g=!1;return{draw:w,init:E,isInit:S,cover:n,enable:x,disable:T}}),define("e6",["analyser","util"],function(e,t){function v(){this.c=a[t.intRandom(0,a.length)],this.a=c,c>0&&(c-=4)}function m(){i.save(),s=e.getData(),l=s.length/2-32;var t=r.width/12;p=t,i.clearRect(0,0,r.width,r.height);for(f=16;f<l;f+=4)i.fillStyle=o[f].c,h=s[f]+o[f].a,i.fillRect(0,r.height-h,p,h),p<r.width&&(p+=t);i.restore()}function g(){t.setBg(6);for(f=0;f<u;f++)o.push(new v);d=!0}function y(){return d}function b(){t.showCanvas()}function w(){t.hideCanvas()}var n="e6.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o=[],u=e.getFftSize()/2,a=["rgba(217, 54, 57, 0.8)","rgba(247, 209, 74, 0.8)","rgba(166, 235, 54, 0.8)","rgba(66, 215, 237, 0.8)","rgba(44, 126, 225, 0.8)","rgba(173, 81, 224, 0.8)"],f,l,c=300,h,p,d=!1;return{draw:m,init:g,isInit:y,cover:n,enable:b,disable:w}}),define("e7",["analyser","util"],function(e,t){function g(){i.save(),s=e.getData(),l=c,a=r.width/2,f=r.height/2,i.clearRect(0,0,r.width,r.height),i.globalCompositeOperation="lighter",i.strokeStyle=m,i.lineWidth=10,h=0;for(o=12;o<u;o+=2)l+=.2,i.beginPath(),i.moveTo(a+s[o]*Math.sin(l),f+s[o]*Math.cos(l)),i.lineTo(a+s[o]*Math.sin(l+v),f+s[o]*Math.cos(l+v)),i.lineTo(a+s[o]*Math.sin(l+v*2),f+s[o]*Math.cos(l+v*2)),i.closePath(),i.stroke(),h+=s[o];c=(c+1e-5*h)%d,i.restore()}function y(){t.setBg(7),initOrNot=!0}function b(){return initOrNot}function w(){t.showCanvas()}function E(){t.hideCanvas()}var n="e7.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o,u,a,f,l,c=0,h,u=e.getFftSize()/16,p=50,d=2*Math.PI,v=d/3,m="rgba(186, 135, 72, 0.5)";return initOrNot=!1,{draw:g,init:y,isInit:b,cover:n,enable:w,disable:E}}),define("e8",["analyser","util"],function(e,t){function b(){i.save(),s=e.getData(),o=r.width,u=r.height,c=u/2,i.clearRect(0,0,o,u);for(a=0;a<m;a++)v[a]=s[a]*d[a];i.shadowColor="#fffa47",i.shadowBlur=15,i.strokeStyle=g,i.lineWidth=2,i.beginPath(),f=0,l=Math.ceil(o/m),i.moveTo(f,c);for(a=1;a<m-2;a++)h=(f+f+l)/2,p=c-(v[a]+v[a+1])/2,i.quadraticCurveTo(f,c-v[a],h,p),f+=l;i.quadraticCurveTo(f,c-v[a],f+l,c-v[a+1]),i.stroke(),i.restore()}function w(){t.setBg(8);var e=Math.random()*.1+.05,n=0,r=0;d[0]=Math.sin(n);for(a=1;a<m;a++){d[a]=Math.sin(n);if(d[a-1]>0&&d[a]<0||d[a-1]<0&&d[a]>0)e=Math.random()*.1+.05;n+=e}E(),y=!0}function E(){g=i.createLinearGradient(0,0,0,r.height),g.addColorStop(.1,"#ff5614"),g.addColorStop(.3,"#fffa47"),g.addColorStop(.4,"#f93b04"),g.addColorStop(.5,"#f93b04"),g.addColorStop(.6,"#fffa47"),g.addColorStop(.7,"#f93b04"),g.addColorStop(.75,"#f01800"),g.addColorStop(.8,"#fb7220"),g.addColorStop(.9,"#f93b04"),g.addColorStop(1,"#f01800")}function S(){return y}function x(){t.showCanvas()}function T(){t.hideCanvas()}var n="e8.jpg",r=t.getById("visual-canvas"),i=r.getContext("2d"),s,o,u,a,f,l,c,h,p,d=[],v=[],m=e.getFftSize()/2-20,g,y=!1;return $(window).resize(function(){E()}),{draw:b,init:w,isInit:S,cover:n,enable:x,disable:T}}),define("renderer",["util"],function(e){var t=e.getById("threed-webgl-renderer"),n=$("#threed-webgl-renderer"),r=new THREE.WebGLRenderer({alpha:!0});return r.setSize(window.innerWidth,window.innerHeight),t.appendChild(r.domElement),$(window).on("resize",function(){r.setSize(window.innerWidth,window.innerHeight)}),r.hide=function(){n.addClass("hidden")},r.show=function(){n.removeClass("hidden")},r}),define("e9",["analyser","util","renderer"],function(e,t,n){function w(){if(!i){E();return}m=e.getData(),g=m.length/2;for(l=0;l<5;l++){y=0;for(c=l*20,g=l*20+20;c<g;c++)y+=m[c];b[l]=Math.floor(y/50)}for(l=0,g=a.length;l<g;l++)a[l].size=b[l];i.position.z=1e3-b[0],v=Date.now()*5e-5,i.lookAt(s.position);for(l=0,g=s.children.length;l<g;l++){var t=s.children[l];t instanceof THREE.ParticleSystem&&(t.rotation.x=t.rotation.y=v*(l<4?l+1:-(l+1)))}for(l=0,g=a.length;l<g;l++)p=f[l][0],h=360*(p[0]+v)%360/360,a[l].color.setHSL(h,p[1],p[2]);n.render(s,i)}function E(){t.setBg(9),i=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,3e3),i.position.z=1e3,s=new THREE.Scene,s.fog=new THREE.FogExp2(0,7e-4),u=new THREE.Geometry;for(l=0;l<2e3;l++){var e=new THREE.Vector3;e.x=Math.random()*2e3-1e3,e.y=Math.random()*2e3-1e3,e.z=Math.random()*2e3-1e3,u.vertices.push(e)}f=[[[1,1,.5],5],[[.8,1,.5],4],[[.6,1,.5],3],[[.4,1,.5],2],[[.2,1,.5],1]];for(l=0;l<f.length;l++)p=f[l][0],d=f[l][1],a[l]=new THREE.ParticleSystemMaterial({size:d,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0}),o=new THREE.ParticleSystem(u,a[l]),o.rotation.x=Math.random()*6,o.rotation.y=Math.random()*6,o.rotation.z=Math.random()*6,s.add(o);initOrNot=!0}function S(){return initOrNot}function x(){n.show()}function T(){n.hide()}var r="e9.jpg",i,s,o,u,a=[],f,l,c,h,p,d,v,m,g,y,b=[];return initOrNot=!1,{draw:w,init:E,isInit:S,cover:r,enable:x,disable:T}}),define("e10",["analyser","util","renderer"],function(e,t,n){function b(){if(!a){w();return}v=e.getData(),m=v.length/4,g=0;for(h=0;h<m;h++)g+=v[h];y=Math.floor(g/m);var t=Date.now()*5e-5;p=360*(1+t)%360/360,a.color.setHSL(p,1,.8),p=(p+.2)%1,c.color.setHSL(p,1,.8),c.size=y/5,o.rotation.x+=.01,f.rotation.y+=y*2e-4,f.rotation.x+=y*2e-4,f.rotation.z+=y*2e-4,f.position.z=y,n.render(s,i)}function w(){t.setBg(10),i=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,3e3),i.position.z=1e3,s=new THREE.Scene,u=new THREE.Geometry,d=THREE.ImageUtils.loadTexture("img/spark1.png"),a=new THREE.ParticleSystemMaterial({size:25,sizeAttenuation:!1,map:d,transparent:!0,blending:THREE.AdditiveBlending,depthTest:!1}),a.color.setHSL(1,1,1);for(h=0;h<1e3;h++){var e=new THREE.Vector3;e.x=Math.random()*3e3-1500,e.y=Math.random()*3e3-1500,e.z=Math.random()*2e3-1e3,u.vertices.push(e)}o=new THREE.ParticleSystem(u,a),o.sortParticles=!0,s.add(o),l=new THREE.Geometry,c=new THREE.ParticleSystemMaterial({size:20,sizeAttenuation:!1,map:d,transparent:!0,blending:THREE.AdditiveBlending,depthTest:!1}),c.color.setHSL(.3,.8,.5);for(h=0;h<1e3;h++){var e=new THREE.Vector3;e.x=Math.random()*500-250,e.y=Math.random()*500-250,e.z=Math.random()*500-250,l.vertices.push(e)}f=new THREE.ParticleSystem(l,c),f.sortParticles=!0,s.add(f),initOrNot=!0}function E(){return initOrNot}function S(){n.show()}function x(){n.hide()}var r="e10.jpg",i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;return initOrNot=!1,{draw:b,init:w,isInit:E,cover:r,enable:S,disable:x}}),define("effect",["util","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","e10"],function(e){function d(){f=!1,s||m(i),y()}function v(){localStorage.effect=i}function m(e){s&&(s.disable(),g()),i=e,s=o[e],s.enable(),d()}function g(){p&&h(p),f=!0}function y(){f!=1&&(h(p),p=c(y)),s.isInit()===!1?s.init():s.draw()}function b(){i++,i%=o.length,m(i),e.setBg(i)}function w(){i--,i==-1&&(i=o.length-1),m(i),e.setBg(i)}function E(){t.width=window.innerWidth,t.height=window.innerHeight}var t=e.getById("visual-canvas"),n=$("#effect-list"),r="",i=0,s=null,o=[],u=0,a=30,f=!0,l=0,c=window.requestAnimationFrame,h=window.cancelAnimationFrame,p=null;localStorage.effect&&(i=+localStorage.effect);for(u=1,l=arguments.length;u<l;u++)o[u-1]=arguments[u],r+='<li><img  num="'+(u-1)+'" src="img/'+o[u-1].cover+'"></li>';return n.html(r),n.on("click","li img",function(){m($(this).attr("num")),e.setBg(i)}),E(),$(window).on("resize",function(){E()}),{beginDraw:d,next:b,pre:w,saveSetting:v,stopDraw:g}}),require(["util","effect"],function(e,t){function S(e){var n=URL.createObjectURL(e);h.text(""),a.removeClass("hidden"),o.addClass("hidden"),p.src=n,p.play(),t.beginDraw()}function x(t){var n=t.length,i=m.length,s="",o=0,u=-1;for(var a=0;a<n;a++)if(t[a].type.indexOf("audio")==0){var f=e.getRidOfExtention(t[a].name);typeof g[f]=="undefined"?(g[f]=m.length,m.push(t[a]),s+='<li num="'+(m.length-1)+'">'+f+"</li>",o++):u=g[f]}o>0?(r.append(s),P(i)):u!=-1&&P(u)}function T(){b=(b+1)%3,f.removeClass();switch(b){case 0:break;case 1:f.addClass("rand");break;case 2:f.addClass("single")}}function N(e){e.stopPropagation(),e.preventDefault()}function C(e){e.stopPropagation(),e.preventDefault(),x(e.dataTransfer.files)}function k(){switch(b){case 0:L();break;case 1:O(e.intRandom(0,m.length-1));break;case 2:p.play()}}function L(){var e=m.length,t=d;e!=0&&(t++,t%=e,P(t))}function A(){var e=m.length,t=d;e!=0&&(t--,t==-1&&(t=e-1),P(t))}function O(e){P(e)}function M(){p.paused==1?p.play():p.pause()}function _(){localStorage.playMode=b,t.saveSetting()}function D(){if(localStorage.playMode){b=+localStorage.playMode,f.removeClass();switch(b){case 1:f.addClass("rand");break;case 2:f.addClass("single")}}}function P(e){d!=e&&(H(),d=e,S(m[d]),r.find("li").each(function(){if(+$(this).attr("num")==e){$(this).addClass("playing");var t=$(this).text();$("title").text(t),l.text(t),c!==null&&(clearTimeout(c),l.removeClass("showAndHide"),l[0].offsetWidth=l[0].offsetWidth),l.addClass("showAndHide"),c=setTimeout(function(){c=null,l.removeClass("showAndHide")},15e3)}else $(this).removeClass("playing")}))}function H(){t.stopDraw(),p.pause()}var n=$("body"),r=$("#file-list"),i=$("#file-list-wrapper"),s=$("#effect-list-wrapper"),o=$("#help-wrapper"),u=$("#input-file"),a=$("#music"),f=$("#play-mode"),l=$("#song-name"),c=null,h=$("#title"),p=e.getById("music"),d=-1,v=document,m=[],g={},y=e.getById("input-file"),b=0,w=new FileReader,E=null;D(),n.on("click","#help-btn",function(){$("#help").fadeIn("fast");var e=$("#help img").first(),t=e.attr("data-src");e.attr("src",t)}).on("click","#help",function(){$(this).fadeOut("fast")}).on("click","#title",function(){u.click()}).on("click","#play-mode",function(){T()}).on("click","#fullscreen",function(){e.fullscreenSwitch()}),v.addEventListener("drop",function(e){C(e)},!1),v.addEventListener("dragenter",N,!1),v.addEventListener("dragexit",N,!1),v.addEventListener("dragover",N,!1),p.addEventListener("ended",function(){k()},!1),n.on("click","#file-list li",function(){var e=$(this).attr("num");O(+e)}).on("contextmenu",function(e){e.preventDefault(),i.css("left")!="0px"?(i.css({left:"0"}),s.css({right:"0"})):(i.css({left:"-200px"}),s.css({right:"-200px"}))}),v.addEventListener("keydown",function(e){switch(e.keyCode){case 32:M();break;case 37:t.pre();break;case 39:t.next();break;case 38:A();break;case 40:L()}},!1),$(window).on("beforeunload",function(){_()}),u.on("change",function(e){x(y.files)})}),define("main",function(){});