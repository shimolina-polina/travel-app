export interface ICity {
    id: number;
    name: string;
    description: string;
    region?: string;
    isCapital?: boolean;
    isHeroCity?: boolean;
    isGoldenRingCity?: boolean;
    knownFor?: string[];
  }
