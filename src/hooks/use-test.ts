import TestsContext from '../context/tests-context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

type PageParams = {
  id: string,
}

export const useTest = (testId?: string | number) => {
  const [tests] = useContext(TestsContext);
  const params: PageParams = useParams();
  const id = Number(testId ? testId : params.id);
  return tests.find((test) => test.id === id);
};
