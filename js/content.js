export const colorMap = {
    'about':      { hex: '#3b82f6' },
    'skills':     { hex: '#ea2020ff' },
    'experience': { hex: '#f66600ff' },
    'education':  { hex: '#1dc02bff' },
    'assets':     { hex: '#ecc710ff' },
    'contact':    { hex: '#ed2388ff' }
};

export const allContent = {
    'fr': {
        menu: {
            'about': '[ À PROPOS ]',
            'skills': '[ SKILLS ]',
            'experience': '[ EXPÉRIENCE ]',
            'education': '[ FORMATION ]',
            'assets': '[ PROJETS ]',
            'contact': '[ CONTACT ]'
        },
        cvData: {
            'about': {
                title: "Exécution: [about_me.exe]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Maxime Boudier</h3>
<p class="mb-4">Étudiant Ingénieur en IA et Big Data</p>
<p class="mb-4">> Actuellement en alternance chez <strong class="text-white">EssilorLuxottica</strong> (Créteil, France).</p>
<p class="mb-4">> En recherche active d'un <strong class="text-white">stage à l'international</strong> pour l'été 2026.</p>
<p>> Passionné par l'informatique depuis mon plus jeune âge, toujours à l'affût des nouvelles technologies.</p>
<button id="gemini-button" class="gemini-button">Interroger l'IA</button>
`
            },
            'skills': {
                title: "Lecture: [skills.dat]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Compétences Techniques</h3>
<h4 class="font-bold dynamic-accent-text mt-4 text-xl">Analyse de Données</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Dashbording (Dash)</li>
    <li>Traitement de données (Azure Databricks)</li>
    <li>Bases de données (SQL, Azure Datalakes)</li>
</ul>
<h4 class="font-bold dynamic-accent-text mt-6 text-xl">Langages de Développement</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Python (Avancé)</li>
    <li>Java (Avancé)</li>
    <li>C#, VBA, JavaScript (frameworks)</li>
</ul>
<h4 class="font-bold dynamic-accent-text mt-6 text-xl">Méthodes</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Méthodes Agiles</li>
    <li>Gestion de Projet</li>
</ul>
<h3 class="text-2xl font-bold text-white mt-8 mb-4">Compétences Humaines</h3>
<ul class="list-none space-y-3">
    <li><strong class="dynamic-accent-text">> Travail Autonome :</strong> Habitué à travailler en autonomie, à faire des recherches et à proposer des idées.</li>
    <li><strong class="dynamic-accent-text">> Travail d'Équipe :</strong> Expérience en équipe, participation aux réunions et débats.</li>
    <li><strong class="dynamic-accent-text">> Veille Technologique :</strong> Suivi constant de l'actualité informatique.</li>
</ul>
`
            },
            'experience': {
                title: "Chargement: [experience.log]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Expérience Professionnelle</h3>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Data Scientist (Alternance)</h4>
  <p class="text-gray-400 font-medium">EssilorLuxottica @ Créteil, France | Sept. 2024 - Sept. 2027</p>
  <p class="mt-2">Mission : Dashbording et Analyse de Données pour améliorer la qualité et la fiabilité. Analyse de données réelles.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Intégrateur 4.0 (Alternance)</h4>
  <p class="text-gray-400 font-medium">Pinette PEI @ Chalon sur Saône, France | Sept. 2022 - Août 2024</p>
  <p class="mt-2">Mission : Recherche et Développement de solutions 4.0 pour l'industrie (Application interne, VR/AR, Supervision Robot, Recherche pour intégration IA...).</p>
</div>
`
            },
            'education': {
                title: "Analyse: [education.db]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Formation & Diplômes</h3>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Diplôme d'Ingénieur IA / Big Data</h4>
  <p class="text-gray-400 font-medium">CNAM @ Chalon-sur-Saône | Sept. 2024 - Août 2027</p>
  <p class="mt-2">Modules : Algorithmique, Statistiques, Probabilités, Informatique, Réalité Virtuelle, Analyse de Données, Régression.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Licence Informatique</h4>
  <p class="text-gray-400 font-medium">CNAM @ Chalon-sur-Saône | Sept. 2021 - Août 2024</p>
  <p class="mt-2">Modules : Développement (Java), Bases de Données (SQL), Réseaux, HTML/CSS/JS/PHP, Gestion de Projet.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Baccalauréat Scientifique (Option S.I.)</h4>
  <p class="text-gray-400 font-medium">Lycée Henri Vincenot @ Louhans | Sept. 2017 - Juil. 2020</p>
</div>
`
            },
            'assets': {
                title: "Compilation: [assets.bin]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Projets & Récompenses</h3>
<div class="content-block">
    <h4 class="text-xl font-bold text-white">Entrep' (Édition 2023/2024)</h4>
    <p class="font-medium dynamic-accent-text">>> Prix "Coup de Cœur du Jury"</p>
    <p class="mt-2">Apprentissage de la création d'entreprise (Business Plan, Analyse de Marché, Développement Produit, etc.)</p>
</div>
<div class="content-block">
    <h4 class="text-xl font-bold text-white">Défi Chal'Enge (8ème et 10ème édition)</h4>
    <p class="font-medium dynamic-accent-text">>> Prix de l'Innovation (x2)</p>
    <p class="mt-2">Participation au challenge entrepreneurial.</p>
</div>
`
            },
            'contact': {
                title: "Connexion: [contact.net]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Me Contacter</h3>
<ul class="list-none space-y-3 text-lg">
    <li><strong class="text-gray-400">Email :</strong> <a href="mailto:boudierm@essilor.fr">boudierm@essilor.fr</a></li>
    <li><strong class="text-gray-400">LinkedIn :</strong> <a href="https://www.linkedin.com/in/boudier-maxime" target="_blank">linkedin.com/in/boudier-maxime</a></li>
    <li><strong class="text-gray-400">Téléphone :</strong> +33 6 21 63 65 49</li>
    <li><strong class="text-gray-400">Localisation :</strong> Créteil (94000), France</li>
</ul>
`
            }
        },
        llmContext: `
Résumé du CV de Maxime Boudier, Étudiant Ingénieur en IA et Big Data:
À Propos:
- En alternance chez EssilorLuxottica à Créteil.
- Recherche un stage à l'international pour l'été 2026.
- Passionné d'informatique et de nouvelles technologies.
Compétences Techniques:
- Analyse de Données: Dashbording (Dash), Traitement de données (Azure Databricks), Bases de données (SQL, Azure Datalakes).
- Langages: Python (Avancé), Java (Avancé), C#, VBA, JavaScript (frameworks).
- Méthodes: Agiles, Gestion de projet.
Compétences Humaines:
- Travail autonome, recherche et proposition d'idées.
- Travail en équipe (projets scolaires, Défi Chal'Enge, Entrep').
- Veille technologique.
Expérience Professionnelle:
- Data Scientist (Alternance) @ EssilorLuxottica (2024-2027): Dashbording, Analyse de Données pour qualité et fiabilité.
- Intégrateur 4.0 (Alternance) @ Pinette PEI (2022-2024): R&D en solutions 4.0 pour l'industrie (App interne, VR/AR, Supervision Robot, intégration IA).
Formation:
- Diplôme d'Ingénieur IA / Big Data @ CNAM (2024-2027): Algorithmique, Statistiques, Probabilités, VR, Analyse de Données.
- Licence Informatique @ CNAM (2021-2024): Développement (Java), BDD (SQL), Réseaux, Web (HTML/CSS/JS/PHP).
- Bac S-SI @ Lycée Henri Vincenot (2017-2020).
Projets & Récompenses:
- Entrep' (2023-2024): Prix "Coup de Cœur du Jury". Apprentissage de la création d'entreprise.
- Défi Chal'Enge (8e & 10e éd.): Prix de l'Innovation (x2).
`,
        systemPrompt: "Tu es un assistant IA pour recruteur. Ton unique but est de répondre aux questions sur le candidat Maxime Boudier en te basant *strictement* et *uniquement* sur le résumé du CV fourni dans le contexte. N'invente *jamais* d'information. Si l'information n'est pas dans le CV, réponds poliment que l'information n'est pas disponible. Réponds toujours en français.",
        chatGreeting: "Bonjour ! Je suis un assistant IA. Posez-moi vos questions sur le CV de Maxime.",
        chatPlaceholder: "Posez une question...",
        chatSend: "ENVOYER",
        chatError: "Désolé, une erreur est survenue. Veuillez réessayer."
    },
    'en': {
        menu: {
            'about': '[ ABOUT ]',
            'skills': '[ SKILLS ]',
            'experience': '[ EXPERIENCE ]',
            'education': '[ EDUCATION ]',
            'assets': '[ PROJECTS ]',
            'contact': '[ CONTACT ]'
        },
        cvData: {
            'about': {
                title: "Executing: [about_me.exe]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Maxime Boudier</h3>
<p class="mb-4">AI and Big Data Engineering Student</p>
<p class="mb-4">> Currently in a work-study program at <strong class="text-white">EssilorLuxottica</strong> (Créteil, France).</p>
<p class="mb-4">> Actively seeking an <strong class="text-white">international internship</strong> for summer 2026.</p>
<p>> Passionate about computer science since a young age, always keeping up with new technologies.</p>
<button id="gemini-button" class="gemini-button">Ask AI</button>
`
            },
            'skills': {
                title: "Reading: [skills.dat]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Technical Skills</h3>
<h4 class="font-bold dynamic-accent-text mt-4 text-xl">Data Analysis</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Dashboarding (Dash)</li>
    <li>Data processing (Azure Databricks)</li>
    <li>Databases (SQL, Azure Datalakes)</li>
</ul>
<h4 class="font-bold dynamic-accent-text mt-6 text-xl">Development Languages</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Python (Advanced)</li>
    <li>Java (Advanced)</li>
    <li>C#, VBA, JavaScript (frameworks)</li>
</ul>
<h4 class="font-bold dynamic-accent-text mt-6 text-xl">Methods</h4>
<ul class="list-disc list-inside ml-4 mt-2 space-y-1">
    <li>Agile Methods</li>
    <li>Project Management</li>
</ul>
<h3 class="text-2xl font-bold text-white mt-8 mb-4">Soft Skills</h3>
<ul class="list-none space-y-3">
    <li><strong class="dynamic-accent-text">> Autonomous Work:</strong> Used to working autonomously, conducting research, and proposing ideas.</li>
    <li><strong class="dynamic-accent-text">> Teamwork:</strong> Experience in team settings, participating in meetings and discussions.</li>
    <li><strong class="dynamic-accent-text">> Technology Watch:</strong> Constantly monitoring developments in computer science.</li>
</ul>
`
            },
            'experience': {
                title: "Loading: [experience.log]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Work Experience</h3>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Work-study Data Scientist</h4>
  <p class="text-gray-400 font-medium">EssilorLuxottica @ Créteil, France | Sept. 2024 - Sept. 2027</p>
  <p class="mt-2">Mission: Dashboarding and Data Analysis to improve quality and reliability. Analysis of real-world data.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Work-study 4.0 Integrator</h4>
  <p class="text-gray-400 font-medium">Pinette PEI @ Chalon sur Saône, France | Sept. 2022 - Aug. 2024</p>
  <p class="mt-2">Mission: Research and Development of 4.0 solutions for industry (Internal App, VR/AR, Robot Supervision, AI integration research...).</p>
</div>
`
            },
            'education': {
                title: "Analyzing: [education.db]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Education & Degrees</h3>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">AI / Big Data Engineer Degree</h4>
  <p class="text-gray-400 font-medium">CNAM @ Chalon-sur-Saone | Sept. 2024 - Aug. 2027</p>
  <p class="mt-2">Modules: Algorithms, Statistics, Probability, Computer Science, Virtual Reality, Data Analysis, Regression.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Bachelor's in Computer Science</h4>
  <p class="text-gray-400 font-medium">CNAM @ Chalon-sur-Saone | Sept. 2021 - Aug. 2024</p>
  <p class="mt-2">Modules: Development (Java), Databases (SQL), Networks, HTML/CSS/JS/PHP, Project Management.</p>
</div>
<div class="content-block">
  <h4 class="text-xl font-bold text-white">Scientific High School Diploma (Engineering Sciences)</h4>
  <p class="text-gray-400 font-medium">Henri Vincenot High School @ Louhans | Sept. 2017 - July 2020</p>
</div>
`
            },
            'assets': {
                title: "Compiling: [assets.bin]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Projects & Awards</h3>
<div class="content-block">
    <h4 class="text-xl font-bold text-white">Entrep' (2023/2024 Edition)</h4>
    <p class="font-medium dynamic-accent-text">>> Jury's Favorite Award</p>
    <p class="mt-2">Program to learn how to create a company (Business Plan, Market Analysis, Product Development, etc.)</p>
</div>
<div class="content-block">
    <h4 class="text-xl font-bold text-white">Défi Chal'Enge (8th and 10th edition)</h4>
    <p class="font-medium dynamic-accent-text">>> Innovation Prize (x2)</p>
    <p class="mt-2">Participation in the entrepreneurial challenge.</p>
</div>
`
            },
            'contact': {
                title: "Connecting: [contact.net]",
                content: `
<h3 class="text-2xl font-bold text-white mb-4">Contact Me</h3>
<ul class="list-none space-y-3 text-lg">
    <li><strong class="text-gray-400">Email:</strong> <a href="mailto:boudierm@essilor.fr">boudierm@essilor.fr</a></li>
    <li><strong class="text-gray-400">LinkedIn:</strong> <a href="https://www.linkedin.com/in/boudier-maxime" target="_blank">linkedin.com/in/boudier-maxime</a></li>
    <li><strong class="text-gray-400">Phone:</strong> +33 6 21 63 65 49</li>
    <li><strong class="text-gray-400">Location:</strong> Créteil (94000), France</li>
</ul>
`
            }
        },
        llmContext: `
Resume of Maxime Boudier, AI and Big Data Engineering Student:
About:
- Work-study program at EssilorLuxottica in Créteil.
- Seeking an international internship for summer 2026.
- Passionate about computer science and new technologies.
Technical Skills:
- Data Analysis: Dashboarding (Dash), Data processing (Azure Databricks), Databases (SQL, Azure Datalakes).
- Languages: Python (Advanced), Java (Advanced), C#, VBA, JavaScript (frameworks).
- Methods: Agile, Project Management.
Soft Skills:
- Autonomous work, research, and proposing ideas.
- Teamwork (school projects, Défi Chal'Enge, Entrep').
- Technology watch.
Work Experience:
- Data Scientist (Work-study) @ EssilorLuxottica (2024-2027): Dashboarding, Data Analysis for quality and reliability.
- 4.0 Integrator (Work-study) @ Pinette PEI (2022-2024): R&D in 4.0 solutions for industry (Internal App, VR/AR, Robot Supervision, AI integration).
Education:
- AI / Big Data Engineer Degree @ CNAM (2024-2027): Algorithms, Statistics, Probability, VR, Data Analysis.
- Bachelor's in Computer Science @ CNAM (2021-2024): Development (Java), DB (SQL), Networks, Web (HTML/CSS/JS/PHP).
- Scientific High School Diploma @ Henri Vincenot High School (2017-2020).
Projects & Awards:
- Entrep' (2023-2024): "Jury's Favorite Award". Learning business creation.
- Défi Chal'Enge (8th & 10th ed.): Innovation Prize (x2).
`,
        systemPrompt: "You are an AI assistant for recruiters. Your sole purpose is to answer questions about the candidate, Maxime Boudier, based *strictly* and *only* on the provided CV summary context. Do *not* invent information. If the information is not in the CV, politely state that the information is not available. Always answer in English.",
        chatGreeting: "Hello! I am an AI assistant. You can ask me questions about Maxime's resume.",
        chatPlaceholder: "Ask a question...",
        chatSend: "SEND",
        chatError: "Sorry, an error occurred. Please try again."
    }
};
