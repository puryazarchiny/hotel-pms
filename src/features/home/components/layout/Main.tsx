import { Link } from "react-router-dom";

import hotelPMS from "@/assets/images/hotel-pms.png";
import { Wrapper } from "@/features/home";

export function Main() {
  return (
    <main>
      <section className="h-full">
        <Wrapper>
          <div className="CONTAINER | flex h-full flex-col items-center justify-center gap-8 rounded-t-2xl bg-gray-300 p-4">
            <img src={hotelPMS} alt="Hotel PMS" />
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Hotel Property Management System
            </h1>
            <Link
              to="/login"
              className="rounded border border-sky-500 bg-sky-500 px-4 py-3 text-gray-200 duration-500 hover:bg-gray-300 hover:text-sky-500"
            >
              Get Started
            </Link>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
