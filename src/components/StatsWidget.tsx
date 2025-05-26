
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsWidgetProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: 'purple' | 'pink' | 'blue' | 'green';
}

const StatsWidget: React.FC<StatsWidgetProps> = ({ icon: Icon, value, label, color }) => {
  const colorClasses = {
    purple: 'from-purple-500 to-purple-600 text-purple-300',
    pink: 'from-pink-500 to-pink-600 text-pink-300',
    blue: 'from-blue-500 to-blue-600 text-blue-300',
    green: 'from-green-500 to-green-600 text-green-300',
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
      <CardContent className="p-6 text-center">
        <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${colorClasses[color]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
        <p className="text-gray-300 text-sm">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatsWidget;
