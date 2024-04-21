import React from 'react';
import { SvgProps } from 'react-native-svg';

import symbols from '~/components/icons/symbols';
import { ColorKey } from '~/types/global';

type Color = {
  color: string;
  Icon: (props: SvgProps) => React.ReactNode;
};

type Colors = {
  [key in ColorKey]: Color;
};

export const MTG_COLORS: Colors = {
  b: {
    color: '#000000',
    Icon: symbols.Black,
  },
  r: {
    color: '#d91111',
    Icon: symbols.Red,
  },
  w: {
    color: '#ffffff',
    Icon: symbols.White,
  },
  u: {
    color: '#1190d9',
    Icon: symbols.Blue,
  },
  g: {
    color: '#11d95e',
    Icon: symbols.Green,
  },
};

export const getColors = (symbols?: ColorKey[]) => {
  const colorsMapped = symbols?.map((color) => MTG_COLORS[color]);
  const background = colorsMapped?.map(({ color }) => color);
  const icons = colorsMapped?.map(({ Icon }) => Icon);

  return { background, icons };
};
