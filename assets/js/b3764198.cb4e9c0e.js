"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8520],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return g}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(a),N=l,g=d["".concat(u,".").concat(N)]||d[N]||o[N]||r;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[d]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4203:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],p={title:"Documentation for the go-echo-server Generator"},u=void 0,m={unversionedId:"generators/go-echo-server",id:"generators/go-echo-server",title:"Documentation for the go-echo-server Generator",description:"METADATA",source:"@site/../docs/generators/go-echo-server.md",sourceDirName:"generators",slug:"/generators/go-echo-server",permalink:"/docs/generators/go-echo-server",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/go-echo-server.md",tags:[],version:"current",lastUpdatedBy:"Tiffany Marrel",lastUpdatedAt:1702451238,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"Documentation for the go-echo-server Generator"}},k={},d=[{value:"METADATA",id:"metadata",level:2},{value:"CONFIG OPTIONS",id:"config-options",level:2},{value:"IMPORT MAPPING",id:"import-mapping",level:2},{value:"INSTANTIATION TYPES",id:"instantiation-types",level:2},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",level:2},{value:"RESERVED WORDS",id:"reserved-words",level:2},{value:"FEATURE SET",id:"feature-set",level:2},{value:"Client Modification Feature",id:"client-modification-feature",level:3},{value:"Data Type Feature",id:"data-type-feature",level:3},{value:"Documentation Feature",id:"documentation-feature",level:3},{value:"Global Feature",id:"global-feature",level:3},{value:"Parameter Feature",id:"parameter-feature",level:3},{value:"Schema Support Feature",id:"schema-support-feature",level:3},{value:"Security Feature",id:"security-feature",level:3},{value:"Wire Format Feature",id:"wire-format-feature",level:3}],o={toc:d};function N(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"metadata"},"METADATA"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator name"),(0,r.kt)("td",{parentName:"tr",align:null},"go-echo-server"),(0,r.kt)("td",{parentName:"tr",align:null},"pass this to the generate command after -g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator stability"),(0,r.kt)("td",{parentName:"tr",align:null},"BETA"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator type"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVER"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator language"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator default templating engine"),(0,r.kt)("td",{parentName:"tr",align:null},"mustache"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helpTxt"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a go-echo server. (Beta)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"config-options"},"CONFIG OPTIONS"),(0,r.kt)("p",null,"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/configuration"},"configuration docs")," for more details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hideGenerationTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Hides the generation timestamp when files are generated."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"packageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Go package name (convention: lowercase)."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"openapi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"packageVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Go package version."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverPort"),(0,r.kt)("td",{parentName:"tr",align:null},"The network port the generated server binds to"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"8080")))),(0,r.kt)("h2",{id:"import-mapping"},"IMPORT MAPPING"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Imports")))),(0,r.kt)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Instantiated By")))),(0,r.kt)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"bool"),(0,r.kt)("li",null,"byte"),(0,r.kt)("li",null,"complex128"),(0,r.kt)("li",null,"complex64"),(0,r.kt)("li",null,"float32"),(0,r.kt)("li",null,"float64"),(0,r.kt)("li",null,"int"),(0,r.kt)("li",null,"int32"),(0,r.kt)("li",null,"int64"),(0,r.kt)("li",null,"interface"),(0,r.kt)("li",null,"map[string]interface"),(0,r.kt)("li",null,"rune"),(0,r.kt)("li",null,"string"),(0,r.kt)("li",null,"uint"),(0,r.kt)("li",null,"uint32"),(0,r.kt)("li",null,"uint64")),(0,r.kt)("h2",{id:"reserved-words"},"RESERVED WORDS"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"bool"),(0,r.kt)("li",null,"break"),(0,r.kt)("li",null,"byte"),(0,r.kt)("li",null,"case"),(0,r.kt)("li",null,"chan"),(0,r.kt)("li",null,"complex128"),(0,r.kt)("li",null,"complex64"),(0,r.kt)("li",null,"const"),(0,r.kt)("li",null,"continue"),(0,r.kt)("li",null,"default"),(0,r.kt)("li",null,"defer"),(0,r.kt)("li",null,"else"),(0,r.kt)("li",null,"error"),(0,r.kt)("li",null,"fallthrough"),(0,r.kt)("li",null,"float32"),(0,r.kt)("li",null,"float64"),(0,r.kt)("li",null,"for"),(0,r.kt)("li",null,"func"),(0,r.kt)("li",null,"go"),(0,r.kt)("li",null,"goto"),(0,r.kt)("li",null,"if"),(0,r.kt)("li",null,"import"),(0,r.kt)("li",null,"int"),(0,r.kt)("li",null,"int16"),(0,r.kt)("li",null,"int32"),(0,r.kt)("li",null,"int64"),(0,r.kt)("li",null,"int8"),(0,r.kt)("li",null,"interface"),(0,r.kt)("li",null,"map"),(0,r.kt)("li",null,"nil"),(0,r.kt)("li",null,"package"),(0,r.kt)("li",null,"range"),(0,r.kt)("li",null,"return"),(0,r.kt)("li",null,"rune"),(0,r.kt)("li",null,"select"),(0,r.kt)("li",null,"string"),(0,r.kt)("li",null,"struct"),(0,r.kt)("li",null,"switch"),(0,r.kt)("li",null,"type"),(0,r.kt)("li",null,"uint"),(0,r.kt)("li",null,"uint16"),(0,r.kt)("li",null,"uint32"),(0,r.kt)("li",null,"uint64"),(0,r.kt)("li",null,"uint8"),(0,r.kt)("li",null,"uintptr"),(0,r.kt)("li",null,"var")),(0,r.kt)("h2",{id:"feature-set"},"FEATURE SET"),(0,r.kt)("h3",{id:"client-modification-feature"},"Client Modification Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorizations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MockServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"data-type-feature"},"Data Type Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AnyType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormatMulti"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"documentation-feature"},"Documentation Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Readme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"global-feature"},"Global Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Info"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PartialSchemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consumes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Produces"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExternalDocumentation"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XMLStructureDefinitions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MultiServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterizedServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterStyling"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Callbacks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkObjects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"parameter-feature"},"Parameter Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormUnencoded"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormMultipart"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"schema-support-feature"},"Schema Support Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simple"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Composite"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polymorphism"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anyOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oneOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"not"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"security-feature"},"Security Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasicAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApiKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenIDConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BearerToken"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Implicit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_ClientCredentials"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_AuthorizationCode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SignatureAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWSV4Signature"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"wire-format-feature"},"Wire Format Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XML"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PROTOBUF"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")))))}N.isMDXComponent=!0}}]);