
import React from 'react';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Phone } from '@/types/phone';
import { Smartphone } from 'lucide-react';

interface SearchSuggestionsProps {
  phones: Phone[];
  searchTerm: string;
  onPhoneClick: (phone: Phone) => void;
  isVisible: boolean;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  phones,
  searchTerm,
  onPhoneClick,
  isVisible
}) => {
  if (!isVisible || !searchTerm.trim()) {
    return null;
  }

  const filteredPhones = phones
    .filter(phone => 
      phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 8); // Limit to 8 suggestions

  if (filteredPhones.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1">
      <Command className="rounded-lg border border-purple-500/30 bg-slate-800/95 backdrop-blur-sm shadow-lg">
        <CommandList>
          <CommandEmpty>No phones found.</CommandEmpty>
          <CommandGroup>
            {filteredPhones.map((phone) => (
              <CommandItem
                key={phone.id}
                onSelect={() => onPhoneClick(phone)}
                className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-purple-500/20 text-white"
              >
                <div className="flex-shrink-0">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-purple-400" />
                    <span className="font-medium text-white truncate">{phone.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-purple-300">{phone.brand}</span>
                    <span className="text-sm text-purple-400">•</span>
                    <span className="text-sm font-medium text-green-400">${phone.price.toLocaleString()}</span>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchSuggestions;
