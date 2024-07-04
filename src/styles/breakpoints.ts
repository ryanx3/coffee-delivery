
interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const size: Size = {
  xs: "320px",
  sm: "768px",

  md: "1024px",
  lg: "1120px",
  xl: "1280px",
};

export const breakpoints = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
} as const;
