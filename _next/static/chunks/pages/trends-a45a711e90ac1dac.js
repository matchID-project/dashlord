(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var l=t(85893),r=t(9008),u=t.n(r),d=t(67294),s=t(45697),n=t.n(s);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,s=i(e,["color","size"]);return d.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),d.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),d.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},v.displayName="TrendingUp";var T=v;function c(){return c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},c.apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,s=Z(e,["color","size"]);return d.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),d.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),d.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(18121),_=t(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=m[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(r)-(0,_.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(T,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],y=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],d=m[t].treshold;(!d||Math.abs(r-u)>(d||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:b,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},G=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"dependabotGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"dependabotCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2021-12-26T11:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":0.45}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}]},"https://beta.gouv.fr":{"404":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"httpGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"D"}],"nmapGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T12:28:44.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:28:44.000Z","value":"2022-01-23T13:00:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T12:28:44.000Z","value":2}],"trackersGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"C"}],"trackersCount":[{"date":"2021-11-27T12:28:44.000Z","value":6}],"lighthouse_performance":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:28:44.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:28:44.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:28:44.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:28:44.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:28:44.000Z","value":"B"}]},"https://www.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"},{"date":"2022-05-29T01:25:03.000Z","value":"2023-05-24T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":70},{"date":"2021-11-28T00:51:02.000Z","value":68},{"date":"2021-12-12T00:53:44.000Z","value":67},{"date":"2022-01-02T00:55:37.000Z","value":73},{"date":"2022-02-20T01:02:58.000Z","value":74},{"date":"2022-02-27T01:02:28.000Z","value":73},{"date":"2022-03-13T01:00:53.000Z","value":74},{"date":"2022-03-20T01:03:36.000Z","value":75},{"date":"2022-03-27T01:08:57.000Z","value":73},{"date":"2022-04-10T01:13:09.000Z","value":72},{"date":"2022-04-17T01:16:09.000Z","value":73},{"date":"2022-05-29T01:25:03.000Z","value":74},{"date":"2022-06-05T01:25:45.000Z","value":75},{"date":"2022-07-03T01:31:44.000Z","value":73},{"date":"2022-07-17T01:37:59.000Z","value":74},{"date":"2022-07-24T01:36:58.000Z","value":73},{"date":"2022-08-21T01:28:42.000Z","value":32},{"date":"2022-08-28T01:43:43.000Z","value":102},{"date":"2022-09-11T01:49:42.214Z","value":118}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":0.28389663696289064},{"date":"2021-11-28T00:51:02.000Z","value":0.2839349746704102},{"date":"2021-12-12T00:53:44.000Z","value":0.2859294891357422},{"date":"2021-12-19T00:55:23.000Z","value":0.28612098693847654},{"date":"2021-12-26T00:56:53.000Z","value":0.28620548248291017},{"date":"2022-01-02T00:55:37.000Z","value":0.2745977401733398},{"date":"2022-01-09T00:56:51.000Z","value":0.2825601577758789},{"date":"2022-01-16T00:57:23.000Z","value":0.28090877532958985},{"date":"2022-01-23T00:51:31.000Z","value":0.28178958892822265},{"date":"2022-01-30T00:52:15.000Z","value":0.2830671310424805},{"date":"2022-02-13T00:58:30.000Z","value":0.28438243865966795},{"date":"2022-02-20T01:02:58.000Z","value":0.28618316650390624},{"date":"2022-02-27T01:02:28.000Z","value":0.2823781967163086},{"date":"2022-03-06T01:01:14.000Z","value":0.282667350769043},{"date":"2022-03-13T01:00:53.000Z","value":0.28290557861328125},{"date":"2022-03-20T01:03:36.000Z","value":0.282105827331543},{"date":"2022-03-27T01:08:57.000Z","value":0.28565273284912107},{"date":"2022-04-03T01:10:29.000Z","value":0.2798349380493164},{"date":"2022-04-10T01:13:09.000Z","value":0.2758979797363281},{"date":"2022-04-17T01:16:09.000Z","value":0.27709331512451174},{"date":"2022-04-24T01:13:36.000Z","value":0.2766632080078125},{"date":"2022-05-01T01:42:22.000Z","value":0.27605018615722654},{"date":"2022-05-08T01:17:48.000Z","value":0.27564544677734376},{"date":"2022-05-15T01:35:22.000Z","value":0.27613162994384766},{"date":"2022-05-22T01:18:35.000Z","value":0.2748556137084961},{"date":"2022-05-29T01:25:03.000Z","value":0.27486610412597656},{"date":"2022-06-05T01:25:45.000Z","value":0.2707265853881836},{"date":"2022-06-12T01:24:30.000Z","value":0.2709993362426758},{"date":"2022-06-19T01:26:24.000Z","value":0.27116031646728517},{"date":"2022-06-26T01:32:20.000Z","value":0.27124996185302735},{"date":"2022-07-03T01:31:44.000Z","value":0.2755317687988281},{"date":"2022-07-10T01:38:40.000Z","value":0.27391891479492186},{"date":"2022-07-17T01:37:59.000Z","value":0.27487869262695314},{"date":"2022-07-24T01:36:58.000Z","value":0.2742757797241211},{"date":"2022-08-07T01:35:56.000Z","value":0.2730125427246094},{"date":"2022-08-14T01:36:11.000Z","value":0.37795143127441405},{"date":"2022-08-21T01:28:42.000Z","value":1},{"date":"2022-08-28T01:43:43.000Z","value":0},{"date":"2022-09-04T01:39:45.000Z","value":0.18208026885986328},{"date":"2022-09-11T01:49:42.214Z","value":0.13591785430908204}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"E"},{"date":"2022-08-14T01:36:11.000Z","value":"D"},{"date":"2022-08-21T01:28:42.000Z","value":"A"},{"date":"2022-08-28T01:43:43.000Z","value":"F"},{"date":"2022-09-04T01:39:45.000Z","value":"E"},{"date":"2022-09-11T01:49:42.214Z","value":"F"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":0.92},{"date":"2022-01-02T00:55:37.000Z","value":0.96},{"date":"2022-01-09T00:56:51.000Z","value":0.89},{"date":"2022-08-28T01:43:43.000Z","value":0.9},{"date":"2022-09-04T01:39:45.000Z","value":0.89},{"date":"2022-09-11T01:49:42.214Z","value":0.9}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.8},{"date":"2022-01-02T00:55:37.000Z","value":0.73},{"date":"2022-08-21T01:28:42.000Z","value":0.87},{"date":"2022-08-28T01:43:43.000Z","value":0.73}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"},{"date":"2022-08-21T01:28:42.000Z","value":"A"},{"date":"2022-08-28T01:43:43.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://deces.matchid.io":{"404":[{"date":"2022-01-16T00:57:23.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"D+"},{"date":"2021-11-28T00:51:02.000Z","value":"C+"}],"nmapGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T12:41:01.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T12:41:01.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T12:41:01.000Z","value":"2022-06-23T23:59:00.000Z"},{"date":"2022-05-29T01:25:03.000Z","value":"2023-05-24T23:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T12:41:01.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"B"},{"date":"2022-08-28T01:43:43.000Z","value":"F"}],"trackersCount":[{"date":"2021-11-27T12:41:01.000Z","value":1},{"date":"2022-08-28T01:43:43.000Z","value":17},{"date":"2022-09-11T01:49:42.214Z","value":34}],"lighthouse_performance":[{"date":"2021-11-27T12:41:01.000Z","value":1},{"date":"2022-08-28T01:43:43.000Z","value":0.3221277236938477},{"date":"2022-09-04T01:39:45.000Z","value":0.7},{"date":"2022-09-11T01:49:42.214Z","value":0.33890953063964846}],"lighthouse_performanceGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"},{"date":"2022-08-28T01:43:43.000Z","value":"E"},{"date":"2022-09-04T01:39:45.000Z","value":"B"},{"date":"2022-09-11T01:49:42.214Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-11-27T12:41:01.000Z","value":1},{"date":"2022-08-21T01:28:42.000Z","value":0.97},{"date":"2022-08-28T01:43:43.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T12:41:01.000Z","value":0.93},{"date":"2022-08-28T01:43:43.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T12:41:01.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T12:41:01.000Z","value":0.92}],"lighthouse_pwaGrade":[{"date":"2021-11-27T12:41:01.000Z","value":"A"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(y,{trends:G})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return c}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),d=t(659),s=t(73973),n=t(83206),o=t(41664),i=t.n(o),v=t(75670),T=t.n(v),c=function(e){var a=e.title,t=e.children,r=e.info,o=e.url,v=e.urlText,c=void 0===v?"":v,Z=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:u()(T().container,Z),children:[(0,l.jsxs)("div",{className:T().banner,children:[(0,l.jsx)("h5",{className:T().mainTitle,children:a}),r&&(0,l.jsx)(d.Z,{overlay:r,children:(0,l.jsx)(s.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),o&&(p?(0,l.jsx)("a",{style:{float:"right"},href:o,target:"_blank",rel:"noreferrer noopener",children:c}):(0,l.jsx)(i(),{prefetch:!1,href:o,children:(0,l.jsxs)("a",{style:{float:"right"},children:[c,(0,l.jsx)(n.Z,{})]})}))]}),(0,l.jsx)("div",{className:T().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);