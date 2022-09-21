"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[411],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),o=a(4334),i=a(2389),l=a(7392),s=a(7094),u=a(2466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,T=(0,r.useState)(v),E=T[0],S=T[1],O=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=w[h];null!=I&&I!==E&&k.some((function(e){return e.value===I}))&&S(I)}var L=function(e){var t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==E&&(x(t),S(n),null!=h&&C(h,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=O.indexOf(e.currentTarget)+1;a=null!=(n=O[r])?n:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;a=null!=(o=O[i])?o:O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:L,onClick:L},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3580:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(5488),l=a(5162),s=["components"],u={title:"Cluster Datastore Options",weight:50},d=void 0,p={unversionedId:"installation/datastore",id:"installation/datastore",title:"Cluster Datastore Options",description:"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:",source:"@site/docs/installation/datastore.md",sourceDirName:"installation",slug:"/installation/datastore",permalink:"/docs/installation/datastore",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/datastore.md",tags:[],version:"current",lastUpdatedAt:1663781311,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Cluster Datastore Options",weight:50},sidebar:"mySidebar",previous:{title:"High Availability with Embedded DB",permalink:"/docs/installation/ha-embedded"},next:{title:"Private Registry Configuration",permalink:"/docs/installation/private-registry"}},c={},m=[{value:"External Datastore Configuration Parameters",id:"external-datastore-configuration-parameters",level:3},{value:"Datastore Endpoint Format and Functionality",id:"datastore-endpoint-format-and-functionality",level:3}],f={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your team doesn't have expertise in operating etcd, you can choose an enterprise-grade SQL database like MySQL or PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"If you need to run a simple, short-lived cluster in your CI/CD environment, you can use the embedded SQLite database"),(0,o.kt)("li",{parentName:"ul"},"If you wish to deploy Kubernetes on the edge and require a highly available solution but can't afford the operational overhead of managing a database at the edge, you can use K3s's embedded HA datastore built on top of embedded etcd.")),(0,o.kt)("p",null,"K3s supports the following datastore options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Embedded ",(0,o.kt)("a",{parentName:"li",href:"https://www.sqlite.org/index.html"},"SQLite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (certified against versions 10.7, 11.5, and 14.2)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (certified against versions 5.7 and 8.0)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")," (certified against version 10.6.8)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd")," (certified against version 3.5.4)"),(0,o.kt)("li",{parentName:"ul"},"Embedded etcd for High Availability")),(0,o.kt)("h3",{id:"external-datastore-configuration-parameters"},"External Datastore Configuration Parameters"),(0,o.kt)("p",null,"If you wish to use an external datastore such as PostgreSQL, MySQL, or etcd you must set the ",(0,o.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter so that K3s knows how to connect to it. You may also specify parameters to configure the authentication and encryption of the connection. The below table summarizes these parameters, which can be passed as either CLI flags or environment variables."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CLI Flag"),(0,o.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--datastore-endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_ENDPOINT")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify a PostgreSQL, MySQL, or etcd connection string. This is a string used to describe the connection to the datastore. The structure of this string is specific to each backend and is detailed below.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--datastore-cafile")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CAFILE")),(0,o.kt)("td",{parentName:"tr",align:null},"TLS Certificate Authority (CA) file used to help secure communication with the datastore. If your datastore serves requests over TLS using a certificate signed by a custom certificate authority, you can specify that CA using this parameter so that the K3s client can properly verify the certificate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--datastore-certfile")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CERTFILE")),(0,o.kt)("td",{parentName:"tr",align:null},"TLS certificate file used for client certificate based authentication to your datastore. To use this feature, your datastore must be configured to support client certificate based authentication. If you specify this parameter, you must also specify the ",(0,o.kt)("inlineCode",{parentName:"td"},"datastore-keyfile")," parameter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--datastore-keyfile")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_KEYFILE")),(0,o.kt)("td",{parentName:"tr",align:null},"TLS key file used for client certificate based authentication to your datastore. See the previous ",(0,o.kt)("inlineCode",{parentName:"td"},"datastore-certfile")," parameter for more details.")))),(0,o.kt)("p",null,"As a best practice we recommend setting these parameters as environment variables rather than command line arguments so that your database credentials or other sensitive information aren't exposed as part of the process info."),(0,o.kt)("h3",{id:"datastore-endpoint-format-and-functionality"},"Datastore Endpoint Format and Functionality"),(0,o.kt)("p",null,"As mentioned, the format of the value passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter is dependent upon the datastore backend. The following details this format and functionality for each supported external datastore."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,o.kt)("p",null,"  In its most common form, the datastore-endpoint parameter for PostgreSQL has the following format:"),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres://username:password@hostname:port/database-name")),(0,o.kt)("p",null,"  More advanced configuration parameters are available. For more information on these, please see ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/lib/pq"},"https://godoc.org/github.com/lib/pq"),"."),(0,o.kt)("p",null,"  If you specify a database name and it does not exist, the server will attempt to create it."),(0,o.kt)("p",null,"  If you only supply ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres://"),"  as the endpoint, K3s will attempt to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to localhost using ",(0,o.kt)("inlineCode",{parentName:"li"},"postgres")," as the username and password"),(0,o.kt)("li",{parentName:"ul"},"Create a database named ",(0,o.kt)("inlineCode",{parentName:"li"},"kubernetes")))),(0,o.kt)(l.Z,{value:"MySQL / MariaDB",mdxType:"TabItem"},(0,o.kt)("p",null,"  In its most common form, the ",(0,o.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter for MySQL and MariaDB has the following format:"),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql://username:password@tcp(hostname:3306)/database-name")),(0,o.kt)("p",null,"  More advanced configuration parameters are available. For more information on these, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"https://github.com/go-sql-driver/mysql#dsn-data-source-name")),(0,o.kt)("p",null,"  Note that due to a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/issues/1093"},"known issue")," in K3s, you cannot set the ",(0,o.kt)("inlineCode",{parentName:"p"},"tls"),' parameter. TLS communication is supported, but you cannot, for example, set this parameter to "skip-verify" to cause K3s to skip certificate verification.'),(0,o.kt)("p",null,"  If you specify a database name and it does not exist, the server will attempt to create it."),(0,o.kt)("p",null,"  If you only supply ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql://")," as the endpoint, K3s will attempt to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to the MySQL socket at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/run/mysqld/mysqld.sock")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user and no password"),(0,o.kt)("li",{parentName:"ul"},"Create a database with the name ",(0,o.kt)("inlineCode",{parentName:"li"},"kubernetes")))),(0,o.kt)(l.Z,{value:"etcd",mdxType:"TabItem"},(0,o.kt)("p",null,"  In its most common form, the ",(0,o.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter for etcd has the following format:"),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379")),(0,o.kt)("p",null,"  The above assumes a typical three node etcd cluster. The parameter can accept one more comma separated etcd URLs."))))}h.isMDXComponent=!0}}]);