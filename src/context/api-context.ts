import { createContext } from 'react';
import { AxiosInstance } from 'axios';

const ApiContext = createContext<AxiosInstance | null>(null);

export default ApiContext;
