import { colorsBgLight, colorsText } from '@/colors';
import { ColorKey } from '@/interfaces';
import React from 'react';
import BaseIcon from './BaseIcon';

type Props = {
  icon: string;
  color: ColorKey;
  w?: string;
  h?: string;
  bg?: boolean;
  className?: string;
  size?: string;
};

export default function IconRounded({
  icon,
  color,
  w = 'w-12',
  h = 'h-12',
  size = '24',
  bg = false,
  className = '',
}: Props) {
  const classAddon = bg ? colorsBgLight[color] : `${colorsText[color]} bg-gray-50 dark:bg-slate-800`;

  return <BaseIcon path={icon} w={w} h={h} size={size} className={`rounded-full ${classAddon} ${className}`} />;
}
