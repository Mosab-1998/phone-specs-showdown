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
  },
  {
    id: '9',
    name: 'iPhone 15',
    brand: 'Apple',
    price: 899,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2556 x 1179',
        type: 'Super Retina XDR OLED',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A16 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (5-core)'
      },
      memory: {
        ram: '6GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '48MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Action mode']
      },
      battery: {
        capacity: '3349mAh',
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
        dimensions: '147.6 x 71.6 x 7.80 mm',
        weight: '171g',
        materials: 'Aluminum, Glass',
        colors: ['Blue', 'Pink', 'Yellow', 'Green', 'Black']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['USB-C', 'Dynamic Island', 'Water Resistant', 'Wireless Charging'],
    releaseDate: 'September 2023'
  },
  {
    id: '10',
    name: 'iPhone 12',
    brand: 'Apple',
    price: 529,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '2532 x 1170',
        type: 'Super Retina XDR OLED',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A14 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (4-core)'
      },
      memory: {
        ram: '4GB',
        storage: '64GB',
        expandable: false
      },
      camera: {
        rear: '12MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'HDR']
      },
      battery: {
        capacity: '2815mAh',
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
        dimensions: '146.7 x 71.5 x 7.4 mm',
        weight: '164g',
        materials: 'Aluminum, Glass',
        colors: ['Purple', 'Blue', 'Green', 'Black', 'White', 'Red']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['MagSafe', 'Water Resistant', 'Wireless Charging', 'Face ID'],
    releaseDate: 'October 2020'
  },
  {
    id: '11',
    name: 'Galaxy S24',
    brand: 'Samsung',
    price: 899,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.2"',
        resolution: '2340 x 1080',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 12MP + 10MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '8K video', 'AI Enhancement']
      },
      battery: {
        capacity: '4000mAh',
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
        dimensions: '147.0 x 70.6 x 7.6 mm',
        weight: '167g',
        materials: 'Aluminum, Glass',
        colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet', 'Amber Yellow']
      },
      software: {
        os: 'Android 14',
        security: ['Fingerprint', 'Face Recognition', 'Knox Security']
      }
    },
    features: ['Galaxy AI', 'Water Resistant', 'Wireless Charging', 'Samsung Pay'],
    releaseDate: 'January 2024'
  },
  {
    id: '12',
    name: 'Galaxy A54',
    brand: 'Samsung',
    price: 449,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.4"',
        resolution: '2340 x 1080',
        type: 'Super AMOLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Exynos 1380',
        cpu: 'Octa-core',
        gpu: 'Mali-G68 MP5'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: true
      },
      camera: {
        rear: '50MP + 12MP + 5MP',
        front: '32MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'OIS']
      },
      battery: {
        capacity: '5000mAh',
        fastCharging: '25W',
        wireless: false
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '158.2 x 76.7 x 8.2 mm',
        weight: '202g',
        materials: 'Plastic, Glass',
        colors: ['Awesome Graphite', 'Awesome Violet', 'Awesome White', 'Awesome Lime']
      },
      software: {
        os: 'Android 13',
        security: ['Fingerprint', 'Face Recognition']
      }
    },
    features: ['Water Resistant', 'Expandable Storage', 'Samsung Pay', 'Knox Security'],
    releaseDate: 'March 2023'
  },
  {
    id: '13',
    name: 'Pixel 8',
    brand: 'Google',
    price: 699,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.2"',
        resolution: '2400 x 1080',
        type: 'OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Google Tensor G3',
        cpu: 'Octa-core',
        gpu: 'Immortalis-G715s MC10'
      },
      memory: {
        ram: '8GB',
        storage: '128GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 12MP',
        front: '10.5MP',
        features: ['Night Sight', 'Portrait mode', 'Magic Eraser', 'Best Take']
      },
      battery: {
        capacity: '4575mAh',
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
        dimensions: '150.5 x 70.8 x 8.9 mm',
        weight: '187g',
        materials: 'Aluminum, Glass',
        colors: ['Obsidian', 'Hazel', 'Rose']
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
    id: '14',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    price: 699,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.7"',
        resolution: '3216 x 1440',
        type: 'LTPO AMOLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 2',
        cpu: 'Octa-core',
        gpu: 'Adreno 740'
      },
      memory: {
        ram: '12GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 32MP + 48MP',
        front: '16MP',
        features: ['Hasselblad', 'Night mode', 'Portrait mode', '4K video']
      },
      battery: {
        capacity: '5000mAh',
        fastCharging: '100W',
        wireless: false
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '163.1 x 74.1 x 8.5 mm',
        weight: '205g',
        materials: 'Aluminum, Glass',
        colors: ['Titan Black', 'Eternal Green']
      },
      software: {
        os: 'OxygenOS 13',
        security: ['Fingerprint', 'Face Unlock']
      }
    },
    features: ['Fast Charging', 'Gaming Mode', 'Alert Slider', 'OxygenOS'],
    releaseDate: 'February 2023'
  },
  {
    id: '15',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    price: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.36"',
        resolution: '2670 x 1200',
        type: 'LTPO OLED',
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
        rear: '50MP + 50MP + 50MP',
        front: '32MP',
        features: ['Leica', 'Night mode', 'Portrait mode', '8K video']
      },
      battery: {
        capacity: '4610mAh',
        fastCharging: '90W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 7',
        bluetooth: '5.4',
        nfc: true
      },
      design: {
        dimensions: '152.8 x 71.5 x 8.2 mm',
        weight: '193g',
        materials: 'Aluminum, Glass',
        colors: ['Black', 'White', 'Green', 'Pink']
      },
      software: {
        os: 'MIUI 14',
        security: ['Fingerprint', 'Face Unlock']
      }
    },
    features: ['Leica Camera', 'Fast Charging', 'Wireless Charging', 'MIUI'],
    releaseDate: 'October 2023'
  },
  {
    id: '16',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 599,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.7"',
        resolution: '2412 x 1080',
        type: 'LTPO OLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8+ Gen 1',
        cpu: 'Octa-core',
        gpu: 'Adreno 730'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 50MP',
        front: '32MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Action mode']
      },
      battery: {
        capacity: '4700mAh',
        fastCharging: '45W',
        wireless: true
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
        nfc: true
      },
      design: {
        dimensions: '162.1 x 76.4 x 8.6 mm',
        weight: '201.8g',
        materials: 'Aluminum, Glass',
        colors: ['White', 'Dark Gray']
      },
      software: {
        os: 'Nothing OS 2.0',
        security: ['Fingerprint', 'Face Unlock']
      }
    },
    features: ['Glyph Interface', 'Nothing OS', 'Wireless Charging', 'Unique Design'],
    releaseDate: 'July 2023'
  },
  {
    id: '17',
    name: 'iPhone SE 3rd Gen',
    brand: 'Apple',
    price: 429,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '4.7"',
        resolution: '1334 x 750',
        type: 'Retina IPS LCD',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A15 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (4-core)'
      },
      memory: {
        ram: '4GB',
        storage: '64GB',
        expandable: false
      },
      camera: {
        rear: '12MP',
        front: '7MP',
        features: ['Smart HDR 4', 'Portrait mode', '4K video', 'Deep Fusion']
      },
      battery: {
        capacity: '2018mAh',
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
        dimensions: '138.4 x 67.3 x 7.3 mm',
        weight: '144g',
        materials: 'Aluminum, Glass',
        colors: ['Midnight', 'Starlight', 'Red']
      },
      software: {
        os: 'iOS 17',
        security: ['Touch ID', 'Secure Enclave']
      }
    },
    features: ['Touch ID', 'Compact Design', 'Wireless Charging', 'Home Button'],
    releaseDate: 'March 2022'
  },
  {
    id: '18',
    name: 'Galaxy Z Fold 5',
    brand: 'Samsung',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '7.6"',
        resolution: '2176 x 1812',
        type: 'Dynamic AMOLED 2X',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 8 Gen 2',
        cpu: 'Octa-core',
        gpu: 'Adreno 740'
      },
      memory: {
        ram: '12GB',
        storage: '256GB',
        expandable: false
      },
      camera: {
        rear: '50MP + 12MP + 10MP',
        front: '4MP + 10MP',
        features: ['Night mode', 'Portrait mode', '8K video', 'Flex mode']
      },
      battery: {
        capacity: '4400mAh',
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
        dimensions: '154.9 x 129.9 x 6.1 mm',
        weight: '253g',
        materials: 'Aluminum, Glass',
        colors: ['Phantom Black', 'Cream', 'Icy Blue']
      },
      software: {
        os: 'Android 13',
        security: ['Fingerprint', 'Face Recognition', 'Knox Security']
      }
    },
    features: ['Foldable Design', 'S Pen Support', 'DeX Mode', 'Multi-Window'],
    releaseDate: 'August 2023'
  },
  {
    id: '19',
    name: 'Redmi Note 13 Pro',
    brand: 'Xiaomi',
    price: 349,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.67"',
        resolution: '2712 x 1220',
        type: 'AMOLED',
        refreshRate: '120Hz'
      },
      processor: {
        chipset: 'Snapdragon 7s Gen 2',
        cpu: 'Octa-core',
        gpu: 'Adreno 710'
      },
      memory: {
        ram: '8GB',
        storage: '256GB',
        expandable: true
      },
      camera: {
        rear: '200MP + 8MP + 2MP',
        front: '16MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'OIS']
      },
      battery: {
        capacity: '5100mAh',
        fastCharging: '67W',
        wireless: false
      },
      connectivity: {
        network: '5G',
        wifi: 'Wi-Fi 6',
        bluetooth: '5.2',
        nfc: true
      },
      design: {
        dimensions: '161.2 x 74.2 x 8.0 mm',
        weight: '187g',
        materials: 'Plastic, Glass',
        colors: ['Midnight Black', 'Ocean Teal', 'Lavender Purple']
      },
      software: {
        os: 'MIUI 14',
        security: ['Fingerprint', 'Face Unlock']
      }
    },
    features: ['High Resolution Camera', 'Fast Charging', 'Expandable Storage', 'MIUI'],
    releaseDate: 'September 2023'
  },
  {
    id: '20',
    name: 'iPhone 11',
    brand: 'Apple',
    price: 399,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    specifications: {
      display: {
        size: '6.1"',
        resolution: '1792 x 828',
        type: 'Liquid Retina IPS LCD',
        refreshRate: '60Hz'
      },
      processor: {
        chipset: 'Apple A13 Bionic',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (4-core)'
      },
      memory: {
        ram: '4GB',
        storage: '64GB',
        expandable: false
      },
      camera: {
        rear: '12MP + 12MP',
        front: '12MP',
        features: ['Night mode', 'Portrait mode', '4K video', 'Slo-mo']
      },
      battery: {
        capacity: '3110mAh',
        fastCharging: '18W',
        wireless: true
      },
      connectivity: {
        network: '4G',
        wifi: 'Wi-Fi 6',
        bluetooth: '5.0',
        nfc: true
      },
      design: {
        dimensions: '150.9 x 75.7 x 8.3 mm',
        weight: '194g',
        materials: 'Aluminum, Glass',
        colors: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red']
      },
      software: {
        os: 'iOS 17',
        security: ['Face ID', 'Secure Enclave']
      }
    },
    features: ['Dual Camera System', 'Water Resistant', 'Wireless Charging', 'Face ID'],
    releaseDate: 'September 2019'
  }
];
