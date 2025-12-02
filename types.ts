import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
}