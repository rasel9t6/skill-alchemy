import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatMyDate } from "@/lib/formatDate";
import Image from "next/image";
import CourseOverview from "./CourseOverview";
import CourseInstructor from "./CourseInstructor";
import CourseCurriculum from "./CourseCurriculum";

export default function CourseDetails({ course }: any) {
  const lastModifiedDate = formatMyDate(course.modifiedOn);

  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className="bg-success inline-block rounded-full p-0.5 text-xs font-medium text-white">
          {course?.category?.title}
        </span>
        <h3 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
          {course?.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600">{course?.subtitle}</p>
        {/*  */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-20">
          <div className="flex items-center gap-2">
            <Image
              className="size-[40px] rounded-full"
              src={course?.instructor?.profilePicture}
              alt={course?.instructor?.firstName}
              width={20}
              height={20}
            />
            <p className="font-bold">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success font-semibold">Last Updated: </span>
            <span>{lastModifiedDate}</span>
          </div>
        </div>

        {/* Tab */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="my-6 grid w-full max-w-screen-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview">
              {/* each tab content can be independent component */}
              <CourseOverview course={course} />
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseCurriculum course={course} />
            </TabsContent>
            <TabsContent value="instructor">
              <CourseInstructor course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
