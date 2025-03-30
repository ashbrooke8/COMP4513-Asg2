import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center font-mono"
      style={{ backgroundImage: "url('hero-image.jpg')" }}
    >
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
