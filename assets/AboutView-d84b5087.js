import{M as r,a as _}from"./mountains_snow-37c6d760.js";import{_ as u,o as d,c as o,d as l,F as m,i as x,f as t,n as g,t as n}from"./index-7bbb0835.js";const p={id:"content-container",class:"absolute top-0 left-0 h-full w-full"},f={class:"z-[5] text-white flex flex-col md:flex-row"},T={__name:"AboutView",setup(h){const s=[{imageSrc:r,sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:"",sectionTitle:"This is a title",sectionText:"This is text"},{imageSrc:_,sectionTitle:"This is a title",sectionText:"This is text"}];return d(()=>{s.forEach(i=>{if(i.imageSrc){const a=new Image;a.src=i.imageSrc}})}),(i,a)=>(o(),l("div",p,[(o(),l(m,null,x(s,(e,c)=>t("div",{key:c},[t("div",{class:"parallax",style:g(e.imageSrc?`background-image: url(${e.imageSrc});`:"background-color: black;")},[t("div",f,[t("div",null,[t("h1",null,n(e.sectionTitle),1)]),t("div",null,[t("p",null,n(e.sectionText),1)])])],4)])),64))]))}},w=u(T,[["__scopeId","data-v-9a2940d0"]]);export{w as default};
