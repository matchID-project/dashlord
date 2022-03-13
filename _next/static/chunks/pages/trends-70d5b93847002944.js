(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{37434:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return a(74650)}])},74650:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var r=a(85893),l=a(9008),s=a(67294),n=a(45697),o=a.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,n=void 0===l?24:l,o=u(e,["color","size"]);return s.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="TrendingUp";var c=d;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,n=void 0===l?24:l,o=h(e,["color","size"]);return s.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));p.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},p.displayName="TrendingDown";var T=p,Z=a(74041),g=a(18121),f=a(49384),_={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var a=_[e],r=t[0],l=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,f.BE)(l)-(0,f.BE)(r):a.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(c,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(T,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return _[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,a){return 0===t||t===a.length-1})).join(" => ")}}],b=function(e){var t=e.trends,a=Object.keys(t);return a.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),a.map((function(e){var a=function(e){var t={};return Object.keys(e).filter((function(e){return e in _})).forEach((function(a){var r=e[a].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],s=r[r.length-1],n=_[a].treshold;(!n||Math.abs(l-s)>(n||0))&&l!==s&&(t[a]=[l,s])}})),t}(t[e]);return Object.keys(a).length?(0,r.jsx)(g.s,{title:(0,f.p5)(e),url:"/url/".concat(encodeURIComponent((0,f.N0)(e))),children:(0,r.jsx)(Z.Table,{columns:m,data:Object.keys(a).map((function(e){return{key:e,values:a[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"dependabotGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"dependabotCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2021-12-26T11:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":0.45}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}]},"https://beta.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2022-01-23T13:00:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"C"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}]},"https://www.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":70},{"date":"2021-11-28T00:51:02.000Z","value":68},{"date":"2021-12-12T00:53:44.000Z","value":67},{"date":"2022-01-02T00:55:37.000Z","value":73},{"date":"2022-02-20T01:02:58.000Z","value":74},{"date":"2022-02-27T01:02:28.000Z","value":73},{"date":"2022-03-13T00:59:23.889Z","value":74}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":0.28389663696289064},{"date":"2021-11-28T00:51:02.000Z","value":0.2839349746704102},{"date":"2021-12-12T00:53:44.000Z","value":0.2859294891357422},{"date":"2021-12-19T00:55:23.000Z","value":0.28612098693847654},{"date":"2021-12-26T00:56:53.000Z","value":0.28620548248291017},{"date":"2022-01-02T00:55:37.000Z","value":0.2745977401733398},{"date":"2022-01-09T00:56:51.000Z","value":0.2825601577758789},{"date":"2022-01-16T00:57:23.000Z","value":0.28090877532958985},{"date":"2022-01-23T00:51:31.000Z","value":0.28178958892822265},{"date":"2022-01-30T00:52:15.000Z","value":0.2830671310424805},{"date":"2022-02-13T00:58:30.000Z","value":0.28438243865966795},{"date":"2022-02-20T01:02:58.000Z","value":0.28618316650390624},{"date":"2022-02-27T01:02:28.000Z","value":0.2823781967163086},{"date":"2022-03-06T01:01:14.000Z","value":0.282667350769043},{"date":"2022-03-13T00:59:23.889Z","value":0.28290557861328125}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":0.92},{"date":"2022-01-02T00:55:37.000Z","value":0.96},{"date":"2022-01-09T00:56:51.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.8},{"date":"2022-01-02T00:55:37.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://deces.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"},{"date":"2021-11-28T00:51:02.000Z","value":"C+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.92}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),G=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"DashLord - evolutions"})}),(0,r.jsx)(b,{trends:y})]})}},18121:function(e,t,a){"use strict";a.d(t,{s:function(){return v}});var r=a(85893),l=(a(67294),a(94184)),s=a.n(l),n=a(79223),o=a(73973),i=a(83206),u=a(41664),d=a(75670),c=a.n(d),v=function(e){var t=e.title,a=e.children,l=e.info,d=e.url,v=e.urlText,h=void 0===v?"":v,p=e.className,T=e.isExternal,Z=void 0!==T&&T;return(0,r.jsxs)("div",{className:s()(c().container,p),children:[(0,r.jsxs)("div",{className:c().banner,children:[(0,r.jsx)("h5",{className:c().mainTitle,children:t}),l&&(0,r.jsx)(n.Z,{overlay:l,children:(0,r.jsx)(o.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),d&&(Z?(0,r.jsx)("a",{style:{float:"right"},href:d,target:"_blank",rel:"noreferrer noopener",children:h}):(0,r.jsx)(u.default,{prefetch:!1,href:d,children:(0,r.jsxs)("a",{style:{float:"right"},children:[h,(0,r.jsx)(i.Z,{})]})}))]}),(0,r.jsx)("div",{className:c().body,children:a})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return t=37434,e(e.s=t);var t}));var t=e.O();_N_E=t}]);