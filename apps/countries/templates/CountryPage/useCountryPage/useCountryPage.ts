import { axiosInstance } from 'apps/countries/api/axios';

function useCountryPage() {
  // TODO: update to use React Query
  async function fetchCountryData(code: string[]) {
    const { data } = await axiosInstance.get(
      `https://restcountries.com/v3.1/alpha?codes=${code.join(',')}`
    );
    return data;
  }
  return { fetchCountryData };
}

export { useCountryPage };
