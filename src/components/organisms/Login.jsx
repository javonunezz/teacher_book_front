import { FiAtSign, FiLock } from "react-icons/fi";
import { Input } from "/src/components/molecules/Input.jsx";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="mt-[100px] text-center text-base lg:mt-0 lg:flex lg:h-screen lg:justify-center">
      <div className="lg:hidden">
        <img
          className="absolute left-0 top-0 -z-50"
          src="/src/assets/mobile-top.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 -z-50"
          src="/src/assets/mobile-bottom.svg"
          alt=""
        />
      </div>
      <div className="hidden lg:block">
        <img
          className="absolute left-0 top-0 -z-50"
          src="/src/assets/desktop-top.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 -z-50"
          src="/src/assets/desktop-bottom.svg"
          alt=""
        />
      </div>
      <div className="lg:mt-0 lg:flex lg:items-center lg:gap-[10vw]">
        <div className="hidden h-[450px] w-[40vw] items-center justify-center rounded-3xl border border-neutral-500 border-opacity-10 shadow-lg lg:flex">
          <h1 className="mb-6 text-3xl font-bold">TeacherBook👨‍🎓</h1>
        </div>

        <div className=" w-[310px] justify-center rounded-3xl border-none shadow-none md:border-neutral-500 lg:flex lg:h-[550px] lg:w-[430px] lg:flex-col lg:border lg:border-solid lg:border-opacity-10 lg:p-16 lg:shadow-lg ">
          <div>
            <h1 className="mb-6 hidden text-3xl font-bold lg:block">
              Hello again! 🎓
            </h1>
            <h1 className="mb-6 text-3xl font-bold lg:hidden">
              Teacher book👨‍🎓
            </h1>
            <p className="mb-6">
              Welcome to our awesome school! Here you can check all of the
              information you will need
            </p>
          </div>
          <form className="flex flex-col gap-3">
            <Input
              type="email"
              name="email"
              label="Email"
              iconComponent={<FiAtSign />}
            />
            <Input
              className="mb-4"
              type="password"
              name="password"
              label="Password"
              iconComponent={<FiLock />}
            />

            <Link
              className="rounded-md bg-primary-500 py-2 text-lg text-white"
              to="/home"
            >
              <button type="submit">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};
