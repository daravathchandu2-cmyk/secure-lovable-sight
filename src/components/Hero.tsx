import { Upload, Shield, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">AI-Powered Authenticity Verification</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Detect Fake Products<br />
              <span className="text-secondary">in Seconds with AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Upload an image or scan a barcode to instantly verify product authenticity. 
              Protect yourself and your customers from counterfeits.
            </p>
          </div>

          {/* Upload Area */}
          <div className="max-w-2xl mx-auto animate-slide-up">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative bg-white/10 backdrop-blur-md rounded-2xl p-12 
                border-2 border-dashed transition-all duration-300
                ${isDragging 
                  ? 'border-secondary bg-white/20 scale-105' 
                  : 'border-white/30 hover:border-white/50'
                }
              `}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                  <Upload className="w-10 h-10 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Upload Product Image
                </h3>
                <p className="text-white/80 mb-8">
                  Drag and drop or click to upload an image or scan a barcode
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Choose Image
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                  >
                    <Scan className="mr-2 h-5 w-5" />
                    Scan Barcode
                  </Button>
                </div>

                <p className="text-white/60 text-sm mt-6">
                  Supports JPG, PNG, WEBP • Maximum 10MB
                </p>
              </div>

              {/* Scanning animation overlay (would appear when scanning) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-scan" />
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 text-center">
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-white mb-1">99.8%</div>
                <div className="text-white/70 text-sm">Accuracy Rate</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-white mb-1">2M+</div>
                <div className="text-white/70 text-sm">Products Verified</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-white mb-1">&lt;3s</div>
                <div className="text-white/70 text-sm">Average Check Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
