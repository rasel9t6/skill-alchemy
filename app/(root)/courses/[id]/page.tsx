import CourseDetails from "@/components/courses/courseDetails/CourseDetails";
import CourseDetailsIntro from "@/components/courses/courseDetails/CourseDetailsIntro";
import RelatedCourses from "@/components/courses/courseDetails/RelatedCourses";
import Testimonials from "@/components/courses/courseDetails/Testimonials";
import { replaceMongoIdInArray } from "@/lib/convertData";

export default async function CourseDetailsPage({ params: { id } }) {
  const course = await getCourseDetails(id);
  return (
    <>
      <CourseDetailsIntro
        title={course?.title}
        subtitle={course?.subtitle}
        thumbnail={course?.thumbnail}
      />

      <CourseDetails course={course} />

      {course?.testimonials && (
        <Testimonials
          testimonials={replaceMongoIdInArray(course?.testimonials)}
        />
      )}

      <RelatedCourses />
    </>
  );
}
