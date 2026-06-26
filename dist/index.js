"use strict";var w=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var m=w(function(I,k){
var n=require('@stdlib/math-base-special-pow/dist');function t(i,r,a,v,f,e,o,y){var u,q,c,l,s;if(u=e.data,q=e.accessors[1],c=y,i===1)return f?q(u,c,n(r,v)):q(u,c,n(r,a)),e;for(q(u,c,n(r,a)),c+=o,f&&(i-=1),l=(v-a)/i,s=1;s<i;s++)q(u,c,n(r,a+l*s)),c+=o;return f&&q(u,c,n(r,v)),e}k.exports=t
});var j=w(function(J,O){
var z=require('@stdlib/array-base-arraylike2object/dist'),g=require('@stdlib/math-base-special-pow/dist'),A=m();function B(i,r,a,v,f,e,o,y){var u,q,c,l;if(i<=0)return e;if(c=z(e),c.accessorProtocol)return A(i,r,a,v,f,c,o,y),e;if(u=y,i===1)return f?e[u]=g(r,v):e[u]=g(r,a),e;for(e[u]=g(r,a),u+=o,f&&(i-=1),q=(v-a)/i,l=1;l<i;l++)e[u]=g(r,a+q*l),u+=o;return f&&(e[u]=g(r,v)),e}O.exports=B
});var R=w(function(K,P){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=j();function E(i,r,a,v,f,e,o){return D(i,r,a,v,f,e,o,C(i,o))}P.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),G=j();F(h,"ndarray",G);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
