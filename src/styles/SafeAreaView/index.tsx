import React from 'react';
import { SafeAreaView } from './index.styles';

const SafeArea: React.FC = ({
  children,
  bgColor = 'transparent',
}: {
  children: any;
  bgColor: string;
}) => {
  return <SafeAreaView bgColor={bgColor}>{children}</SafeAreaView>;
};

export default SafeArea;
