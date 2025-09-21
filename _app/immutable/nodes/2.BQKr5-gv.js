import"../chunks/DsnmJJEf.js";import{M as ue,a0 as ke,aW as Ee,x as B,O as T,q as Ce,y as ve,ad as M,af as Ie,a2 as Oe,a3 as He,a4 as we,w as V,z as L,C as Le,A as We,N as Z,a7 as Pe,aX as Q,aY as ee,a5 as Ye,aZ as ye,aC as Ge,a_ as xe,F as Ne,i as Fe,a8 as fe,a9 as Ae,a$ as Ue,b0 as ne,aA as ze,aG as he,b1 as je,r as qe,b2 as Be,E as Ve,b3 as Xe,S as Te,b4 as Je,a1 as Ze,b5 as Ke,R as Qe,b6 as ea,aO as _e,Q as Y,Z as W,ax as S,Y as $,T as G,av as _,aw as u,_ as K,b7 as aa,X as ae,$ as te,U as re,W as X,aE as ta,b8 as ra,b9 as ia,aD as J,ag as oe,ah as U}from"../chunks/BoDdyupz.js";import{s as me}from"../chunks/BS4Ov2Xy.js";import{p as q,r as ie,s as ge,i as le}from"../chunks/COTbQ57w.js";import{a as sa,b as Se,s as na}from"../chunks/C4er4t0j.js";import"../chunks/XDo9lOmh.js";function oa(i,e){return e}function la(i,e,a){for(var t=i.items,n=[],v=e.length,r=0;r<v;r++)Be(e[r].e,n,!0);var s=v>0&&n.length===0&&a!==null;if(s){var d=a.parentNode;Ve(d),d.append(a),t.clear(),O(i,e[0].prev,e[v-1].next)}Xe(n,()=>{for(var c=0;c<v;c++){var f=e[c];s||(t.delete(f.k),O(i,f.prev,f.next)),he(f.e,!s)}})}function Me(i,e,a,t,n,v=null){var r=i,s={flags:e,items:new Map,first:null},d=(e&Ee)!==0;if(d){var c=i;r=T?B(Ce(c)):c.appendChild(ue())}T&&ve();var f=null,w=!1,p=new Map,A=Ie(()=>{var x=a();return Fe(x)?x:x==null?[]:Ne(x)}),l,b;function h(){ca(b,l,s,p,r,n,e,t,a),v!==null&&(l.length===0?f?fe(f):f=Z(()=>v(r)):f!==null&&Ae(f,()=>{f=null}))}ke(()=>{b??=Te,l=M(A);var x=l.length;if(w&&x===0)return;w=x===0;let k=!1;if(T){var R=Oe(r)===He;R!==(x===0)&&(r=we(),B(r),V(!1),k=!0)}if(T){for(var I=null,C,o=0;o<x;o++){if(L.nodeType===Le&&L.data===We){r=L,k=!0,V(!1);break}var m=l[o],N=t(m,o);C=de(L,s,I,null,m,N,o,n,e,a),s.items.set(N,C),I=C}x>0&&B(we())}if(T)x===0&&v&&(f=Z(()=>v(r)));else if(Pe()){var P=new Set,F=Ye;for(o=0;o<x;o+=1){m=l[o],N=t(m,o);var g=s.items.get(N)??p.get(N);g?(e&(Q|ee))!==0&&Re(g,m,o,e):(C=de(null,s,null,null,m,N,o,n,e,a,!0),p.set(N,C)),P.add(N)}for(const[y,E]of s.items)P.has(y)||F.skipped_effects.add(E.e);F.add_callback(h)}else h();k&&V(!0),M(A)}),T&&(r=L)}function ca(i,e,a,t,n,v,r,s,d){var c=(r&je)!==0,f=(r&(Q|ee))!==0,w=e.length,p=a.items,A=a.first,l=A,b,h=null,x,k=[],R=[],I,C,o,m;if(c)for(m=0;m<w;m+=1)I=e[m],C=s(I,m),o=p.get(C),o!==void 0&&(o.a?.measure(),(x??=new Set).add(o));for(m=0;m<w;m+=1){if(I=e[m],C=s(I,m),o=p.get(C),o===void 0){var N=t.get(C);if(N!==void 0){t.delete(C),p.set(C,N);var P=h?h.next:l;O(a,h,N),O(a,N,P),ce(N,P,n),h=N}else{var F=l?l.e.nodes_start:n;h=de(F,a,h,h===null?a.first:h.next,I,C,m,v,r,d)}p.set(C,h),k=[],R=[],l=h.next;continue}if(f&&Re(o,I,m,r),(o.e.f&ne)!==0&&(fe(o.e),c&&(o.a?.unfix(),(x??=new Set).delete(o))),o!==l){if(b!==void 0&&b.has(o)){if(k.length<R.length){var g=R[0],y;h=g.prev;var E=k[0],D=k[k.length-1];for(y=0;y<k.length;y+=1)ce(k[y],g,n);for(y=0;y<R.length;y+=1)b.delete(R[y]);O(a,E.prev,D.next),O(a,h,E),O(a,D,g),l=g,h=D,m-=1,k=[],R=[]}else b.delete(o),ce(o,l,n),O(a,o.prev,o.next),O(a,o,h===null?a.first:h.next),O(a,h,o),h=o;continue}for(k=[],R=[];l!==null&&l.k!==C;)(l.e.f&ne)===0&&(b??=new Set).add(l),R.push(l),l=l.next;if(l===null)continue;o=l}k.push(o),h=o,l=o.next}if(l!==null||b!==void 0){for(var H=b===void 0?[]:Ne(b);l!==null;)(l.e.f&ne)===0&&H.push(l),l=l.next;var z=H.length;if(z>0){var j=(r&Ee)!==0&&w===0?n:null;if(c){for(m=0;m<z;m+=1)H[m].a?.measure();for(m=0;m<z;m+=1)H[m].a?.fix()}la(a,H,j)}}c&&ze(()=>{if(x!==void 0)for(o of x)o.a?.apply()}),i.first=a.first&&a.first.e,i.last=h&&h.e;for(var se of t.values())he(se.e);t.clear()}function Re(i,e,a,t){(t&Q)!==0&&ye(i.v,e),(t&ee)!==0?ye(i.i,a):i.i=a}function de(i,e,a,t,n,v,r,s,d,c,f){var w=(d&Q)!==0,p=(d&Ue)===0,A=w?p?Ge(n,!1,!1):xe(n):n,l=(d&ee)===0?r:xe(r),b={i:l,v:A,k:v,a:null,e:null,prev:a,next:t};try{if(i===null){var h=document.createDocumentFragment();h.append(i=ue())}return b.e=Z(()=>s(i,A,l,c),T),b.e.prev=a&&a.e,b.e.next=t&&t.e,a===null?f||(e.first=b):(a.next=b,a.e.next=b.e),t!==null&&(t.prev=b,t.e.prev=b.e),b}finally{}}function ce(i,e,a){for(var t=i.next?i.next.e.nodes_start:a,n=e?e.e.nodes_start:a,v=i.e.nodes_start;v!==null&&v!==t;){var r=qe(v);n.before(v),v=r}}function O(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function va(i,e,a,t,n,v){let r=T;T&&ve();var s,d,c=null;T&&L.nodeType===Je&&(c=L,ve());var f=T?L:i,w;ke(()=>{const p=e()||null;var A=Ke;p!==s&&(w&&(p===null?Ae(w,()=>{w=null,d=null}):p===d?fe(w):he(w)),p&&p!==d&&(w=Z(()=>{if(c=T?c:document.createElementNS(A,p),Qe(c,c),t){T&&ea(p)&&c.append(document.createComment(""));var l=T?Ce(c):c.appendChild(ue());T&&(l===null?V(!1):B(l)),t(c,l)}Te.nodes_end=c,f.before(c)})),s=p,s&&(d=s))},Ze),r&&(V(!0),B(f))}var da=(i,e)=>e.onClear(),ua=W('<li class="svelte-13yr2t8"><p> </p></li>'),fa=W('<div><div class="flex justify-between items-center"><h3>Logs</h3> <button class="!bg-[transparent] !text-[#26f] !hover:underline">Clear</button></div> <ul></ul></div>');function ha(i,e){Y(e,!0);var a=fa(),t=_(a),n=S(_(t),2);n.__click=[da,e],u(t);var v=S(t,2);Me(v,21,()=>e.logArray,r=>r.id,(r,s)=>{var d=ua(),c=_(d),f=_(c,!0);u(c),u(d),K(()=>{sa(c,1,`${M(s).type==="error"?"text-red-500":""} text-[#fff]`),me(f,M(s).message)}),$(r,d)}),u(v),u(a),$(i,a),G()}_e(["click"]);var _a=W('<header class="shadow-sm p-2 flex justify-between items-center sticky top-0"><h1 class="text-xl font-bold">CastMyScreen</h1></header>');function ma(i){var e=_a();$(i,e)}/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ga={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ba=aa("<svg><!><!></svg>");function be(i,e){Y(e,!0);const a=q(e,"color",3,"currentColor"),t=q(e,"size",3,24),n=q(e,"strokeWidth",3,2),v=q(e,"absoluteStrokeWidth",3,!1),r=q(e,"iconNode",19,()=>[]),s=ie(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=ba();Se(d,w=>({...ga,...s,width:t(),height:t(),stroke:a(),"stroke-width":w,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>v()?Number(n())*24/Number(t()):n()]);var c=_(d);Me(c,17,r,oa,(w,p)=>{var A=ta(()=>ra(M(p),2));let l=()=>M(A)[0],b=()=>M(A)[1];var h=re(),x=X(h);va(x,l,!0,(k,R)=>{Se(k,()=>({...b()}))}),$(w,h)});var f=S(c);ae(f,()=>e.children??te),u(d),$(i,d),G()}function pa(i,e){Y(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];be(i,ge({name:"heart"},()=>a,{get iconNode(){return t},children:(n,v)=>{var r=re(),s=X(r);ae(s,()=>e.children??te),$(n,r)},$$slots:{default:!0}})),G()}function De(i,e){Y(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];be(i,ge({name:"github"},()=>a,{get iconNode(){return t},children:(n,v)=>{var r=re(),s=X(r);ae(s,()=>e.children??te),$(n,r)},$$slots:{default:!0}})),G()}function wa(i,e){Y(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];be(i,ge({name:"mail"},()=>a,{get iconNode(){return t},children:(n,v)=>{var r=re(),s=X(r);ae(s,()=>e.children??te),$(n,r)},$$slots:{default:!0}})),G()}var ya=W('<footer class="bg-[#ccc9] p-2"><div class="flex p-2 justify-between items-center svelte-gu08mv"><p>Made with <!></p> <div class="svelte-gu08mv"><p class="svelte-gu08mv"><button class="svelte-gu08mv">Privacy Notice</button></p> <div class="flex p-2 justify-between items-center">Got a bug report, feature suggestion or issue?&nbsp; <div class="flex justify-between items-center"><a href="mailto:akintadetemi19@gmail.com" class="block"><!></a> &nbsp; <a href="https://github.com/Temi-Tade/CastMyScreen"><!></a></div></div></div></div></footer>');function xa(i){var e=ya(),a=_(e),t=_(a),n=S(_(t));pa(n,{fill:"#f12",strokeWidth:"0",class:"inline-block"}),u(t);var v=S(t,2),r=S(_(v),2),s=S(_(r)),d=_(s),c=_(d);wa(c,{class:"hover:scale-[1.2] cursor-pointer"}),u(d);var f=S(d,2),w=_(f);De(w,{class:"hover:scale-[1.2] cursor-pointer"}),u(f),u(s),u(r),u(v),u(a),u(e),$(i,e)}var Sa=i=>{localStorage.setItem("YourCastMyScreenChoice",JSON.stringify({showToast:!1}))},ka=(i,e)=>e.onClose(),Ea=W('<div class="bg-[#cde] fixed right-2 bottom-2 p-2 left-[100dvh] shadow-md rounded-[.6rem]"><div><h3 class="font-bold text-xl">Privacy Notice</h3> <p class="p-1"> </p> <div><a href="https://github.com/Temi-Tade/CastMyScreen"><!></a></div> <div class="flex justify-between items-center"><label class="cursor-pointer"><input type="checkbox" class="cursor-pointer"/> Do not show again</label> <button>Ok, Got It</button></div></div></div>');function Ca(i,e){Y(e,!0);var a=Ea(),t=_(a),n=S(_(t),2),v=_(n,!0);u(n);var r=S(n,2),s=_(r),d=_(s);De(d,{class:"hover:scale-[1.2] cursor-pointer"}),u(s),u(r);var c=S(r,2),f=_(c),w=_(f);w.__input=[Sa],ia(),u(f);var p=S(f,2);p.__click=[ka,e],u(c),u(t),u(a),K(()=>me(v,e.content)),$(i,a),G()}_e(["input","click"]);var Na=(i,e)=>e(),Aa=W('<p class="flex flex-col items-center">Screen Record will appear here<br/><br/> <button> </button></p>'),Ta=(i,e)=>e(),Ma=(i,e)=>e(),Ra=(i,e,a,t,n)=>{if(e.isDataAvailable&&!e.isSaved){var v=confirm("You are about to take a new screen record and it appears you have not saved the current one. Click OK to discard it and take a new one.");if(!v)return}U(a,void 0),U(t,[],!0),e.isDataAvailable=!1,n()},Da=W('<div class="w-[100%] p-3"><video controls class="m-auto" width="600" height="300"><track kind="captions"/></video> <ul class="flex w-[80%] justify-evenly items-center m-auto my-3"><li class="svelte-1uha8ag"><button>Save Screen Record</button></li> <li class="svelte-1uha8ag"><button>Share Screen Record</button></li> <li class="svelte-1uha8ag"><button>Take New Screen Record</button></li></ul></div>',2),$a=W('<div><!></div> <section class="flex items-center justify-around"><div class="flex h-[90dvh]"><div class="border-1 border-dashed h-[70dvh] w-[70dvw] p-3 m-auto grid place-items-center"><!> <!></div></div> <div id="logs" class="h-[70dvh] w-[25dvw]"><!></div> <!></section> <!>',1);function Ya(i,e){Y(e,!0);let a,t=J(!0),n=J(void 0),v=J(oe([])),r=J(oe([]));localStorage.getItem("YourCastMyScreenChoice")&&U(t,JSON.parse(localStorage.getItem("YourCastMyScreenChoice")).showToast,!0);let s=oe({isRecording:!1,isDataAvailable:!1,isSaved:!1});function d(g,y){M(r).push({id:M(r).length,type:g,message:`[${new Date().getHours()>9?"":"0"}${new Date().getHours()}:${new Date().getMinutes()>9?"":"0"}${new Date().getMinutes()}:${new Date().getSeconds()>9?"":"0"}${new Date().getSeconds()}] ${y}`})}async function c(){try{let g,y=await navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0}),E=new MediaRecorder(y);E.start(),E.onstart=function(){s.isRecording=!0,d("info","Starting screen record...")},E.onstop=function(){s.isRecording=!1;let D=new Blob(M(v),{type:"video/mp4"});U(n,window.URL.createObjectURL(D),!0),d("info","Ending screen record...")},E.ondataavailable=function(D){s.isDataAvailable=!0,M(v).push(D.data),a=D.data}}catch(g){d("error",`Error: ${g.message}`)}}async function f(){try{var g=await window.showSaveFilePicker({types:[{description:"video",accept:{"video/mp4":[".mp4"]}}]}),y=await g.createWritable();await y.write(a),await y.close(),d("info","creating save data..."),d("info","Save successful."),s.isSaved=!0}catch{let E=new Error("Action aborted by user");d("error",`Error: ${E.message}`)}}async function w(){try{navigator.share({files:M(n),title:"Sharing Screen Record...",text:"I made this screen record with {APP_NAME}",url:location.href})}catch{let g=new Error("Share failed");d("error",`Error: ${g.message}`)}}var p=$a(),A=X(p),l=_(A);ma(l),u(A);var b=S(A,2),h=_(b),x=_(h),k=_(x);{var R=g=>{var y=Aa(),E=S(_(y),4);E.__click=[Na,c];var D=_(E,!0);u(E),u(y),K(()=>{E.disabled=s.isRecording,me(D,s.isRecording?"Recording...":"Start Recording")}),$(g,y)};le(k,g=>{s.isDataAvailable||g(R)})}var I=S(k,2);{var C=g=>{var y=Da(),E=_(y),D=S(E,2),H=_(D),z=_(H);z.__click=[Ta,f],u(H);var j=S(H,2),se=_(j);se.__click=[Ma,w],u(j);var pe=S(j,2),$e=_(pe);$e.__click=[Ra,s,n,v,c],u(pe),u(D),u(y),K(()=>na(E,"src",M(n))),$(g,y)};le(I,g=>{s.isDataAvailable&&g(C)})}u(x),u(h);var o=S(h,2),m=_(o);ha(m,{get logArray(){return M(r)},onClear:()=>U(r,[],!0)}),u(o);var N=S(o,2);{var P=g=>{Ca(g,{onClose:()=>U(t,!1),content:"This tool does not by any means track users or take or screen recordings without your consent. The code is public and open source, you can view it in the GitHub repo. Thank you for using CastMyScreen"})};le(N,g=>{M(t)&&g(P)})}u(b);var F=S(b,2);xa(F),$(i,p),G()}_e(["click"]);export{Ya as component};
