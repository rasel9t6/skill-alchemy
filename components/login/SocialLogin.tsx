import Image from "next/image";
import { Button } from "../ui/button";

export default function SocialLogin() {
  return (
    <>
      <div className="text-md mt-3 text-center text-gray-500">
        or SignUp with
      </div>
      <form>
        <div className="flex justify-center gap-2">
          <Button
            className="mt-4 flex items-center justify-center gap-2 rounded-md border border-gray-600/30 py-2"
            type="submit"
            name="action"
            value="google"
          >
            <Image
              src="/google.png"
              priority
              alt="google"
              width={40}
              height={40}
            />
            <span>Google</span>
          </Button>
        </div>
      </form>
    </>
  );
}
