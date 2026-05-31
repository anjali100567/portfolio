import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

// Using a placeholder GitHub username for the CSE student profile.
// Change this to your actual GitHub username!
const GITHUB_USERNAME = "anjali100567"; 

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Base skills mapping. We will increase the proficiency dynamically based on GitHub repo languages.
  const [skills, setSkills] = useState([
    { name: 'C Language', emoji: '⚙️', proficiency: 85, category: 'C' },
    { name: 'Java', emoji: '☕', proficiency: 80, category: 'Java' },
    { name: 'Python', emoji: '🐍', proficiency: 88, category: 'Python' },
    { name: 'Artificial Intelligence', emoji: '🧠', proficiency: 75, category: 'AI' },
    { name: 'Machine Learning', emoji: '📊', proficiency: 72, category: 'ML' },
    { name: 'Web Dev', emoji: '🌐', proficiency: 80, category: 'WebDev' }
  ]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        
        if (response.ok) {
          const repos = await response.json();
          
          // Map GitHub repos to our project format
          const formattedProjects = repos
            .filter(repo => !repo.fork) // Ignore forks
            .map(repo => {
              // Simple language detection for categorization
              const lang = repo.language || 'Unknown';
              let category = 'All';
              
              if (['C', 'C++'].includes(lang)) category = 'C';
              else if (lang === 'Java') category = 'Java';
              else if (lang === 'Python' || lang === 'Jupyter Notebook') category = 'Python';
              else if (['JavaScript', 'TypeScript', 'HTML', 'CSS'].includes(lang)) category = 'WebDev';

              return {
                id: repo.id,
                title: repo.name.replace(/-/g, ' '),
                description: repo.description || "A project built by Anli.",
                category: category,
                language: lang,
                html_url: repo.html_url,
                homepage: repo.homepage
              };
            });

          setProjects(formattedProjects);

          // Dynamically calculate skill boosts based on repo languages
          setSkills(prevSkills => {
            const newSkills = [...prevSkills];
            formattedProjects.forEach(proj => {
              if (proj.category === 'C') newSkills[0].proficiency = Math.min(100, newSkills[0].proficiency + 2);
              if (proj.category === 'Java') newSkills[1].proficiency = Math.min(100, newSkills[1].proficiency + 2);
              if (proj.category === 'Python') newSkills[2].proficiency = Math.min(100, newSkills[2].proficiency + 2);
              if (proj.category === 'WebDev') newSkills[5].proficiency = Math.min(100, newSkills[5].proficiency + 2);
              
              // Guess AI/ML based on title/description
              if (proj.title.toLowerCase().includes('ml') || proj.title.toLowerCase().includes('ai') || proj.title.toLowerCase().includes('model')) {
                newSkills[3].proficiency = Math.min(100, newSkills[3].proficiency + 3);
                newSkills[4].proficiency = Math.min(100, newSkills[4].proficiency + 3);
              }
            });
            return newSkills;
          });
        }
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, skills, loading, GITHUB_USERNAME }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
