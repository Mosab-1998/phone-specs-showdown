
import React from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrendingPhonesWidget: React.FC = () => {
  const trendingPhones = [
    {
      name: "iPhone 15 Pro",
      brand: "Apple",
      rating: 4.8,
      trend: "+15%",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    },
    {
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      rating: 4.7,
      trend: "+12%",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop"
    },
    {
      name: "Pixel 8 Pro",
      brand: "Google",
      rating: 4.6,
      trend: "+18%",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=100&h=100&fit=crop"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-500/30">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <TrendingUp className="h-6 w-6 text-purple-400" />
          <span>Trending This Week</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingPhones.map((phone, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
            <img
              src={phone.image}
              alt={phone.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-white text-sm">{phone.name}</h4>
              <p className="text-purple-300 text-xs">{phone.brand}</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-yellow-400 text-xs">{phone.rating}</span>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
              {phone.trend}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingPhonesWidget;
