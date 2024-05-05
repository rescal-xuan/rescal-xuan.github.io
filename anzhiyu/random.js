var posts=["2024/05/04/hello-world/","2024/05/04/搭建自己的博客/","2024/05/05/机器学习（-数据科学）的工作流程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };