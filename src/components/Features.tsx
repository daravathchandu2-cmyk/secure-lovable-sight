import { Shield, Users, Code, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "AI Fake Product Detector",
    description: "Advanced machine learning algorithms analyze images and barcodes to detect counterfeits with 99.8% accuracy.",
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    icon: BarChart3,
    title: "Authenticity Score",
    description: "Get detailed confidence levels and visual reports showing exactly why a product is genuine or suspicious.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Join thousands of users sharing experiences and reporting fakes to help build a safer marketplace.",
    gradient: "from-accent/20 to-secondary/20",
  },
  {
    icon: Code,
    title: "API Access",
    description: "Integrate our detection system into your platform with our developer-friendly REST API and comprehensive documentation.",
    gradient: "from-primary/20 to-secondary/20",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect yourself and your customers from counterfeit products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
