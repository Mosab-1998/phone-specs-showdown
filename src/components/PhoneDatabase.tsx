
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Brand</h3>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={selectedBrand === brand ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </Button>
          ))}
        </div>
      </div>

      {/* Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhones.map((phone) => (
          <Card key={phone.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-32 h-32 object-cover mx-auto rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{phone.name}</h3>
                <p className="text-gray-600 mb-2">{phone.brand}</p>
                <p className="text-2xl font-bold text-indigo-600">${phone.price.toLocaleString()}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Display:</span>
                  <span className="font-medium">{phone.specifications.display.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{phone.specifications.memory.storage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Camera:</span>
                  <span className="font-medium">{phone.specifications.camera.rear}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery:</span>
                  <span className="font-medium">{phone.specifications.battery.capacity}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {phone.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => onPhoneSelect(phone)}
                disabled={isPhoneSelected(phone.id) || !canSelectMore}
                className="w-full"
                variant={isPhoneSelected(phone.id) ? "secondary" : "default"}
              >
                {isPhoneSelected(phone.id) ? 'Selected' : canSelectMore ? 'Select for Comparison' : 'Max 2 Phones'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPhones.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No phones found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PhoneDatabase;
