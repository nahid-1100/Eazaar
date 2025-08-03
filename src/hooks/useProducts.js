import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  // Access the client

  const {
    data = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      fetch("./product.json").then((res) => res.json());
    },
  });
  return { data, isPending, isError, error, refetch };
};

export default useProducts;
