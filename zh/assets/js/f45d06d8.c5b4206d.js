(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{232:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(250)),s={title:"Getting Started"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/getting-started.md",slug:"/getting-started",permalink:"/zh/docs/ingress-controller/getting-started",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/getting-started.md",version:"current",sidebar:"docs",next:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/practices/index"}},l=[{value:"What is apisix-ingress-controller",id:"what-is-apisix-ingress-controller",children:[]},{value:"Features",id:"features",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"Installation on Cloud",id:"installation-on-cloud",children:[]},{value:"Installation on Prem",id:"installation-on-prem",children:[]},{value:"Get Involved to Contribute",id:"get-involved-to-contribute",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-apisix-ingress-controller"},"What is apisix-ingress-controller"),Object(a.b)("p",null,"apisix-ingress-controller is yet another Ingress controller for Kubernetes using ",Object(a.b)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," as the high performance reverse proxy."),Object(a.b)("p",null,"It's configured by using the declarative configurations like ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/concepts/apisix_route"},"ApisixRoute"),", ",Object(a.b)("a",{parentName:"p",href:"./concepts/apisix"},"ApisixUpstream"),", ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),".\nAll these resources are watched and converted to corresponding resources in Apache APISIX."),Object(a.b)("p",null,"Service Discovery are also supported through ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service"),",\nand will be reflected to nodes in APISIX Upstream."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/scene.png",alt:"scene"})),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Declarative configuration"),Object(a.b)("li",{parentName:"ul"},"Full dynamic capabilities to delivery configurations."),Object(a.b)("li",{parentName:"ul"},"Native Kubernetes Ingress (both v1 and v1beta1) support."),Object(a.b)("li",{parentName:"ul"},"Service Discovery based on Kubernetes Service."),Object(a.b)("li",{parentName:"ul"},"Out of box support for node health check."),Object(a.b)("li",{parentName:"ul"},"Support load balancing based on Pod (upstream nodes)."),Object(a.b)("li",{parentName:"ul"},"Rich plugins support."),Object(a.b)("li",{parentName:"ul"},"Easy to deploy and use.")),Object(a.b)("h2",{id:"how-it-works"},"How It Works"),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/design"},"Design")," for more details."),Object(a.b)("h2",{id:"installation-on-cloud"},"Installation on Cloud"),Object(a.b)("p",null,"apisix-ingress-controller supports to be installed on some clouds such as AWS, GCP."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/azure"},"Install Ingress APISIX on Azure AKS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/aws"},"Install Ingress APISIX on AWS EKS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/ack"},"Install Ingress APISIX on ACK")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/gke"},"Install Ingress APISIX on Google Cloud GKE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/minikube"},"Install Ingress APISIX on Minikube")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/kubesphere"},"Install Ingress APISIX on KubeSphere")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/deployments/k3s-rke"},"Install Ingress APISIX on K3S and RKE"))),Object(a.b)("h2",{id:"installation-on-prem"},"Installation on Prem"),Object(a.b)("p",null,"If you want to deploy apisix-ingress-controller on Prem, we recommend you to use ",Object(a.b)("a",{parentName:"p",href:"https://helm.io"},"Helm"),". Just a few steps"),Object(a.b)("h2",{id:"get-involved-to-contribute"},"Get Involved to Contribute"),Object(a.b)("p",null,"First, your supports and cooperations to make this project better are appreciated.\nBut before you start, please read ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/contribute"},"How to Contribute")," and ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/development"},"How to Develop"),"."))}p.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(g,i(i({ref:t},c),{},{components:r})):o.a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);