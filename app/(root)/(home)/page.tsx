import { getCourses } from "@/lib/actions/courses";

const HomePage = async () => {
  const courses = await getCourses("/courses");
  console.log(courses);
  return <div>HomePage</div>;
};
export default HomePage;
