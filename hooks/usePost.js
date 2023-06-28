import { useState } from "react";
import axios from "axios";

const usePost = (url, body) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, body);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error);
      alert("Invalid Credentials");
    } finally {
      setIsLoading(false);
    }
  };

  postData();

  //   useEffect(() => {
  //     postData();
  //   }, []);

  //   const repost = () => {
  //     setIsLoading(true);
  //     postData();
  //   };

  return { data, isLoading, error };
};

export default usePost;
