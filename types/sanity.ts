import type { Image } from "sanity";

export interface SanityProject {
  _id: string;
  title: Record<string, string> | string;
  slug: string;
  description: Record<string, string> | string;
  mainImage: Image;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SanityExperience {
  _id: string;
  role: Record<string, string> | string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: Record<string, string> | string;
  logo?: Image;
  whiteBackground?: boolean;
}

export interface SanityEducation {
  _id: string;
  degree: Record<string, string> | string;
  school: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: Record<string, string> | string;
}

export interface SanitySkill {
  _id: string;
  name: Record<string, string> | string;
  category: 'language' | 'technical' | 'soft';
  level?: Record<string, string> | string;
  badge?: string;
  order?: number;
}

export interface SanityAssociation {
  _id: string;
  name: string;
  role?: Record<string, string> | string;
  description?: Record<string, string> | string;
  instagramUrl?: string;
  tiktokUrl?: string;
  donationUrl?: string;
  bgColor?: string;
  textColor?: string;
}

export interface SanityHobby {
  _id: string;
  title: Record<string, string> | string;
  iconName: string;
  colSpan: number;
  order?: number;
}

export interface SanityColor {
  hex: string;
}

export interface SanityPalette {
  _id: string;
  title: string;
  light_background?: SanityColor;
  light_foreground?: SanityColor;
  light_primary?: SanityColor;
  light_primary_foreground?: SanityColor;
  light_muted?: SanityColor;
  light_muted_foreground?: SanityColor;
  light_border?: SanityColor;
  light_card?: SanityColor;
  
  dark_background?: SanityColor;
  dark_foreground?: SanityColor;
  dark_primary?: SanityColor;
  dark_primary_foreground?: SanityColor;
  dark_muted?: SanityColor;
  dark_muted_foreground?: SanityColor;
  dark_border?: SanityColor;
  dark_card?: SanityColor;
}

export interface SanitySettings {
  _id: string;
  title?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  contactEmail?: string;
  cvFrUrl?: string;
  cvEnUrl?: string;
  activePalette?: SanityPalette;
}
