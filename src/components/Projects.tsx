import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import ScrollReveal from './ScrollReveal';
import RippleButton from './RippleButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

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

        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

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

  const technologies = ['all', ...new Set(repos.map(repo => repo.language).filter(Boolean))];

  const filteredRepos = selectedTech === 'all'
    ? repos
    : repos.filter(repo => repo.language === selectedTech);

  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Live projects from my GitHub profile (@{GITHUB_USERNAME})
            </p>
          </div>
        </ScrollReveal>

        {!loading && !error && repos.length > 0 && (
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="flex flex-col items-center gap-4 mb-12">
              <p className="text-sm text-slate-600 font-medium">Filter by Technology</p>
              <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedTech === tech
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-white border border-blue-200 text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {tech === 'all' ? 'All Projects' : tech}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-600">Loading projects from GitHub...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No projects found for this technology</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo, index) => (
            <ScrollReveal
              key={repo.id}
              animation="slide-up"
              delay={index * 0.1}
            >
              <Card className="relative group bg-white rounded-2xl border border-blue-100 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/70 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2 flex-wrap text-slate-800">
                    <span className="break-all">{repo.name}</span>
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base mt-3 min-h-[3rem] leading-relaxed text-slate-600">
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

                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-cyan-500 fill-cyan-500" />
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
                        <DialogContent className="bg-white rounded-xl border border-blue-100 max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                              {repo.name}
                            </DialogTitle>
                            <DialogDescription className="text-base leading-relaxed pt-2 text-slate-600">
                              {repo.description || 'No description available'}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6 mt-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm text-slate-800">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {repo.language && (
                                  <Badge variant="secondary">{repo.language}</Badge>
                                )}
                                {repo.topics.map((topic, i) => (
                                  <Badge key={i} variant="outline">{topic}</Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm text-slate-800">Project Stats</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
                                  <div className="flex items-center gap-2 text-cyan-600">
                                    <Star size={18} className="fill-cyan-600" />
                                    <span className="font-semibold">{repo.stargazers_count}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 mt-1">Stars</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
                                  <div className="flex items-center gap-2 text-blue-600">
                                    <GitFork size={18} />
                                    <span className="font-semibold">{repo.forks_count}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 mt-1">Forks</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-sm text-slate-800">Last Updated</h4>
                              <p className="text-slate-600">
                                {new Date(repo.updated_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>

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
