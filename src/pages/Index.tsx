
import React, { useState, useRef, useEffect } from 'react';
import { Search, Smartphone, Zap, Shield, Camera, Battery, Cpu, Star, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PhoneDatabase from '@/components/PhoneDatabase';
import PhoneComparison from '@/components/PhoneComparison';
import StatsWidget from '@/components/StatsWidget';
import TrendingPhonesWidget from '@/components/TrendingPhonesWidget';
import FeatureSpotlight from '@/components/FeatureSpotlight';
import SearchSuggestions from '@/components/SearchSuggestions';
import { Phone } from '@/types/phone';
import { phoneData } from '@/data/phoneData';

const Index = () => {
  const [selectedPhones, setSelectedPhones] = useState<Phone[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.trim().length > 0);
  };

  const handleSuggestionClick = (phone: Phone) => {
    setSearchTerm(phone.name);
    setShowSuggestions(false);
    // Scroll to phone database section
    const phoneSection = document.getElementById('phone-database');
    if (phoneSection) {
      phoneSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Smartphone className="h-10 w-10 text-purple-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mosab Tech
                </h1>
                <p className="text-purple-300 text-sm">Smart Phone Comparisons</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={searchContainerRef}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search phones..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(searchTerm.trim().length > 0)}
                  className="pl-10 w-64 bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                />
                <SearchSuggestions
                  phones={phoneData}
                  searchTerm={searchTerm}
                  onPhoneClick={handleSuggestionClick}
                  isVisible={showSuggestions}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Cool Widgets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Smartphone
              </span>
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Compare specifications, features, and prices of the latest smartphones with our advanced comparison engine.
            </p>
          </div>

          {/* Stats Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsWidget 
              icon={Smartphone} 
              value="20+" 
              label="Phones in Database" 
              color="purple" 
            />
            <StatsWidget 
              icon={Zap} 
              value="10+" 
              label="Brands Covered" 
              color="pink" 
            />
            <StatsWidget 
              icon={Star} 
              value="99%" 
              label="Accuracy Rate" 
              color="blue" 
            />
            <StatsWidget 
              icon={TrendingUp} 
              value="1M+" 
              label="Comparisons Made" 
              color="green" 
            />
          </div>

          {/* Feature Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <FeatureSpotlight />
            <TrendingPhonesWidget />
          </div>
        </div>
      </section>

      {/* Selected Phones */}
      {selectedPhones.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="mb-8 bg-white/10 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-purple-400" />
                    <span>Selected Phones ({selectedPhones.length}/2)</span>
                  </span>
                  {selectedPhones.length === 2 && (
                    <Button 
                      onClick={handleCompare} 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Compare Now
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPhones.map((phone) => (
                    <div key={phone.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-purple-500/20">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{phone.name}</h3>
                        <p className="text-purple-300">{phone.brand}</p>
                        <p className="text-purple-400 font-semibold">${phone.price.toLocaleString()}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemovePhone(phone.id)}
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
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
      <section className="py-8 px-4 sm:px-6 lg:px-8" id="phone-database">
        <div className="max-w-7xl mx-auto">
          {showComparison && selectedPhones.length === 2 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-purple-400" />
                  <span>Phone Comparison</span>
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setShowComparison(false)}
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                >
                  Back to Selection
                </Button>
              </div>
              <PhoneComparison phones={selectedPhones} />
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                <Cpu className="h-8 w-8 text-purple-400" />
                <span>Choose Phones to Compare</span>
              </h2>
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
