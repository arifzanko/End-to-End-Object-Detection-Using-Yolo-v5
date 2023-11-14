"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9653],{79653:(t,e,a)=>{a.r(e);a.d(e,{Tag:()=>s,classHighlighter:()=>I,highlightTree:()=>m,styleTags:()=>h,tagHighlighter:()=>d,tags:()=>E});var i=a(72104);let r=0;class s{constructor(t,e,a){this.set=t;this.base=e;this.modified=a;this.id=r++}static define(t){if(t===null||t===void 0?void 0:t.base)throw new Error("Can not derive from a modified tag");let e=new s([],null,[]);e.set.push(e);if(t)for(let a of t.set)e.set.push(a);return e}static defineModifier(){let t=new l;return e=>{if(e.modified.indexOf(t)>-1)return e;return l.get(e.base||e,e.modified.concat(t).sort(((t,e)=>t.id-e.id)))}}}let o=0;class l{constructor(){this.instances=[];this.id=o++}static get(t,e){if(!e.length)return t;let a=e[0].instances.find((a=>a.base==t&&n(e,a.modified)));if(a)return a;let i=[],r=new s(i,t,e);for(let s of e)s.instances.push(r);let o=c(e);for(let s of t.set)for(let t of o)i.push(l.get(s,t));return r}}function n(t,e){return t.length==e.length&&t.every(((t,a)=>t==e[a]))}function c(t){let e=[t];for(let a=0;a<t.length;a++){for(let i of c(t.slice(0,a).concat(t.slice(a+1))))e.push(i)}return e}function h(t){let e=Object.create(null);for(let a in t){let i=t[a];if(!Array.isArray(i))i=[i];for(let t of a.split(" "))if(t){let a=[],r=2,s=t;for(let e=0;;){if(s=="..."&&e>0&&e+3==t.length){r=1;break}let i=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);if(!i)throw new RangeError("Invalid path: "+t);a.push(i[0]=="*"?"":i[0][0]=='"'?JSON.parse(i[0]):i[0]);e+=i[0].length;if(e==t.length)break;let o=t[e++];if(e==t.length&&o=="!"){r=0;break}if(o!="/")throw new RangeError("Invalid path: "+t);s=t.slice(e)}let o=a.length-1,l=a[o];if(!l)throw new RangeError("Invalid path: "+t);let n=new g(i,r,o>0?a.slice(0,o):null);e[l]=n.sort(e[l])}}return f.add(e)}const f=new i.md;class g{constructor(t,e,a,i){this.tags=t;this.mode=e;this.context=a;this.next=i}sort(t){if(!t||t.depth<this.depth){this.next=t;return this}t.next=this.sort(t.next);return t}get depth(){return this.context?this.context.length:0}}function d(t,e){let a=Object.create(null);for(let s of t){if(!Array.isArray(s.tag))a[s.tag.id]=s.class;else for(let t of s.tag)a[t.id]=s.class}let{scope:i,all:r=null}=e||{};return{style:t=>{let e=r;for(let i of t){for(let t of i.set){let i=a[t.id];if(i){e=e?e+" "+i:i;break}}}return e},scope:i}}function p(t,e){let a=null;for(let i of t){let t=i.style(e);if(t)a=a?a+" "+t:t}return a}function m(t,e,a,i=0,r=t.length){let s=new u(i,Array.isArray(e)?e:[e],a);s.highlightRange(t.cursor(),i,r,"",s.highlighters);s.flush(r)}class u{constructor(t,e,a){this.at=t;this.highlighters=e;this.span=a;this.class=""}startSpan(t,e){if(e!=this.class){this.flush(t);if(t>this.at)this.at=t;this.class=e}}flush(t){if(t>this.at&&this.class)this.span(this.at,t,this.class)}highlightRange(t,e,a,r,s){let{type:o,from:l,to:n}=t;if(l>=a||n<=e)return;if(o.isTop)s=this.highlighters.filter((t=>!t.scope||t.scope(o)));let c=r;let h=o.prop(f),g=false;while(h){if(!h.context||t.matchContext(h.context)){let t=p(s,h.tags);if(t){if(c)c+=" ";c+=t;if(h.mode==1)r+=(r?" ":"")+t;else if(h.mode==0)g=true}break}h=h.next}this.startSpan(t.from,c);if(g)return;let d=t.tree&&t.tree.prop(i.md.mounted);if(d&&d.overlay){let i=t.node.enter(d.overlay[0].from+l,1);let o=this.highlighters.filter((t=>!t.scope||t.scope(d.tree.type)));let h=t.firstChild();for(let f=0,g=l;;f++){let p=f<d.overlay.length?d.overlay[f]:null;let m=p?p.from+l:n;let u=Math.max(e,g),k=Math.min(a,m);if(u<k&&h){while(t.from<k){this.highlightRange(t,u,k,r,s);this.startSpan(Math.min(a,t.to),c);if(t.to>=m||!t.nextSibling())break}}if(!p||m>a)break;g=p.to+l;if(g>e){this.highlightRange(i.cursor(),Math.max(e,p.from+l),Math.min(a,g),r,o);this.startSpan(g,c)}}if(h)t.parent()}else if(t.firstChild()){do{if(t.to<=e)continue;if(t.from>=a)break;this.highlightRange(t,e,a,r,s);this.startSpan(Math.min(a,t.to),c)}while(t.nextSibling());t.parent()}}}const k=s.define;const b=k(),y=k(),N=k(y),w=k(y),v=k(),x=k(v),M=k(v),O=k(),S=k(O),C=k(),R=k(),A=k(),_=k(A),j=k();const E={comment:b,lineComment:k(b),blockComment:k(b),docComment:k(b),name:y,variableName:k(y),typeName:N,tagName:k(N),propertyName:w,attributeName:k(w),className:k(y),labelName:k(y),namespace:k(y),macroName:k(y),literal:v,string:x,docString:k(x),character:k(x),attributeValue:k(x),number:M,integer:k(M),float:k(M),bool:k(v),regexp:k(v),escape:k(v),color:k(v),url:k(v),keyword:C,self:k(C),null:k(C),atom:k(C),unit:k(C),modifier:k(C),operatorKeyword:k(C),controlKeyword:k(C),definitionKeyword:k(C),moduleKeyword:k(C),operator:R,derefOperator:k(R),arithmeticOperator:k(R),logicOperator:k(R),bitwiseOperator:k(R),compareOperator:k(R),updateOperator:k(R),definitionOperator:k(R),typeOperator:k(R),controlOperator:k(R),punctuation:A,separator:k(A),bracket:_,angleBracket:k(_),squareBracket:k(_),paren:k(_),brace:k(_),content:O,heading:S,heading1:k(S),heading2:k(S),heading3:k(S),heading4:k(S),heading5:k(S),heading6:k(S),contentSeparator:k(O),list:k(O),quote:k(O),emphasis:k(O),strong:k(O),link:k(O),monospace:k(O),strikethrough:k(O),inserted:k(),deleted:k(),changed:k(),invalid:k(),meta:j,documentMeta:k(j),annotation:k(j),processingInstruction:k(j),definition:s.defineModifier(),constant:s.defineModifier(),function:s.defineModifier(),standard:s.defineModifier(),local:s.defineModifier(),special:s.defineModifier()};const I=d([{tag:E.link,class:"tok-link"},{tag:E.heading,class:"tok-heading"},{tag:E.emphasis,class:"tok-emphasis"},{tag:E.strong,class:"tok-strong"},{tag:E.keyword,class:"tok-keyword"},{tag:E.atom,class:"tok-atom"},{tag:E.bool,class:"tok-bool"},{tag:E.url,class:"tok-url"},{tag:E.labelName,class:"tok-labelName"},{tag:E.inserted,class:"tok-inserted"},{tag:E.deleted,class:"tok-deleted"},{tag:E.literal,class:"tok-literal"},{tag:E.string,class:"tok-string"},{tag:E.number,class:"tok-number"},{tag:[E.regexp,E.escape,E.special(E.string)],class:"tok-string2"},{tag:E.variableName,class:"tok-variableName"},{tag:E.local(E.variableName),class:"tok-variableName tok-local"},{tag:E.definition(E.variableName),class:"tok-variableName tok-definition"},{tag:E.special(E.variableName),class:"tok-variableName2"},{tag:E.definition(E.propertyName),class:"tok-propertyName tok-definition"},{tag:E.typeName,class:"tok-typeName"},{tag:E.namespace,class:"tok-namespace"},{tag:E.className,class:"tok-className"},{tag:E.macroName,class:"tok-macroName"},{tag:E.propertyName,class:"tok-propertyName"},{tag:E.operator,class:"tok-operator"},{tag:E.comment,class:"tok-comment"},{tag:E.meta,class:"tok-meta"},{tag:E.invalid,class:"tok-invalid"},{tag:E.punctuation,class:"tok-punctuation"}])}}]);
//# sourceMappingURL=9653.2a0d6ecff2a43fd79233.js.map?v=2a0d6ecff2a43fd79233