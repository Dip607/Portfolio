import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';
import RippleButton from '@/components/RippleButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_USERNAME = 'Dip607';

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter out forked repos and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); // Show top 6 repos
        
        setRepos(filteredRepos);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Failed to load projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Live projects from my GitHub profile (@{GITHUB_USERNAME})
            </p>
          </div>
        </ScrollReveal>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading projects from GitHub...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <ScrollReveal 
              key={repo.id} 
              animation="fade-up" 
              delay={index * 0.1}
            >
              <Card className="overflow-hidden card-hover border-border group h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 flex-wrap">
                    <span className="break-all">{repo.name}</span>
                    {repo.language && (
                      <Badge variant="outline" className="text-xs font-normal">
                        {repo.language}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base mt-3 min-h-[3rem]">
                    {repo.description || 'No description available'}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 5).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={16} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  <TooltipProvider>
                    <div className="flex gap-3">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <RippleButton
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(repo.html_url, '_blank')}
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </RippleButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View on GitHub</p>
                        </TooltipContent>
                      </Tooltip>

                      {repo.homepage && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <RippleButton
                              size="sm"
                              className="flex-1 bg-primary hover:bg-primary/90"
                              onClick={() => window.open(repo.homepage!, '_blank')}
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live
                            </RippleButton>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View live demo</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {!loading && !error && (
          <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="text-center mt-12">
              <RippleButton
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}?tab=repositories`, '_blank')}
              >
                <Github size={20} className="mr-2" />
                View All Projects on GitHub
              </RippleButton>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
