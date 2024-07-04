export const getCourses = async (pathName: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pathName}`, {
    method: "GET",
  });
  const courses = await res.json();
  return courses;
};

export const getCourseDetails = async (pathName: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pathName}`, {
    method: "GET",
  });
  const course = await res.json();
  return course;
};
