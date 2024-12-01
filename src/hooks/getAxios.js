import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default function useAxios(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API dan maʼlumot olish
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/${path}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (path) fetchData(); // Agar `path` mavjud bo'lsa, API chaqiruvini bajaring
  }, [path]);

  return { data, loading, error };
}
