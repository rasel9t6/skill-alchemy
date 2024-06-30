import { Presentation, UsersRound, MessageSquare, Star } from "lucide-react";
import Image from "next/image";

export default async function CourseInstructor({ course }: any) {
  const instructor = course?.instructor;

  const fullName = `${instructor?.firstName}  ${instructor?.lastName}`;
  const courseDetailsByInstructor = await getCourseDetailsByInstructor(
    instructor._id.toString(),
  );
  return (
    <div className="rounded-md bg-gray-50 p-8">
      <div className="mb-8 md:flex md:gap-x-5">
        <div className="mb-5 h-[310px] w-[270px] max-w-full flex-none rounded md:mb-0">
          <Image
            src={instructor?.profilePicture}
            alt={fullName}
            className="size-full rounded object-cover"
            width={500}
            height={700}
          />
        </div>
        <div className="flex-1">
          <div className="max-w-[300px]">
            <h4 className="text-[34px] font-bold leading-[51px]">{fullName}</h4>
            <div className="mb-6 font-medium text-gray-600">
              {instructor?.designation}
            </div>
            <ul className="list space-y-4">
              <li className="flex items-center space-x-3">
                <Presentation className="text-gray-600" />
                <div>{courseDetailsByInstructor?.courses} Course(s)</div>
              </li>
              <li className="flex space-x-3">
                <UsersRound className="text-gray-600" />
                <div>
                  {courseDetailsByInstructor?.enrollments} Student Learned
                </div>
              </li>
              <li className="flex space-x-3">
                <MessageSquare className="text-gray-600" />
                <div>{courseDetailsByInstructor?.reviews} Reviews</div>
              </li>
              <li className="flex space-x-3">
                <Star className="text-gray-600" />
                <div>{courseDetailsByInstructor?.ratings} Average Rating</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-600">{instructor?.bio}</p>
    </div>
  );
}