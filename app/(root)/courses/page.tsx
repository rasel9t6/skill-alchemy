import { getCourses } from "@/lib/actions/courses";
import ActiveFilters from "../../../components/courses/ActiveFilters";
import CourseCard from "../../../components/courses/CourseCard";
import FilterCourse from "../../../components/courses/FilterCourse";
import FilterCourseMobile from "../../../components/courses/FilterCourseMobile";
import SearchCourse from "../../../components/courses/SearchCourse";
import SortCourse from "../../../components/courses/SortCourse";

export default async function CoursesPage() {
  const courses = await getCourses("/courses");
  return (
    <section
      id="courses"
      className="container space-y-6 py-6 dark:bg-transparent"
    >
      {/* <h2 className="text-xl md:text-2xl font-medium">All Courses</h2> */}
      {/* header */}
      <div className="flex flex-col items-baseline justify-between gap-4 border-b border-gray-200 pb-6 lg:flex-row">
        <SearchCourse />
        <div className="flex items-center justify-end gap-2 max-lg:w-full">
          <SortCourse />

          {/* Filter Menus For Mobile */}
          <FilterCourseMobile />
        </div>
      </div>
      {/* header ends */}
      {/* active filters */}
      <ActiveFilters
        filter={{
          categories: ["development"],
          price: ["free"],
          sort: "",
        }}
      />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          {/* these component can be re use for mobile also */}
          <FilterCourse />
          {/* Course grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3 xl:grid-cols-3">
            {courses.map((course: any) => {
              return <CourseCard key={course.id} course={course} />;
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
