import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLocalStorage = (key, redirectPath) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.storageArea === localStorage && event.key === key) {
        console.log(key, " is modified")
        localStorage.removeItem(key)
        navigate(redirectPath);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, redirectPath, navigate]);
};

export default useLocalStorage;
