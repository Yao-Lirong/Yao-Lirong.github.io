// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected projects that I am pround of",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-first-time-debugging-with-chatgpt",
        
          title: 'First Time Debugging with ChatGPT <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I was trying out the sampling in MMM music generation model today and encountered the problem described in this issue I proposed. I have no experience writing C in python with ctypes, so I figured why not ask the magic  conch shell  ChatGPT?",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2023-04-04-First-Time-Debugging-with-ChatGPT/", "_blank");
          
        },
      },{id: "post-2022-web-journal",
        
          title: '2022 Web Journal <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2022-12-31-2022-%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97/", "_blank");
          
        },
      },{id: "post-deploy-a-reddit-bot-on-heroku",
        
          title: 'Deploy a Reddit Bot on Heroku <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I’ve created a bot to send warm welcomes to newly admitted Cornell prefrosh.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2022-09-04-Deploy-a-Reddit-Bot-on-Heroku/", "_blank");
          
        },
      },{id: "post-javascript-manual",
        
          title: 'JavaScript Manual <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I hate web programming, but looks like I really have to learn it. Notes from Liao Xuefeng’s JS course",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2022-06-11-JavaScript-Manual/", "_blank");
          
        },
      },{id: "post-博客seo优化",
        
          title: '博客SEO优化 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "谷歌和我网站有仇吗，弄了好几天，怎么别人等一天就行了，我等一个礼拜也搞不定。换了域名以后还不如原来，原来谷歌自动就给我 index 了。这样想还是要感谢营销号和爬虫，爬了我一个我自己都看不下去的题解，竟然让我原来的博客被收录了，可惜这个新的弄起来就麻烦了…",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2022-04-23-%E5%8D%9A%E5%AE%A2SEO%E4%BC%98%E5%8C%96/", "_blank");
          
        },
      },{id: "post-video-editing-ffmpeg-davinci",
        
          title: 'Video Editing (FFmpeg DaVinci) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "主要记录视频的一些相关知识以及 FFmpeg 和 DaVinci 的常见用法",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2022-04-09-%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91-(FFmpeg-DaVinci)/", "_blank");
          
        },
      },{id: "post-2021-web-journal",
        
          title: '2021 Web Journal <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "开始学习阮一峰记录自己看到的有意思的文章和收集有用的工具的第一个整年The best science images of 2021",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-12-31-2021-%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97/", "_blank");
          
        },
      },{id: "post-look-back-on-cornell-21fa",
        
          title: 'Look Back on Cornell 21FA <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "回来了，总体来说是挺努力的一学期",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-12-15-Look-Back-on-Cornell-21FA/", "_blank");
          
        },
      },{id: "post-sql-manual",
        
          title: 'SQL Manual <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "提交实习申请后发来个小测验，给我做崩溃了，第一个要我做这种级别的SQL，我最多也就会个 select from where，超纲过于严重，只能回头补习",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-09-16-Intro-to-SQL/", "_blank");
          
        },
      },{id: "post-java-quick-guide",
        
          title: 'Java Quick Guide <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "BasicsBasic File Structure:&lt;figure class=&quot;high",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-09-10-Java-Quick-Guide/", "_blank");
          
        },
      },{id: "post-c-manual",
        
          title: 'C Manual <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "大概是写这么多年 C(++) 以来第一次正式学 C (虽然其实在康奈尔学过一遍C++)",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-08-31-Introduction-to-C/", "_blank");
          
        },
      },{id: "post-更新archer主题-迁移hexo博客",
        
          title: '更新archer主题 / 迁移Hexo博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "重要文件不多，全在下面列出来了，记得把它们迁移好就行",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-08-29-%E6%9B%B4%E6%96%B0archer%E4%B8%BB%E9%A2%98--%E8%BF%81%E7%A7%BBHexo%E5%8D%9A%E5%AE%A2/", "_blank");
          
        },
      },{id: "post-install-and-configure-aria2-on-wsl",
        
          title: 'Install and Configure Aria2 on WSL <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "TutorialInstall Aria",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-06-28-Install-and-Configure-Aria2-on-Linux/", "_blank");
          
        },
      },{id: "post-on-intelligence",
        
          title: 'On Intelligence <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Complexity is a symptom of confusion, not a cause.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-06-23-On-Intelligence/", "_blank");
          
        },
      },{id: "post-tensorflow-1-x-manual",
        
          title: 'TensorFlow 1.x Manual <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "海尔实习期间记录下的 TensorFlow 笔记",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-05-28-Introduction-to-TensorFlow-1.x/", "_blank");
          
        },
      },{id: "post-look-back-on-cornell-21sp",
        
          title: 'Look Back on Cornell 21SP <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "生年不满百 常怀千岁忧昼短苦夜长 何不秉烛游为乐当及时 何能待来兹愚者爱惜费 但为后世嗤仙人王子乔 难可与等期",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-05-24-Look-Back-on-Cornell-21SP/", "_blank");
          
        },
      },{id: "post-setting-up-a-server",
        
          title: 'Setting up a Server <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "&lt;a href=&quot;https://www.digit",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-05-15-Setting-up-a-Server/", "_blank");
          
        },
      },{id: "post-tsinghua-dsa-作业总结-3",
        
          title: 'Tsinghua DSA 作业总结 (3) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "CST数据结构（2020秋）PA3",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-02-11-Tsinghua-DSA-%E4%BD%9C%E4%B8%9A%E6%80%BB%E7%BB%93-(3)/", "_blank");
          
        },
      },{id: "post-tsinghua-dsa-作业总结-2",
        
          title: 'Tsinghua DSA 作业总结 (2) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "CST数据结构（2020秋）PA2a",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-02-10-Tsinghua-DSA-%E4%BD%9C%E4%B8%9A%E6%80%BB%E7%BB%93-(2)/", "_blank");
          
        },
      },{id: "post-tsinghua-dsa-作业总结-1",
        
          title: 'Tsinghua DSA 作业总结 (1) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "CST数据结构（2020秋）PA1a",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/2021-02-09-Tsinghua-DSA-%E4%BD%9C%E4%B8%9A%E6%80%BB%E7%BB%93-(1)/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-started-a-facinating-journey-at-cornell",
          title: 'Started a facinating journey at Cornell.',
          description: "",
          section: "News",},{id: "news-studied-remote-in-china-because-of-covid-spent-20fa-on-cornell-s-covid-study-away-program-at-tsinghua-university-and-had-the-honor-to-take-professor-deng-junhui-s-famous-class-data-structures-and-algorithms-spent-21sp-remote-at-home",
          title: 'Studied remote in China because of COVID. Spent 20FA on Cornell’s COVID Study...',
          description: "",
          section: "News",},{id: "news-started-a-one-year-long-research-project-with-professor-kevin-ellis-on-the-abstraction-and-reasoning-corpus",
          title: 'Started a one-year-long research project with professor Kevin Ellis on the Abstraction and...',
          description: "",
          section: "News",},{id: "news-graduated-from-cornell-with-distinction-in-all-subjects-magna-cum-laude-in-addition-with-solid-support-and-genuine-trust-from-faculty-and-staff-members-i-had-the-tremendous-honor-to-be-nominated-and-selected-as-one-of-the-40-cornell-arts-and-sciences-extraordinary-seniors-representing-the-class-of-2023",
          title: 'Graduated from Cornell with Distinction in all Subjects, Magna Cum Laude. In addition,...',
          description: "",
          section: "News",},{id: "news-joined-xiaomi-internet-business-department-at-nanjing-jiangsu-china-as-a-machine-learning-research-engineer",
          title: 'Joined Xiaomi internet business department at Nanjing, Jiangsu, China as a machine learning...',
          description: "",
          section: "News",},{id: "projects-aphelion-defense",
          title: 'Aphelion Defense',
          description: "a space-themed online mobile RTS game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aphelion_defense.html";
            },},{id: "projects-evolving-artificial-life-simulation",
          title: 'Evolving Artificial Life Simulation',
          description: "Critter World: my first real computer engineering project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/critter_world.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
