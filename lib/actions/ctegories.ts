export const getCategories = async (pathName: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pathName}`, {
    method: "GET",
  });
  const categories = await res.json();
  return categories;
};
