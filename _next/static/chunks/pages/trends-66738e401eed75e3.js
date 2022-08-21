(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return a(74650)}])},74650:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var r=a(85893),l=a(9008),u=a.n(l),s=a(67294),n=a(45697),o=a.n(n);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var v=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,u=void 0===l?24:l,n=i(e,["color","size"]);return s.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},v.displayName="TrendingUp";var c=v;function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},T.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Z=(0,s.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,u=void 0===l?24:l,n=h(e,["color","size"]);return s.createElement("svg",T({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));Z.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},Z.displayName="TrendingDown";var p=Z,g=a(74041),f=a(18121),_=a(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var a=m[e],r=t[0],l=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(l)-(0,_.BE)(r):a.reverse?r-l:l-r}(e.key,e.values)>0?(0,r.jsx)(c,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,a){return 0===t||t===a.length-1})).join(" => ")}}],y=function(e){var t=e.trends,a=Object.keys(t);return a.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),a.map((function(e){var a=function(e){var t={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(a){var r=e[a].map((function(e){return e.date,e.value}));if(r.length>1){var l=r[0],u=r[r.length-1],s=m[a].treshold;(!s||Math.abs(l-u)>(s||0))&&l!==u&&(t[a]=[l,u])}})),t}(t[e]);return Object.keys(a).length?(0,r.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,r.jsx)(g.Table,{columns:b,data:Object.keys(a).map((function(e){return{key:e,values:a[e]}})),rowKey:"key"})},e):null}))]})},G=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"dependabotGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"dependabotCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2021-12-26T11:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":0.45}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}]},"https://beta.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2022-01-23T13:00:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"C"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}]},"https://www.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"},{"date":"2022-05-29T01:25:03.000Z","value":"2023-05-24T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":70},{"date":"2021-11-28T00:51:02.000Z","value":68},{"date":"2021-12-12T00:53:44.000Z","value":67},{"date":"2022-01-02T00:55:37.000Z","value":73},{"date":"2022-02-20T01:02:58.000Z","value":74},{"date":"2022-02-27T01:02:28.000Z","value":73},{"date":"2022-03-13T01:00:53.000Z","value":74},{"date":"2022-03-20T01:03:36.000Z","value":75},{"date":"2022-03-27T01:08:57.000Z","value":73},{"date":"2022-04-10T01:13:09.000Z","value":72},{"date":"2022-04-17T01:16:09.000Z","value":73},{"date":"2022-05-29T01:25:03.000Z","value":74},{"date":"2022-06-05T01:25:45.000Z","value":75},{"date":"2022-07-03T01:31:44.000Z","value":73},{"date":"2022-07-17T01:37:59.000Z","value":74},{"date":"2022-07-24T01:36:58.000Z","value":73},{"date":"2022-08-21T01:27:30.960Z","value":32}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":0.28389663696289064},{"date":"2021-11-28T00:51:02.000Z","value":0.2839349746704102},{"date":"2021-12-12T00:53:44.000Z","value":0.2859294891357422},{"date":"2021-12-19T00:55:23.000Z","value":0.28612098693847654},{"date":"2021-12-26T00:56:53.000Z","value":0.28620548248291017},{"date":"2022-01-02T00:55:37.000Z","value":0.2745977401733398},{"date":"2022-01-09T00:56:51.000Z","value":0.2825601577758789},{"date":"2022-01-16T00:57:23.000Z","value":0.28090877532958985},{"date":"2022-01-23T00:51:31.000Z","value":0.28178958892822265},{"date":"2022-01-30T00:52:15.000Z","value":0.2830671310424805},{"date":"2022-02-13T00:58:30.000Z","value":0.28438243865966795},{"date":"2022-02-20T01:02:58.000Z","value":0.28618316650390624},{"date":"2022-02-27T01:02:28.000Z","value":0.2823781967163086},{"date":"2022-03-06T01:01:14.000Z","value":0.282667350769043},{"date":"2022-03-13T01:00:53.000Z","value":0.28290557861328125},{"date":"2022-03-20T01:03:36.000Z","value":0.282105827331543},{"date":"2022-03-27T01:08:57.000Z","value":0.28565273284912107},{"date":"2022-04-03T01:10:29.000Z","value":0.2798349380493164},{"date":"2022-04-10T01:13:09.000Z","value":0.2758979797363281},{"date":"2022-04-17T01:16:09.000Z","value":0.27709331512451174},{"date":"2022-04-24T01:13:36.000Z","value":0.2766632080078125},{"date":"2022-05-01T01:42:22.000Z","value":0.27605018615722654},{"date":"2022-05-08T01:17:48.000Z","value":0.27564544677734376},{"date":"2022-05-15T01:35:22.000Z","value":0.27613162994384766},{"date":"2022-05-22T01:18:35.000Z","value":0.2748556137084961},{"date":"2022-05-29T01:25:03.000Z","value":0.27486610412597656},{"date":"2022-06-05T01:25:45.000Z","value":0.2707265853881836},{"date":"2022-06-12T01:24:30.000Z","value":0.2709993362426758},{"date":"2022-06-19T01:26:24.000Z","value":0.27116031646728517},{"date":"2022-06-26T01:32:20.000Z","value":0.27124996185302735},{"date":"2022-07-03T01:31:44.000Z","value":0.2755317687988281},{"date":"2022-07-10T01:38:40.000Z","value":0.27391891479492186},{"date":"2022-07-17T01:37:59.000Z","value":0.27487869262695314},{"date":"2022-07-24T01:36:58.000Z","value":0.2742757797241211},{"date":"2022-08-07T01:35:56.000Z","value":0.2730125427246094},{"date":"2022-08-14T01:36:11.000Z","value":0.37795143127441405},{"date":"2022-08-21T01:27:30.960Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"E"},{"date":"2022-08-14T01:36:11.000Z","value":"D"},{"date":"2022-08-21T01:27:30.960Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":0.92},{"date":"2022-01-02T00:55:37.000Z","value":0.96},{"date":"2022-01-09T00:56:51.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.8},{"date":"2022-01-02T00:55:37.000Z","value":0.73},{"date":"2022-08-21T01:27:30.960Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"},{"date":"2022-08-21T01:27:30.960Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://deces.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"},{"date":"2021-11-28T00:51:02.000Z","value":"C+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"},{"date":"2022-05-29T01:25:03.000Z","value":"2023-05-24T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":1},{"date":"2022-08-21T01:27:30.960Z","value":0.97}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.92}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"DashLord - evolutions"})}),(0,r.jsx)(y,{trends:G})]})}},18121:function(e,t,a){"use strict";a.d(t,{s:function(){return T}});var r=a(85893),l=(a(67294),a(94184)),u=a.n(l),s=a(659),n=a(73973),o=a(83206),d=a(41664),i=a.n(d),v=a(75670),c=a.n(v),T=function(e){var t=e.title,a=e.children,l=e.info,d=e.url,v=e.urlText,T=void 0===v?"":v,h=e.className,Z=e.isExternal,p=void 0!==Z&&Z;return(0,r.jsxs)("div",{className:u()(c().container,h),children:[(0,r.jsxs)("div",{className:c().banner,children:[(0,r.jsx)("h5",{className:c().mainTitle,children:t}),l&&(0,r.jsx)(s.Z,{overlay:l,children:(0,r.jsx)(n.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),d&&(p?(0,r.jsx)("a",{style:{float:"right"},href:d,target:"_blank",rel:"noreferrer noopener",children:T}):(0,r.jsx)(i(),{prefetch:!1,href:d,children:(0,r.jsxs)("a",{style:{float:"right"},children:[T,(0,r.jsx)(o.Z,{})]})}))]}),(0,r.jsx)("div",{className:c().body,children:a})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return t=21105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);