🚀 AI GitHub Portfolio Analyzer & Enhancer<br>
Turn Your GitHub Repositories into Recruiter-Ready Proof!<br>

🔑 Using Your Own GitHub Personal Access Token (Required)<br>
To fully enable the analyzer (especially for GraphQL contributions and API calls), you need a GitHub Personal Access Token (PAT).<br>
Step 1: Generate a Personal Access Token<br>
1. Go to GitHub Settings → Developer settings → Personal Access Tokens → Tokens (classic).<br>
2. Click Generate new token → Tokens (classic).<br>
3. Give your token a name, e.g., GitHub Portfolio Analyzer.<br>
4. Set Expiration (choose “No expiration” if you prefer).<br>
5. Select Scopes:<br>
\t repo (to access repository info)<br>
\t read:user (to access user info)<br>
\t public_repo (for public repositories)<br>
6. Click Generate token.<br>
7. Copy the generated token — you won’t be able to see it again.<br>

Step 2: Add Your Token to the Project<br>
1. Open script.js in your code editor.<br>
2. Find this line near the top:<br>

const headers = {<br>
\t Authorization: "YOUR_GITHUB_TOKEN"<br>
};<br>

3. Replace "YOUR_GITHUB_TOKEN" with your actual token<br>

💡 Overview<br>
Many students and early-career developers struggle to showcase their skills effectively on GitHub. Incomplete READMEs, inconsistent commits, and poorly structured repositories make it difficult for recruiters to evaluate true potential.<br>
This tool analyzes your GitHub profile and provides:<br>
Recruiter-focused evaluation<br>
Actionable feedback on repositories and code<br>
Score out of 100 with detailed metric breakdown<br>
Suggestions to improve documentation, structure, activity, and impact<br>
This AI-powered portfolio enhancer ensures your GitHub profile stands out to top tech recruiters.<br>

🎯 Key Features<br>
Interactive Circular Score Meter: Shows overall portfolio score out of 100.<br>
Detailed Recruiter Evaluation: Line-by-line feedback with actionable recommendations.<br>
Metrics Breakdown: Each metric scored individually (Documentation, Structure, Activity, Language Diversity, Collaboration, Impact, Technical Depth).<br>
20+ Light & 20+ Dark Themes: Switch between themes instantly.<br>
Glassmorphic UI with hover effects, animations, and smooth transitions.<br>
Animated Feedback Typing: Simulates AI typing for a real-time evaluation experience.<br>
Multi-stage Progress: See analysis in stages (README, commits, repos, languages, PRs/issues).<br>
Responsive & User-Friendly: Works across devices and is visually appealing.<br>

📊 Scoring Dimensions<br>
Metric	Out of	Description<br>
Documentation Quality	100	README and project instructions clarity.<br>
Code Structure & Organization	100	Folder structure, modularity, readability.<br>
Activity Consistency	100	Frequency and consistency of commits.<br>
Repository Organization	100	Proper project structure and logical grouping.<br>
Project Impact & Relevance	100	Stars, forks, real-world relevance.<br>
Technical Depth	100	Advanced concepts, algorithms, and practices.<br>
Language Usage & Diversity	100	Variety of programming languages used.<br>
Collaboration & PRs	100	Participation in issues and pull requests.<br>
Total Score = Mean of all metrics (out of 100)<br>


🖼️ Screenshots
<img width="1900" height="866" alt="Screenshot 2026-02-13 222600" src="https://github.com/user-attachments/assets/2f098427-13d1-4394-b83a-ec0316f4921f" />
<img width="1897" height="864" alt="Screenshot 2026-02-13 222631" src="https://github.com/user-attachments/assets/e3d0ee4e-a436-4d6d-9c25-f435ae64bad2" />
<img width="1897" height="858" alt="Screenshot 2026-02-13 222642" src="https://github.com/user-attachments/assets/10cb4f4e-6e17-47ac-80ab-c7c518c6cfb8" />

git clone https://github.com/Ayandip244/GitHub-Portfolio-Analyzer.git<br>
🚀 How to Use

Open index.html in a browser.<br>
Enter your GitHub username and click Analyze.<br>
Wait for multi-stage analysis to complete.<br>
View your overall score, metric breakdown, and line-by-line recruiter feedback.<br>
Experiment with theme options in the top-right corner for visual preference.<br>

🛠️ Tech Stack<br>
HTML / CSS / JavaScript<br>
GitHub REST API & GraphQL API<br>
AI-powered feedback generation (simulated typing for demo)<br>
Glassmorphism & animated UI effects<br>

✅ Deliverables<br>
Working Prototype – Analyzes GitHub profiles and repositories<br>
Scoring System – Metrics for documentation, code quality, consistency, and impact<br>
Actionable Feedback – Specific suggestions, not generic advice<br>
User-Friendly Interface – Clean and interactive experience<br>
Demo / Presentation Ready – Live or screen-recorded walkthrough of features<br>

📝 Recommendations for Students<br>
Improve READMEs for every project<br>
Maintain regular commit activity<br>
Add real-world impact projects<br>
Include tests, CI/CD, and demo links<br>
Diversify languages and frameworks<br>

📂 Repository Structure<br>
AI-GitHub-Portfolio-Analyzer/<br>
├── index.html          # Main HTML file<br>
├── script.js           # JavaScript for analysis and UI<br>
├── style.css           # Styles and animations<br>
├── README.md           # documentation<br>

📽️ Demo Recording<br>
https://drive.google.com/file/d/1HzSpsRPf_WlW7iOmphcUnoTytXJKNCxK/view?usp=drive_link
