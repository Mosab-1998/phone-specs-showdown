
import React, { useState } from 'react';
import { Search, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PhoneDatabase from '@/components/PhoneDatabase';
import PhoneComparison from '@/components/PhoneComparison';
import { Phone } from '@/types/phone';

const Index = () => {
  const [selectedPhones, setSelectedPhones] = useState<Phone[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  const handlePhoneSelect = (phone: Phone) => {
    if (selectedPhones.length < 2 && !selectedPhones.find(p => p.id === phone.id)) {
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  const handleRemovePhone = (phoneId: string) => {
    setSelectedPhones(selectedPhones.filter(p => p.id !== phoneId));
  };

  const handleCompare = () => {
    if (selectedPhones.length === 2) {
      setShowComparison(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">PhoneCompare Pro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search phones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Phone
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare specifications, features, and prices of the latest smartphones. 
            Make informed decisions with detailed side-by-side comparisons.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">500+ Phones</h3>
              <p className="text-gray-600 text-sm">Latest models from all major brands</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Specs</h3>
              <p className="text-gray-600 text-sm">Complete technical specifications</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Side-by-Side</h3>
              <p className="text-gray-600 text-sm">Easy comparison interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Phones */}
      {selectedPhones.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Selected Phones ({selectedPhones.length}/2)</span>
                  {selectedPhones.length === 2 && (
                    <Button onClick={handleCompare} className="bg-indigo-600 hover:bg-indigo-700">
                      Compare Now
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPhones.map((phone) => (
                    <div key={phone.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{phone.name}</h3>
                        <p className="text-gray-600">{phone.brand}</p>
                        <p className="text-indigo-600 font-semibold">${phone.price}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemovePhone(phone.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Phone Database or Comparison */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {showComparison && selectedPhones.length === 2 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Phone Comparison</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowComparison(false)}
                >
                  Back to Selection
                </Button>
              </div>
              <PhoneComparison phones={selectedPhones} />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Phones to Compare</h2>
              <PhoneDatabase 
                searchTerm={searchTerm}
                onPhoneSelect={handlePhoneSelect}
                selectedPhones={selectedPhones}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
