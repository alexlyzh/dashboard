import { createContext } from 'react';
import { Test } from '../types/types';

type ContextType = [Test[], boolean];

const TestsContext = createContext<ContextType>([[], false]);

export default TestsContext;
