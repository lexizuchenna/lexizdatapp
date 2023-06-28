import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import decode from "jwt-decode";

const getUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSession = async () => {
    setIsLoading(true);

    try {
      const session = await SecureStore.getItemAsync("session");

      if(!session) {
        console.log("not session")
        setIsLoading(false)
        return setUser(null)
      }

      const decodedToken = decode(JSON.parse(session).token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        await SecureStore.deleteItemAsync("session");

        setIsLoading(false);
        return setUser(null);;
      }

      setIsLoading(false);
      return setUser({id: JSON.parse(session).id, name: JSON.parse(session).name, email: JSON.parse(session).email})
    } catch (error) {
      console.log(error);
      setError(error);
      alert("Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { user, isLoading, error, refetch };
};

export default getUser;
