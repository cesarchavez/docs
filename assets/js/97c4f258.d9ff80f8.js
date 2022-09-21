"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[305],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),g=r,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={title:"Configuration Options",weight:20},s=void 0,u={unversionedId:"installation/configuration",id:"installation/configuration",title:"Configuration Options",description:"This page focuses on the options that can be used when you set up K3s for the first time:",source:"@site/docs/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/docs/installation/configuration",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:1663781311,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Configuration Options",weight:20},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/docs/installation/requirements"},next:{title:"Network Options",permalink:"/docs/installation/network-options"}},c={},p=[{value:"Configuration with install script",id:"configuration-with-install-script",level:2},{value:"Configuration with binary",id:"configuration-with-binary",level:2},{value:"Configuration File",id:"configuration-file",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],f={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page focuses on the options that can be used when you set up K3s for the first time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-with-install-script"},"K3s Install Script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-with-binary"},"K3s Binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-file"},"Configuration File"))),(0,i.kt)("p",null,"For more advanced options, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/"},"this page"),"."),(0,i.kt)("h2",{id:"configuration-with-install-script"},"Configuration with install script"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start/"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")," to install K3s as a service on systemd and openrc based systems."),(0,i.kt)("p",null,"You can use a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," environment variables, and command flags to configure the installation."),(0,i.kt)("p",null,"To illustrate this, the following commands all result in the same behavior of registering a server without flannel and with a token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend none --token 12345" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\ncurl -sfL https://get.k3s.io | K3S_TOKEN=12345 sh -s - server --flannel-backend none\ncurl -sfL https://get.k3s.io | sh -s - --flannel-backend none --token 12345\n')),(0,i.kt)("p",null,"For details on all environment variables, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/env-variables"},"Environment Variables.")),(0,i.kt)("h2",{id:"configuration-with-binary"},"Configuration with binary"),(0,i.kt)("p",null,"As stated, the installation script is primarily concerned with configuring K3s to run as a service.",(0,i.kt)("br",{parentName:"p"}),"\n","If you choose to not use the script, you can run K3s simply by downloading the binary from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases/latest"},"release page"),", placing it on your path, and executing it. Or you can install K3s without enabling it as a service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | INSTALL_K3S_SKIP_ENABLE=true sh -\n")),(0,i.kt)("p",null,"You can configure K3s in this manner through ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server\n')),(0,i.kt)("p",null,"Or command flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --write-kubeconfig-mode 644\n")),(0,i.kt)("p",null,"The k3s agent can also be configured this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s agent --server https://k3s.example.com --token mypassword\n")),(0,i.kt)("p",null,"For details on configuring the K3s server, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/server-config"},"Server Configuration."),(0,i.kt)("br",{parentName:"p"}),"\n","For details on configuring the K3s agent, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/agent-config"},"Agent Configuration."),(0,i.kt)("br",{parentName:"p"}),"\n","You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag to see a list of all available options."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,i.kt)("p",null,"In addition to configuring K3s with environment variables and CLI arguments, K3s can also use a config file."),(0,i.kt)("p",null,"By default, values present in a YAML file located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," will be used on install."),(0,i.kt)("p",null,"An example of a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," config file is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\n')),(0,i.kt)("p",null,"In general, CLI arguments map to their respective YAML key, with repeatable CLI arguments being represented as YAML lists."),(0,i.kt)("p",null,"An identical configuration using only CLI arguments is shown below to demonstrate this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"\n')),(0,i.kt)("p",null,"It is also possible to use both a configuration file and CLI arguments. In these situations, values will be loaded from both sources, but CLI arguments will take precedence. For repeatable arguments such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-label"),", the CLI arguments will overwrite all values in the list."),(0,i.kt)("p",null,"Finally, the location of the config file can be changed either through the CLI argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE"),", or the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"$K3S_CONFIG_FILE"),"."),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"All of the above options can be combined into a single example."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file is created at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "secret"\ndebug: true\n')),(0,i.kt)("p",null,"Then the installation script is run with a combination of environment variables and flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\n')),(0,i.kt)("p",null,"Or if you have already installed the K3s Binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server --flannel-backend none\n')))}g.isMDXComponent=!0}}]);