import { axiosInstance } from 'apps/countries/api/axios';

function useCountryPage() {
  async function fetchCountryData(code: string) {
    const { data } = await axiosInstance.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return data[0];
  }
  return { fetchCountryData };
}

export { useCountryPage };
