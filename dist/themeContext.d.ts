import * as React from 'react';
import { ThemeProps } from './interfaces';
export declare const themeMapping: {
    mainColor: string;
    backgroundColor: string;
    shadowColor: string;
    linkColor: string;
    fontFamily: string;
    height: string;
    sliderWidth: string;
    padding: string;
};
export declare const defaultTheme: ThemeProps;
declare const ThemeContext: React.Context<ThemeProps>;
export declare const useTheme: (theme?: ThemeProps) => void;
export default ThemeContext;