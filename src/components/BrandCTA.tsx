import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Shield } from "lucide-react";

const BrandCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white">For Brands & Businesses</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Brand from Counterfeits
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Register your brand and gain access to advanced tracking, real-time fake product alerts, 
            and comprehensive analytics to safeguard your reputation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
              <p className="text-white/80 text-sm">Track counterfeit reports as they happen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h3>
              <p className="text-white/80 text-sm">Detailed insights on fake product trends</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Building2 className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Brand Verification</h3>
              <p className="text-white/80 text-sm">Official verification badge for customers</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow"
            >
              Register Your Brand
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCTA;
