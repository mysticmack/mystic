export interface Company {
  name: string;
  description: string;
}

export interface PortfolioCategory {
  title: string;
  description: string;
  companies: Company[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

export interface Advisor {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
} 