
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Camera, Battery } from 'lucide-react';
import { Phone } from '@/types/phone';
import { phoneData } from '@/data/phoneData';

interface PhoneDatabaseProps {
  searchTerm: string;
  onPhoneSelect: (phone: Phone) => void;
  selectedPhones: Phone[];
}

const PhoneDatabase: React.FC<PhoneDatabaseProps> = ({
  searchTerm,
  onPhoneSelect,
  selectedPhones
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  const brands = ['All', ...Array.from(new Set(phoneData.map(phone => phone.brand)))];

  const filteredPhones = phoneData.filter(phone => {
    const matchesSearch = phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || phone.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const isPhoneSelected = (phoneId: string) => {
    return selectedPhones.some(p => p.id === phoneId);
  };

  const canSelectMore = selectedPhones.length < 2;

  return (
    <div>
      {/* Brand Filter */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <Zap className="h-6 w-6 text-purple-400" />
          <span>Filter by Brand</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={selectedBrand === brand ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedBrand(brand)}
              className={
                selectedBrand === brand
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
              }
            >
              {brand}
            </Button>
          ))}
        </div>
      </div>

      {/* Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhones.map((phone) => (
          <Card key={phone.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 hover:border-purple-500/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="relative mb-4">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-32 h-32 object-cover mx-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-white mb-1">{phone.name}</h3>
                <p className="text-purple-300 mb-2">{phone.brand}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ${phone.price.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-2">
                  <span className="text-gray-300 flex items-center space-x-1">
                    <span>📱</span>
                    <span>Display:</span>
                  </span>
                  <span className="font-medium text-white">{phone.specifications.display.size}</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-2">
                  <span className="text-gray-300 flex items-center space-x-1">
                    <span>💾</span>
                    <span>Storage:</span>
                  </span>
                  <span className="font-medium text-white">{phone.specifications.memory.storage}</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-2">
                  <span className="text-gray-300 flex items-center space-x-1">
                    <Camera className="h-3 w-3" />
                    <span>Camera:</span>
                  </span>
                  <span className="font-medium text-white">{phone.specifications.camera.rear}</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-2">
                  <span className="text-gray-300 flex items-center space-x-1">
                    <Battery className="h-3 w-3" />
                    <span>Battery:</span>
                  </span>
                  <span className="font-medium text-white">{phone.specifications.battery.capacity}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {phone.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => onPhoneSelect(phone)}
                disabled={isPhoneSelected(phone.id) || !canSelectMore}
                className={
                  isPhoneSelected(phone.id)
                    ? "w-full bg-green-500/20 text-green-400 border-green-500/30"
                    : canSelectMore
                    ? "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    : "w-full bg-gray-500/20 text-gray-400"
                }
                variant={isPhoneSelected(phone.id) ? "secondary" : "default"}
              >
                {isPhoneSelected(phone.id) ? (
                  <>
                    <Star className="h-4 w-4 mr-2" />
                    Selected
                  </>
                ) : canSelectMore ? (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Select for Comparison
                  </>
                ) : (
                  'Max 2 Phones'
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPhones.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <Zap className="h-16 w-16 text-purple-400 mx-auto opacity-50" />
          </div>
          <p className="text-purple-300 text-lg">No phones found matching your criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </div>
  );
};

export default PhoneDatabase;
