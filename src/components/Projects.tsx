import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ScrollReveal from '@/components/ScrollReveal';
import RippleButton from '@/components/RippleButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  const [selectedTech, setSelectedTech] = useState<string>('all');

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

  // Get unique technologies from repos
  const technologies = ['all', ...new Set(repos.map(repo => repo.language).filter(Boolean))];

  // Filter repos based on selected technology
  const filteredRepos = selectedTech === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === selectedTech);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-blackß">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Live projects from my GitHub profile (@{GITHUB_USERNAME})
            </p>
          </div>
        </ScrollReveal>

        {/* Technology Filter */}
        {!loading && !error && repos.length > 0 && (
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="flex flex-col items-center gap-4 mb-12">
              <p className="text-sm text-muted-foreground font-medium">Filter by Technology</p>
              <ToggleGroup 
                type="single" 
                value={selectedTech} 
                onValueChange={(value) => value && setSelectedTech(value)}
                className="flex-wrap justify-center gap-2"
              >
                {technologies.map((tech) => (
                  <ToggleGroupItem 
                    key={tech} 
                    value={tech}
                    className="glass-card px-4 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover-lift"
                  >
                    {tech === 'all' ? 'All Projects' : tech}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </ScrollReveal>
        )}

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

        {!loading && !error && filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this technology</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo, index) => (
            <ScrollReveal 
              key={repo.id} 
              animation="fade-up" 
              delay={index * 0.1}
            >
              <Card className="glass-card group h-full flex flex-col hover-lift overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-display flex items-center gap-2 flex-wrap">
                    <span className="break-all">{repo.name}</span>
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base mt-3 min-h-[3rem] leading-relaxed">
                    {repo.description || 'No description available'}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 5).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-accent fill-accent" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={16} />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="ml-auto text-xs">
                      {new Date(repo.updated_at).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>

                  <TooltipProvider>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <RippleButton
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Info size={16} className="mr-2" />
                            Details
                          </RippleButton>
                        </DialogTrigger>
                        <DialogContent className="glass-card border-border max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-display text-gradient">
                              {repo.name}
                            </DialogTitle>
                            <DialogDescription className="text-base leading-relaxed pt-2">
                              {repo.description || 'No description available'}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6 mt-4">
                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {repo.language && (
                                  <Badge variant="secondary">{repo.language}</Badge>
                                )}
                                {repo.topics.map((topic, i) => (
                                  <Badge key={i} variant="outline">{topic}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Stats */}
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Project Stats</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="glass-card p-3 rounded-lg">
                                  <div className="flex items-center gap-2 text-accent">
                                    <Star size={18} className="fill-accent" />
                                    <span className="font-semibold">{repo.stargazers_count}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">Stars</p>
                                </div>
                                <div className="glass-card p-3 rounded-lg">
                                  <div className="flex items-center gap-2">
                                    <GitFork size={18} />
                                    <span className="font-semibold">{repo.forks_count}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">Forks</p>
                                </div>
                              </div>
                            </div>

                            {/* Last Updated */}
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Last Updated</h4>
                              <p className="text-muted-foreground">
                                {new Date(repo.updated_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-2">
                              <RippleButton
                                variant="outline"
                                className="flex-1"
                                onClick={() => window.open(repo.html_url, '_blank')}
                              >
                                <Github size={18} className="mr-2" />
                                View Code
                              </RippleButton>
                              {repo.homepage && (
                                <RippleButton
                                  className="flex-1"
                                  onClick={() => window.open(repo.homepage!, '_blank')}
                                >
                                  <ExternalLink size={18} className="mr-2" />
                                  Live Demo
                                </RippleButton>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

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
                              className="flex-1"
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
