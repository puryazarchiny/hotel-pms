import { Link } from "react-router-dom";

import hotelPMS from "@/assets/images/hotel-pms.png";
import { Box, Wrapper } from "@/components/containers";

export function Main() {
  return (
    <main>
      <section className="h-full">
        <Wrapper classes="h-full">
          <Box classes="flex h-full flex-col items-center gap-16 rounded-t-xl bg-gray-300 px-4 py-8">
            <Box>
              <img src={hotelPMS} alt="Hotel PMS" />
            </Box>

            <Box classes="flex flex-col items-center gap-8">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Hotel Property Management System
              </h1>

              <Link
                to="/auth/login"
                className="rounded border border-gray-200 bg-sky-500 px-4 py-3 text-gray-200 duration-500 hover:bg-gray-300 hover:text-sky-500"
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
