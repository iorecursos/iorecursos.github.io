!function(t){"use strict";var n=2e3,i={s:1,n:0,d:1};function s(t){function n(){var n=Error.apply(this,arguments);n.name=this.name=t,this.stack=n.stack,this.message=n.message}function i(){}return i.prototype=Error.prototype,n.prototype=new i,n}var r=f.DivisionByZero=s("DivisionByZero"),e=f.InvalidParameter=s("InvalidParameter");function h(t,n){return isNaN(t=parseInt(t,10))&&o(),t*n}function o(){throw new e}var a=function(t,n){var s,e=0,a=1,u=1,f=0,d=0,c=0,N=1,l=1,w=0,p=1,v=1,M=1,b=1e7;if(null==t);else if(void 0!==n)u=(e=t)*(a=n);else switch(typeof t){case"object":"d"in t&&"n"in t?(e=t.n,a=t.d,"s"in t&&(e*=t.s)):0 in t?(e=t[0],1 in t&&(a=t[1])):o(),u=e*a;break;case"number":if(t<0&&(u=t,t=-t),t%1==0)e=t;else if(t>0){for(t>=1&&(t/=l=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));p<=b&&M<=b;){if(t===(s=(w+v)/(p+M))){p+M<=b?(e=w+v,a=p+M):M>p?(e=v,a=M):(e=w,a=p);break}t>s?(w+=v,p+=M):(v+=w,M+=p),p>b?(e=v,a=M):(e=w,a=p)}e*=l}else(isNaN(t)||isNaN(n))&&(a=e=NaN);break;case"string":if(null===(p=t.match(/\d+|./g))&&o(),"-"===p[w]?(u=-1,w++):"+"===p[w]&&w++,p.length===w+1?d=h(p[w++],u):"."===p[w+1]||"."===p[w]?("."!==p[w]&&(f=h(p[w++],u)),(++w+1===p.length||"("===p[w+1]&&")"===p[w+3]||"'"===p[w+1]&&"'"===p[w+3])&&(d=h(p[w],u),N=Math.pow(10,p[w].length),w++),("("===p[w]&&")"===p[w+2]||"'"===p[w]&&"'"===p[w+2])&&(c=h(p[w+1],u),l=Math.pow(10,p[w+1].length)-1,w+=3)):"/"===p[w+1]||":"===p[w+1]?(d=h(p[w],u),N=h(p[w+2],1),w+=3):"/"===p[w+3]&&" "===p[w+1]&&(f=h(p[w],u),d=h(p[w+2],u),N=h(p[w+4],1),w+=5),p.length<=w){u=e=c+(a=N*l)*f+l*d;break}default:o()}if(0===a)throw new r;i.s=u<0?-1:1,i.n=Math.abs(e),i.d=Math.abs(a)};function u(t,n){if(!t)return n;if(!n)return t;for(;;){if(!(t%=n))return n;if(!(n%=t))return t}}function f(t,n){if(!(this instanceof f))return new f(t,n);a(t,n),t=f.REDUCE?u(i.d,i.n):1,this.s=i.s,this.n=i.n/t,this.d=i.d/t}f.REDUCE=1,f.prototype={s:1,n:0,d:1,abs:function(){return new f(this.n,this.d)},neg:function(){return new f(-this.s*this.n,this.d)},add:function(t,n){return a(t,n),new f(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(t,n){return a(t,n),new f(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(t,n){return a(t,n),new f(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(t,n){return a(t,n),new f(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return new f(this)},mod:function(t,n){return isNaN(this.n)||isNaN(this.d)?new f(NaN):void 0===t?new f(this.s*this.n%this.d,1):(a(t,n),0===i.n&&0===this.d&&f(0,0),new f(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d))},gcd:function(t,n){return a(t,n),new f(u(i.n,this.n)*u(i.d,this.d),i.d*this.d)},lcm:function(t,n){return a(t,n),0===i.n&&0===this.n?new f:new f(i.n*this.n,u(i.n,this.n)*u(i.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):new f(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):new f(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new f(NaN):new f(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return new f(this.s*this.d,this.n)},pow:function(t){return t<0?new f(Math.pow(this.s*this.d,-t),Math.pow(this.n,-t)):new f(Math.pow(this.s*this.n,t),Math.pow(this.d,t))},equals:function(t,n){return a(t,n),this.s*this.n*i.d==i.s*i.n*this.d},compare:function(t,n){a(t,n);var s=this.s*this.n*i.d-i.s*i.n*this.d;return(0<s)-(s<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;var n=this.abs().toContinued();function i(t){return 1===t.length?new f(t[0]):i(t.slice(1)).inverse().add(t[0])}t=t||.001;for(var s=0;s<n.length;s++){var r=i(n.slice(0,s+1));if(r.sub(this.abs()).abs().valueOf()<t)return r.mul(this.s)}return this},divisible:function(t,n){return a(t,n),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var n,i="",s=this.n,r=this.d;return this.s<0&&(i+="-"),1===r?i+=s:(t&&(n=Math.floor(s/r))>0&&(i+=n,i+=" ",s%=r),i+=s,i+="/",i+=r),i},toLatex:function(t){var n,i="",s=this.n,r=this.d;return this.s<0&&(i+="-"),1===r?i+=s:(t&&(n=Math.floor(s/r))>0&&(i+=n,s%=r),i+="\\frac{",i+=s,i+="}{",i+=r,i+="}"),i},toContinued:function(){var t,n=this.n,i=this.d,s=[];if(isNaN(this.n)||isNaN(this.d))return s;do{s.push(Math.floor(n/i)),t=n%i,n=i,i=t}while(1!==n);return s},toString:function(t){var i,s=this.n,r=this.d;if(isNaN(s)||isNaN(r))return"NaN";f.REDUCE||(s/=i=u(s,r),r/=i),t=t||15;var e=function(t,i){for(;i%2==0;i/=2);for(;i%5==0;i/=5);if(1===i)return 0;for(var s=10%i,r=1;1!==s;r++)if(s=10*s%i,r>n)return 0;return r}(0,r),h=function(t,n,i){for(var s=1,r=function(t,n,i){for(var s=1;n>0;t=t*t%i,n>>=1)1&n&&(s=s*t%i);return s}(10,i,n),e=0;e<300;e++){if(s===r)return e;s=10*s%n,r=10*r%n}return 0}(0,r,e),o=-1===this.s?"-":"";if(o+=s/r|0,s%=r,(s*=10)&&(o+="."),e){for(var a=h;a--;)o+=s/r|0,s%=r,s*=10;o+="(";for(a=e;a--;)o+=s/r|0,s%=r,s*=10;o+=")"}else for(a=t;s&&a--;)o+=s/r|0,s%=r,s*=10;return o}},"function"==typeof define&&define.amd?define([],function(){return f}):"object"==typeof exports?(Object.defineProperty(exports,"__esModule",{value:!0}),f.default=f,f.Fraction=f,module.exports=f):t.Fraction=f}(this)