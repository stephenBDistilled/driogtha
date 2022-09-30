import { axiosInstance } from 'apps/countries/api/axios';
import { useQuery } from '@tanstack/react-query';

function useCountryPage(code: string) {
  const { isLoading, error, data, isFetching } = useQuery([code], () =>
    axiosInstance
      .get(`https://restcountries.com/v3.1/alpha?codes=${code}`)
      .then((res) => res.data)
  );
  return {
    isLoading,
    data,
    isFetching,
    error,
  };
}

export { useCountryPage };
