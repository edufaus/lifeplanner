import{S as K,i as O,s as Q,e as l,t as L,k as m,c as r,a as I,h as M,d as u,m as p,b as n,g as P,J as t,L as F,M as W,N as H,n as G}from"../../chunks/index-a7295f9e.js";function X(R){let i,c,v,h,e,_,D,V,B,$,y,C,o,J,x,N,S,k,f,b,q,E,A,T;return{c(){i=l("div"),c=l("div"),v=L("Invalid Room id"),h=m(),e=l("div"),_=l("div"),D=L("Create Room"),V=m(),B=l("br"),$=m(),y=l("br"),C=m(),o=l("input"),J=m(),x=l("br"),N=m(),S=l("br"),k=m(),f=l("a"),b=l("div"),q=L("Join Room"),this.h()},l(a){i=r(a,"DIV",{class:!0});var d=I(i);c=r(d,"DIV",{class:!0});var U=I(c);v=M(U,"Invalid Room id"),U.forEach(u),d.forEach(u),h=p(a),e=r(a,"DIV",{class:!0});var s=I(e);_=r(s,"DIV",{class:!0});var j=I(_);D=M(j,"Create Room"),j.forEach(u),V=p(s),B=r(s,"BR",{}),$=p(s),y=r(s,"BR",{}),C=p(s),o=r(s,"INPUT",{type:!0,class:!0,placeholder:!0}),J=p(s),x=r(s,"BR",{}),N=p(s),S=r(s,"BR",{}),k=p(s),f=r(s,"A",{href:!0});var w=I(f);b=r(w,"DIV",{class:!0});var z=I(b);q=M(z,"Join Room"),z.forEach(u),w.forEach(u),s.forEach(u),this.h()},h(){n(c,"class","title is-1 is-red"),n(i,"class","box"),n(_,"class","button"),n(o,"type","number"),n(o,"class","input"),n(o,"placeholder","Room Id"),n(b,"class","button"),n(f,"href",E="/room/"+R[0]),n(e,"class","box")},m(a,d){P(a,i,d),t(i,c),t(c,v),P(a,h,d),P(a,e,d),t(e,_),t(_,D),t(e,V),t(e,B),t(e,$),t(e,y),t(e,C),t(e,o),F(o,R[0]),t(e,J),t(e,x),t(e,N),t(e,S),t(e,k),t(e,f),t(f,b),t(b,q),A||(T=W(o,"input",R[1]),A=!0)},p(a,[d]){d&1&&H(o.value)!==a[0]&&F(o,a[0]),d&1&&E!==(E="/room/"+a[0])&&n(f,"href",E)},i:G,o:G,d(a){a&&u(i),a&&u(h),a&&u(e),A=!1,T()}}}function Y(R,i,c){let v=0;function h(){v=H(this.value),c(0,v)}return[v,h]}class g extends K{constructor(i){super(),O(this,i,Y,X,Q,{})}}export{g as default};
