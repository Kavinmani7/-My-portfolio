// FIX: Add a type-only import for React to resolve the "Cannot find namespace 'React'" error.
import type * as React from 'react';

export interface Skill {
  name: string;
  level: number; // A percentage from 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  goal: string;
  features: string[];
  figmaLink?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: React.ReactNode;
}
