
import { Phone } from '@/types/phone';

export const phoneData: Phone[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.7"',
        resolution: '2796 x 1290',
        type: 'Super Retina XDR OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Apple A17 Pro',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (6-core)'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '48MP + 12MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Cinematic mode']
      },
      battery: {
        capacity: '4441mAh',
        fastCharging: '27W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '159.9 x 76.7 x 8.25 mm',
        weight: '221g',
        materials: 'Titanium, Glass',
        colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['MagSafe', 'Water Resistant', 'Wireless Charging', 'Face ID'],
    releaseDate: 'September 2023'
  },
  {
    id: '2',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.8"',
        resolution: '3120 x 1440',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '12GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '200MP + 50MP + 12MP + 10MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '8K video', 'Space Zoom']
      },
      battery: {
        capacity: '5000mAh',
        fastCharging: '45W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '162.3 x 79.0 x 8.6 mm',
        weight: '232g',
        materials: 'Aluminum, Glass',
        colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow']
      },
      software: {
        os: 'Android 14',
        security: ['Fingerprint', 'Face Recognition', 'Knox Security']
      }
    },
    features: ['S Pen', 'Water Resistant', 'Wireless Charging', 'DeX Mode'],
    releaseDate: 'January 2024'
  },
  {
    id: '3',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.7"',
        resolution: '2992 x 1344',
        type: 'LTPO OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Google Tensor G3',
        cpu: 'Octa-core',
        gpu: 'Immortalis-G715s MC10'
      },
      memory: {
        ram: '12GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 48MP + 48MP',
        front: '10.5MP',
        features: ['Night Sight', 'Portrait mode', 'Magic Eraser', 'Real Tone']
      },
      battery: {
        capacity: '5050mAh',
        fastCharging: '30W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '162.6 x 76.5 x 8.8 mm',
        weight: '213g',
        materials: 'Aluminum, Glass',
        colors: ['Obsidian', 'Porcelain', 'Bay']
      },
      software: {
        os: 'Android 14',
        security: ['Fingerprint', 'Face Unlock', 'Titan M security']
      }
    },
    features: ['Pure Android', 'AI Features', 'Wireless Charging', 'Call Screen'],
    releaseDate: 'October 2023'
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.82"',
        resolution: '3168 x 1440',
        type: 'LTPO AMOLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '12GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 64MP + 48MP',
        front: '32MP',
        features: ['Hasselblad', 'Night mode', 'Portrait mode', '4K video']
      },
      battery: {
        capacity: '5400mAh',
        fastCharging: '100W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.4',
        nfc: true
      },
      design: {
        dimensions: '164.3 x 75.8 x 9.15 mm',
        weight: '220g',
        materials: 'Aluminum, Glass',
        colors: ['Silky Black', 'Flowy Emerald', 'Pale Green']
      },
      software: {
        os: 'OxygenOS 14',
        security: ['Fingerprint', 'Face Unlock']
      }
    },
    features: ['Fast Charging', 'Gaming Mode', 'Alert Slider', 'Zen Mode'],
    releaseDate: 'January 2024'
  },
  {
    id: '5',
    name: 'iPhone 14',
    brand: 'Apple',
    price: 729,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2556 x 1179',
        type: 'Super Retina XDR OLED',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A15 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (5-core)'
      },
      memory: {
        ram: '6GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '12MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Cinematic mode']
      },
      battery: {
        capacity: '3279mAh',
        fastCharging: '20W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '146.7 x 71.5 x 7.8 mm',
        weight: '172g',
        materials: 'Aluminum, Glass',
        colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['MagSafe', 'Water Resistant', 'Wireless Charging', 'Face ID'],
    releaseDate: 'September 2022'
  },
  {
    id: '6',
    name: 'Galaxy S23',
    brand: 'Samsung',
    price: 799,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2340 x 1080',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 2',
        cpu: 'Octa-core',
        gpu: 'Adreno 740'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 12MP + 10MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '8K video', 'Space Zoom']
      },
      battery: {
        capacity: '3900mAh',
        fastCharging: '25W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '146.3 x 70.9 x 7.6 mm',
        weight: '168g',
        materials: 'Aluminum, Glass',
        colors: ['Phantom Black', 'Cream', 'Green', 'Lavender']
      },
      software: {
        os: 'Android 13',
        security: ['Fingerprint', 'Face Recognition', 'Knox Security']
      }
    },
    features: ['Water Resistant', 'Wireless Charging', 'Samsung Pay', 'Bixby'],
    releaseDate: 'February 2023'
  },
  {
    id: '7',
    name: 'Pixel 7a',
    brand: 'Google',
    price: 499,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2400 x 1080',
        type: 'OLED',
        refreshRate: '90Hz'
      },
      processor: {
        chipset: 'Google Tensor G2',
        cpu: 'Octa-core',
        gpu: 'Mali-G710 MP7'
      },
      memory: {
        ram: '8GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '64MP + 13MP',
        front: '13MP',
        features: ['Night Sight', 'Portrait mode', 'Magic Eraser', 'Real Tone']
      },
      battery: {
        capacity: '4385mAh',
        fastCharging: '18W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '152.4 x 72.9 x 9.0 mm',
        weight: '193.5g',
        materials: 'Aluminum, Plastic',
        colors: ['Charcoal', 'Snow', 'Sea', 'Coral']
      },
      software: {
        os: 'Android 13',
        security: ['Fingerprint', 'Face Unlock', 'Titan M security']
      }
    },
    features: ['Pure Android', 'AI Features', 'Wireless Charging', 'Call Screen'],
    releaseDate: 'May 2023'
  },
  {
    id: '8',
    name: 'iPhone 13',
    brand: 'Apple',
    price: 629,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2532 x 1170',
        type: 'Super Retina XDR OLED',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A15 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (4-core)'
      },
      memory: {
        ram: '4GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '12MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Cinematic mode']
      },
      battery: {
        capacity: '3240mAh',
        fastCharging: '20W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6',
        bluetooth: '5.0',
        nfc: true
      },
      design: {
        dimensions: '146.7 x 71.5 x 7.65 mm',
        weight: '174g',
        materials: 'Aluminum, Glass',
        colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Red']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['MagSafe', 'Water Resistant', 'Wireless Charging', 'Face ID'],
    releaseDate: 'September 2021'
  }
];
