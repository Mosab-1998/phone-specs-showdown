
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone } from '@/types/phone';

interface PhoneComparisonProps {
  phones: Phone[];
}

const PhoneComparison: React.FC<PhoneComparisonProps> = ({ phones }) => {
  if (phones.length !== 2) {
    return <div>Please select exactly 2 phones to compare.</div>;
  }

  const [phone1, phone2] = phones;

  const ComparisonRow = ({ 
    label, 
    value1, 
    value2, 
    highlight = false 
  }: { 
    label: string; 
    value1: string | number; 
    value2: string | number; 
    highlight?: boolean;
  }) => (
    <div className={`grid grid-cols-3 py-3 border-b border-gray-100 ${highlight ? 'bg-blue-50' : ''}`}>
      <div className="font-medium text-gray-700">{label}</div>
      <div className="text-gray-900">{value1}</div>
      <div className="text-gray-900">{value2}</div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Phone Headers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {phones.map((phone) => (
          <Card key={phone.id}>
            <CardContent className="p-6 text-center">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-48 h-48 object-cover mx-auto rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{phone.name}</h2>
              <p className="text-gray-600 mb-2">{phone.brand}</p>
              <p className="text-3xl font-bold text-indigo-600">${phone.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">Released: {phone.releaseDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison */}
      <div className="space-y-6">
        {/* Display */}
        <Card>
          <CardHeader>
            <CardTitle>Display</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Size" value1={phone1.specifications.display.size} value2={phone2.specifications.display.size} />
            <ComparisonRow label="Resolution" value1={phone1.specifications.display.resolution} value2={phone2.specifications.display.resolution} />
            <ComparisonRow label="Type" value1={phone1.specifications.display.type} value2={phone2.specifications.display.type} />
            <ComparisonRow label="Refresh Rate" value1={phone1.specifications.display.refreshRate} value2={phone2.specifications.display.refreshRate} />
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Chipset" value1={phone1.specifications.processor.chipset} value2={phone2.specifications.processor.chipset} />
            <ComparisonRow label="CPU" value1={phone1.specifications.processor.cpu} value2={phone2.specifications.processor.cpu} />
            <ComparisonRow label="GPU" value1={phone1.specifications.processor.gpu} value2={phone2.specifications.processor.gpu} />
            <ComparisonRow label="RAM" value1={phone1.specifications.memory.ram} value2={phone2.specifications.memory.ram} />
            <ComparisonRow label="Storage" value1={phone1.specifications.memory.storage} value2={phone2.specifications.memory.storage} />
          </CardContent>
        </Card>

        {/* Camera */}
        <Card>
          <CardHeader>
            <CardTitle>Camera</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Rear Camera" value1={phone1.specifications.camera.rear} value2={phone2.specifications.camera.rear} />
            <ComparisonRow label="Front Camera" value1={phone1.specifications.camera.front} value2={phone2.specifications.camera.front} />
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <div className="font-medium text-gray-700">Camera Features</div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone1.specifications.camera.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone2.specifications.camera.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Battery */}
        <Card>
          <CardHeader>
            <CardTitle>Battery & Charging</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Capacity" value1={phone1.specifications.battery.capacity} value2={phone2.specifications.battery.capacity} />
            <ComparisonRow label="Fast Charging" value1={phone1.specifications.battery.fastCharging} value2={phone2.specifications.battery.fastCharging} />
            <ComparisonRow label="Wireless Charging" value1={phone1.specifications.battery.wireless ? 'Yes' : 'No'} value2={phone2.specifications.battery.wireless ? 'Yes' : 'No'} />
          </CardContent>
        </Card>

        {/* Design */}
        <Card>
          <CardHeader>
            <CardTitle>Design</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Dimensions" value1={phone1.specifications.design.dimensions} value2={phone2.specifications.design.dimensions} />
            <ComparisonRow label="Weight" value1={phone1.specifications.design.weight} value2={phone2.specifications.design.weight} />
            <ComparisonRow label="Materials" value1={phone1.specifications.design.materials} value2={phone2.specifications.design.materials} />
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <div className="font-medium text-gray-700">Available Colors</div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone1.specifications.design.colors.map((color, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{color}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone2.specifications.design.colors.map((color, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{color}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Software & Security */}
        <Card>
          <CardHeader>
            <CardTitle>Software & Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonRow label="Operating System" value1={phone1.specifications.software.os} value2={phone2.specifications.software.os} />
            <div className="grid grid-cols-3 py-3">
              <div className="font-medium text-gray-700">Security Features</div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone1.specifications.software.security.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-1">
                  {phone2.specifications.software.security.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhoneComparison;
