export const getCourses = async (pathName: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pathName}`, {
    method: "GET",
  });
  const courses = await res.json();
  return courses;
};
