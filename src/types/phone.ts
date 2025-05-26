
export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specifications: {
    display: {
      size: string;
      resolution: string;
      type: string;
      refreshRate: string;
    };
    processor: {
      chipset: string;
      cpu: string;
      gpu: string;
    };
    memory: {
      ram: string;
      storage: string;
      expandable: boolean;
    };
    camera: {
      rear: string;
      front: string;
      features: string[];
    };
    battery: {
      capacity: string;
      fastCharging: string;
      wireless: boolean;
    };
    connectivity: {
      network: string;
      wifi: string;
      bluetooth: string;
      nfc: boolean;
    };
    design: {
      dimensions: string;
      weight: string;
      materials: string;
      colors: string[];
    };
    software: {
      os: string;
      security: string[];
    };
  };
  features: string[];
  releaseDate: string;
}
