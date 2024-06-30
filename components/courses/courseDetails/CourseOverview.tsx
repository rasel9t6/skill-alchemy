import { CheckCheck } from "lucide-react";

export default function CourseOverview({ course }: any) {
  return (
    <>
      <h3 className="text-2xl">Course Description</h3>
      <p className="mt-4">{course?.description}</p>
      <div className="mt-8 space-y-6 rounded-md bg-gray-50 p-8">
        <h4 className="text-2xl">What You will Learn?</h4>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {course?.learning &&
            course?.learning.map((learning: any, i: number) => (
              <li className="flex space-x-3" key={i}>
                <div className="relative top-1 flex-none">
                  <CheckCheck />
                </div>
                <div className="flex-1">{learning}</div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
