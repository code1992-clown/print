import{_ as p,d as f,u as x,r as g,aI as t,o as h,c as b,a7 as o,b3 as n,a6 as v,bE as d}from"./index.57d4229e.js";const y={class:"login"},w=v("\u786E\u5B9A"),z=f({__name:"login",setup(E){const s=x(),e=g({code:""}),i=()=>{const l=localStorage.getItem("code");l==="czfzxzyq"?s.push("/main"):e.code==="czfzxzyq"?(d.success("\u6B22\u8FCE\u5149\u4E34!"),localStorage.setItem("code",e.code),s.push("/main")):d.error("\u6743\u9650\u4E0D\u8DB3!"),console.log(l)};return(l,a)=>{const r=t("el-input"),c=t("el-form-item"),u=t("el-button"),_=t("el-form");return h(),b("div",y,[o(_,{model:e,class:"login-content"},{default:n(()=>[o(c,{label:"\u5BC6\u94A5 :"},{default:n(()=>[o(r,{modelValue:e.code,"onUpdate:modelValue":a[0]||(a[0]=m=>e.code=m),clearable:"",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),o(c,null,{default:n(()=>[o(u,{onClick:i,type:"primary",size:"small"},{default:n(()=>[w]),_:1})]),_:1})]),_:1},8,["model"])])}}});var C=p(z,[["__scopeId","data-v-1e6b35e6"]]);export{C as default};
