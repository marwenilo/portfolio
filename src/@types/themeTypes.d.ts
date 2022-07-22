export interface ThemeContextInterface {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>    
}
export interface ThemeProviderProps {
  initialTheme?:string, 
  children?: React.ReactNode;
};
export interface BackgroundProps {
   children?: React.ReactNode; //ReactNode allows multiple elements, strings, numbers, fragments, portals,
};