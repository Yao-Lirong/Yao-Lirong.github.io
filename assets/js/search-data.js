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
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-matryoshka-representation-learning-adaptive-retrieval-and-binary-vector-search",
        
          title: 'Matryoshka Representation Learning, Adaptive Retrieval and Binary Vector Search <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Intro to Matryoshka Representation LearningIn Matryoshka Representation Learning (MRL), we want to construct an",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/matryoshka-representation-learning-adaptive-retrieval-and-binary-vector-search/", "_blank");
          
        },
      },{id: "post-youtube-recommendation-algorithms-2016",
        
          title: 'YouTube Recommendation Algorithms (2016) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This is a detailed reading of Google’s paper DeepNeural Networks for YouTube Recommendations",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/youtube-recommendation-algorithms-2016/", "_blank");
          
        },
      },{id: "post-running-mobilebert-on-android-with-tensorflow-lite",
        
          title: 'Running MobileBert on Android with TensorFlow Lite <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "So Google, fxxk you.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/running-mobilebert-on-android-with-tensorflow-lite/", "_blank");
          
        },
      },{id: "post-variational-inference",
        
          title: 'Variational Inference <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Probabilistic LatentVariable ModelsThe two general forms of probabilistic models are",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/variational-inference/", "_blank");
          
        },
      },{id: "post-hyper-parameter-tuning-with-optuna",
        
          title: 'Hyper-Parameter Tuning with Optuna <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "After self-implementing a grid-search but having a horrible timewriting pyplot visualizing the result, I finally decided to find anexisting tool to do the HP tuning for me.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/hyper-parameter-tuning-with-optuna/", "_blank");
          
        },
      },{id: "post-kv-cache",
        
          title: 'KV Cache <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Before this, see 2024/06/17Conducting Multi-Round Conversation with Transformers for why weneed cache. But we have query, key, value three matrices. Why do youonly cache past keys and values? How about past queries?",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/kv-cache/", "_blank");
          
        },
      },{id: "post-conducting-multi-round-conversation-with-transformers",
        
          title: 'Conducting Multi-Round Conversation with Transformers <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I was using LLaVA to query in an image how many characters there are.For higher accuracy, I decided to employ Chain of Thought, but struggledto implement it. CoT is conducted through a multiple round conversation.It is easily done in a graphical chat interface but how is it doneinternally with code?",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/conducting-multi-round-conversation-with-transformers/", "_blank");
          
        },
      },{id: "post-gpt-4o-release",
        
          title: 'GPT-4o Release <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "One day before Google I/O, OpenAI made a Spring UpdateRelease, introducing multi-modal end-to-end model GPT4-o",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/gpt-4o-release/", "_blank");
          
        },
      },{id: "post-clip",
        
          title: 'CLIP <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "CLIP investigates whether it is possible to transfer the success oftask-agnostic web-scale pre-training in NLP to another domain (CV).",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/clip/", "_blank");
          
        },
      },{id: "post-gradient-scaling",
        
          title: 'Gradient Scaling <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Loss Scaling / Gradient Scaling was mentioned in Mixed-Precision Trainingas one of the 3 techniques, but there are many points to be careful withwhen in practice.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/gradient-scaling/", "_blank");
          
        },
      },{id: "post-decoupled-weight-decay-regularization-sgdw-amp-adamw",
        
          title: 'Decoupled Weight Decay Regularization (SGDW &amp; AdamW) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The paper Decoupled WeightDecay Regularization mainly introduces AdamW, which is the SOTAoptimizer since then. It investigates why Adam with L2 regularizationsometimes performs worse than SGD with L2 regularization. Itdemonstrates weight decay and L2 regularization, two things peopleusually draw an equal sign, are not the same. And it shows weight decayis the ultimate go-to choice.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/decoupled-weight-decay-regularization-sgdw-adamw/", "_blank");
          
        },
      },{id: "post-mixed-precision-training",
        
          title: 'Mixed-Precision Training <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Mixed-precision training was introduced in Nvidia and Baidu’s research.Theblogpost from Nvidia gave a nice summary of how it’s done and why itworks. Nvidia also gave a more in-depth coverage of the same points intheir tutorial on trainingwith mixed precision.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/mixed-precision-training/", "_blank");
          
        },
      },{id: "post-parameter-and-flop-count-in-transformer-model",
        
          title: 'Parameter and FLOP Count in Transformer Model <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We borrow the results of decoder-only transformer models from OpenAI’s paper Scaling Laws forNeural Language Models Section 2.1",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/parameter-and-flop-count-in-transformer-model/", "_blank");
          
        },
      },{id: "post-memory-pinning-and-transfer-data-between-host-cpu-and-device-gpu",
        
          title: 'Memory Pinning and Transfer Data between Host (CPU) and Device (GPU) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "PyTorchofficial documentation explains this concept very briefly and we gointo more detail here.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/memory-pinning-and-transfer-data-between-host-cpu-and-device-gpu/", "_blank");
          
        },
      },{id: "post-switching-personal-homepage-theme-to-al-folio",
        
          title: 'Switching Personal Homepage Theme to al-folio <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Since long before have I realized I do need a more official and moreacademic homepage in addition to a personal blog site, but I didn’t findtime to do it until I started working. Now after this switch, I have mypersonal homepage of al-folio in Jekyll and at the same time my blog ofarcher inHexo.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/switching-personal-homepage-theme-to-al-folio/", "_blank");
          
        },
      },{id: "post-visual-information-theory",
        
          title: 'Visual Information Theory <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This blog post is adapted from ex-OpenAI researcher, Anthropicco-founder ChristopherOlah’s wonderful work. I removed parts that are generallycommonsense to a CS kid and added some of my own notes &amp;amp;explanations.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/visual-information-theory/", "_blank");
          
        },
      },{id: "post-quantization",
        
          title: 'Quantization <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "K-bit Inference ScalingLawsThis paper and its",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/quantization/", "_blank");
          
        },
      },{id: "post-fine-tuning-llms-prompt-tuning-adapter-lora",
        
          title: 'Fine-Tuning LLMs: Prompt Tuning, Adapter, LoRA <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This article AGuid to Parameter-efficient Fine-tuning (PEFT) made a very goodsummary with nice drawings. There are some differences between itsexplanation with the original paper but the basic architecture is allgood.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/fine-tuning-llms-prompt-tuning-adapter-lora/", "_blank");
          
        },
      },{id: "post-graph-networks-amp-graphcast",
        
          title: 'Graph Networks &amp; GraphCast <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "GraphNetworksThis is a very detailed and clear intro to Gra",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/graph-networks-graphcast/", "_blank");
          
        },
      },{id: "post-first-time-debugging-with-chatgpt",
        
          title: 'First Time Debugging with ChatGPT <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I was trying out the sampling in MMM music generation modeltoday and encountered the problem described in this issue Iproposed. I have no experience writing C in python withctypes, so I figured why not ask the magic  conchshell  ChatGPT?",
        section: "Posts",
        handler: () => {
          
            window.open("https://yao-lirong.github.io/blog/first-time-debugging-with-chatgpt/", "_blank");
          
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
          section: "News",},{id: "news-left-xiaomi-after-working-there-for-2-years-and-came-back-to-cornell-for-a-master-degree",
          title: 'Left Xiaomi after working there for 2 years and came back to Cornell...',
          description: "",
          section: "News",},{id: "projects-aphelion-defense",
          title: 'Aphelion Defense',
          description: "Space-themed online mobile RTS game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aphelion_defense.html";
            },},{id: "projects-evolving-artificial-life-simulation",
          title: 'Evolving Artificial Life Simulation',
          description: "Critter World: my first real computer engineering project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/critter_world.html";
            },},{id: "projects-edge-ai",
          title: 'Edge AI',
          description: "Xiaomi Internet Business Department annual key project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edge_ai.html";
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
