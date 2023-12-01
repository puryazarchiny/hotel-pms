import { Box, Wrapper } from "@/components/containers";
import { Backdrop, Spacer } from "@/components/layout";

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <Box classes="flex">
          <Spacer classes="rounded-b-xl" />

          <Backdrop>
            <p className="rounded-t-xl bg-gray-200 p-3 text-[#24292f]">
              Made with ♥ by{" "}
              <a
                href="https://github.com/puryazarchiny"
                target="_blank"
                className="font-caveat text-xl font-bold"
              >
                Purya Zarchiny
              </a>
            </p>
          </Backdrop>

          <Spacer classes="rounded-b-xl" />
        </Box>
      </Wrapper>
    </footer>
  );
}
