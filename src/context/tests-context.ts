import { createContext, Dispatch, SetStateAction } from 'react';
import { Test } from '../types/types';

type ContextType = [
  Test[],
  boolean,
  Dispatch<SetStateAction<Test[]>>?,
  Dispatch<SetStateAction<boolean>>?,
];

const TestsContext = createContext<ContextType>([[], false]);

export default TestsContext;
