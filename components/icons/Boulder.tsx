import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const Boulder = () => (
  <Svg width={226} height={104} fill="none">
    <Path
      fill="#222"
      d="M193.382 30.138C140.425 5.525 56.576 27.381 21.272 41.386c-52.261 21.173 4.18 35.73 36.93 53.925s146.329 4.631 146.329-11.58c0-16.21 55.048-22.826-11.149-53.593Z"
    />
    <G clipPath="url(#a)">
      <Path fill="#F58246" d="M33.82 9.44 105.35 2l12.71 67.67-71.88 8.39L33.82 9.44Z" />
      <Path fill="#E26930" d="M15 26.85 33.82 9.44l12.36 68.62L19.8 60.73 15 26.85Z" />
      <Path
        stroke="#231F20"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m15 26.85 4.8 33.88 24.85 17.51 73.41-8.57L105.35 2 34.2 8.21 15 26.85ZM46.18 78.06 33.82 9.44"
      />
      <Path
        fill="#F58245"
        d="M104.63 49.88v26.39l59 9.5 37.94-13.36V17.35l-38.58 40.28-58.36-7.75Z"
      />
      <Path fill="#E2692C" d="m104.63 40.88 40.29-38.59 55.05 6.12-38.44 39.48-56.9-7.01Z" />
      <Path
        fill="#F58245"
        d="m104.63 40.88 56.9 7.01 38.44-39.48 1.6 8.94-38.58 40.28-58.36-7.75v-9Z"
      />
      <Path
        stroke="#231F20"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m104.63 49.88 58.36 7.75 38.58-40.28-1.6-.38V8.41l-55.05-6.12-40.29 38.59v9Z"
      />
      <Path
        stroke="#231F20"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m199.97 8.41-38.44 39.48-56.9-7.01M201.57 17.35l-.75 54.78-19.46 7.14-17.73 6.5V56.96M104.63 49.88v26.39l59 9.5"
      />
      <Path stroke="#231F20" strokeMiterlimit={10} strokeWidth={4} d="M144.92 2.29v43.55" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M13 0h190.57v87.77H13z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Boulder;
