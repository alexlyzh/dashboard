import { createContext, Dispatch, SetStateAction } from 'react';
import { Site } from '../types/types';

type ContextType = [
  Site[],
  boolean,
  Dispatch<SetStateAction<Site[]>>?,
  Dispatch<SetStateAction<boolean>>?,
];

const SitesContext = createContext<ContextType>([[], false]);

export default SitesContext;
