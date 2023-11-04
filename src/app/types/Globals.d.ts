// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const cn: IClassNames;
//   export = cn;
// }

declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.png'
declare module '*.gif';
declare module '*.jpeg'
declare module '*.module.css';

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
