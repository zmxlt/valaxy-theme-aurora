import{_ as v}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-33f8a1f5.js";import{d as b,c as p,r as x,o as c,a as m,b as o,e as C,m as _,f as g,w as a,_ as k,p as A,g as e,h as l,i as s}from"./app-e0df21d0.js";const D=["href"],$={key:0,class:"icon-link inline-block","i-ri-arrow-right-up-line":""},E=b({__name:"AppLink",props:{showExternalIcon:{type:Boolean},to:{},href:{}},setup(n){const d=n,i=p(()=>d.href||d.to||"#"),h=p(()=>typeof i.value=="string"&&i.value.startsWith("http"));return(r,f)=>{const t=x("router-link");return h.value?(c(),m("a",_({key:0},r.$attrs,{href:i.value,target:"_blank"}),[o(r.$slots,"default"),r.showExternalIcon?(c(),m("div",$)):C("v-if",!0)],16,D)):(c(),g(t,_({key:1},r.$attrs,{to:i.value}),{default:a(()=>[o(r.$slots,"default")]),_:3},16,["to"]))}}}),B="/assets/0-c30103b4.png",w="/assets/1-291b9651.png",De=JSON.parse('{"title":"valaxy-theme-aurora使用指南","description":"这是 valaxy-theme-aurora 主题的使用指南","frontmatter":{"title":"valaxy-theme-aurora使用指南","tags":["valaxy","aurora"],"categories":["使用指南"],"imageUrl":"https://i.loli.net/2020/06/30/iGW3CIPSUZas4Yx.jpg","description":"这是 valaxy-theme-aurora 主题的使用指南","comment":true,"date":"2023-05-02T00:00:00.000Z"},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[]},{"level":2,"title":"安装 nodejs","slug":"安装-nodejs","link":"#安装-nodejs","children":[]},{"level":2,"title":"使用 aurora 模板创建博客","slug":"使用-aurora-模板创建博客","link":"#使用-aurora-模板创建博客","children":[]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[{"level":3,"title":"站点配置文件","slug":"站点配置文件","link":"#站点配置文件","children":[]},{"level":3,"title":"主题配置文件","slug":"主题配置文件","link":"#主题配置文件","children":[]},{"level":3,"title":"public","slug":"public","link":"#public","children":[]},{"level":3,"title":"pages","slug":"pages","link":"#pages","children":[]},{"level":3,"title":"关于文章创建及注意事项","slug":"关于文章创建及注意事项","link":"#关于文章创建及注意事项","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"relativePath":"pages/posts/20230430-valaxy-theme-aurora-tutorial/index.md","path":"/home/runner/work/valaxy-theme-aurora/valaxy-theme-aurora/demo/pages/posts/20230430-valaxy-theme-aurora-tutorial/index.md","lastUpdated":1684501536000}'),u=JSON.parse('{"title":"valaxy-theme-aurora使用指南","description":"这是 valaxy-theme-aurora 主题的使用指南","frontmatter":{"title":"valaxy-theme-aurora使用指南","tags":["valaxy","aurora"],"categories":["使用指南"],"imageUrl":"https://i.loli.net/2020/06/30/iGW3CIPSUZas4Yx.jpg","description":"这是 valaxy-theme-aurora 主题的使用指南","comment":true,"date":"2023-05-02T00:00:00.000Z"},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[]},{"level":2,"title":"安装 nodejs","slug":"安装-nodejs","link":"#安装-nodejs","children":[]},{"level":2,"title":"使用 aurora 模板创建博客","slug":"使用-aurora-模板创建博客","link":"#使用-aurora-模板创建博客","children":[]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[{"level":3,"title":"站点配置文件","slug":"站点配置文件","link":"#站点配置文件","children":[]},{"level":3,"title":"主题配置文件","slug":"主题配置文件","link":"#主题配置文件","children":[]},{"level":3,"title":"public","slug":"public","link":"#public","children":[]},{"level":3,"title":"pages","slug":"pages","link":"#pages","children":[]},{"level":3,"title":"关于文章创建及注意事项","slug":"关于文章创建及注意事项","link":"#关于文章创建及注意事项","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"relativePath":"pages/posts/20230430-valaxy-theme-aurora-tutorial/index.md","path":"/home/runner/work/valaxy-theme-aurora/valaxy-theme-aurora/demo/pages/posts/20230430-valaxy-theme-aurora-tutorial/index.md","lastUpdated":1684501536000}'),j={name:"pages/posts/20230430-valaxy-theme-aurora-tutorial/index.md",data(){return{data:u,frontmatter:u.frontmatter}},setup(){A("pageData",u)}},F={id:"写在前面",tabindex:"-1"},U=e("p",null,"本人并没有做到完全复刻原主题，也没有完全适配 valaxy 内置的所有功能，而是移植出一个最小可用的主题版本。此处引用罗先生的经典名言：又不是不能用。",-1),N=e("p",null,[e("img",{src:B,alt:""})],-1),S={id:"安装-nodejs",tabindex:"-1"},z=e("p",null,"安装完成后， 推荐使用 pnpm 包管理工具。",-1),P=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-i"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"g"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"pnpm")]),l(`
`),e("span",{class:"line"})])])],-1),T={id:"使用-aurora-模板创建博客",tabindex:"-1"},L=e("li",null,[e("p",null,"点击 Use The Template ，根据 Github 指引，创建仓库。")],-1),V=e("li",null,[e("p",null,"从自己的仓库中进行克隆到本地。")],-1),Z=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"git"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"clone"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"xxx.git")]),l(`
`),e("span",{class:"line"})])])],-1),G=e("ol",{start:"4"},[e("li",null,"进入目录，安装依赖。")],-1),I=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"pnpm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"i")]),l(`
`),e("span",{class:"line"})])])],-1),M=e("ol",{start:"5"},[e("li",null,"预览主题效果, 如果成功，那么预览效果，如图所示。")],-1),W=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"pnpm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"dev")]),l(`
`),e("span",{class:"line"})])])],-1),Y=e("p",null,[e("img",{src:w,alt:""})],-1),J={id:"主题配置",tabindex:"-1"},O={id:"站点配置文件",tabindex:"-1"},H=e("p",null,[l("站点配置文件为 "),e("code",null,"site.config.ts"),l(", valaxy 提供了大量的配置选项，但本主题仅仅只适配了其中一小部分选项。")],-1),R=e("p",null,"而所需的其余配置均放在博客主题配置文件中。",-1),q=e("p",null,"站点配置说明：",-1),K=e("ul",null,[e("li",null,[e("code",null,"url"),l(" ： 博客的访问路径。")]),e("li",null,[e("code",null,"pageSize"),l(" ： 首页的展示数量。")]),e("li",null,[e("code",null,"title"),l("： 浏览器 tab 栏打开此网页展示的信息。")]),e("li",null,[e("code",null,"description"),l("： 给搜索引擎抓取后展示用的信息。")]),e("li",null,[e("code",null,"favicon"),l("： 浏览器 tab 栏打开此网页的图表。")]),e("li",null,[e("code",null,"mediumZoom"),l("： 文章中图片的放大查看功能，不用修改。")])],-1),Q={id:"主题配置文件",tabindex:"-1"},X=e("p",null,[l("主题配置文件为 "),e("code",null,"valaxy.config.ts"),l("， 其中给出了该主题所有的配置文件，着重介绍需要修改的属性。")],-1),ee=e("ul",null,[e("li",null,[e("code",null,"title"),l("： 网站展示的标题。")]),e("li",null,[e("code",null,"subtile"),l("： 副标题，可重置为空字符串 "),e("code",null,"''"),l("。")]),e("li",null,[e("code",null,"author"),l(": 博客的作者。")]),e("li",null,[e("code",null,"footer"),l(": 网站的页脚，备案信息等。")]),e("li",null,[e("code",null,"panel"),l(": 联系面板，其实就是一个图片 tab。")]),e("li",null,[e("code",null,"addons"),l(": 评论功能，其中 "),e("code",null,"serverURL"),l("，请按照注释链接，自行注册，并且进行替换。")]),e("li",null,[l("其他都是一些风格样式，自行替换体验即可，其中 "),e("code",null,"menu"),l(" 的 "),e("code",null,"icon"),l(" 也是用的就是 "),e("code",null,"iconStyle"),l(" 的 "),e("code",null,"href"),l(" 的图标。")])],-1),le=e("p",null,[l("其中你能看到两种不同的图片引用方式，一种是 "),e("code",null,"/xxx.png"),l("（绝对路径）和 "),e("code",null,"https://"),l(" (外链的形式)，如果是绝对路径，那么你需要将资源图片放在 "),e("code",null,"public"),l(" 目录下，如果是外链，请确保外链不会失效。")],-1),ae={id:"public",tabindex:"-1"},te=e("p",null,"public 目录存放的是公共资源，在 build 阶段，将会复制到 dist 目录下。",-1),se=e("p",null,[l("CNAME 文件，放的是你的网站域名，比如 "),e("code",null,"zmxlt.top"),l(" 或者他的子域名 "),e("code",null,"blog.zmxlt.top"),l("。")],-1),ne=e("p",null,"其他文件，根据你的需求放入和替换。",-1),oe={id:"pages",tabindex:"-1"},re=e("p",null,[l("所有对应页面的字段示例都已经写好，根据示例自行修改。其中 "),e("code",null,"comment"),l(" 字段是用来控制评论功能的开启。")],-1),ie={id:"关于文章创建及注意事项",tabindex:"-1"},ce=e("ol",{start:"0"},[e("li",null,"创建文件模板模板及使用。")],-1),de=e("code",null,"scaffolds/post.md",-1),ue=e("p",null,[l("使用模板，需要全局安装 "),e("code",null,"valaxy"),l(" 。")],-1),he=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"pnpm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-g"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"i"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"valaxy")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 创建新文件")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"pnpm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"my_new_post")]),l(`
`),e("span",{class:"line"})])])],-1),pe=e("ol",null,[e("li",null,[e("p",null,[l("建议文件名采用英文命名，虽然中文也是支持的。如果想让文件采用中文名，请不不要删除 "),e("code",null,"pages/404.md")])]),e("li",null,[e("p",null,[l("文章中 "),e("code",null,"date"),l(" 字段，请注意加上时区，如 "),e("code",null,"2023-05-02 08:00:00 +8"),l("，因为 vite-ssg 默认的 UTC 0 时区。")])]),e("li",null,[e("p",null,"当然，你甚至还能使用文件夹进行管理（目前只能手动创建），如下。")])],-1),me=e("div",{class:"language-"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"post/")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  test/")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    index.md")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    a.md")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    b.png")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})])])])],-1),_e=e("p",null,[e("code",null,"build"),l(" 阶段对应会生成 "),e("code",null,"/posts/test.html"),l(" 和 "),e("code",null,"/posts/test/a.html"),l(" 两个文件。 并且，你能够在 "),e("code",null,"md"),l(" 文件中采用相对路径的方式引用图片 "),e("code",null,"![](./b.png)")],-1),ge={id:"部署",tabindex:"-1"},fe={id:"注意事项",tabindex:"-1"},ye=e("li",null,[l("如果不想采用 github actions 进行自动部署， 请删除 "),e("code",null,".github"),l(" 目录")],-1),ve={id:"写在最后",tabindex:"-1"},be=e("p",null,"感谢云游君创造出很棒的事物，快来体验 valaxy 吧。",-1),xe=e("p",null,"最后，感谢你的使用。",-1);function Ce(n,d,i,h,r,f){const t=E,y=v;return c(),g(y,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":a(()=>[e("h2",F,[l("写在前面 "),s(t,{class:"header-anchor",href:"#写在前面","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("p",null,[s(t,{href:"https://github.com/zmxlt/valaxy-theme-aurora",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("valaxy-theme-aurora")]),_:1}),l(" 是一款基于 "),s(t,{href:"https://valaxy.site/guide/getting-started",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("valaxy")]),_:1}),l(" 的静态博客主题， 是 "),s(t,{href:"https://github.com/chanshiyucx/aurora",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("aurora-vue")]),_:1}),l(" 主题的移植版本，本人只是做了一点小小的工作。")]),U,N,e("h2",S,[l("安装 nodejs "),s(t,{class:"header-anchor",href:"#安装-nodejs","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("p",null,[l("从官网下载 "),s(t,{href:"https://nodejs.org/en",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("nodejs")]),_:1}),l("，根据你的操作系统,选择不同的安装包，nodejs 版本推荐 16x 以上。")]),z,P,e("h2",T,[l("使用 aurora 模板创建博客 "),s(t,{class:"header-anchor",href:"#使用-aurora-模板创建博客","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("ol",null,[e("li",null,[e("p",null,[l("在 github 上访问 "),s(t,{href:"https://github.com/zmxlt/valaxy-theme-aurora-template",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("valaxy-theme-aurora-template")]),_:1}),l(" 仓库。")])]),L,V]),Z,G,I,M,W,Y,e("h2",J,[l("主题配置 "),s(t,{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("h3",O,[l("站点配置文件 "),s(t,{class:"header-anchor",href:"#站点配置文件","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),H,R,q,K,e("h3",Q,[l("主题配置文件 "),s(t,{class:"header-anchor",href:"#主题配置文件","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),X,ee,le,e("h3",ae,[l("public "),s(t,{class:"header-anchor",href:"#public","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),te,se,ne,e("h3",oe,[l("pages "),s(t,{class:"header-anchor",href:"#pages","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("p",null,[l("pages 目录是用来存放 markdown 文件。 markdown 文件的顶部是 FrontMatter 字段，遵循 "),s(t,{href:"https://www.runoob.com/w3cnote/yaml-intro.html",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("YAML")]),_:1}),l(" 语法规则。")]),re,e("h3",ie,[l("关于文章创建及注意事项 "),s(t,{class:"header-anchor",href:"#关于文章创建及注意事项","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),ce,e("p",null,[l("参考 "),s(t,{href:"https://valaxy.site/guide/custom/templates",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("自定义文章模板")]),_:1}),l("， 即 "),de,l(" 文件")]),ue,he,pe,me,_e,e("h2",ge,[l("部署 "),s(t,{class:"header-anchor",href:"#部署","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("p",null,[l("参考 "),s(t,{href:"https://valaxy.site/guide/deploy",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("valaxy-部署")]),_:1}),l("。")]),e("h3",fe,[l("注意事项 "),s(t,{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("ul",null,[ye,e("li",null,[l("如果采用 github 想设置自定义域名，请参考 "),s(t,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("Configuring a custom domain for your GitHub Pages site")]),_:1})])]),e("h2",ve,[l("写在最后 "),s(t,{class:"header-anchor",href:"#写在最后","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),be,e("p",null,[l("有任何想要咨询的事情，可以来这里提 "),s(t,{href:"https://github.com/zmxlt/valaxy-theme-aurora/issues",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("valaxy-theme-aurora issuses")]),_:1}),l("。")]),xe]),"main-header":a(()=>[o(n.$slots,"main-header")]),"main-header-after":a(()=>[o(n.$slots,"main-header-after")]),"main-nav":a(()=>[o(n.$slots,"main-nav")]),"main-content":a(()=>[o(n.$slots,"main-content")]),"main-content-after":a(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":a(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":a(()=>[o(n.$slots,"main-nav-after")]),comment:a(()=>[o(n.$slots,"comment")]),footer:a(()=>[o(n.$slots,"footer")]),aside:a(()=>[o(n.$slots,"aside")]),"aside-custom":a(()=>[o(n.$slots,"aside-custom")]),default:a(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const $e=k(j,[["render",Ce]]);export{De as __pageData,$e as default};