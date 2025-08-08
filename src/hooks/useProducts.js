import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useProducts = () => {
  // Access the client

  const {
    data: products = [],
    isPending,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // return fetch("http://localhost:5000/products").then((res) => res.json());
      const res = await axios("http://localhost:5000/products");
      return res.data;
    },
  });
  return { products, isPending, isLoading, error, refetch };
};

export default useProducts;
