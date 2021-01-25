import { useState, useEffect } from 'react';
import axios from '../axios';
import { fetch } from '../common/fetch';

const useInitialData = (value) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(`${fetch.fetch_character}/?name=${value}`);
      setData(request.data.results);
    }
    fetchData();
  }, [data, value]);
  return data;
}

export default useInitialData;
