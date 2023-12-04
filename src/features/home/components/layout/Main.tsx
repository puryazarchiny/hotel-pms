import { Link } from "react-router-dom";

import hotelPMS from "@/assets/images/hotel-pms.png";
import { Box } from "@/components";
import { Wrapper } from "@/features/home";

export function Main() {
  return (
    <main>
      <section className="h-full">
        <Wrapper>
          <Box className="grid h-full justify-items-center rounded-t-xl bg-gray-300 p-4">
            <Box className="self-center">
              <img src={hotelPMS} alt="Hotel PMS" />
            </Box>

            <Box className="grid grid-rows-[auto_1fr] justify-items-center gap-8">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Hotel Property Management System
              </h1>

              <Link
                to="/auth/login"
                className="self-start rounded border border-gray-200 bg-sky-500 px-4 py-3 text-gray-100 duration-500 hover:bg-gray-300 hover:text-sky-500"
              >
                Get Started
              </Link>
            </Box>
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
