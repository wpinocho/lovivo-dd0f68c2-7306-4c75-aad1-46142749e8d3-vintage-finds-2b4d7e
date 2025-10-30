import { Leaf, Recycle, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const CareGuideSection = () => {
  const careGuides = [
    {
      icon: Heart,
      title: 'Love Your Vintage',
      description: 'Each piece has a story. Treat vintage items with care to preserve their history and character for years to come.',
    },
    {
      icon: Sparkles,
      title: 'Gentle Cleaning',
      description: 'Hand wash or dry clean vintage pieces. Avoid harsh detergents. Air dry away from direct sunlight to prevent fading.',
    },
    {
      icon: Recycle,
      title: 'Repair & Restore',
      description: 'Small repairs extend the life of vintage clothing. Learn basic mending or find a trusted tailor for alterations.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Choice',
      description: 'Buying secondhand reduces fashion waste by 80%. Every vintage purchase is a vote for sustainable fashion.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vintage Care Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sustainable fashion starts with proper care. Learn how to preserve your vintage treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careGuides.map((guide, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <guide.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-full">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Join 10,000+ sustainable fashion lovers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};