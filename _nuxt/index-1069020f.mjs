import{_ as T,o as e,c as s,a as t,F as c,r as _,d as x,j as I,u as N,k as E,m as F,g as L,b as k,w as u,p as m,v,x as A,t as o,f as j,T as M,q,s as O,h as P,y as R}from"./entry-e82b1c8e.mjs";import{_ as W}from"./banner-60dd338e.mjs";import{d as V}from"./sessions-3f6452d3.mjs";const G={name:"SessionsSkeleton"},H={class:"w-full container mx-auto flex flex-wrap px-4 md:px-12 py-4"},J={class:"flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-gray-300 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start pb-4 lg:pb-0 sticky",style:{top:"50px"}},K=t("h4",{class:"text-px-16-slab purple invisible"},[x(" 06 "),t("small",{class:"text-px-13 green-dark capitalize"},"Day 1")],-1),Q=[K],U={class:"w-full flex-wrap flex lg:w-11/12 space-y-6 mb-2 lg:mb-10"},X=I('<div class="w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid"><h3 class="text-px-14-slab w-12 h-6 bg-gray-300 purple"></h3></div><div class="w-full lg:w-10/12 flex bg-white-c rounded-tr-lg rounded-br-lg"><div class="h-12 w-20 lg:h-24 lg:w-36 flex-none skeleton bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image:url(&#39;http://via.placeholder.com/150/E2E8F0?text=elixirConfAfrica&#39;);" title="Woman holding a mug"></div><div class="h-auto w-full lg:h-24 shadow-sm rounded-lg px-4 py-3 flex flex-col justify-between"><div class="flex flex-wrap items-start"><div class="w-10/12"><div class="text-px-14-slab black mb-2 skeleton bg-gray-300 w-56 h-4"></div><p class="text-px-13 gray bg-gray-300 w-48 h-4 skeleton"></p><p class="text-px-13 gray bg-gray-300 w-64 h-4 mt-3 skeleton"></p></div><div class="w-2/12 flex items-center justify-center"></div></div></div></div>',2),Y=[X];function Z(l,y,g,a,h,b){return e(),s("div",H,[t("div",J,[(e(),s(c,null,_(3,(f,i)=>t("div",{key:i,class:"skeleton w-4/12 px-3 py-1 lg:w-full rounded-tl-lg rounded-bl-lg border border-r-0 border-gray-300 cursor-pointer bg-gray-300"},Q)),64))]),t("div",U,[(e(),s(c,null,_(5,(f,i)=>t("div",{key:i,class:"flex w-full px-0 lg:px-2"},Y)),64))])])}var ee=T(G,[["render",Z]]);const te={name:"NoSession",props:["isEventLive"]},se={class:"flex w-full px-0 lg:px-2"},re=t("div",{class:"w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid"},null,-1),ae={class:"w-full lg:w-10/12 flex bg-white dark:bg-secondary-dark rounded-lg"},le={class:"h-auto w-full lg:h-24 shadow rounded-lg px-4 py-3 flex flex-col justify-center"},oe={class:"flex flex-wrap items-center"},ne={class:"w-10/12 text-primary"},de={key:0,class:"text-px-14-slab black mb-2"},ie={key:1,class:"text-px-14-slab black mb-2"};function ce(l,y,g,a,h,b){return e(),s("div",se,[re,t("div",ae,[t("div",le,[t("div",oe,[t("div",ne,[g.isEventLive?(e(),s("div",de," Seems there are no seesions here from the filter or saved session ! ")):(e(),s("div",ie," Sessions and speakers list coming soon, stay tuned ! "))])])])])])}var _e=T(te,[["render",ce]]);const ue={__name:"index",setup(l,{expose:y}){y();const g=N(),a=E(0),h=E(!0),b=w=>{a.value=w},f=V.data;F(()=>{setTimeout(()=>{h.value=!1},100)});const i={config:g,currentTab:a,pending:h,showTab:b,schedule:f,useRuntimeConfig:N,data:V,SessionsSkeleton:ee,NoSession:_e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},z=l=>(q("data-v-7d7f5486"),l=l(),O(),l),pe={class:"d-container"},xe=x("Sessions"),ge={class:"w-full flex flex-wrap mt-2 md:mt-4"},he={key:0,class:"w-full container mx-auto flex flex-wrap px-0 md:px-12 py-4"},fe={class:"flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-primary dark:border-primary-dark space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-30"},me=["onClick"],ve={class:"w-full lg:w-11/12 lg:min-h-[300px] mt-10 md:mt-0"},ye=["id"],be={key:0,class:"flex-wrap w-full flex space-y-6 mb-2 lg:mb-10"},ke={key:0},we={class:"text-px-14-slab text-primary dark:text-primary-dark uppercase"},Se=z(()=>t("br",null,null,-1)),$e={class:"w-full lg:w-10/12 flex rounded-tr-lg rounded-br-lg"},je={key:0},Te=["src","alt","title"],Ce={key:1},Ne=["src","alt","title"],Ee=["title"],Le={class:"flex flex-wrap items-start"},Ve={class:"md:w-12/12"},ze={class:"text-xl text-primary dark:text-primary-dark mb-2"},Be={class:"text-base text-dark-text dark:text-dark-text-dark"},De={key:1},Ie={class:"text-xl text-primary dark:text-primary-dark mb-2"},Fe={class:"text-base text-dark-text dark:text-dark-text-dark"},Ae={class:"text-xs text-dark-text dark:text-dark-text-dark uppercase mt-2"},Me={key:2,class:"text-sm text-secondary dark:text-primary-dark pt-3"},qe=z(()=>t("i",{class:"fa fa-user pr-1"},null,-1)),Oe=x(),Pe=["href"],Re={key:0};function We(l,y,g,a,h,b){const f=W,i=L("slide"),w=L("carousel"),B=P,C=R;return e(),s("div",null,[t("div",pe,[k(f,null,{default:u(()=>[xe]),_:1}),t("div",ge,[a.pending?(e(),m(a.SessionsSkeleton,{key:1})):(e(),s("div",he,[t("div",fe,[(e(!0),s(c,null,_(a.schedule,(S,$,d)=>(e(),s("div",{key:d,class:v(["w-4/12 px-3 py-1 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none",a.currentTab===d?"bg-primary dark:bg-primary-dark":"border border-r-1 lg:border-r-0 border-primary dark:border-primary-dark"]),onClick:A(r=>a.showTab(d),["prevent"])},[t("h4",{class:v(["text-px-16-slab",a.currentTab===d?"text-white dark:text-secondary-dark-text":"text-primary dark:text-primary-dark"])},[x(o(l.$timeDay($))+" ",1),t("small",{class:v(["text-px-13 capitalize",a.currentTab===d?"text-white dark:text-secondary-dark-text":"text-primary dark:text-primary-dark"])},"Day "+o(d+1),3)],2)],10,me))),128))]),t("div",ve,[(e(!0),s(c,null,_(a.schedule,(S,$,d)=>(e(),s("div",{id:$,key:d},[k(M,{name:"fade","enter-active-class":"transition duration-300 ease-out transform","enter-class":"-translate-y-3 scale-95 opacity-0","enter-to-class":"translate-y-0 scale-100 opacity-100","leave-active-class":"transition duration-150 ease-in transform","leave-class":"translate-y-0 opacity-100","leave-to-class":"-translate-y-3 opacity-0"},{default:u(()=>[a.currentTab===d?(e(),s("div",be,[S.length>0&&a.config.isEventLive?(e(),s("div",ke,[(e(!0),s(c,null,_(S,(r,D)=>(e(),s("div",{key:D,class:"flex w-full px-0 lg:px-2 mb-8 lg:mb-10"},[t("div",{class:v(["w-2/12 flex items-center justify-center text-right hidden lg:grid",r.is_serviceSession?"h-24":"h-44"])},[t("h3",we,[x(o(l.$time(r.start_date_time))+" ",1),Se,x(" "+o(l.$timeAm(r.start_date_time)),1)])],2),t("div",$e,[r.is_serviceSession?(e(),s("div",{key:1,class:"h-12 w-20 lg:h-28 lg:w-44 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden",style:{"background-image":"url('/images/speakers/arrive.png')"},title:r.title},null,8,Ee)):(e(),m(C,{key:0,to:"/sessions/"+r.slug,class:"h-20 w-20 lg:h-44 lg:w-44 shadow-lg flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden"},{default:u(()=>[r.speakers.length===1?(e(),s("div",je,[(e(!0),s(c,null,_(r.speakers,(n,p)=>(e(),s("img",{key:p,src:n.avatar,alt:n.name,title:n.name},null,8,Te))),128))])):(e(),s("div",Ce,[k(B,null,{default:u(()=>[k(w,{"per-page":1,nav:!1,"wrap-around":"","pause-autoplay-on-hover":"",loop:!0,"pagination-enabled":!0,transition:500,autoplay:2e3,"mouse-drag":!1},{default:u(()=>[(e(!0),s(c,null,_(r.speakers,(n,p)=>(e(),m(i,{key:p},{default:u(()=>[t("img",{src:n.avatar,alt:n.name,title:n.name},null,8,Ne)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]))]),_:2},1032,["to"])),t("div",{class:v(["h-auto w-full shadow-lg rounded-tr-lg bg-white dark:bg-dark rounded-br-lg px-4 flex flex-col justify-between",r.is_serviceSession?"lg:h-28 py-2":"lg:h-44 py-1"])},[t("div",Le,[t("div",Ve,[r.is_serviceSession?(e(),s("div",De,[t("div",Ie,o(r.title),1),t("div",Fe,o(l.$truncateString(r.description,100)),1)])):(e(),m(C,{key:0,to:"/sessions/"+r.slug},{default:u(()=>[t("div",ze,o(r.title),1),t("div",Be,o(l.$truncateString(r.description,100)),1)]),_:2},1032,["to"])),t("div",Ae,o(l.$hour(r.start_date_time))+" - "+o(l.$hour(r.end_date_time)),1),r.is_serviceSession?j("",!0):(e(),s("div",Me,[qe,Oe,(e(!0),s(c,null,_(r.speakers,(n,p)=>(e(),s("span",{key:p},[t("a",{href:n.twitter},o(n.name),9,Pe),p+1<r.speakers.length?(e(),s("span",Re,", ")):j("",!0)]))),128))]))])])],2)])]))),128))])):(e(),m(a.NoSession,{key:1,"is-event-live":a.config.isEventLive},null,8,["is-event-live"]))])):j("",!0)]),_:2},1024)],8,ye))),128))])]))])])])}var Ke=T(ue,[["render",We],["__scopeId","data-v-7d7f5486"]]);export{Ke as default};
