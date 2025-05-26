
import React from 'react';
import { Camera, Battery, Cpu, Shield, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureSpotlight: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: "Camera Analysis",
      description: "AI-powered camera comparison with real-world photo samples",
      color: "purple"
    },
    {
      icon: Battery,
      title: "Battery Life",
      description: "Detailed battery performance metrics and charging speeds",
      color: "green"
    },
    {
      icon: Cpu,
      title: "Performance",
      description: "Benchmark scores and real-world performance testing",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security features and privacy protection analysis",
      color: "pink"
    }
  ];

  const colorClasses = {
    purple: "text-purple-400",
    green: "text-green-400",
    blue: "text-blue-400",
    pink: "text-pink-400"
  };

  return (
    <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border-blue-500/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Star className="h-6 w-6 text-blue-400" />
          <span>Why Choose Mosab Tech?</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 group">
            <feature.icon className={`h-8 w-8 ${colorClasses[feature.color]} mb-3 group-hover:scale-110 transition-transform duration-200`} />
            <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FeatureSpotlight;
