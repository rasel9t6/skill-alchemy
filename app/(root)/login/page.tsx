import LoginForm from "@/components/login/LoginForm";
import SocialLogin from "@/components/login/SocialLogin";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="container">
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
}
