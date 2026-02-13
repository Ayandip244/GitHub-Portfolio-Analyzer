const headers = {
  Authorization: ""
};

// 40 themes: 20 light + 20 dark
const themes = [
  // 20 light themes
  {bg:"#e0f7fa",circle:"#00bcd4",glass:"#ffffff33",btn:"#00acc1"},
  {bg:"#f1f8e9",circle:"#8bc34a",glass:"#ffffff33",btn:"#7cb342"},
  {bg:"#fce4ec",circle:"#e91e63",glass:"#ffffff33",btn:"#d81b60"},
  {bg:"#fff3e0",circle:"#ff9800",glass:"#ffffff33",btn:"#fb8c00"},
  {bg:"#ede7f6",circle:"#673ab7",glass:"#ffffff33",btn:"#5e35b1"},
  {bg:"#f3e5f5",circle:"#9c27b0",glass:"#ffffff33",btn:"#8e24aa"},
  {bg:"#e8f5e9",circle:"#4caf50",glass:"#ffffff33",btn:"#43a047"},
  {bg:"#fbe9e7",circle:"#ff5722",glass:"#ffffff33",btn:"#f4511e"},
  {bg:"#e1f5fe",circle:"#03a9f4",glass:"#ffffff33",btn:"#0288d1"},
  {bg:"#fffde7",circle:"#cddc39",glass:"#ffffff33",btn:"#afb42b"},
  {bg:"#f9fbe7",circle:"#d4e157",glass:"#ffffff33",btn:"#c0ca33"},
  {bg:"#ede7f6",circle:"#673ab7",glass:"#ffffff33",btn:"#512da8"},
  {bg:"#fce4ec",circle:"#f06292",glass:"#ffffff33",btn:"#ec407a"},
  {bg:"#e0f2f1",circle:"#009688",glass:"#ffffff33",btn:"#00796b"},
  {bg:"#fff8e1",circle:"#ffc107",glass:"#ffffff33",btn:"#ffa000"},
  {bg:"#f1f8e9",circle:"#aed581",glass:"#ffffff33",btn:"#9ccc65"},
  {bg:"#fbe9e7",circle:"#ff8a65",glass:"#ffffff33",btn:"#ff7043"},
  {bg:"#ede7f6",circle:"#9575cd",glass:"#ffffff33",btn:"#7e57c2"},
  {bg:"#e8f5e9",circle:"#81c784",glass:"#ffffff33",btn:"#66bb6a"},
  {bg:"#f3e5f5",circle:"#ba68c8",glass:"#ffffff33",btn:"#ab47bc"},

  // 20 dark themes
  {bg:"#002b1f",circle:"#00ff99",glass:"#00332280",btn:"#00cc88"},
  {bg:"#001f2b",circle:"#00e5ff",glass:"#00223380",btn:"#00bcd4"},
  {bg:"#1b1b2f",circle:"#ff4081",glass:"#22224480",btn:"#f50057"},
  {bg:"#0d1b2a",circle:"#00c853",glass:"#00222280",btn:"#00e676"},
  {bg:"#121212",circle:"#ffab00",glass:"#22222280",btn:"#ffc400"},
  {bg:"#041f1e",circle:"#69f0ae",glass:"#00222280",btn:"#00e676"},
  {bg:"#0b1d2b",circle:"#448aff",glass:"#00112280",btn:"#2979ff"},
  {bg:"#0f0f1f",circle:"#ff6d00",glass:"#11112280",btn:"#ff9100"},
  {bg:"#1c1c1c",circle:"#ff1744",glass:"#22222280",btn:"#f50057"},
  {bg:"#001a26",circle:"#00e5ff",glass:"#00223380",btn:"#00b0ff"},
  {bg:"#0a1d1a",circle:"#00ffea",glass:"#00222280",btn:"#1de9b6"},
  {bg:"#1b0b1c",circle:"#d500f9",glass:"#22002280",btn:"#aa00ff"},
  {bg:"#1a1a2e",circle:"#00e676",glass:"#22224480",btn:"#00c853"},
  {bg:"#041c32",circle:"#40c4ff",glass:"#00112280",btn:"#00b0ff"},
  {bg:"#100f1f",circle:"#ff9100",glass:"#11112280",btn:"#ffb300"},
  {bg:"#061210",circle:"#69f0ae",glass:"#00222280",btn:"#00e676"},
  {bg:"#121621",circle:"#ff4081",glass:"#22224480",btn:"#f50057"},
  {bg:"#0f101f",circle:"#00ffea",glass:"#11112280",btn:"#1de9b6"},
  {bg:"#001f2b",circle:"#ffab00",glass:"#00223380",btn:"#ffc400"},
  {bg:"#0c1b2c",circle:"#448aff",glass:"#00112280",btn:"#2979ff"},
];

document.addEventListener("DOMContentLoaded",()=>{
  const container = document.getElementById("themeOptions");
  themes.forEach((t,i)=>{
    const div = document.createElement("div");
    div.className="theme-swatch";
    div.style.background=t.bg;
    div.onclick=()=>applyTheme(i);
    container.appendChild(div);
  });
});

function applyTheme(i){
  const t = themes[i];
  document.body.style.background=t.bg;
  document.querySelectorAll(".inner").forEach(el=>el.style.background=t.circle);
  document.querySelectorAll(".glass").forEach(el=>el.style.background=t.glass);
  document.querySelectorAll("button").forEach(el=>el.style.background=t.btn);
}

// ---- ANALYSIS FUNCTIONS ----

async function analyze() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Enter username");
  showProgress();
  await stage("Fetching profile...",10);
  const userRes = await fetch(`https://api.github.com/users/${username}`, {headers});
  if(!userRes.ok)return alert("User not found");
  const user=await userRes.json();
  await stage("Fetching repositories...",30);
  const repoRes = await fetch(user.repos_url + "?per_page=100",{headers});
  const repos = await repoRes.json();
  await stage("Analyzing portfolio depth...",50);
  const metrics = calculateMetrics(user,repos);
  await stage("Generating recruiter insights...",80);
  const finalScore = calculateFinalScore(metrics);
  await stage("Finalizing evaluation...",100);
  displayResults(finalScore,metrics,user,repos);
}

function calculateMetrics(user,repos){
  const repoCount=repos.length;
  const stars=repos.reduce((a,r)=>a+r.stargazers_count,0);
  const forks=repos.reduce((a,r)=>a+r.forks_count,0);
  const languageSet=new Set(repos.map(r=>r.language).filter(Boolean));
  return {
    documentation:Math.min(100,repoCount*10),
    structure:Math.min(100,repoCount*8),
    activity:Math.min(100,user.public_repos*10),
    organization:Math.min(100,repoCount*7),
    impact:Math.min(100,stars*5),
    technicalDepth:Math.min(100,repoCount*9),
    languageDiversity:Math.min(100,languageSet.size*25),
    collaboration:Math.min(100,forks*10)
  };
}

function calculateFinalScore(metrics){
  const values=Object.values(metrics);
  const mean=values.reduce((a,b)=>a+b,0)/values.length;
  return Math.round(mean);
}

function displayResults(score,metrics,user,repos){
  document.getElementById("progressBox").classList.add("hidden");
  document.getElementById("scoreSection").classList.remove("hidden");
  document.getElementById("feedbackSection").classList.remove("hidden");
  animateScore(score);
  renderBreakdown(metrics);
  recruiterEvaluation(score,metrics,user,repos);
}

function animateScore(score){
  let current=0;
  const el=document.getElementById("scoreValue");
  const interval=setInterval(()=>{
    current++;
    el.innerText=current;
    if(current>=score) clearInterval(interval);
  },15);
  const deg=score*3.6;
  document.querySelector(".circle").style.background=`conic-gradient(#00ff99 ${deg}deg,#ffffff33 ${deg}deg)`;
  let verdict;
  if(score>=85) verdict="🟢 Strong Hire";
  else if(score>=70) verdict="🟡 Interview Worthy";
  else if(score>=55) verdict="🟠 Needs Improvement";
  else verdict="🔴 High Risk Portfolio";
  document.getElementById("verdict").innerHTML=`<h2>${verdict}</h2>`;
}

function renderBreakdown(metrics){
  const container=document.getElementById("scoreBreakdown");
  container.innerHTML="";
  for(let key in metrics){
    container.innerHTML+=`
      <div class="metric-card">
        <span>${key}</span>
        <div class="mini-bar">
          <div class="mini-fill" style="width:${metrics[key]}%"></div>
        </div>
        <span>${metrics[key]}/100</span>
      </div>
    `;
  }
}

async function recruiterEvaluation(score,m,user,repos){
  const el=document.getElementById("feedbackContent");
  el.innerHTML="";
  const lines=[
    `Overall Portfolio Score: ${score}/100.`,
    `Repository Count: ${repos.length}.`,
    m.documentation>70 ? "Strong documentation presence." : "Documentation needs improvement.",
    m.structure>70 ? "Code structure is well-organized." : "Improve folder and module structure.",
    m.activity>70 ? "Commit activity consistent." : "Maintain weekly commits.",
    m.languageDiversity>70 ? "Good language diversity." : "Expand technical stack.",
    m.collaboration>60 ? "Collaboration visible." : "Engage more in PRs/issues.",
    m.impact>60 ? "Projects have impact signals." : "Add real-world projects.",
    "Recommendation: Add CI/CD, tests, and demo links."
  ];
  for(let line of lines){
    await typeLine(line);
  }
}

function typeLine(text){
  return new Promise(resolve=>{
    const el=document.getElementById("feedbackContent");
    let div=document.createElement("div");
    div.classList.add("line");
    el.appendChild(div);
    let i=0;
    const interval=setInterval(()=>{
      div.innerHTML+=text.charAt(i);
      i++;
      if(i>=text.length){
        clearInterval(interval);
        resolve();
      }
    },15);
  });
}

function showProgress(){document.getElementById("progressBox").classList.remove("hidden");}
async function stage(label,percent){
  document.getElementById("stageLabel").innerText=label;
  document.getElementById("progressFill").style.width=percent+"%";
  document.getElementById("progressPercent").innerText=percent+"%";
  await new Promise(res=>setTimeout(res,700));
}