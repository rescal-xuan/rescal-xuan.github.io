var posts=["2024/05/07/hello-world/","2024/05/07/搭建自己的博客/","2024/05/12/python/python全栈学习路线/","2024/05/05/python/关于python中if-name-main-的理解/","2024/05/13/python基础/python简介/","2024/05/08/python爬虫/第-1-章-Python-爬虫概念与-Web-基础/","2024/05/16/python爬虫/第-10-章-使用pyecharts-进行数据展示/","2024/05/16/python爬虫/第-2章Python-爬虫基本库的使用/","2024/05/16/python爬虫/第-3章-python-爬虫抓包与数据解析/","2024/05/16/python爬虫/第-4章-用-CSV-和-Excel-存储数据/","2024/05/16/python爬虫/第-6章-Python-应对反爬虫策略/","2024/05/16/python爬虫/第-5章-用数据库存储数据/","2024/05/16/python爬虫/第-8章-Python-爬虫框架-Scrapy（下）/","2024/05/16/python爬虫/第-7章-Python-爬虫框架-Scrapy（上）/","2024/05/05/pytorch/【pytorch学习】之数据操作/","2024/05/16/python爬虫/第-9章-数据分析案例：Python-岗位行情/","2024/05/09/wonderful-sql/ch01_初识数据库/","2024/05/09/wonderful-sql/ch00_环境搭建/","2024/05/09/wonderful-sql/ch02_基础查询与排序/","2024/05/09/wonderful-sql/ch03_复杂一点的查询/","2024/05/09/wonderful-sql/ch05_SQL高级处理/","2024/05/09/wonderful-sql/ch04_集合运算/","2024/05/13/本地开发环境配置/本地开发环境配置/","2024/05/05/机器学习/机器学习（-数据科学）的工作流程/","2024/05/26/大模型/LMDeploy-量化部署-LLM-实践/LMDeploy-量化部署-LLM-实践/","2024/05/30/大模型/大模型微调/大模型微调/","2024/05/30/大模型/大模型（LLMs）基础知识/大模型（LLMs）基础知识/","2024/05/30/大模型/大模型（LLMs）强化学习/大模型（LLMs）强化学习/","2024/05/30/大模型/大模型（LLMs）推理/大模型（LLMs）推理/","2024/05/30/大模型/大模型（LLMs）评测/大模型（LLMs）评测/","2024/05/25/大模型/轻松玩转书生·浦语大模型趣味-Demo/轻松玩转书生·浦语大模型趣味-Demo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"rescal-xuan","link":"https://rescal-xuan.github.io/","avatar":"https://avatars.githubusercontent.com/u/116327853?v=4","descr":"你只管努力,剩下的交给天意","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };