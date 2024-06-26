import { buttonVariants } from "@/components/ui/button";
import { getCourses } from "@/lib/actions/courses";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HomePage = async () => {
  const courses = await getCourses("/courses");
  console.log(courses);
  return (
    <section className="grainy space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container relative isolate flex max-w-5xl flex-col items-center gap-4 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <span className="rounded-2xl border bg-muted px-4 py-1.5 text-sm font-medium shadow-lg">
          Hey, Welcome
        </span>
        <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-5xl md:text-nowrap md:text-6xl lg:text-7xl">
          Learn <span className="text-mint">Today,</span> Lead{" "}
          <span className="text-mint">Tomorrow.</span>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          “You don’t understand anything until you learn it more than one way.”
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/courses" className={cn(buttonVariants({ size: "lg" }))}>
            Explore Now
          </Link>
          <Link
            href=""
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
            )}
          >
            Become An Instructor
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
