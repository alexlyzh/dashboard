import { createContext } from 'react';
import { Site } from '../types/types';

type ContextType = [Site[], boolean];

const SitesContext = createContext<ContextType>([[], false]);

export default SitesContext;
