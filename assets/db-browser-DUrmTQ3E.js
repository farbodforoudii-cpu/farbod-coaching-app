var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bn(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var tr={},ct={},Rr;function gn(){if(Rr)return ct;Rr=1,ct.byteLength=h,ct.toByteArray=w,ct.fromByteArray=de;for(var y=[],g=[],S=typeof Uint8Array<"u"?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",N=0,ee=G.length;N<ee;++N)y[N]=G[N],g[G.charCodeAt(N)]=N;g[45]=62,g[95]=63;function F(E){var U=E.length;if(U%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var M=E.indexOf("=");M===-1&&(M=U);var Z=M===U?0:4-M%4;return[M,Z]}function h(E){var U=F(E),M=U[0],Z=U[1];return(M+Z)*3/4-Z}function oe(E,U,M){return(U+M)*3/4-M}function w(E){var U,M=F(E),Z=M[0],te=M[1],O=new S(oe(E,Z,te)),K=0,fe=te>0?Z-4:Z,V;for(V=0;V<fe;V+=4)U=g[E.charCodeAt(V)]<<18|g[E.charCodeAt(V+1)]<<12|g[E.charCodeAt(V+2)]<<6|g[E.charCodeAt(V+3)],O[K++]=U>>16&255,O[K++]=U>>8&255,O[K++]=U&255;return te===2&&(U=g[E.charCodeAt(V)]<<2|g[E.charCodeAt(V+1)]>>4,O[K++]=U&255),te===1&&(U=g[E.charCodeAt(V)]<<10|g[E.charCodeAt(V+1)]<<4|g[E.charCodeAt(V+2)]>>2,O[K++]=U>>8&255,O[K++]=U&255),O}function J(E){return y[E>>18&63]+y[E>>12&63]+y[E>>6&63]+y[E&63]}function X(E,U,M){for(var Z,te=[],O=U;O<M;O+=3)Z=(E[O]<<16&16711680)+(E[O+1]<<8&65280)+(E[O+2]&255),te.push(J(Z));return te.join("")}function de(E){for(var U,M=E.length,Z=M%3,te=[],O=16383,K=0,fe=M-Z;K<fe;K+=O)te.push(X(E,K,K+O>fe?fe:K+O));return Z===1?(U=E[M-1],te.push(y[U>>2]+y[U<<4&63]+"==")):Z===2&&(U=(E[M-2]<<8)+E[M-1],te.push(y[U>>10]+y[U>>4&63]+y[U<<2&63]+"=")),te.join("")}return ct}var Tt={};var Sr;function xn(){return Sr||(Sr=1,Tt.read=function(y,g,S,G,N){var ee,F,h=N*8-G-1,oe=(1<<h)-1,w=oe>>1,J=-7,X=S?N-1:0,de=S?-1:1,E=y[g+X];for(X+=de,ee=E&(1<<-J)-1,E>>=-J,J+=h;J>0;ee=ee*256+y[g+X],X+=de,J-=8);for(F=ee&(1<<-J)-1,ee>>=-J,J+=G;J>0;F=F*256+y[g+X],X+=de,J-=8);if(ee===0)ee=1-w;else{if(ee===oe)return F?NaN:(E?-1:1)*(1/0);F=F+Math.pow(2,G),ee=ee-w}return(E?-1:1)*F*Math.pow(2,ee-G)},Tt.write=function(y,g,S,G,N,ee){var F,h,oe,w=ee*8-N-1,J=(1<<w)-1,X=J>>1,de=N===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=G?0:ee-1,U=G?1:-1,M=g<0||g===0&&1/g<0?1:0;for(g=Math.abs(g),isNaN(g)||g===1/0?(h=isNaN(g)?1:0,F=J):(F=Math.floor(Math.log(g)/Math.LN2),g*(oe=Math.pow(2,-F))<1&&(F--,oe*=2),F+X>=1?g+=de/oe:g+=de*Math.pow(2,1-X),g*oe>=2&&(F++,oe/=2),F+X>=J?(h=0,F=J):F+X>=1?(h=(g*oe-1)*Math.pow(2,N),F=F+X):(h=g*Math.pow(2,X-1)*Math.pow(2,N),F=0));N>=8;y[S+E]=h&255,E+=U,h/=256,N-=8);for(F=F<<N|h,w+=N;w>0;y[S+E]=F&255,E+=U,F/=256,w-=8);y[S+E-U]|=M*128}),Tt}var Tr;function kn(){return Tr||(Tr=1,(function(y){const g=gn(),S=xn(),G=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;y.Buffer=h,y.SlowBuffer=O,y.INSPECT_MAX_BYTES=50;const N=2147483647;y.kMaxLength=N,h.TYPED_ARRAY_SUPPORT=ee(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ee(){try{const s=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(s,t),s.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function F(s){if(s>N)throw new RangeError('The value "'+s+'" is invalid for option "size"');const t=new Uint8Array(s);return Object.setPrototypeOf(t,h.prototype),t}function h(s,t,n){if(typeof s=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return X(s)}return oe(s,t,n)}h.poolSize=8192;function oe(s,t,n){if(typeof s=="string")return de(s,t);if(ArrayBuffer.isView(s))return U(s);if(s==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof s);if(le(s,ArrayBuffer)||s&&le(s.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(le(s,SharedArrayBuffer)||s&&le(s.buffer,SharedArrayBuffer)))return M(s,t,n);if(typeof s=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const a=s.valueOf&&s.valueOf();if(a!=null&&a!==s)return h.from(a,t,n);const u=Z(s);if(u)return u;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof s[Symbol.toPrimitive]=="function")return h.from(s[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof s)}h.from=function(s,t,n){return oe(s,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array);function w(s){if(typeof s!="number")throw new TypeError('"size" argument must be of type number');if(s<0)throw new RangeError('The value "'+s+'" is invalid for option "size"')}function J(s,t,n){return w(s),s<=0?F(s):t!==void 0?typeof n=="string"?F(s).fill(t,n):F(s).fill(t):F(s)}h.alloc=function(s,t,n){return J(s,t,n)};function X(s){return w(s),F(s<0?0:te(s)|0)}h.allocUnsafe=function(s){return X(s)},h.allocUnsafeSlow=function(s){return X(s)};function de(s,t){if((typeof t!="string"||t==="")&&(t="utf8"),!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=K(s,t)|0;let a=F(n);const u=a.write(s,t);return u!==n&&(a=a.slice(0,u)),a}function E(s){const t=s.length<0?0:te(s.length)|0,n=F(t);for(let a=0;a<t;a+=1)n[a]=s[a]&255;return n}function U(s){if(le(s,Uint8Array)){const t=new Uint8Array(s);return M(t.buffer,t.byteOffset,t.byteLength)}return E(s)}function M(s,t,n){if(t<0||s.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(s.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let a;return t===void 0&&n===void 0?a=new Uint8Array(s):n===void 0?a=new Uint8Array(s,t):a=new Uint8Array(s,t,n),Object.setPrototypeOf(a,h.prototype),a}function Z(s){if(h.isBuffer(s)){const t=te(s.length)|0,n=F(t);return n.length===0||s.copy(n,0,0,t),n}if(s.length!==void 0)return typeof s.length!="number"||Le(s.length)?F(0):E(s);if(s.type==="Buffer"&&Array.isArray(s.data))return E(s.data)}function te(s){if(s>=N)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+N.toString(16)+" bytes");return s|0}function O(s){return+s!=s&&(s=0),h.alloc(+s)}h.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==h.prototype},h.compare=function(t,n){if(le(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),le(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(t)||!h.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===n)return 0;let a=t.length,u=n.length;for(let f=0,p=Math.min(a,u);f<p;++f)if(t[f]!==n[f]){a=t[f],u=n[f];break}return a<u?-1:u<a?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,n){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return h.alloc(0);let a;if(n===void 0)for(n=0,a=0;a<t.length;++a)n+=t[a].length;const u=h.allocUnsafe(n);let f=0;for(a=0;a<t.length;++a){let p=t[a];if(le(p,Uint8Array))f+p.length>u.length?(h.isBuffer(p)||(p=h.from(p)),p.copy(u,f)):Uint8Array.prototype.set.call(u,p,f);else if(h.isBuffer(p))p.copy(u,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=p.length}return u};function K(s,t){if(h.isBuffer(s))return s.length;if(ArrayBuffer.isView(s)||le(s,ArrayBuffer))return s.byteLength;if(typeof s!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof s);const n=s.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&n===0)return 0;let u=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return tt(s).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return I(s).length;default:if(u)return a?-1:tt(s).length;t=(""+t).toLowerCase(),u=!0}}h.byteLength=K;function fe(s,t,n){let a=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,t>>>=0,n<=t))return"";for(s||(s="utf8");;)switch(s){case"hex":return pt(this,t,n);case"utf8":case"utf-8":return He(this,t,n);case"ascii":return ft(this,t,n);case"latin1":case"binary":return De(this,t,n);case"base64":return Ct(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mt(this,t,n);default:if(a)throw new TypeError("Unknown encoding: "+s);s=(s+"").toLowerCase(),a=!0}}h.prototype._isBuffer=!0;function V(s,t,n){const a=s[t];s[t]=s[n],s[n]=a}h.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<t;n+=2)V(this,n,n+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<t;n+=4)V(this,n,n+3),V(this,n+1,n+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<t;n+=8)V(this,n,n+7),V(this,n+1,n+6),V(this,n+2,n+5),V(this,n+3,n+4);return this},h.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?He(this,0,t):fe.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:h.compare(this,t)===0},h.prototype.inspect=function(){let t="";const n=y.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},G&&(h.prototype[G]=h.prototype.inspect),h.prototype.compare=function(t,n,a,u,f){if(le(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(n===void 0&&(n=0),a===void 0&&(a=t?t.length:0),u===void 0&&(u=0),f===void 0&&(f=this.length),n<0||a>t.length||u<0||f>this.length)throw new RangeError("out of range index");if(u>=f&&n>=a)return 0;if(u>=f)return-1;if(n>=a)return 1;if(n>>>=0,a>>>=0,u>>>=0,f>>>=0,this===t)return 0;let p=f-u,A=a-n;const W=Math.min(p,A),L=this.slice(u,f),$=t.slice(n,a);for(let C=0;C<W;++C)if(L[C]!==$[C]){p=L[C],A=$[C];break}return p<A?-1:A<p?1:0};function Ve(s,t,n,a,u){if(s.length===0)return-1;if(typeof n=="string"?(a=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Le(n)&&(n=u?0:s.length-1),n<0&&(n=s.length+n),n>=s.length){if(u)return-1;n=s.length-1}else if(n<0)if(u)n=0;else return-1;if(typeof t=="string"&&(t=h.from(t,a)),h.isBuffer(t))return t.length===0?-1:dt(s,t,n,a,u);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(s,t,n):Uint8Array.prototype.lastIndexOf.call(s,t,n):dt(s,[t],n,a,u);throw new TypeError("val must be string, number or Buffer")}function dt(s,t,n,a,u){let f=1,p=s.length,A=t.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(s.length<2||t.length<2)return-1;f=2,p/=2,A/=2,n/=2}function W($,C){return f===1?$[C]:$.readUInt16BE(C*f)}let L;if(u){let $=-1;for(L=n;L<p;L++)if(W(s,L)===W(t,$===-1?0:L-$)){if($===-1&&($=L),L-$+1===A)return $*f}else $!==-1&&(L-=L-$),$=-1}else for(n+A>p&&(n=p-A),L=n;L>=0;L--){let $=!0;for(let C=0;C<A;C++)if(W(s,L+C)!==W(t,C)){$=!1;break}if($)return L}return-1}h.prototype.includes=function(t,n,a){return this.indexOf(t,n,a)!==-1},h.prototype.indexOf=function(t,n,a){return Ve(this,t,n,a,!0)},h.prototype.lastIndexOf=function(t,n,a){return Ve(this,t,n,a,!1)};function Nt(s,t,n,a){n=Number(n)||0;const u=s.length-n;a?(a=Number(a),a>u&&(a=u)):a=u;const f=t.length;a>f/2&&(a=f/2);let p;for(p=0;p<a;++p){const A=parseInt(t.substr(p*2,2),16);if(Le(A))return p;s[n+p]=A}return p}function Re(s,t,n,a){return Pe(tt(t,s.length-n),s,n,a)}function Xe(s,t,n,a){return Pe(jt(t),s,n,a)}function Mt(s,t,n,a){return Pe(I(t),s,n,a)}function $t(s,t,n,a){return Pe(Dt(t,s.length-n),s,n,a)}h.prototype.write=function(t,n,a,u){if(n===void 0)u="utf8",a=this.length,n=0;else if(a===void 0&&typeof n=="string")u=n,a=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(a)?(a=a>>>0,u===void 0&&(u="utf8")):(u=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-n;if((a===void 0||a>f)&&(a=f),t.length>0&&(a<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");u||(u="utf8");let p=!1;for(;;)switch(u){case"hex":return Nt(this,t,n,a);case"utf8":case"utf-8":return Re(this,t,n,a);case"ascii":case"latin1":case"binary":return Xe(this,t,n,a);case"base64":return Mt(this,t,n,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $t(this,t,n,a);default:if(p)throw new TypeError("Unknown encoding: "+u);u=(""+u).toLowerCase(),p=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ct(s,t,n){return t===0&&n===s.length?g.fromByteArray(s):g.fromByteArray(s.slice(t,n))}function He(s,t,n){n=Math.min(s.length,n);const a=[];let u=t;for(;u<n;){const f=s[u];let p=null,A=f>239?4:f>223?3:f>191?2:1;if(u+A<=n){let W,L,$,C;switch(A){case 1:f<128&&(p=f);break;case 2:W=s[u+1],(W&192)===128&&(C=(f&31)<<6|W&63,C>127&&(p=C));break;case 3:W=s[u+1],L=s[u+2],(W&192)===128&&(L&192)===128&&(C=(f&15)<<12|(W&63)<<6|L&63,C>2047&&(C<55296||C>57343)&&(p=C));break;case 4:W=s[u+1],L=s[u+2],$=s[u+3],(W&192)===128&&(L&192)===128&&($&192)===128&&(C=(f&15)<<18|(W&63)<<12|(L&63)<<6|$&63,C>65535&&C<1114112&&(p=C))}}p===null?(p=65533,A=1):p>65535&&(p-=65536,a.push(p>>>10&1023|55296),p=56320|p&1023),a.push(p),u+=A}return ht(a)}const H=4096;function ht(s){const t=s.length;if(t<=H)return String.fromCharCode.apply(String,s);let n="",a=0;for(;a<t;)n+=String.fromCharCode.apply(String,s.slice(a,a+=H));return n}function ft(s,t,n){let a="";n=Math.min(s.length,n);for(let u=t;u<n;++u)a+=String.fromCharCode(s[u]&127);return a}function De(s,t,n){let a="";n=Math.min(s.length,n);for(let u=t;u<n;++u)a+=String.fromCharCode(s[u]);return a}function pt(s,t,n){const a=s.length;(!t||t<0)&&(t=0),(!n||n<0||n>a)&&(n=a);let u="";for(let f=t;f<n;++f)u+=Ie[s[f]];return u}function mt(s,t,n){const a=s.slice(t,n);let u="";for(let f=0;f<a.length-1;f+=2)u+=String.fromCharCode(a[f]+a[f+1]*256);return u}h.prototype.slice=function(t,n){const a=this.length;t=~~t,n=n===void 0?a:~~n,t<0?(t+=a,t<0&&(t=0)):t>a&&(t=a),n<0?(n+=a,n<0&&(n=0)):n>a&&(n=a),n<t&&(n=t);const u=this.subarray(t,n);return Object.setPrototypeOf(u,h.prototype),u};function P(s,t,n){if(s%1!==0||s<0)throw new RangeError("offset is not uint");if(s+t>n)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(t,n,a){t=t>>>0,n=n>>>0,a||P(t,n,this.length);let u=this[t],f=1,p=0;for(;++p<n&&(f*=256);)u+=this[t+p]*f;return u},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,n,a){t=t>>>0,n=n>>>0,a||P(t,n,this.length);let u=this[t+--n],f=1;for(;n>0&&(f*=256);)u+=this[t+--n]*f;return u},h.prototype.readUint8=h.prototype.readUInt8=function(t,n){return t=t>>>0,n||P(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,n){return t=t>>>0,n||P(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,n){return t=t>>>0,n||P(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,n){return t=t>>>0,n||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,n){return t=t>>>0,n||P(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=we(function(t){t=t>>>0,ae(t,"offset");const n=this[t],a=this[t+7];(n===void 0||a===void 0)&&Be(t,this.length-8);const u=n+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,f=this[++t]+this[++t]*2**8+this[++t]*2**16+a*2**24;return BigInt(u)+(BigInt(f)<<BigInt(32))}),h.prototype.readBigUInt64BE=we(function(t){t=t>>>0,ae(t,"offset");const n=this[t],a=this[t+7];(n===void 0||a===void 0)&&Be(t,this.length-8);const u=n*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],f=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+a;return(BigInt(u)<<BigInt(32))+BigInt(f)}),h.prototype.readIntLE=function(t,n,a){t=t>>>0,n=n>>>0,a||P(t,n,this.length);let u=this[t],f=1,p=0;for(;++p<n&&(f*=256);)u+=this[t+p]*f;return f*=128,u>=f&&(u-=Math.pow(2,8*n)),u},h.prototype.readIntBE=function(t,n,a){t=t>>>0,n=n>>>0,a||P(t,n,this.length);let u=n,f=1,p=this[t+--u];for(;u>0&&(f*=256);)p+=this[t+--u]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*n)),p},h.prototype.readInt8=function(t,n){return t=t>>>0,n||P(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},h.prototype.readInt16LE=function(t,n){t=t>>>0,n||P(t,2,this.length);const a=this[t]|this[t+1]<<8;return a&32768?a|4294901760:a},h.prototype.readInt16BE=function(t,n){t=t>>>0,n||P(t,2,this.length);const a=this[t+1]|this[t]<<8;return a&32768?a|4294901760:a},h.prototype.readInt32LE=function(t,n){return t=t>>>0,n||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,n){return t=t>>>0,n||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=we(function(t){t=t>>>0,ae(t,"offset");const n=this[t],a=this[t+7];(n===void 0||a===void 0)&&Be(t,this.length-8);const u=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(a<<24);return(BigInt(u)<<BigInt(32))+BigInt(n+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),h.prototype.readBigInt64BE=we(function(t){t=t>>>0,ae(t,"offset");const n=this[t],a=this[t+7];(n===void 0||a===void 0)&&Be(t,this.length-8);const u=(n<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(u)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+a)}),h.prototype.readFloatLE=function(t,n){return t=t>>>0,n||P(t,4,this.length),S.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,n){return t=t>>>0,n||P(t,4,this.length),S.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,n){return t=t>>>0,n||P(t,8,this.length),S.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,n){return t=t>>>0,n||P(t,8,this.length),S.read(this,t,!1,52,8)};function R(s,t,n,a,u,f){if(!h.isBuffer(s))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>u||t<f)throw new RangeError('"value" argument is out of bounds');if(n+a>s.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,n,a,u){if(t=+t,n=n>>>0,a=a>>>0,!u){const A=Math.pow(2,8*a)-1;R(this,t,n,a,A,0)}let f=1,p=0;for(this[n]=t&255;++p<a&&(f*=256);)this[n+p]=t/f&255;return n+a},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,n,a,u){if(t=+t,n=n>>>0,a=a>>>0,!u){const A=Math.pow(2,8*a)-1;R(this,t,n,a,A,0)}let f=a-1,p=1;for(this[n+f]=t&255;--f>=0&&(p*=256);)this[n+f]=t/p&255;return n+a},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,1,255,0),this[n]=t&255,n+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,2,65535,0),this[n]=t&255,this[n+1]=t>>>8,n+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,2,65535,0),this[n]=t>>>8,this[n+1]=t&255,n+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,4,4294967295,0),this[n+3]=t>>>24,this[n+2]=t>>>16,this[n+1]=t>>>8,this[n]=t&255,n+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,4,4294967295,0),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4};function Je(s,t,n,a,u){pe(t,a,u,s,n,7);let f=Number(t&BigInt(4294967295));s[n++]=f,f=f>>8,s[n++]=f,f=f>>8,s[n++]=f,f=f>>8,s[n++]=f;let p=Number(t>>BigInt(32)&BigInt(4294967295));return s[n++]=p,p=p>>8,s[n++]=p,p=p>>8,s[n++]=p,p=p>>8,s[n++]=p,n}function Oe(s,t,n,a,u){pe(t,a,u,s,n,7);let f=Number(t&BigInt(4294967295));s[n+7]=f,f=f>>8,s[n+6]=f,f=f>>8,s[n+5]=f,f=f>>8,s[n+4]=f;let p=Number(t>>BigInt(32)&BigInt(4294967295));return s[n+3]=p,p=p>>8,s[n+2]=p,p=p>>8,s[n+1]=p,p=p>>8,s[n]=p,n+8}h.prototype.writeBigUInt64LE=we(function(t,n=0){return Je(this,t,n,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=we(function(t,n=0){return Oe(this,t,n,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(t,n,a,u){if(t=+t,n=n>>>0,!u){const W=Math.pow(2,8*a-1);R(this,t,n,a,W-1,-W)}let f=0,p=1,A=0;for(this[n]=t&255;++f<a&&(p*=256);)t<0&&A===0&&this[n+f-1]!==0&&(A=1),this[n+f]=(t/p>>0)-A&255;return n+a},h.prototype.writeIntBE=function(t,n,a,u){if(t=+t,n=n>>>0,!u){const W=Math.pow(2,8*a-1);R(this,t,n,a,W-1,-W)}let f=a-1,p=1,A=0;for(this[n+f]=t&255;--f>=0&&(p*=256);)t<0&&A===0&&this[n+f+1]!==0&&(A=1),this[n+f]=(t/p>>0)-A&255;return n+a},h.prototype.writeInt8=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,1,127,-128),t<0&&(t=255+t+1),this[n]=t&255,n+1},h.prototype.writeInt16LE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,2,32767,-32768),this[n]=t&255,this[n+1]=t>>>8,n+2},h.prototype.writeInt16BE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,2,32767,-32768),this[n]=t>>>8,this[n+1]=t&255,n+2},h.prototype.writeInt32LE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,4,2147483647,-2147483648),this[n]=t&255,this[n+1]=t>>>8,this[n+2]=t>>>16,this[n+3]=t>>>24,n+4},h.prototype.writeInt32BE=function(t,n,a){return t=+t,n=n>>>0,a||R(this,t,n,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4},h.prototype.writeBigInt64LE=we(function(t,n=0){return Je(this,t,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=we(function(t,n=0){return Oe(this,t,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ze(s,t,n,a,u,f){if(n+a>s.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Se(s,t,n,a,u){return t=+t,n=n>>>0,u||Ze(s,t,n,4),S.write(s,t,n,a,23,4),n+4}h.prototype.writeFloatLE=function(t,n,a){return Se(this,t,n,!0,a)},h.prototype.writeFloatBE=function(t,n,a){return Se(this,t,n,!1,a)};function wt(s,t,n,a,u){return t=+t,n=n>>>0,u||Ze(s,t,n,8),S.write(s,t,n,a,52,8),n+8}h.prototype.writeDoubleLE=function(t,n,a){return wt(this,t,n,!0,a)},h.prototype.writeDoubleBE=function(t,n,a){return wt(this,t,n,!1,a)},h.prototype.copy=function(t,n,a,u){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(a||(a=0),!u&&u!==0&&(u=this.length),n>=t.length&&(n=t.length),n||(n=0),u>0&&u<a&&(u=a),u===a||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("sourceEnd out of bounds");u>this.length&&(u=this.length),t.length-n<u-a&&(u=t.length-n+a);const f=u-a;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,a,u):Uint8Array.prototype.set.call(t,this.subarray(a,u),n),f},h.prototype.fill=function(t,n,a,u){if(typeof t=="string"){if(typeof n=="string"?(u=n,n=0,a=this.length):typeof a=="string"&&(u=a,a=this.length),u!==void 0&&typeof u!="string")throw new TypeError("encoding must be a string");if(typeof u=="string"&&!h.isEncoding(u))throw new TypeError("Unknown encoding: "+u);if(t.length===1){const p=t.charCodeAt(0);(u==="utf8"&&p<128||u==="latin1")&&(t=p)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(n<0||this.length<n||this.length<a)throw new RangeError("Out of range index");if(a<=n)return this;n=n>>>0,a=a===void 0?this.length:a>>>0,t||(t=0);let f;if(typeof t=="number")for(f=n;f<a;++f)this[f]=t;else{const p=h.isBuffer(t)?t:h.from(t,u),A=p.length;if(A===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<a-n;++f)this[f+n]=p[f%A]}return this};const xe={};function Ke(s,t,n){xe[s]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${s}]`,this.stack,delete this.name}get code(){return s}set code(u){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:u,writable:!0})}toString(){return`${this.name} [${s}]: ${this.message}`}}}Ke("ERR_BUFFER_OUT_OF_BOUNDS",function(s){return s?`${s} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ke("ERR_INVALID_ARG_TYPE",function(s,t){return`The "${s}" argument must be of type number. Received type ${typeof t}`},TypeError),Ke("ERR_OUT_OF_RANGE",function(s,t,n){let a=`The value of "${s}" is out of range.`,u=n;return Number.isInteger(n)&&Math.abs(n)>2**32?u=Te(String(n)):typeof n=="bigint"&&(u=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(u=Te(u)),u+="n"),a+=` It must be ${t}. Received ${u}`,a},RangeError);function Te(s){let t="",n=s.length;const a=s[0]==="-"?1:0;for(;n>=a+4;n-=3)t=`_${s.slice(n-3,n)}${t}`;return`${s.slice(0,n)}${t}`}function et(s,t,n){ae(t,"offset"),(s[t]===void 0||s[t+n]===void 0)&&Be(t,s.length-(n+1))}function pe(s,t,n,a,u,f){if(s>n||s<t){const p=typeof t=="bigint"?"n":"";let A;throw t===0||t===BigInt(0)?A=`>= 0${p} and < 2${p} ** ${(f+1)*8}${p}`:A=`>= -(2${p} ** ${(f+1)*8-1}${p}) and < 2 ** ${(f+1)*8-1}${p}`,new xe.ERR_OUT_OF_RANGE("value",A,s)}et(a,u,f)}function ae(s,t){if(typeof s!="number")throw new xe.ERR_INVALID_ARG_TYPE(t,"number",s)}function Be(s,t,n){throw Math.floor(s)!==s?(ae(s,n),new xe.ERR_OUT_OF_RANGE("offset","an integer",s)):t<0?new xe.ERR_BUFFER_OUT_OF_BOUNDS:new xe.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,s)}const _t=/[^+/0-9A-Za-z-_]/g;function yt(s){if(s=s.split("=")[0],s=s.trim().replace(_t,""),s.length<2)return"";for(;s.length%4!==0;)s=s+"=";return s}function tt(s,t){t=t||1/0;let n;const a=s.length;let u=null;const f=[];for(let p=0;p<a;++p){if(n=s.charCodeAt(p),n>55295&&n<57344){if(!u){if(n>56319){(t-=3)>-1&&f.push(239,191,189);continue}else if(p+1===a){(t-=3)>-1&&f.push(239,191,189);continue}u=n;continue}if(n<56320){(t-=3)>-1&&f.push(239,191,189),u=n;continue}n=(u-55296<<10|n-56320)+65536}else u&&(t-=3)>-1&&f.push(239,191,189);if(u=null,n<128){if((t-=1)<0)break;f.push(n)}else if(n<2048){if((t-=2)<0)break;f.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;f.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;f.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return f}function jt(s){const t=[];for(let n=0;n<s.length;++n)t.push(s.charCodeAt(n)&255);return t}function Dt(s,t){let n,a,u;const f=[];for(let p=0;p<s.length&&!((t-=2)<0);++p)n=s.charCodeAt(p),a=n>>8,u=n%256,f.push(u),f.push(a);return f}function I(s){return g.toByteArray(yt(s))}function Pe(s,t,n,a){let u;for(u=0;u<a&&!(u+n>=t.length||u>=s.length);++u)t[u+n]=s[u];return u}function le(s,t){return s instanceof t||s!=null&&s.constructor!=null&&s.constructor.name!=null&&s.constructor.name===t.name}function Le(s){return s!==s}const Ie=(function(){const s="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const a=n*16;for(let u=0;u<16;++u)t[a+u]=s[n]+s[u]}return t})();function we(s){return typeof BigInt>"u"?_e:s}function _e(){throw new Error("BigInt not supported")}})(tr)),tr}var Pn=kn(),rr={exports:{}},Pr;function vn(){return Pr||(Pr=1,(function(y,g){var S=void 0,G=function(N){return S||(S=new Promise(function(ee,F){var h=typeof N<"u"?N:{},oe=h.onAbort;h.onAbort=function(e){F(new Error(e)),oe&&oe(e)},h.postRun=h.postRun||[],h.postRun.push(function(){ee(h)}),y=void 0;var w;w||=typeof h<"u"?h:{};var J=!!globalThis.window,X=!!globalThis.WorkerGlobalScope;w.onRuntimeInitialized=function(){function e(c,m){Fr(c,m instanceof Error?m.message:String(m),-1)}function r(c,m){switch(typeof m){case"boolean":wn(c,m?1:0);break;case"number":fn(c,m);break;case"string":pn(c,m,pe(m),-1);break;case"object":if(m===null)Ar(c);else if(m.length!=null){var x=Ft(m.length);H.set(m,x),mn(c,x,m.length,-1),$e(x)}else Fr(c,"Wrong API use : tried to return a value of an unknown type ("+m+").",-1);break;default:Ar(c)}}function o(c,m){for(var x=[],v=0;v<c;v+=1){var B=ke(m+4*v,"i32"),j=ln(B);if(j===1||j===2)B=hn(B);else if(j===3)j=Ir(B),B=cn(B),B=R(B,j,!0);else if(j===4){j=B,B=Ir(j),j=dn(j);for(var D=new Uint8Array(B),se=0;se<B;se+=1)D[se]=H[j+se];B=D}else B=null;x.push(B)}return x}function i(c,m){this.Ua=c,this.db=m,this.Sa=1,this.Db=[]}function l(c,m){if(this.db=m,this.sb=We(c),this.sb===null)throw Error("Unable to allocate memory for the SQL string");this.yb=this.sb,this.fb=this.Jb=null}function d(c){this.filename="dbfile_"+(4294967295*Math.random()>>>0),c!=null&&mr(this.filename,c),this.handleError(Y(this.filename,q)),this.db=ke(q,"i32"),_n(this.db),this.Ab={},this.ab=new Map}function b(c,m){return c.replace(/[A-Z]/g,function(x){return x.toLowerCase()})+":"+m}function k(c){c.forEach(At)}var q=Ce(4),_=w.cwrap,Y=_("sqlite3_open","number",["string","number"]),ie=_("sqlite3_close_v2","number",["number"]),je=_("sqlite3_backup_init","number",["number","string","number","string"]),Ut=_("sqlite3_backup_step","number",["number","number"]),lt=_("sqlite3_backup_finish","number",["number"]),Rt=_("sqlite3_exec","number",["number","number","number","number","number"]),Ye=_("sqlite3_changes","number",["number"]),St=_("sqlite3_sql","string",["number"]),be=_("sqlite3_normalized_sql","string",["number"]),Kt=_("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Gr=_("sqlite3_bind_text","number",["number","number","number","number","number"]),vr=_("sqlite3_bind_blob","number",["number","number","number","number","number"]),Vr=_("sqlite3_bind_double","number",["number","number","number"]),Xr=_("sqlite3_bind_int","number",["number","number","number"]),Hr=_("sqlite3_bind_parameter_index","number",["number","string"]),Jr=_("sqlite3_step","number",["number"]),Ge=_("sqlite3_errmsg","string",["number"]),Zr=_("sqlite3_column_count","number",["number"]),Kr=_("sqlite3_data_count","number",["number"]),en=_("sqlite3_column_double","number",["number","number"]),tn=_("sqlite3_column_text","number",["number","number"]),rn=_("sqlite3_column_blob","number",["number","number"]),Er=_("sqlite3_column_bytes","number",["number","number"]),nn=_("sqlite3_column_type","number",["number","number"]),on=_("sqlite3_column_name","string",["number","number"]),an=_("sqlite3_reset","number",["number"]),sn=_("sqlite3_clear_bindings","number",["number"]),un=_("sqlite3_finalize","number",["number"]),Br=_("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),ln=_("sqlite3_value_type","number",["number"]),Ir=_("sqlite3_value_bytes","number",["number"]),cn=_("sqlite3_value_text","number",["number"]),dn=_("sqlite3_value_blob","number",["number"]),hn=_("sqlite3_value_double","number",["number"]),fn=_("sqlite3_result_double","",["number","number"]),Ar=_("sqlite3_result_null","",["number"]),pn=_("sqlite3_result_text","",["number","string","number","number"]),mn=_("sqlite3_result_blob","",["number","number","number","number"]),wn=_("sqlite3_result_int","",["number","number"]),Fr=_("sqlite3_result_error","",["number","string","number"]),qr=_("sqlite3_aggregate_context","number",["number","number"]),_n=_("RegisterExtensionFunctions","number",["number"]),Ur=_("sqlite3_update_hook","number",["number","number","number"]);i.prototype.bind=function(c){if(!this.Ua)throw"Statement closed";return this.reset(),Array.isArray(c)?this.bc(c):c!=null&&typeof c=="object"?this.cc(c):!0},i.prototype.step=function(){if(!this.Ua)throw"Statement closed";this.Sa=1;var c=Jr(this.Ua);switch(c){case 100:return!0;case 101:return!1;default:throw this.db.handleError(c)}},i.prototype.Tb=function(c){return c==null&&(c=this.Sa,this.Sa+=1),en(this.Ua,c)},i.prototype.qc=function(c){if(c==null&&(c=this.Sa,this.Sa+=1),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(this.Ub(c))},i.prototype.Ub=function(c){c==null&&(c=this.Sa,this.Sa+=1);var m=tn(this.Ua,c);return c=Er(this.Ua,c),R(m,c,!0)},i.prototype.getBlob=function(c){c==null&&(c=this.Sa,this.Sa+=1);var m=Er(this.Ua,c);c=rn(this.Ua,c);for(var x=new Uint8Array(m),v=0;v<m;v+=1)x[v]=H[c+v];return x},i.prototype.get=function(c,m){m=m||{},c!=null&&this.bind(c)&&this.step(),c=[];for(var x=Kr(this.Ua),v=0;v<x;v+=1)switch(nn(this.Ua,v)){case 1:var B=m.useBigInt?this.qc(v):this.Tb(v);c.push(B);break;case 2:c.push(this.Tb(v));break;case 3:c.push(this.Ub(v));break;case 4:c.push(this.getBlob(v));break;default:c.push(null)}return c},i.prototype.Hb=function(){for(var c=[],m=Zr(this.Ua),x=0;x<m;x+=1)c.push(on(this.Ua,x));return c},i.prototype.Sb=function(c,m){var x=this.get(c,m);return c=this.Hb(),Object.fromEntries(c.map(function(v,B){return[v,x[B]]}))},i.prototype.uc=function(){return St(this.Ua)},i.prototype.rc=function(){return be(this.Ua)},i.prototype.run=function(c){return c!=null&&this.bind(c),this.step(),this.reset()},i.prototype.Ob=function(c,m){m==null&&(m=this.Sa,this.Sa+=1);var x=We(c);this.Db.push(x),this.db.handleError(Gr(this.Ua,m,x,pe(c),0))},i.prototype.ac=function(c,m){m==null&&(m=this.Sa,this.Sa+=1);var x=Ft(c.length);H.set(c,x),this.Db.push(x),this.db.handleError(vr(this.Ua,m,x,c.length,0))},i.prototype.Nb=function(c,m){m==null&&(m=this.Sa,this.Sa+=1),this.db.handleError((c===(c|0)?Xr:Vr)(this.Ua,m,c))},i.prototype.dc=function(c){c==null&&(c=this.Sa,this.Sa+=1),vr(this.Ua,c,0,0,0)},i.prototype.Pb=function(c,m){switch(m==null&&(m=this.Sa,this.Sa+=1),typeof c){case"string":this.Ob(c,m);return;case"number":this.Nb(c,m);return;case"bigint":this.Ob(c.toString(),m);return;case"boolean":this.Nb(c+0,m);return;case"object":if(c===null){this.dc(m);return}if(c.length!=null){this.ac(c,m);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+c+")."},i.prototype.cc=function(c){var m=this;return Object.keys(c).forEach(function(x){var v=Hr(m.Ua,x);v!==0&&m.Pb(c[x],v)}),!0},i.prototype.bc=function(c){for(var m=0;m<c.length;m+=1)this.Pb(c[m],m+1);return!0},i.prototype.reset=function(){return this.Gb(),sn(this.Ua)===0&&an(this.Ua)===0},i.prototype.Gb=function(){for(var c;(c=this.Db.pop())!==void 0;)$e(c)},i.prototype.ib=function(){this.Gb();var c=un(this.Ua)===0;return delete this.db.Ab[this.Ua],this.Ua=0,c},l.prototype.next=function(){if(this.sb===null)return{done:!0};if(this.fb!==null&&(this.fb.ib(),this.fb=null),!this.db.db)throw this.tb(),Error("Database closed");var c=ut(),m=Ce(4);ot(q),ot(m);try{this.db.handleError(Kt(this.db.db,this.yb,-1,q,m)),this.yb=ke(m,"i32");var x=ke(q,"i32");return x===0?(this.tb(),{done:!0}):(this.fb=new i(x,this.db),this.db.Ab[x]=this.fb,{value:this.fb,done:!1})}catch(v){throw this.Jb=R(this.yb),this.tb(),v}finally{st(c)}},l.prototype.tb=function(){$e(this.sb),this.sb=null},l.prototype.return=function(){return this.fb!==null&&(this.fb.ib(),this.fb=null),this.tb(),{done:!0}},l.prototype.sc=function(){return this.Jb!==null?this.Jb:R(this.yb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(l.prototype[Symbol.iterator]=function(){return this}),d.prototype.run=function(c,m){if(!this.db)throw"Database closed";if(m){c=this.Kb(c,m);try{c.step()}finally{c.ib()}}else{c=We(c);try{this.handleError(Rt(this.db,c,0,0,q))}finally{$e(c)}}return this},d.prototype.exec=function(c,m,x){if(!this.db)throw"Database closed";var v=ut(),B=null,j=null,D=null;try{D=j=We(c);var se=Ce(4);for(c=[];ke(D,"i8")!==0;){ot(q),ot(se),this.handleError(Kt(this.db,D,-1,q,se));var ve=ke(q,"i32");if(D=ke(se,"i32"),ve!==0){var ne=null;for(B=new i(ve,this),m!=null&&B.bind(m);B.step();)ne===null&&(ne={columns:B.Hb(),values:[]},c.push(ne)),ne.values.push(B.get(null,x));B.ib()}}return c}catch(he){throw B&&B.ib(),he}finally{j&&$e(j),st(v)}},d.prototype.mc=function(c,m,x,v,B){typeof m=="function"&&(v=x,x=m,m=void 0),c=this.Kb(c,m);try{for(;c.step();)x(c.Sb(null,B))}finally{c.ib()}if(typeof v=="function")return v()},d.prototype.Kb=function(c,m){c=We(c);try{ot(q),this.handleError(Kt(this.db,c,-1,q,0))}finally{$e(c)}if(c=ke(q,"i32"),c===0)throw"Nothing to prepare";var x=new i(c,this);return m!=null&&x.bind(m),this.Ab[c]=x},d.prototype.xc=function(c){return new l(c,this)},d.prototype.oc=function(){if(!this.db)throw Error("Database closed");var c=this.filename+"_export";mr(c,[]);var m=0,x=0;try{var v=p(c).node,B=null,j=v.Pa.write;v.Pa=Object.create(v.Pa),v.Pa.write=function(ve,ne,he,qe,Ee){return B===null?j(ve,ne,he,qe,Ee):(v.Ta.set(ne.subarray(he,he+qe),Ee),v.Va=Math.max(v.Va,Ee+qe),qe)};var D=Y(c,q);if(m=ke(q,"i32"),D!==0||(x=je(m,"main",this.db,"main"),x===0))throw Error(Ge(m));if(D=Ut(x,0),D===0){var se=this.exec("PRAGMA main.page_count; PRAGMA main.page_size");B=new Uint8Array(se[0].values[0][0]*se[1].values[0][0]),v.Ta=B,D=Ut(x,-1)}if(D===5||D===6)throw Error("Unable to export: SQLite is busy or locked. Finish active write transactions before exporting.");if(D!==101||(D=lt(x),x=0,D!==0)||(D=ie(m),D!==0))throw Error(Ge(m));return m=0,B=new Uint8Array(v.Ta.buffer,v.Ta.byteOffset,v.Va),B.length>0&&(B[18]=1,B[19]=1),B}finally{x!==0&&lt(x),m!==0&&ie(m),Wt("/"+c)}},d.prototype.close=function(){this.db!==null&&(Object.values(this.Ab).forEach(function(c){c.ib()}),this.ab.forEach(k),this.ab.clear(),this.kb&&(At(this.kb),this.kb=void 0),this.handleError(ie(this.db)),Wt("/"+this.filename),this.db=null)},d.prototype.handleError=function(c){if(c===0)return null;throw c=Ge(this.db),Error(c)},d.prototype.tc=function(){return Ye(this.db)},d.prototype.jc=function(c,m){var x=b(c,m.length);this.ab.has(x)&&(k(this.ab.get(x)),this.ab.delete(x));var v=at(function(B,j,D){j=o(j,D);try{var se=m.apply(null,j)}catch(ve){e(B,ve);return}r(B,se)},"viii");return this.ab.set(x,[v]),this.handleError(Br(this.db,c,m.length,1,0,v,0,0,0)),this},d.prototype.hc=function(c,m){function x(ne){return D.has(ne)||D.set(ne,v()),D.get(ne)}var v=m.init||function(){return null},B=m.finalize||function(ne){return ne},j=m.step;if(!j)throw"An aggregate function must have a step function in "+c;var D=new Map;m=b(c,j.length-1),this.ab.has(m)&&(k(this.ab.get(m)),this.ab.delete(m));var se=at(function(ne,he,qe){var Ee=qr(ne,1),er=x(Ee);he=o(he,qe),er=[er].concat(he);try{D.set(Ee,j.apply(null,er))}catch(yn){D.delete(Ee),e(ne,yn)}},"viii"),ve=at(function(ne){var he=qr(ne,1);try{var qe=B(x(he))}catch(Ee){D.delete(he),e(ne,Ee);return}r(ne,qe),D.delete(he)},"vi");return this.ab.set(m,[se,ve]),this.handleError(Br(this.db,c,j.length-1,1,0,0,se,ve,0)),this},d.prototype.Fc=function(c){return this.kb&&(Ur(this.db,0,0),At(this.kb),this.kb=void 0),c?(this.kb=at(function(m,x,v,B,j){switch(x){case 18:m="insert";break;case 23:m="update";break;case 9:m="delete";break;default:throw"unknown operationCode in updateHook callback: "+x}if(v=R(v),B=R(B),j>Number.MAX_SAFE_INTEGER)throw"rowId too big to fit inside a Number";c(m,v,B,Number(j))},"viiiij"),Ur(this.db,this.kb,0),this):this},i.prototype.bind=i.prototype.bind,i.prototype.step=i.prototype.step,i.prototype.get=i.prototype.get,i.prototype.getColumnNames=i.prototype.Hb,i.prototype.getAsObject=i.prototype.Sb,i.prototype.getSQL=i.prototype.uc,i.prototype.getNormalizedSQL=i.prototype.rc,i.prototype.run=i.prototype.run,i.prototype.reset=i.prototype.reset,i.prototype.freemem=i.prototype.Gb,i.prototype.free=i.prototype.ib,l.prototype.next=l.prototype.next,l.prototype.getRemainingSQL=l.prototype.sc,d.prototype.run=d.prototype.run,d.prototype.exec=d.prototype.exec,d.prototype.each=d.prototype.mc,d.prototype.prepare=d.prototype.Kb,d.prototype.iterateStatements=d.prototype.xc,d.prototype.export=d.prototype.oc,d.prototype.close=d.prototype.close,d.prototype.handleError=d.prototype.handleError,d.prototype.getRowsModified=d.prototype.tc,d.prototype.create_function=d.prototype.jc,d.prototype.create_aggregate=d.prototype.hc,d.prototype.updateHook=d.prototype.Fc,w.Database=d};var de="./this.program",E=globalThis.document?.currentScript?.src;X&&(E=self.location.href);var U="",M,Z;if(J||X){try{U=new URL(".",E).href}catch{}X&&(Z=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),M=async e=>{if(e=await fetch(e,{credentials:"same-origin"}),e.ok)return e.arrayBuffer();throw Error(e.status+" : "+e.url)}}var te=console.log.bind(console),O=console.error.bind(console),K,fe=!1,V;function Ve(){if(!H?.buffer?.resizable){var e=qt.buffer;H=new Int8Array(e),nt=new Int16Array(e),P=new Uint8Array(e),re=new Int32Array(e),Q=new Uint32Array(e),Xt=new Float32Array(e),Ht=new Float64Array(e),me=new BigInt64Array(e)}}function dt(){var e=w.preRun;for(e&&(typeof e=="function"&&(e=[e]),ft.push(...e)),e=ft;e.length>0;)e.shift()(w)}function Nt(){var e=w.postRun;for(e&&(typeof e=="function"&&(e=[e]),ht.push(...e)),e=ht;e.length>0;)e.shift()(w)}function Re(e){throw w.onAbort?.(e),e=`Aborted(${e})`,O(e),fe=!0,new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info.")}var Xe;async function Mt(e){if(!K)try{var r=await M(e);return new Uint8Array(r)}catch{}if(e==Xe&&K)e=new Uint8Array(K);else if(Z)e=Z(e);else throw"both async and sync fetching of the wasm failed";return e}async function $t(e,r){try{var o=await Mt(e);return await WebAssembly.instantiate(o,r)}catch(i){O(`failed to asynchronously prepare wasm: ${i}`),Re(i)}}async function Ct(e){var r=Xe;if(!K)try{var o=fetch(r,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(o,e)}catch(i){O(`wasm streaming compile failed: ${i}`),O("falling back to ArrayBuffer instantiation")}return $t(r,e)}class He{name="ExitStatus";constructor(r){this.message=`Program terminated with exit(${r})`,this.status=r}}var H,ht=[],ft=[],De=!0,pt=new TextDecoder,mt=(e,r,o,i)=>{if(o=r+o,i)return o;for(;e[r]&&!(r>=o);)++r;return r},P,R=(e,r,o)=>e?pt.decode(P.subarray(e,mt(P,e,r,o))):"",Je=(e,r)=>{for(var o=0,i=e.length-1;i>=0;i--){var l=e[i];l==="."?e.splice(i,1):l===".."?(e.splice(i,1),o++):o&&(e.splice(i,1),o--)}if(r)for(;o;o--)e.unshift("..");return e},Oe=e=>{var r=e.charAt(0)==="/",o=e.slice(-1)==="/";return(e=Je(e.split("/").filter(i=>!!i),!r).join("/"))||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},Ze=e=>{var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=r[0],r=r[1],!e&&!r?".":(r&&=r.slice(0,-1),e+r)},Se=e=>e&&e.match(/([^\/]+|\/)\/*$/)[1],wt=()=>e=>(crypto.getRandomValues(e),0),xe=e=>(xe=wt())(e),Ke=(...e)=>{for(var r="",o=!1,i=e.length-1;i>=-1&&!o;i--){if(o=i>=0?e[i]:"/",typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)return"";r=o+"/"+r,o=o.charAt(0)==="/"}return r=Je(r.split("/").filter(l=>!!l),!o).join("/"),(o?"/":"")+r||"."},Te=e=>{var r=mt(e,0);return pt.decode(e.buffer?e.subarray(0,r):new Uint8Array(e.slice(0,r)))},et=[],pe=e=>{for(var r=0,o=0;o<e.length;++o){var i=e.charCodeAt(o);i<=127?r++:i<=2047?r+=2:i>=55296&&i<=57343?(r+=4,++o):r+=3}return r},ae=(e,r,o,i)=>{if(!(i>0))return 0;var l=o;i=o+i-1;for(var d=0;d<e.length;++d){var b=e.codePointAt(d);if(b<=127){if(o>=i)break;r[o++]=b}else if(b<=2047){if(o+1>=i)break;r[o++]=192|b>>6,r[o++]=128|b&63}else if(b<=65535){if(o+2>=i)break;r[o++]=224|b>>12,r[o++]=128|b>>6&63,r[o++]=128|b&63}else{if(o+3>=i)break;r[o++]=240|b>>18,r[o++]=128|b>>12&63,r[o++]=128|b>>6&63,r[o++]=128|b&63,d++}}return r[o]=0,o-l},Be=e=>{var r=Array(pe(e)+1);return e=ae(e,r,0,r.length),r.length=e,r},_t=[];function yt(e,r){_t[e]={input:[],output:[],ob:r},Lt(e,tt)}var tt={open(e){var r=_t[e.node.rb];if(!r)throw new a(43);e.Ya=r,e.seekable=!1},close(e){e.Ya.ob.pb(e.Ya)},pb(e){e.Ya.ob.pb(e.Ya)},read(e,r,o,i){if(!e.Ya||!e.Ya.ob.Vb)throw new a(60);for(var l=0,d=0;d<i;d++){try{var b=e.Ya.ob.Vb(e.Ya)}catch{throw new a(29)}if(b===void 0&&!l)throw new a(6);if(b==null||(l++,r[o+d]=b,b===10))break}return l&&(e.node.$a=Date.now()),l},write(e,r,o,i){if(!e.Ya||!e.Ya.ob.Lb)throw new a(60);try{for(var l=0;l<i;l++)e.Ya.ob.Lb(e.Ya,r[o+l])}catch{throw new a(29)}return i&&(e.node.Xa=e.node.Wa=Date.now()),l}},jt={Vb(){e:{if(!et.length){var e=null;if(globalThis.window?.prompt&&(e=window.prompt("Input: "),e!==null&&(e+=`
`)),!e){e=null;break e}et=Be(e)}e=et.shift()}return e},Lb(e,r){r===null||r===10?(te(Te(e.output)),e.output=[]):r!=0&&e.output.push(r)},pb(e){e.output?.length>0&&(te(Te(e.output)),e.output=[])},Mc(){return{Ic:25856,Kc:5,Hc:191,Jc:35387,Gc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Nc(){return 0},Oc(){return[24,80]}},Dt={Lb(e,r){r===null||r===10?(O(Te(e.output)),e.output=[]):r!=0&&e.output.push(r)},pb(e){e.output?.length>0&&(O(Te(e.output)),e.output=[])}},I={cb:null,gb(){return I.createNode(null,"/",16895,0)},createNode(e,r,o,i){if((o&61440)===24576||(o&61440)===4096)throw new a(63);return I.cb||(I.cb={dir:{node:{Za:I.Qa.Za,eb:I.Qa.eb,qb:I.Qa.qb,ub:I.Qa.ub,Yb:I.Qa.Yb,Cb:I.Qa.Cb,zb:I.Qa.zb,Mb:I.Qa.Mb,Bb:I.Qa.Bb},stream:{bb:I.Pa.bb}},file:{node:{Za:I.Qa.Za,eb:I.Qa.eb},stream:{bb:I.Pa.bb,read:I.Pa.read,write:I.Pa.write,wb:I.Pa.wb,xb:I.Pa.xb}},link:{node:{Za:I.Qa.Za,eb:I.Qa.eb,jb:I.Qa.jb},stream:{}},Qb:{node:{Za:I.Qa.Za,eb:I.Qa.eb},stream:$r}}),o=C(e,r,o,i),ce(o.mode)?(o.Qa=I.cb.dir.node,o.Pa=I.cb.dir.stream,o.Ta={}):(o.mode&61440)===32768?(o.Qa=I.cb.file.node,o.Pa=I.cb.file.stream,o.Va=0,o.Ta=I.nc??(I.nc=new Uint8Array(0))):(o.mode&61440)===40960?(o.Qa=I.cb.link.node,o.Pa=I.cb.link.stream):(o.mode&61440)===8192&&(o.Qa=I.cb.Qb.node,o.Pa=I.cb.Qb.stream),o.$a=o.Xa=o.Wa=Date.now(),e&&(e.Ta[r]=o,e.$a=e.Xa=e.Wa=o.$a),o},Qa:{Za(e){var r={};return r.lc=(e.mode&61440)===8192?e.id:1,r.wc=e.id,r.mode=e.mode,r.Ac=1,r.uid=0,r.vc=0,r.rb=e.rb,ce(e.mode)?r.size=4096:(e.mode&61440)===32768?r.size=e.Va:(e.mode&61440)===40960?r.size=e.link.length:r.size=0,r.$a=new Date(e.$a),r.Xa=new Date(e.Xa),r.Wa=new Date(e.Wa),r.$b=e.$a,r.zc=e.Xa,r.kc=e.Wa,r.ec=4096,r.fc=Math.ceil(r.size/r.ec),r},eb(e,r){for(var o of["mode","atime","mtime","ctime"])r[o]!=null&&(e[o]=r[o]);r.size!==void 0&&(r=r.size,e.Va!=r&&(o=e.Ta,e.Ta=new Uint8Array(r),e.Ta.set(o.subarray(0,Math.min(r,e.Va))),e.Va=r))},qb(){throw I.Eb||(I.Eb=new a(44),I.Eb.stack="<generic error, no stack>"),I.Eb},ub(e,r,o,i){return I.createNode(e,r,o,i)},Yb(e,r,o){try{var i=$(r,o)}catch{}if(i&&ce(e.mode))for(var l in i.Ta)throw new a(55);delete e.parent.Ta[e.name],r.Ta[o]=e,e.name=o,r.Wa=r.Xa=e.parent.Wa=e.parent.Xa=Date.now()},Cb(e,r){delete e.Ta[r],e.Wa=e.Xa=Date.now()},zb(e,r){var o=$(e,r),i;for(i in o.Ta)throw new a(55);delete e.Ta[r],e.Wa=e.Xa=Date.now()},Mb(e){return[".","..",...Object.keys(e.Ta)]},Bb(e,r,o){return e=I.createNode(e,r,41471,0),e.link=o,e},jb(e){if((e.mode&61440)!==40960)throw new a(28);return e.link}},Pa:{read(e,r,o,i,l){return l>=e.node.Va?0:(i=Math.min(e.node.Va-l,i),r.set(e.node.Ta.subarray(l,l+i),o),i)},write(e,r,o,i,l,d){if(r.buffer===H.buffer&&(d=!1),!i)return 0;if(e=e.node,e.Xa=e.Wa=Date.now(),d)e.Ta=r.subarray(o,o+i),e.Va=i;else if(e.Va||l){d=l+i;var b=e.Ta.length;b>=d||(d=Math.max(d,b*(b<1048576?2:1.125)>>>0),b&&(d=Math.max(d,256)),b=e.Ta.subarray(0,e.Va),e.Ta=new Uint8Array(d),e.Ta.set(b)),e.Ta.set(r.subarray(o,o+i),l),e.Va=Math.max(e.Va,l+i)}else e.Ta=r.slice(o,o+i),e.Va=i;return i},bb(e,r,o){if(o===1?r+=e.position:o===2&&(e.node.mode&61440)===32768&&(r+=e.node.Va),r<0)throw new a(28);return r},wb(e,r,o,i,l){if((e.node.mode&61440)!==32768)throw new a(43);if(e=e.node.Ta,l&2||e.buffer!==H.buffer){l=!0,i=Math.ceil(r/65536)*65536;var d=xr(65536,i);if(d&&P.fill(0,d,d+i),i=d,!i)throw new a(48);e&&((o>0||o+r<e.length)&&(e.subarray?e=e.subarray(o,o+r):e=Array.prototype.slice.call(e,o,o+r)),H.set(e,i))}else l=!1,i=e.byteOffset;return{Dc:i,Zb:l}},xb(e,r,o,i){return I.Pa.write(e,r,0,i,o,!1),0}}},Pe=(e,r)=>{var o=0;return e&&(o|=365),r&&(o|=146),o},le=null,Le={},Ie=[],we=1,_e=[],s=!1,t=!0,n={},a=class{name="ErrnoError";constructor(e){this.Ra=e}},u=class{shared={};node=null;get flags(){return this.shared.flags}set flags(e){this.shared.flags=e}get position(){return this.shared.position}set position(e){this.shared.position=e}},f=class{Qa={};Pa={};mb=null;constructor(e,r,o,i){e||=this,this.parent=e,this.gb=e.gb,this.id=we++,this.name=r,this.mode=o,this.rb=i,this.$a=this.Xa=this.Wa=Date.now()}get read(){return(this.mode&365)===365}set read(e){e?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(e){e?this.mode|=146:this.mode&=-147}Cc(){}};function p(e,r={}){if(!e)throw new a(44);r.Fb??(r.Fb=!0),e.charAt(0)==="/"||(e="//"+e);var o=0;e:for(;o<40;o++){e=e.split("/").filter(k=>!!k);for(var i=le,l="/",d=0;d<e.length;d++){var b=d===e.length-1;if(b&&r.parent)break;if(e[d]!==".")if(e[d]==="..")if(l=Ze(l),i===i.parent){e=l+"/"+e.slice(d+1).join("/"),o--;continue e}else i=i.parent;else{l=Oe(l+"/"+e[d]);try{i=$(i,e[d])}catch(k){if(k?.Ra===44&&b&&r.Bc)return{path:l};throw k}if(!i.mb||b&&!r.Fb||(i=i.mb.root),(i.mode&61440)===40960&&(!b||r.lb)){if(!i.Qa.jb)throw new a(52);i=i.Qa.jb(i),i.charAt(0)==="/"||(i=Ze(l)+"/"+i),e=i+"/"+e.slice(d+1).join("/");continue e}}}return{path:l,node:i}}throw new a(32)}function A(e){for(var r;;){if(e===e.parent)return e=e.gb.Xb,r?e[e.length-1]!=="/"?`${e}/${r}`:e+r:e;r=r?`${e.name}/${r}`:e.name,e=e.parent}}function W(e,r){for(var o=0,i=0;i<r.length;i++)o=(o<<5)-o+r.charCodeAt(i)|0;return(e+o>>>0)%_e.length}function L(e){var r=W(e.parent.id,e.name);if(_e[r]===e)_e[r]=e.nb;else for(r=_e[r];r;){if(r.nb===e){r.nb=e.nb;break}r=r.nb}}function $(e,r){var o=ce(e.mode)?(o=Qe(e,"x"))?o:e.Qa.qb?0:2:54;if(o)throw new a(o);for(o=_e[W(e.id,r)];o;o=o.nb){var i=o.name;if(o.parent.id===e.id&&i===r)return o}return e.Qa.qb(e,r)}function C(e,r,o,i){return e=new f(e,r,o,i),r=W(e.parent.id,e.name),e.nb=_e[r],_e[r]=e}function ce(e){return(e&61440)===16384}function Qe(e,r){return t?0:r.includes("r")&&!(e.mode&292)||r.includes("w")&&!(e.mode&146)||r.includes("x")&&!(e.mode&73)?2:0}function ar(e,r){if(!ce(e.mode))return 54;try{return $(e,r),20}catch{}return Qe(e,"wx")}function sr(e,r,o){try{var i=$(e,r)}catch(l){return l.Ra}if(e=Qe(e,"wx"))return e;if(o){if(!ce(i.mode))return 54;if(i===i.parent||A(i)==="/")return 10}else if(ce(i.mode))return 31;return 0}function Ot(e){if(!e)throw new a(63);return e}function ue(e){if(e=Ie[e],!e)throw new a(8);return e}function ur(e,r=-1){if(e=Object.assign(new u,e),r==-1)e:{for(r=0;r<=4096;r++)if(!Ie[r])break e;throw new a(33)}return e.hb=r,Ie[r]=e}function Mr(e,r=-1){return e=ur(e,r),e.Pa?.Lc?.(e),e}function bt(e,r,o){var i=e?.Pa.eb;e=i?e:r,i??=r.Qa.eb,Ot(i);try{i(e,o)}catch(l){throw l instanceof RangeError?new a(22):l}}var $r={open(e){e.Pa=Le[e.node.rb].Pa,e.Pa.open?.(e)},bb(){throw new a(70)}};function Lt(e,r){Le[e]={Pa:r}}function lr(e,r){var o=r==="/";if(o&&le)throw new a(10);if(!o&&r){var i=p(r,{Fb:!1});if(r=i.path,i=i.node,i.mb)throw new a(10);if(!ce(i.mode))throw new a(54)}r={type:e,Pc:{},Xb:r,yc:[]},e=e.gb(r),e.gb=r,r.root=e,o?le=e:i&&(i.mb=r,i.gb&&i.gb.yc.push(r))}function gt(e,r,o){var i=p(e,{parent:!0}).node;if(e=Se(e),!e)throw new a(28);if(e==="."||e==="..")throw new a(20);var l=ar(i,e);if(l)throw new a(l);if(!i.Qa.ub)throw new a(63);return i.Qa.ub(i,e,r,o)}function Cr(e,r=438){return gt(e,r&4095|32768,0)}function ye(e,r=511){return gt(e,r&1023|16384,0)}function xt(e,r,o){typeof o>"u"&&(o=r,r=438),gt(e,r|8192,o)}function Qt(e,r){if(!Ke(e))throw new a(44);var o=p(r,{parent:!0}).node;if(!o)throw new a(44);r=Se(r);var i=ar(o,r);if(i)throw new a(i);if(!o.Qa.Bb)throw new a(63);o.Qa.Bb(o,r,e)}function cr(e){var r=p(e,{parent:!0}).node;e=Se(e);var o=$(r,e),i=sr(r,e,!0);if(i)throw new a(i);if(!r.Qa.zb)throw new a(63);if(o.mb)throw new a(10);r.Qa.zb(r,e),L(o)}function Wt(e){var r=p(e,{parent:!0}).node;if(!r)throw new a(44);e=Se(e);var o=$(r,e),i=sr(r,e,!1);if(i)throw new a(i);if(!r.Qa.Cb)throw new a(63);if(o.mb)throw new a(10);r.Qa.Cb(r,e),L(o)}function kt(e,r=!1){return e=p(e,{lb:!r}).node,Ot(e.Qa.Za)(e)}function dr(e,r,o){bt(e,r,{mode:o&4095|r.mode&-4096,Wa:Date.now(),Rb:!1})}function vt(e,r){e=typeof e=="string"?p(e,{lb:!0}).node:e,dr(null,e,r)}function hr(e,r,o){if(ce(r.mode))throw new a(31);if((r.mode&61440)!==32768)throw new a(28);var i=Qe(r,"w");if(i)throw new a(i);bt(e,r,{size:o,timestamp:Date.now()})}function jr(e,r,o,i=!1){e=p(e,{lb:!i}),bt(null,e.node,{$a:r,Xa:o,Rb:i})}function rt(e,r,o=438){if(e==="")throw new a(44);if(typeof r=="string"){var i={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[r];if(typeof i>"u")throw Error(`Unknown file open mode: ${r}`);r=i}if(o=r&64?o&4095|32768:0,typeof e=="object")i=e;else{var l=e.endsWith("/");e=p(e,{lb:!(r&131072),Bc:!0}),i=e.node,e=e.path}var d=!1;if(r&64)if(i){if(r&128)throw new a(20)}else{if(l)throw new a(31);i=gt(e,o|511,0),d=!0}if(!i)throw new a(44);if((i.mode&61440)===8192&&(r&=-513),r&65536&&!ce(i.mode))throw new a(54);if(!d&&(i?(i.mode&61440)===40960?l=32:(l=["r","w","rw"][r&3],r&512&&(l+="w"),l=ce(i.mode)&&(l!=="r"||r&576)?31:Qe(i,l)):l=44,l))throw new a(l);return r&512&&!d&&(l=i,l=typeof l=="string"?p(l,{lb:!0}).node:l,hr(null,l,0)),r&=-131713,l=ur({node:i,path:A(i),flags:r,seekable:!0,position:0,Pa:i.Pa,Ec:[],error:!1}),l.Pa.open&&l.Pa.open(l),d&&vt(i,o&511),!w.logReadFiles||r&1||e in n||(n[e]=1,O(`read file: ${e}`)),l}function fr(e){if(e.hb===null)throw new a(8);e.Ib&&(e.Ib=null),e.node?.Cc();try{e.Pa.close&&e.Pa.close(e)}catch(r){throw r}finally{Ie[e.hb]=null}e.hb=null}function pr(e,r,o){if(e.hb===null)throw new a(8);if(!e.seekable||!e.Pa.bb)throw new a(70);if(o!=0&&o!=1&&o!=2)throw new a(28);e.position=e.Pa.bb(e,r,o),e.Ec=[]}function zt(e,r,o,i,l){if(i<0||l<0)throw new a(28);if(e.hb===null)throw new a(8);if((e.flags&2097155)===0)throw new a(8);if(ce(e.node.mode))throw new a(31);if(!e.Pa.write)throw new a(28);e.seekable&&e.flags&1024&&pr(e,0,2);var d=typeof l<"u";if(!d)l=e.position;else if(!e.seekable)throw new a(70);return r=e.Pa.write(e,r,o,i,l,void 0),d||(e.position+=r),r}function Dr(){var e,r,o;s=!0,e??=w.stdin,r??=w.stdout,o??=w.stderr,e?Ae("stdin",e):Qt("/dev/tty","/dev/stdin"),r?Ae("stdout",null,r):Qt("/dev/tty","/dev/stdout"),o?Ae("stderr",null,o):Qt("/dev/tty1","/dev/stderr"),rt("/dev/stdin",0),rt("/dev/stdout",1),rt("/dev/stderr",1)}function mr(e,r){var o="/",i=e;o&&(o=typeof o=="string"?o:A(o),i=e?Oe(o+"/"+e):o),e=Pe(!0,!0),i=Cr(i,e),r&&(typeof r=="string"&&(r=Be(r)),r.subarray||(r=new Uint8Array(r)),vt(i,e|146),o=rt(i,577),zt(o,r,0,r.length,0),fr(o),vt(i,e))}function Ae(e,r,o){e=Oe("/dev/"+e);var i=Pe(!!r,!!o);Ae.Wb??(Ae.Wb=64);var l=Ae.Wb++<<8|0;Lt(l,{open(d){d.seekable=!1},close(){o?.buffer?.length&&o(10)},read(d,b,k,q){for(var _=0,Y=0;Y<q;Y++){try{var ie=r()}catch{throw new a(29)}if(ie===void 0&&!_)throw new a(6);if(ie==null)break;_++,b[k+Y]=ie}return _&&(d.node.$a=Date.now()),_},write(d,b,k,q){for(var _=0;_<q;_++)try{o(b[k+_])}catch{throw new a(29)}return q&&(d.node.Xa=d.node.Wa=Date.now()),_}}),xt(e,i,l)}var z={},re,Q,me;function Ne(e,r,o=!1){if(r.charAt(0)==="/")return r;if(e=e===-100?"/":ue(e).path,r.length==0){if(!o)throw new a(44);return e}return e+"/"+r}function Et(e,r){Q[e>>2]=r.lc,Q[e+4>>2]=r.mode,Q[e+8>>2]=r.Ac,Q[e+12>>2]=r.uid,Q[e+16>>2]=r.vc,Q[e+20>>2]=r.rb,me[e+24>>3]=BigInt(r.size),re[e+32>>2]=4096,re[e+36>>2]=r.fc;var o=r.$b??r.$a.getTime(),i=r.zc??r.Xa.getTime(),l=r.kc??r.Wa.getTime();return me[e+40>>3]=BigInt(Math.floor(o/1e3)),Q[e+48>>2]=Math.floor(o%1e3*1e6),me[e+56>>3]=BigInt(Math.floor(i/1e3)),Q[e+64>>2]=Math.floor(i%1e3*1e6),me[e+72>>3]=BigInt(Math.floor(l/1e3)),Q[e+80>>2]=Math.floor(l%1e3*1e6),me[e+88>>3]=BigInt(r.wc),0}var Bt=void 0,It=()=>{var e=re[+Bt>>2];return Bt+=4,e},nt,Yt=0,Or=[0,31,60,91,121,152,182,213,244,274,305,335],Lr=[0,31,59,90,120,151,181,212,243,273,304,334],it={},wr=e=>{if(!(e instanceof He||e=="unwind"))throw e},_r=e=>{throw V=e,De||Yt>0||(w.onExit?.(e),fe=!0),new He(e)},Gt={},yr=()=>{if(!Vt){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:de},r;for(r in Gt)Gt[r]===void 0?delete e[r]:e[r]=Gt[r];var o=[];for(r in e)o.push(`${r}=${e[r]}`);Vt=o}return Vt},Vt,Xt,Ht;function ke(e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":return H[e];case"i8":return H[e];case"i16":return nt[e>>1];case"i32":return re[e>>2];case"i64":return me[e>>3];case"float":return Xt[e>>2];case"double":return Ht[e>>3];case"*":return Q[e>>2];default:Re(`invalid type for getValue: ${r}`)}}function ot(e){var r="i32";switch(r.endsWith("*")&&(r="*"),r){case"i1":H[e]=0;break;case"i8":H[e]=0;break;case"i16":nt[e>>1]=0;break;case"i32":re[e>>2]=0;break;case"i64":me[e>>3]=BigInt(0);break;case"float":Xt[e>>2]=0;break;case"double":Ht[e>>3]=0;break;case"*":Q[e>>2]=0;break;default:Re(`invalid type for setValue: ${r}`)}}var Qr=(e,r,o,i)=>{var l={string:_=>{var Y=0;if(_!=null&&_!==0){Y=pe(_)+1;var ie=Ce(Y);ae(_,P,ie,Y),Y=ie}return Y},array:_=>{var Y=Ce(_.length);return H.set(_,Y),Y}};e=w["_"+e];var d=[],b=0;if(i)for(var k=0;k<i.length;k++){var q=l[o[k]];q?(b||=ut(),d[k]=q(i[k])):d[k]=i[k]}return o=e(...d),o=(function(_){return b&&st(b),r==="string"?R(_):r==="boolean"?!!_:_})(o)},We=e=>{var r=pe(e)+1,o=Ft(r);return o&&ae(e,P,o,r),o},Me,Jt=[],At=e=>{Me.delete(Fe.get(e)),Fe.set(e,null),Jt.push(e)},br=e=>{var r=e.length;return[r%128|128,r>>7,...e]},Wr={i:127,p:127,j:126,f:125,d:124,e:111},gr=e=>br(Array.from(e,r=>Wr[r])),at=(e,r)=>{if(!Me){Me=new WeakMap;var o=Fe.length;if(Me)for(var i=0;i<0+o;i++){var l=Fe.get(i);l&&Me.set(l,i)}}if(o=Me.get(e)||0)return o;o=Jt.length?Jt.pop():Fe.grow(1);try{Fe.set(o,e)}catch(d){if(!(d instanceof TypeError))throw d;r=Uint8Array.of(0,97,115,109,1,0,0,0,1,...br([1,96,...gr(r.slice(1)),...gr(r[0]==="v"?"":r[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),r=new WebAssembly.Module(r),r=new WebAssembly.Instance(r,{e:{f:e}}).exports.f,Fe.set(o,r)}return Me.set(e,o),o};_e.length=4096,lr(I,"/"),ye("/tmp"),ye("/home"),ye("/home/web_user"),(function(){ye("/dev"),Lt(259,{read:()=>0,write:(i,l,d,b)=>b,bb:()=>0}),xt("/dev/null",259),yt(1280,jt),yt(1536,Dt),xt("/dev/tty",1280),xt("/dev/tty1",1536);var e=new Uint8Array(1024),r=0,o=()=>(r||(xe(e),r=e.byteLength),e[--r]);Ae("random",o),Ae("urandom",o),ye("/dev/shm"),ye("/dev/shm/tmp")})(),(function(){ye("/proc");var e=ye("/proc/self");ye("/proc/self/fd"),lr({gb(){var r=C(e,"fd",16895,73);return r.Pa={bb:I.Pa.bb},r.Qa={qb(o,i){o=+i;var l=ue(o);return o={parent:null,gb:{Xb:"fake"},Qa:{jb:()=>l.path},id:o+1},o.parent=o},Mb(){return Array.from(Ie.entries()).filter(([,o])=>o).map(([o])=>o.toString())}},r}},"/proc/self/fd")})(),w.noExitRuntime&&(De=w.noExitRuntime),w.print&&(te=w.print),w.printErr&&(O=w.printErr),w.wasmBinary&&(K=w.wasmBinary),w.thisProgram&&(de=w.thisProgram);var ze=w.preInit;if(ze)for(typeof ze=="function"&&(w.preInit=ze=[ze]);ze.length>0;)ze.shift()();w.stackSave=()=>ut(),w.stackRestore=e=>st(e),w.stackAlloc=e=>Ce(e),w.cwrap=(e,r,o,i)=>{var l=!o||o.every(d=>d==="number"||d==="boolean");return r!=="string"&&l&&!i?w["_"+e]:(...d)=>Qr(e,r,o,d)},w.addFunction=at,w.removeFunction=At,w.UTF8ToString=R,w.lengthBytesUTF8=pe,w.stringToNewUTF8=We,w.writeArrayToMemory=(e,r)=>{H.set(e,r)};var Ft,$e,xr,kr,st,Ce,ut,qt,Fe,zr={a:(e,r,o,i)=>Re(`Assertion failed: ${R(e)}, at: `+[r?R(r):"unknown filename",o,i?R(i):"unknown function"]),i:function(e,r){try{return e=R(e),vt(e,r),0}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return-o.Ra}},M:function(e,r,o){try{if(r=R(r),r=Ne(e,r),o&-8)return-28;var i=p(r,{lb:!0}).node;return i?(e="",o&4&&(e+="r"),o&2&&(e+="w"),o&1&&(e+="x"),e&&Qe(i,e)?-2:0):-44}catch(l){if(typeof z>"u"||l.name!=="ErrnoError")throw l;return-l.Ra}},j:function(e,r){try{var o=ue(e);return dr(o,o.node,r),0}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return-i.Ra}},h:function(e){try{var r=ue(e);return bt(r,r.node,{timestamp:Date.now(),Rb:!1}),0}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return-o.Ra}},b:function(e,r,o){Bt=o;try{var i=ue(e);switch(r){case 0:var l=It();if(l<0)break;for(;Ie[l];)l++;return Mr(i,l).hb;case 1:case 2:return 0;case 3:return i.flags;case 4:return l=It(),i.flags=i.flags&-289793|l&289792,0;case 12:return l=It(),nt[l+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(d){if(typeof z>"u"||d.name!=="ErrnoError")throw d;return-d.Ra}},g:function(e,r){try{var o=ue(e),i=o.node,l=o.Pa.Za;e=l?o:i,l??=i.Qa.Za,Ot(l);var d=l(e);return Et(r,d)}catch(b){if(typeof z>"u"||b.name!=="ErrnoError")throw b;return-b.Ra}},I:function(e,r){r=r<-9007199254740992||r>9007199254740992?NaN:Number(r);try{if(isNaN(r))return-22;var o=ue(e);if(r<0||(o.flags&2097155)===0)throw new a(28);return hr(o,o.node,r),0}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return-i.Ra}},H:function(e,r){try{if(!r)return-28;var o=pe("/")+1;return r<o?-68:(ae("/",P,e,r),o)}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return-i.Ra}},E:()=>0,L:function(e,r){try{return e=R(e),Et(r,kt(e,!0))}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return-o.Ra}},C:function(e,r,o){try{return r=R(r),r=Ne(e,r),ye(r,o&-19),0}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return-i.Ra}},K:function(e,r,o,i){try{r=R(r);var l=i&256;return r=Ne(e,r,i&4096),Et(o,l?kt(r,!0):kt(r))}catch(d){if(typeof z>"u"||d.name!=="ErrnoError")throw d;return-d.Ra}},x:function(e,r,o,i){Bt=i;try{r=R(r),r=Ne(e,r);var l=i?It():0;return o&64&&(l&=-19),rt(r,o,l).hb}catch(d){if(typeof z>"u"||d.name!=="ErrnoError")throw d;return-d.Ra}},s:function(e,r,o,i){try{if(r=R(r),r=Ne(e,r),i<=0)return-28;var l=p(r).node;if(!l)throw new a(44);if(!l.Qa.jb)throw new a(28);var d=l.Qa.jb(l),b=Math.min(i,pe(d)),k=H[o+b];return ae(d,P,o,i+1),H[o+b]=k,b}catch(q){if(typeof z>"u"||q.name!=="ErrnoError")throw q;return-q.Ra}},r:function(e){try{return e=R(e),cr(e),0}catch(r){if(typeof z>"u"||r.name!=="ErrnoError")throw r;return-r.Ra}},f:function(e,r){try{return e=R(e),Et(r,kt(e))}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return-o.Ra}},o:function(e,r,o){try{if(r=R(r),r=Ne(e,r),o)if(o===512)cr(r);else return-28;else Wt(r);return 0}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return-i.Ra}},n:function(e,r,o,i){try{i&=256,r=R(r),r=Ne(e,r,!0);var l=Date.now();if(o){let k=function(q){var _=re[q+8>>2];return _==1073741823?l:_==1073741822?null:(Q[q>>2]+re[q+4>>2]*4294967296+(_/1e4|0)*1e4/1e9)*1e3};var d=k(o),b=k(o+16)}else b=d=l;return(b??d)!==null&&jr(r,d,b,i),0}catch(k){if(typeof z>"u"||k.name!=="ErrnoError")throw k;return-k.Ra}},w:()=>Re(""),v:()=>{De=!1,Yt=0},A:function(e,r){if(e=e<-9007199254740992||e>9007199254740992?NaN:Number(e),e=new Date(e*1e3),isNaN(e.getTime()))return 1;re[r>>2]=e.getSeconds(),re[r+4>>2]=e.getMinutes(),re[r+8>>2]=e.getHours(),re[r+12>>2]=e.getDate(),re[r+16>>2]=e.getMonth(),re[r+20>>2]=e.getFullYear()-1900,re[r+24>>2]=e.getDay();var o=e.getFullYear();re[r+28>>2]=(o%4!==0||o%100===0&&o%400!==0?Lr:Or)[e.getMonth()]+e.getDate()-1|0,re[r+36>>2]=-(e.getTimezoneOffset()*60),o=new Date(e.getFullYear(),6,1).getTimezoneOffset();var i=new Date(e.getFullYear(),0,1).getTimezoneOffset();return re[r+32>>2]=(o!=i&&e.getTimezoneOffset()==Math.min(i,o))|0,0},y:function(e,r,o,i,l,d,b){l=l<-9007199254740992||l>9007199254740992?NaN:Number(l);try{var k=ue(i);if(r&2&&!(o&2)&&(k.flags&2097155)!==2)throw new a(2);if((k.flags&2097155)===1)throw new a(2);if(!k.Pa.wb)throw new a(43);if(!e)throw new a(28);var q=k.Pa.wb(k,e,l,r,o),_=q.Dc;return re[d>>2]=q.Zb,Q[b>>2]=_,0}catch(Y){if(typeof z>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ra}},z:function(e,r,o,i,l,d){d=d<-9007199254740992||d>9007199254740992?NaN:Number(d);try{var b=ue(l);if(o&2){if((b.node.mode&61440)!==32768)throw new a(43);i&2||b.Pa.xb&&b.Pa.xb(b,P.subarray(e,e+r),d,r,i)}}catch(k){if(typeof z>"u"||k.name!=="ErrnoError")throw k;return-k.Ra}},k:(e,r)=>{if(it[e]&&(clearTimeout(it[e].id),delete it[e]),!r)return 0;var o=setTimeout(()=>{delete it[e];var i=[e,performance.now()],l=kr;if(!fe)try{l(...i)}catch(d){wr(d)}finally{if(!(De||Yt>0))try{V=i=V,_r(i)}catch(d){wr(d)}}},r);return it[e]={id:o,Qc:r},0},B:(e,r,o,i)=>{var l=new Date().getFullYear(),d=new Date(l,0,1).getTimezoneOffset();l=new Date(l,6,1).getTimezoneOffset(),Q[e>>2]=Math.max(d,l)*60,re[r>>2]=+(d!=l),r=b=>{var k=Math.abs(b);return`UTC${b>=0?"-":"+"}${String(Math.floor(k/60)).padStart(2,"0")}${String(k%60).padStart(2,"0")}`},e=r(d),r=r(l),l<d?(ae(e,P,o,17),ae(r,P,i,17)):(ae(e,P,i,17),ae(r,P,o,17))},d:()=>Date.now(),p:()=>2147483648,c:()=>performance.now(),l:e=>{var r=P.length;if(e>>>=0,e>2147483648)return!1;for(var o=1;o<=4;o*=2){var i=r*(1+.2/o);i=Math.min(i,e+100663296);e:{i=(Math.min(2147483648,Math.ceil(Math.max(e,i)/65536)*65536)-qt.buffer.byteLength+65535)/65536|0;try{qt.grow(i),Ve();var l=1;break e}catch{}l=void 0}if(l)return!0}return!1},F:(e,r)=>{var o=0,i=0,l;for(l of yr()){var d=r+o;Q[e+i>>2]=d,o+=ae(l,P,d,1/0)+1,i+=4}return 0},G:(e,r)=>{var o=yr();Q[e>>2]=o.length,e=0;for(var i of o)e+=pe(i)+1;return Q[r>>2]=e,0},e:function(e){try{var r=ue(e);return fr(r),0}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return o.Ra}},m:function(e,r){try{var o=ue(e);return H[r]=o.Ya?2:ce(o.mode)?3:(o.mode&61440)===40960?7:4,nt[r+2>>1]=0,me[r+8>>3]=BigInt(0),me[r+16>>3]=BigInt(0),0}catch(i){if(typeof z>"u"||i.name!=="ErrnoError")throw i;return i.Ra}},t:function(e,r,o,i){try{e:{var l=ue(e);e=r;for(var d,b=r=0;b<o;b++){var k=Q[e>>2],q=Q[e+4>>2];e+=8;try{var _=l,Y=k,ie=q,je=d,Ut=H;if(ie<0||je<0)throw new a(28);if(_.hb===null)throw new a(8);if((_.flags&2097155)===1)throw new a(8);if(ce(_.node.mode))throw new a(31);if(!_.Pa.read)throw new a(28);var lt=typeof je<"u";if(!lt)je=_.position;else if(!_.seekable)throw new a(70);var Rt=_.Pa.read(_,Ut,Y,ie,je);lt||(_.position+=Rt);var Ye=Rt}catch(be){if(r>0&&be instanceof a&&(be.Ra==6||be.Ra==6))break;throw be}if(Ye<0){var St=-1;break e}if(r+=Ye,Ye<q)break;typeof d<"u"&&(d+=Ye)}St=r}return Q[i>>2]=St,0}catch(be){if(typeof z>"u"||be.name!=="ErrnoError")throw be;return be.Ra}},D:function(e,r,o,i){r=r<-9007199254740992||r>9007199254740992?NaN:Number(r);try{if(isNaN(r))return 22;var l=ue(e);return pr(l,r,o),me[i>>3]=BigInt(l.position),l.Ib&&!r&&o===0&&(l.Ib=null),0}catch(d){if(typeof z>"u"||d.name!=="ErrnoError")throw d;return d.Ra}},J:function(e){try{var r=ue(e);return r.Pa?.pb?.(r)}catch(o){if(typeof z>"u"||o.name!=="ErrnoError")throw o;return o.Ra}},q:function(e,r,o,i){try{var l=ue(e);if(e=r,o==1)var d=zt(l,H,Q[e>>2],Q[e+4>>2]);else{for(var b=r=0,k=e;b<o;b++,k+=8)r+=Q[k+4>>2];var q=new Uint8Array(r);for(b=k=0;b<o;b++,e+=8){var _=Q[e>>2],Y=Q[e+4>>2];q.set(P.subarray(_,_+Y),k),k+=Y}d=zt(l,q,0,r)}return Q[i>>2]=d,0}catch(ie){if(typeof z>"u"||ie.name!=="ErrnoError")throw ie;return ie.Ra}},u:_r};async function Yr(){dt();var e=w.setStatus;e&&(e("Running..."),await new Promise(r=>setTimeout(r,1)),setTimeout(e,1,"")),fe||(w.noFSInit||s||Dr(),Zt.O(),t=!1,w.onRuntimeInitialized?.(),Nt())}var Zt;return(async function(){function e(i){return i=Zt=i.exports,w._sqlite3_free=i.Q,w._sqlite3_value_text=i.R,w._sqlite3_prepare_v2=i.S,w._sqlite3_step=i.T,w._sqlite3_reset=i.U,w._sqlite3_exec=i.V,w._sqlite3_finalize=i.W,w._sqlite3_column_name=i.X,w._sqlite3_column_text=i.Y,w._sqlite3_column_type=i.Z,w._sqlite3_errmsg=i._,w._sqlite3_backup_init=i.$,w._sqlite3_backup_step=i.aa,w._sqlite3_backup_finish=i.ba,w._sqlite3_clear_bindings=i.ca,w._sqlite3_value_blob=i.da,w._sqlite3_value_bytes=i.ea,w._sqlite3_value_double=i.fa,w._sqlite3_value_int=i.ga,w._sqlite3_value_type=i.ha,w._sqlite3_result_blob=i.ia,w._sqlite3_result_double=i.ja,w._sqlite3_result_error=i.ka,w._sqlite3_result_int=i.la,w._sqlite3_result_int64=i.ma,w._sqlite3_result_null=i.na,w._sqlite3_result_text=i.oa,w._sqlite3_aggregate_context=i.pa,w._sqlite3_column_count=i.qa,w._sqlite3_data_count=i.ra,w._sqlite3_column_blob=i.sa,w._sqlite3_column_bytes=i.ta,w._sqlite3_column_double=i.ua,w._sqlite3_bind_blob=i.va,w._sqlite3_bind_double=i.wa,w._sqlite3_bind_int=i.xa,w._sqlite3_bind_text=i.ya,w._sqlite3_bind_parameter_index=i.za,w._sqlite3_sql=i.Aa,w._sqlite3_normalized_sql=i.Ba,w._sqlite3_changes=i.Ca,w._sqlite3_close_v2=i.Da,w._sqlite3_create_function_v2=i.Ea,w._sqlite3_update_hook=i.Fa,w._sqlite3_open=i.Ga,Ft=w._malloc=i.Ha,$e=w._free=i.Ia,w._RegisterExtensionFunctions=i.Ja,xr=i.Ka,kr=i.La,st=i.Ma,Ce=i.Na,ut=i.Oa,qt=i.N,Fe=i.P,Ve(),Zt}var r={a:zr},o=w.instantiateWasm;return o?new Promise(i=>{o(r,l=>i(e(l)))}):(Xe??=w.locateFile?w.locateFile("sql-wasm-browser.wasm",U):U+"sql-wasm-browser.wasm",(function(i){return e(i.instance)})(await Ct(r)))})().then(()=>Yr()),h}),S)};y.exports=G,y.exports.default=G})(rr)),rr.exports}var En=vn();const Bn=bn(En),In="/farbod-coaching-app/assets/sql-wasm-browser-B-9ndiyM.wasm",T="(strftime('%Y-%m-%dT%H:%M:%fZ','now'))",An=[{version:1,name:"core schema",sql:`
create table users (
  id text primary key,
  role text not null check (role in ('client', 'coach')),
  name text not null,
  phone text,
  birth_date text,
  created_at text not null default ${T}
);

create table auth_sessions (
  token_hash text primary key,
  user_id text not null references users (id) on delete cascade,
  created_at text not null default ${T},
  expires_at text not null
);
create index auth_sessions_user on auth_sessions (user_id);

create table coach_credentials (
  user_id text primary key references users (id) on delete cascade,
  email text not null unique collate nocase,
  password_hash text not null
);

-- One-time sign-in links a coach issues to recover a client's account.
create table login_links (
  token_hash text primary key,
  user_id text not null references users (id) on delete cascade,
  created_by text not null references users (id),
  created_at text not null default ${T},
  expires_at text not null,
  used_at text
);

-- The onboarding profile as validated JSON (domain type Profile). Queried
-- as a whole, never by field, so a column per field would add nothing.
create table profiles (
  user_id text primary key references users (id) on delete cascade,
  data text not null check (json_valid(data)),
  updated_at text not null default ${T}
);

create table programs (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  status text not null check (status in ('awaiting_review', 'active', 'completed', 'archived')),
  weeks integer not null check (weeks > 0),
  current_week integer not null default 1,
  primary_goal text not null,
  rationale text not null check (json_valid(rationale)),
  generator text not null,
  created_at text not null default ${T},
  activated_at text,
  reviewed_at text,
  reviewed_by text references users (id)
);
-- At most one live program per client.
create unique index programs_one_live on programs (user_id)
  where status in ('awaiting_review', 'active');

create table program_sessions (
  id text primary key,
  program_id text not null references programs (id) on delete cascade,
  day_number integer not null,
  name_key text not null,
  estimated_minutes integer not null,
  unique (program_id, day_number)
);

create table session_blocks (
  id text primary key,
  session_id text not null references program_sessions (id) on delete cascade,
  position integer not null,
  type text not null,
  unique (session_id, position)
);

-- Stable identity of "exercise #N in this block"; its content lives in versions.
create table prescription_slots (
  id text primary key,
  block_id text not null references session_blocks (id) on delete cascade,
  position integer not null,
  unique (block_id, position)
);

create table prescription_versions (
  id text primary key,
  slot_id text not null references prescription_slots (id) on delete cascade,
  version integer not null,
  exercise_id text not null,
  sets integer not null check (sets > 0),
  target text not null check (json_valid(target)),
  load_kg real,
  rest_seconds integer not null,
  note text,
  source text not null check (source in ('generator', 'coach', 'recommendation')),
  recommendation_id text,
  created_by text references users (id),
  created_at text not null default ${T},
  superseded_at text,
  unique (slot_id, version)
);
create index prescription_versions_current on prescription_versions (slot_id) where superseded_at is null;

create table workouts (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  program_id text not null references programs (id),
  session_id text not null references program_sessions (id),
  week integer not null,
  status text not null check (status in ('in_progress', 'completed')),
  started_at text not null default ${T},
  completed_at text,
  difficulty text check (difficulty in ('too_easy', 'right', 'too_hard')),
  pain text check (pain in ('none', 'mild', 'significant')),
  pain_areas text check (pain_areas is null or json_valid(pain_areas)),
  note text,
  feedback_at text
);
create index workouts_user on workouts (user_id, started_at);
-- One open workout at a time per client.
create unique index workouts_one_open on workouts (user_id) where status = 'in_progress';

-- The lock: a frozen copy of what was prescribed when the workout started.
create table workout_exercises (
  id text primary key,
  workout_id text not null references workouts (id) on delete cascade,
  position integer not null,
  block_type text not null,
  block_position integer not null,
  slot_id text not null references prescription_slots (id),
  version_id text not null references prescription_versions (id),
  exercise_id text not null,
  sets integer not null,
  target text not null check (json_valid(target)),
  load_kg real,
  rest_seconds integer not null,
  note text,
  unique (workout_id, position)
);
create index workout_exercises_exercise on workout_exercises (exercise_id);

create table set_logs (
  id text primary key,
  workout_exercise_id text not null references workout_exercises (id) on delete cascade,
  set_number integer not null check (set_number > 0),
  reps integer check (reps >= 0),
  load_kg real check (load_kg >= 0),
  logged_at text not null default ${T},
  unique (workout_exercise_id, set_number)
);

create table check_ins (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  sleep integer not null check (sleep between 1 and 3),
  energy integer not null check (energy between 1 and 3),
  soreness integer not null check (soreness between 1 and 3),
  pain text not null check (pain in ('none', 'mild', 'significant')),
  pain_areas text check (pain_areas is null or json_valid(pain_areas)),
  note text,
  created_at text not null default ${T}
);
create index check_ins_user on check_ins (user_id, created_at);

-- Structured safety signals. Pain is never only free text.
create table flags (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  kind text not null check (kind in ('pain', 'safety')),
  source text not null check (source in ('onboarding', 'check_in', 'workout', 'profile')),
  level text not null check (level in ('mild', 'significant')),
  areas text check (areas is null or json_valid(areas)),
  detail text,
  workout_id text references workouts (id),
  check_in_id text references check_ins (id),
  status text not null default 'open' check (status in ('open', 'resolved')),
  created_at text not null default ${T},
  resolved_at text,
  resolved_by text references users (id),
  resolution text
);
create index flags_open on flags (status, created_at);

create table recommendations (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  workout_id text not null references workouts (id),
  slot_id text not null references prescription_slots (id),
  exercise_id text not null,
  state text not null check (state in ('PROGRESS', 'MAINTAIN', 'REDUCE', 'MODIFY', 'REPLACE', 'FLAG_FOR_COACH')),
  reason text not null,
  facts text not null check (json_valid(facts)),
  proposal text check (proposal is null or json_valid(proposal)),
  engine text not null,
  narrative text,
  status text not null check (status in ('pending', 'approved', 'rejected', 'superseded', 'noted')),
  created_at text not null default ${T},
  decided_at text,
  decided_by text references users (id),
  decision_note text
);
create index recommendations_pending on recommendations (status, user_id);

create table audit_events (
  id integer primary key autoincrement,
  at text not null default ${T},
  actor_id text,
  action text not null,
  entity text not null,
  entity_id text not null,
  data text check (data is null or json_valid(data))
);
create index audit_entity on audit_events (entity, entity_id);

-- ── Integrity triggers ─────────────────────────────────────────────

create trigger prescription_versions_no_delete before delete on prescription_versions
when exists (select 1 from prescription_slots where id = old.slot_id)
begin select raise(abort, 'prescription versions are append-only'); end;

create trigger prescription_versions_append_only before update on prescription_versions
when not (
  old.superseded_at is null and new.superseded_at is not null
  and new.id = old.id and new.slot_id = old.slot_id and new.version = old.version
  and new.exercise_id = old.exercise_id and new.sets = old.sets and new.target = old.target
  and new.load_kg is old.load_kg and new.rest_seconds = old.rest_seconds and new.note is old.note
)
begin select raise(abort, 'prescription versions are append-only'); end;

create trigger workout_exercises_locked before update on workout_exercises
begin select raise(abort, 'a workout''s locked prescription cannot change'); end;

create trigger set_logs_frozen_update before update on set_logs
when (select w.status from workouts w join workout_exercises we on we.workout_id = w.id
      where we.id = old.workout_exercise_id) = 'completed'
begin select raise(abort, 'sets of a completed workout are history'); end;

create trigger set_logs_frozen_delete before delete on set_logs
when (select w.status from workouts w join workout_exercises we on we.workout_id = w.id
      where we.id = old.workout_exercise_id) = 'completed'
begin select raise(abort, 'sets of a completed workout are history'); end;

create trigger set_logs_frozen_insert before insert on set_logs
when (select w.status from workouts w join workout_exercises we on we.workout_id = w.id
      where we.id = new.workout_exercise_id) = 'completed'
begin select raise(abort, 'sets of a completed workout are history'); end;

create trigger workouts_completed_is_final before update on workouts
when old.status = 'completed' and (
  new.status is not old.status or new.started_at is not old.started_at
  or new.completed_at is not old.completed_at or new.session_id is not old.session_id
  or new.week is not old.week or new.user_id is not old.user_id
  or (old.feedback_at is not null and (
    new.difficulty is not old.difficulty or new.pain is not old.pain
    or new.pain_areas is not old.pain_areas or new.note is not old.note
    or new.feedback_at is not old.feedback_at))
)
begin select raise(abort, 'a completed workout is history'); end;

create trigger audit_no_update before update on audit_events
begin select raise(abort, 'the audit log is append-only'); end;
create trigger audit_no_delete before delete on audit_events
begin select raise(abort, 'the audit log is append-only'); end;
`},{version:2,name:"ai workout summary",sql:`
alter table workouts add column ai_summary text;
alter table workouts add column ai_summary_model text;
alter table workouts add column ai_summary_at text;
`},{version:3,name:"phase 1 safety: screening, consent, holds, alerts, rate limits",sql:`
-- Pre-participation health screening. Answers are stable keys (wording lives
-- in the i18n layer and can change without changing stored meaning).
create table health_screenings (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  version integer not null,
  answers text not null check (json_valid(answers)),
  any_yes integer not null check (any_yes in (0, 1)),
  created_at text not null default ${T}
);
create index health_screenings_user on health_screenings (user_id);

create table consents (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  kind text not null,
  version integer not null,
  accepted_at text not null default ${T}
);
create index consents_user on consents (user_id);

-- A hold stops new workouts until Farbod has looked at the flag behind it.
-- Released, never deleted: holds are part of the safety history.
create table program_holds (
  id text primary key,
  program_id text not null references programs (id) on delete cascade,
  flag_id text not null references flags (id),
  reason text not null,
  created_at text not null default ${T},
  released_at text,
  released_by text references users (id)
);
create index program_holds_open on program_holds (program_id) where released_at is null;

create trigger program_holds_no_delete before delete on program_holds
when exists (select 1 from programs where id = old.program_id)
begin select raise(abort, 'holds are safety history'); end;

create trigger program_holds_release_once before update on program_holds
when old.released_at is not null
  or new.id is not old.id or new.program_id is not old.program_id
  or new.flag_id is not old.flag_id or new.reason is not old.reason
  or new.created_at is not old.created_at
begin select raise(abort, 'a hold can only be released, once'); end;

-- Transactional outbox: an alert is written in the same transaction as the
-- event that caused it, then delivered (and retried) by the sender.
create table notification_outbox (
  id text primary key,
  kind text not null,
  recipient text,
  subject text not null,
  body text not null,
  status text not null default 'pending' check (status in ('pending', 'sending', 'sent', 'failed')),
  attempts integer not null default 0,
  next_attempt_at text not null default ${T},
  last_error text,
  created_at text not null default ${T},
  sent_at text
);
create index notification_outbox_due on notification_outbox (status, next_attempt_at);

create table rate_limits (
  key text primary key,
  window_start text not null,
  count integer not null
);
`},{version:4,name:"phase 2 coaching: swaps, structural edits, plan notices, questions, bodyweight",sql:`
-- In-workout swap. The lock (workout_exercises) never changes: what was
-- prescribed stays true, and what was actually done is recorded here. One
-- swap per exercise, only before any set of it is logged, so every set of a
-- swapped exercise belongs to the substitute.
create table workout_substitutions (
  id text primary key,
  workout_exercise_id text not null unique references workout_exercises (id) on delete cascade,
  from_exercise_id text not null,
  to_exercise_id text not null,
  target text not null check (json_valid(target)),
  reason text not null check (reason in ('equipment_busy', 'hurts', 'unsure_how')),
  flag_id text references flags (id),
  created_at text not null default ${T}
);

create trigger workout_substitutions_no_update before update on workout_substitutions
begin select raise(abort, 'a swap is history'); end;

create trigger workout_substitutions_no_delete before delete on workout_substitutions
when exists (select 1 from workout_exercises where id = old.workout_exercise_id)
begin select raise(abort, 'a swap is history'); end;

create trigger workout_substitutions_open_only before insert on workout_substitutions
when (select w.status from workouts w join workout_exercises we on we.workout_id = w.id
      where we.id = new.workout_exercise_id) is not 'in_progress'
  or exists (select 1 from set_logs where workout_exercise_id = new.workout_exercise_id)
begin select raise(abort, 'swap only an open exercise with no sets logged'); end;

-- Coach structural edits: a removed exercise is archived, never deleted —
-- workouts that locked it still point at it. Archiving happens once.
alter table prescription_slots add column archived_at text;
alter table prescription_slots add column archived_by text references users (id);

create trigger prescription_slots_archive_once before update on prescription_slots
when old.archived_at is not null
begin select raise(abort, 'a removed exercise stays removed'); end;

-- "Farbod updated your plan": changes after this moment are shown on Today.
alter table users add column plan_seen_at text;

-- Ask Farbod: one question, one answer. Not a chat.
create table questions (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  body text not null,
  created_at text not null default ${T},
  answer text,
  answered_at text,
  answered_by text references users (id),
  client_seen_at text
);
create index questions_open on questions (answered_at, created_at);
create index questions_user on questions (user_id, created_at);

create trigger questions_answer_once before update on questions
when new.body is not old.body or new.user_id is not old.user_id or new.created_at is not old.created_at
  or (old.answer is not null and (new.answer is not old.answer or new.answered_at is not old.answered_at
      or new.answered_by is not old.answered_by))
begin select raise(abort, 'a question is answered once'); end;

-- Weekly bodyweight, only ever asked of fat-loss clients, always optional.
alter table check_ins add column weight_kg real check (weight_kg is null or (weight_kg >= 30 and weight_kg <= 300));
`},{version:5,name:"passkeys: one-tap sign-in with Face ID / fingerprint",sql:`
-- A client's passkeys. Only the public key is stored; the private key never
-- leaves the person's device (or their Apple/Google password manager).
create table passkeys (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  public_key blob not null,
  counter integer not null default 0,
  transports text,
  created_at text not null default ${T},
  last_used_at text
);
create index passkeys_user on passkeys (user_id);

-- Short-lived, single-use WebAuthn challenges.
create table passkey_challenges (
  challenge text primary key,
  user_id text references users (id) on delete cascade,
  purpose text not null check (purpose in ('register', 'sign_in')),
  expires_at text not null
);
`},{version:6,name:"complete profile and activity uploads",sql:`
-- The Complete Profile: optional answers after onboarding, validated in
-- src/domain/details.ts. One row per client, replaced on each save.
create table profile_details (
  user_id text primary key references users (id) on delete cascade,
  data text not null check (json_valid(data)),
  updated_at text not null default ${T}
);

-- Files a client exports from Garmin, Strava, Whoop (or anything else) and
-- uploads. The file is kept as-is; GPX/TCX also get a parsed summary.
create table activities (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  source text not null check (source in ('garmin', 'strava', 'whoop', 'other')),
  format text not null check (format in ('gpx', 'tcx', 'fit', 'csv', 'image', 'pdf', 'other')),
  file_name text not null,
  stored_name text not null unique,
  size_bytes integer not null check (size_bytes > 0),
  summary text check (summary is null or json_valid(summary)),
  created_at text not null default ${T}
);
create index activities_user on activities (user_id, created_at);
`},{version:7,name:"uploads: InBody sheets and lab results",sql:`
-- SQLite cannot widen a CHECK in place: rebuild the table with the new sources.
create table activities_v7 (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  source text not null check (source in ('garmin', 'strava', 'whoop', 'other', 'inbody', 'lab')),
  format text not null check (format in ('gpx', 'tcx', 'fit', 'csv', 'image', 'pdf', 'other')),
  file_name text not null,
  stored_name text not null unique,
  size_bytes integer not null check (size_bytes > 0),
  summary text check (summary is null or json_valid(summary)),
  created_at text not null default ${T}
);
insert into activities_v7 select id, user_id, source, format, file_name, stored_name, size_bytes, summary, created_at from activities;
drop table activities;
alter table activities_v7 rename to activities;
create index activities_user on activities (user_id, created_at);
`},{version:8,name:"uploads: one watch tile, one health tile, and a link to the workout",sql:`
create table activities_v8 (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  source text not null check (source in ('garmin', 'strava', 'whoop', 'other', 'inbody', 'lab', 'watch', 'health')),
  format text not null check (format in ('gpx', 'tcx', 'fit', 'csv', 'image', 'pdf', 'other')),
  file_name text not null,
  stored_name text not null unique,
  size_bytes integer not null check (size_bytes > 0),
  summary text check (summary is null or json_valid(summary)),
  -- A watch screenshot sent right after a workout belongs to that workout.
  workout_id text references workouts (id) on delete set null,
  created_at text not null default ${T}
);
insert into activities_v8 (id, user_id, source, format, file_name, stored_name, size_bytes, summary, created_at)
  select id, user_id, source, format, file_name, stored_name, size_bytes, summary, created_at from activities;
drop table activities;
alter table activities_v8 rename to activities;
create index activities_user on activities (user_id, created_at);
`},{version:9,name:"per-client switch for automatic plan adaptation",sql:`
-- Farbod can turn off feedback-driven automatic changes for a client (default on).
alter table users add column auto_adapt integer not null default 1 check (auto_adapt in (0, 1));
`},{version:10,name:"richer end-of-workout feedback",sql:`
-- Session RPE (1–10), enjoyment (1–5), what the client wants next time, and what that changed.
alter table workouts add column rpe integer check (rpe is null or rpe between 1 and 10);
alter table workouts add column enjoyment integer check (enjoyment is null or enjoyment between 1 and 5);
alter table workouts add column wish text check (wish is null or wish in ('same', 'shorter', 'heavier', 'lighter', 'variety', 'more_cardio'));
alter table workouts add column adapted text check (adapted is null or json_valid(adapted));
`},{version:11,name:"no alert emails",sql:`
-- Farbod follows up from the coach console; alert emails were removed (Oct 2026).
drop table if exists notification_outbox;
`},{version:12,name:"client password sign-in and self-service recovery",sql:`
-- A client may sign in from any device with mobile + password; a one-time
-- recovery code (stored hashed) lets them set a new password without Farbod.
alter table users add column password_hash text;
alter table users add column recovery_hash text;
`},{version:13,name:"sign-in with an SMS code",sql:`
-- One pending sign-in code per mobile (hashed, two minutes, five tries).
-- Unused until an SMS provider is configured (SMS_PROVIDER in deploy/.env).
create table login_codes (
  phone text primary key,
  code_hash text not null,
  sent_at text not null,
  expires_at text not null,
  attempts integer not null default 0
);
`},{version:14,name:"4-digit PIN lockout",sql:`
-- Client sign-in is mobile + a 4-digit PIN; wrong PINs in a row are counted
-- and stop the PIN working at 10 until it is reset (recovery code, SMS, link).
alter table users add column pin_failures integer not null default 0;
`},{version:15,name:"programming brain (Rulebook v0.3)",sql:`
-- The plan's reasoning, stored with it: architecture + goal priority + why
-- Farbod reviews (programs), each session's intent, each slot's role and
-- each version's reasons. "No reason = invalid decision."
alter table programs add column architecture text check (architecture is null or json_valid(architecture));
-- A lighter week Farbod approved (fatigue signal; no calendar deload).
alter table programs add column deload_week integer;
alter table program_sessions add column intent text check (intent is null or json_valid(intent));
alter table prescription_slots add column role text check (role is null or role in ('primary', 'secondary', 'accessory'));
alter table prescription_versions add column reasons text check (reasons is null or json_valid(reasons));

-- Exercise decisions: KEEP / PROGRESS / ROTATE / REGRESS / REPLACE / HOLD,
-- who may apply them, and every reason (state keeps the legacy summary).
alter table recommendations add column decision text check (decision is null or decision in ('KEEP', 'PROGRESS', 'ROTATE', 'REGRESS', 'REPLACE', 'HOLD'));
alter table recommendations add column approval text check (approval is null or approval in ('auto', 'farbod'));
alter table recommendations add column reasons text check (reasons is null or json_valid(reasons));

-- Optional chips after an exercise's last set: reps in reserve and control.
create table exercise_feedback (
  workout_exercise_id text primary key references workout_exercises (id) on delete cascade,
  rir integer check (rir is null or rir between 0 and 5),
  quality text check (quality is null or quality in ('controlled', 'okay', 'hard_to_control')),
  updated_at text not null default ${T}
);

-- Pain reports (3 taps) and the next-day check (Q7: one reminder, then not settled).
create table pain_reports (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  workout_id text references workouts (id),
  workout_exercise_id text references workout_exercises (id),
  exercise_id text,
  area text not null,
  severity integer not null check (severity between 0 and 10),
  familiar integer not null default 0,
  red_flag integer not null default 0,
  pathway text not null check (pathway in ('red_flag', 'mild', 'cautious')),
  flag_id text references flags (id),
  next_day text check (next_day is null or next_day in ('settled', 'same', 'worse', 'not_settled')),
  next_day_at text,
  reminded_at text,
  created_at text not null default ${T}
);
create index pain_reports_user on pain_reports (user_id, created_at);

-- The QC gate's report for each generated program, and Farbod's override note.
create table qc_reports (
  id text primary key,
  program_id text not null references programs (id) on delete cascade,
  report text not null check (json_valid(report)),
  created_at text not null default ${T},
  overridden_by text references users (id),
  override_note text
);
create index qc_reports_program on qc_reports (program_id, created_at);

-- Farbod's exercise preferences (+1 / +2): ranking learns his style, never silently.
create table coach_preferences (
  id text primary key,
  exercise_id text not null,
  context text check (context is null or json_valid(context)),
  preference integer not null check (preference in (1, 2)),
  note text,
  created_by text references users (id),
  created_at text not null default ${T},
  archived_at text
);

-- Client-level proposals for Farbod: deload, fatigue, adherence, goal priority.
create table coach_proposals (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  program_id text references programs (id),
  kind text not null check (kind in ('deload', 'fatigue', 'accumulation', 'adherence', 'goal_priority', 'preference')),
  payload text check (payload is null or json_valid(payload)),
  reasons text not null check (json_valid(reasons)),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'superseded')),
  created_at text not null default ${T},
  decided_at text,
  decided_by text references users (id),
  decision_note text
);
create index coach_proposals_pending on coach_proposals (status, user_id);
`},{version:16,name:"today's check-in adjusts today's workout",sql:`
-- What the morning check-in changed in this workout only: a lighter low day
-- or swaps away from a painful area. Null when nothing changed.
alter table workouts add column adjustment text check (adjustment is null or json_valid(adjustment));
`},{version:17,name:"coach controls and CRM: archive, notes, follow-ups, tags",sql:`
-- An archived client can't sign in and leaves the coach's lists; restoring
-- brings everything back. Erasure anonymises (training history is immutable).
alter table users add column archived_at text;
alter table users add column erased_at text;
-- Farbod's own labels for a client (JSON array of short strings).
alter table users add column crm_tags text check (crm_tags is null or json_valid(crm_tags));

-- Farbod's private notes about a client: a timeline, never shown to the client.
create table coach_notes (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  body text not null check (length(body) between 1 and 2000),
  created_by text references users (id),
  created_at text not null default ${T}
);
create index coach_notes_user on coach_notes (user_id, created_at);

-- "Call Ali on Thursday": a dated reminder for Farbod, done or open.
create table follow_ups (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  due_on text not null,
  body text not null check (length(body) between 1 and 500),
  created_by text references users (id),
  created_at text not null default ${T},
  done_at text
);
create index follow_ups_open on follow_ups (done_at, due_on);
`},{version:18,name:"body: measurements and private progress photos",sql:`
-- Tape-measure and scale entries, all optional, one row per day measured.
create table body_measurements (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  measured_on text not null,
  weight_kg real check (weight_kg is null or weight_kg between 25 and 300),
  waist_cm real check (waist_cm is null or waist_cm between 30 and 250),
  hips_cm real check (hips_cm is null or hips_cm between 30 and 250),
  chest_cm real check (chest_cm is null or chest_cm between 30 and 250),
  arm_cm real check (arm_cm is null or arm_cm between 10 and 100),
  thigh_cm real check (thigh_cm is null or thigh_cm between 20 and 150),
  created_at text not null default ${T}
);
create index body_measurements_user on body_measurements (user_id, measured_on);

-- Private photos: a profile picture and progress photos by angle. Only the
-- client and Farbod can see them; the client can delete them at any time.
create table client_photos (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  kind text not null check (kind in ('avatar', 'front', 'side', 'back')),
  stored_name text not null unique,
  content_type text not null,
  taken_on text not null,
  created_at text not null default ${T}
);
create index client_photos_user on client_photos (user_id, kind, taken_on);
`},{version:19,name:"clients: woman or man",sql:`
-- Woman or man, asked with one tap on the first onboarding screen. Null for
-- clients who joined before it was asked (Farbod can set it).
alter table users add column sex text check (sex is null or sex in ('female', 'male'));
`},{version:20,name:"training somewhere else; settings changed by the client",sql:`
-- "Today I'm somewhere else": a temporary place and time that reshape the
-- workouts started up to and including the "until" Tehran day. One per client.
create table training_contexts (
  user_id text primary key references users (id) on delete cascade,
  place text not null check (place in ('full_gym', 'small_gym', 'home', 'bodyweight')),
  minutes integer check (minutes is null or minutes in (15, 30, 45)),
  until text not null,
  created_at text not null default ${T}
);
-- The context a workout was done in (null: as planned). Such workouts make
-- no progression decisions and their swaps say nothing about the exercises.
alter table workouts add column context text check (context is null or json_valid(context));
-- The client changed where or how often they train; Farbod decides whether
-- to redesign the plan. Null once he has.
alter table users add column settings_change text check (settings_change is null or json_valid(settings_change));
`},{version:21,name:"free trial, plans and card-to-card payments",sql:`
-- The free trial (src/domain/access.ts) starts at the first workout: null
-- until then, for new and existing clients alike.
alter table users add column trial_ends_at text;

-- What Farbod sells: 1 and 3 months. Prices in tomans, set by him in the
-- console (0 = not set yet: the client is asked to message him instead).
create table plans (
  months integer primary key check (months in (1, 3)),
  price integer not null default 0 check (price >= 0),
  active integer not null default 1 check (active in (0, 1)),
  updated_at text not null default ${T}
);
insert into plans (months) values (1), (3);

-- One row per payment the client reports (card-to-card, with a tracking
-- code) or per period Farbod grants. Farbod approves or rejects; an approved
-- row carries the period it pays for. Rows are never deleted.
create table subscriptions (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  kind text not null check (kind in ('purchase', 'grant')),
  months integer check (months is null or months in (1, 3)),
  days integer not null check (days > 0),
  amount integer not null default 0 check (amount >= 0),
  payer_ref text,
  status text not null check (status in ('pending', 'approved', 'rejected')),
  note text,
  created_at text not null default ${T},
  decided_at text,
  decided_by text references users (id),
  starts_at text,
  ends_at text,
  check (status != 'approved' or (starts_at is not null and ends_at is not null))
);
create index subscriptions_user on subscriptions (user_id, created_at);
create index subscriptions_pending on subscriptions (status) where status = 'pending';
`},{version:22,name:"notifications: when each person last opened them",sql:`
-- Notifications are read from the audit log (every event is already there);
-- this only remembers when each person last looked, for the unread count.
alter table users add column notifications_seen_at text;
create index audit_at on audit_events (at);
`},{version:23,name:"check-in: where the soreness is",sql:`
-- When soreness is "a lot", the client may say where (domain/guidance.ts SORENESS_GROUPS); JSON array, null otherwise.
alter table check_ins add column soreness_areas text;
`}];let ge=null,Pt=()=>{},ir=null;function Nn(y){Pt=y}function Mn(y){ir=y}function Ue(){if(!ge)throw new Error("initDb() has not run");return ge}class Fn{constructor(g){this.sql=g}rows(g){const S=Ue().prepare(this.sql);try{S.bind(g.map(N=>typeof N=="bigint"?Number(N):N));const G=[];for(;S.step();)G.push(S.getAsObject());return G}finally{S.free()}}get(...g){return this.rows(g)[0]}all(...g){return this.rows(g)}run(...g){return ir?.(this.sql,g),this.rows(g),Pt(),{changes:Ue().getRowsModified(),lastInsertRowid:0}}}const or={exec:y=>{ir?.(y,[]),Ue().exec(y),Pt()},prepare:y=>new Fn(y)};let Nr=null;async function qn(y){Nr??=await Bn({locateFile:()=>In});const g=new Nr.Database(y);return Un(g),g}function Un(y){y.exec("pragma foreign_keys = on;"),y.exec("create table if not exists schema_migrations (version integer primary key, name text not null, applied_at text not null)");const g=new Set((y.exec("select version from schema_migrations")[0]?.values??[]).map(S=>S[0]));for(const S of An)if(!g.has(S.version)){y.exec("begin immediate");try{y.exec(S.sql),y.run("insert into schema_migrations (version, name, applied_at) values (?, ?, ?)",[S.version,S.name,new Date().toISOString()]),y.exec("commit")}catch(G){throw y.exec("rollback"),G}}}async function $n(y){ge=await qn(y)}function Cn(y){ge&&ge!==y&&ge.close(),ge=y,Pt()}function jn(y,g){const S=ge;ge=y;try{return g()}finally{ge=S}}function Dn(){return Ue()}function On(){return Ue().export()}function Ln(){return"browser"}function Qn(y,...g){return or.prepare(y).get(...g)}function Wn(y,...g){return or.prepare(y).all(...g)}function Rn(y,...g){return or.prepare(y).run(...g)}let nr=0;function zn(y){if(nr>0)return y();Ue().exec("begin immediate"),nr+=1;try{const g=y();return Ue().exec("commit"),g}catch(g){throw Ue().exec("rollback"),g}finally{nr-=1}}function Yn(){return crypto.randomUUID()}function Gn(){return new Date().toISOString()}function Vn(y){return y?JSON.parse(y):null}function Xn(y,g,S,G,N){Rn("insert into audit_events (actor_id, action, entity, entity_id, data) values (?, ?, ?, ?, ?)",y,g,S,G,N===void 0?null:JSON.stringify(N))}export{Qn as a,Wn as b,Dn as c,Mn as d,Xn as e,Ln as f,Gn as g,On as h,Pn as i,Vn as j,$n as k,Nn as l,Sn as m,Yn as n,qn as o,Rn as r,Cn as s,zn as t,jn as w};
