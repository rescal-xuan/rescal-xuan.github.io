var posts=["2024/05/04/hello-world/","2024/05/04/基于github和Hexo 搭建自己的博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };