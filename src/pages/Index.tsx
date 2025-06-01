import { useState } from "react";
import { ArrowRight, ChevronLeft, ExternalLink, Search, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background">
        <div className="flex h-14 items-center px-4">
          <div className="flex items-center gap-2 mr-4">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">OpenRouter</span>
          </div>
          
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search models" 
                className="pl-8 pr-8 w-full bg-muted/40" 
              />
              <div className="absolute right-2.5 top-2.5 text-xs text-muted-foreground">/</div>
            </div>
          </div>
          
          <nav className="ml-auto flex items-center gap-6">
            <a href="#" className="text-sm font-medium">Models</a>
            <a href="#" className="text-sm font-medium">Chat</a>
            <a href="#" className="text-sm font-medium">Rankings</a>
            <a href="#" className="text-sm font-medium">Docs</a>
            <Button variant="ghost" size="icon" className="rounded-full bg-purple-700 text-white">
              <span className="sr-only">User profile</span>
              <span className="h-6 w-6 flex items-center justify-center">h</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-3.5rem)]">
        <div className="flex-1 flex flex-col">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                The Unified<br />Interface For LLMs
              </h1>
              <p className="text-xl">
                Better <span className="text-blue-500">prices</span>, better <span className="text-blue-500">uptime</span>, no subscription.
              </p>
              
              <div className="relative mt-6">
                <Input 
                  placeholder="Start a message..." 
                  className="pr-12 py-6 text-base rounded-md"
                />
                <Button 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-medium">Featured Models</h2>
                <a href="#" className="text-sm text-blue-500 flex items-center gap-1">
                  View Trending <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <ModelCard 
                name="Gemini 2.5 Pro Preview"
                provider="google"
                tokens="204.5B"
                latency="2.2s"
                growth="+27.2%"
                icon="✦"
              />

              <ModelCard 
                name="GPT-4.1"
                provider="openai"
                tokens="41.4B"
                latency="820ms"
                growth="-9.44%"
                icon="◎"
                negativeGrowth
              />

              <ModelCard 
                name="Claude Sonnet 4"
                provider="anthropic"
                tokens="232.2B"
                latency="1.9s"
                growth="--"
                icon="⊙"
                isNew
              />
            </div>
          </div>

          <div className="mt-auto border-t border-border/40 py-12">
            <div className="container mx-auto grid grid-cols-4 gap-4 text-center">
              <StatCard value="7.9T" label="Monthly Tokens" />
              <StatCard value="2M" label="Global Users" />
              <StatCard value="50+" label="Active Providers" />
              <StatCard value="300+" label="Models" textColor="text-blue-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface ModelCardProps {
  name: string;
  provider: string;
  tokens: string;
  latency: string;
  growth: string;
  icon: string;
  isNew?: boolean;
  negativeGrowth?: boolean;
}

const ModelCard = ({ name, provider, tokens, latency, growth, icon, isNew, negativeGrowth }: ModelCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{name}</h3>
            {isNew && <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">New</span>}
          </div>
          <p className="text-sm text-muted-foreground">by {provider}</p>
        </div>
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100">
          <span className="text-sm">{icon}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 mt-4">
        <div className="flex flex-col">
          <span className="text-green-600 font-medium">{tokens}</span>
          <span className="text-xs text-muted-foreground">Tokens/wk</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{latency}</span>
          <span className="text-xs text-muted-foreground">Latency</span>
        </div>
        <div className="flex flex-col">
          <span className={`font-medium ${negativeGrowth ? 'text-red-500' : 'text-green-600'}`}>{growth}</span>
          <span className="text-xs text-muted-foreground">Weekly growth</span>
        </div>
      </div>
    </Card>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  textColor?: string;
}

const StatCard = ({ value, label, textColor = "text-foreground" }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className={`text-4xl font-bold ${textColor}`}>{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

export default Index;