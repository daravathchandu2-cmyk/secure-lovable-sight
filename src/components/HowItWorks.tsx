import { Upload, Brain, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload or Scan",
    description: "Take a photo of your product or scan its barcode using your device camera.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI algorithms analyze multiple factors including packaging, logos, and manufacturing details.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Get Results",
    description: "Receive an instant authenticity score with detailed insights and verification certificate.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to verify product authenticity with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-border">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-xl mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
