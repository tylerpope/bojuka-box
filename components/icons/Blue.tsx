import * as React from 'react';
import Svg, { SvgProps, Defs, Circle, Path } from 'react-native-svg';

const Blue = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" {...props}>
    <Defs />
    <Circle cx={50} cy={50} r={50} fill="#bcd9e8" />
    <Path
      fill="#04070e"
      d="M67.49 83.72c-4.79 4.87-10.68 7.31-17.69 7.31-7.86 0-14.1-2.69-18.71-8.07-4.36-5.13-6.54-11.66-6.54-19.61 0-8.54 3.72-18.29 11.15-29.22 6.06-8.97 13.2-16.83 21.4-23.58-1.2 5.47-1.79 9.36-1.79 11.66 0 5.3 1.66 10.47 5 15.51 4.1 5.98 7.22 10.43 9.36 13.33 3.33 5.04 5 9.96 5 14.74 0 7.09-2.39 13.07-7.18 17.94Zm-.13-27.36c-1.28-2.86-2.78-4.76-4.49-5.7.26.51.38 1.24.38 2.18 0 1.79-.51 4.36-1.54 7.69l-1.66 5.13c0 2.99 1.49 4.49 4.48 4.49 3.16 0 4.74-2.09 4.74-6.28 0-2.13-.64-4.63-1.92-7.5Z"
    />
  </Svg>
);
export default Blue;
