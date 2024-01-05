import githubMark from "@/assets/images/github-mark.svg";
import { Box } from "@/components";
import { Backdrop } from "@/features/home";

export function GitHub() {
  return (
    <Backdrop>
      <Box className="rounded-bl-xl bg-gray-200 p-3">
        <a
          href="https://github.com/puryazarchiny/hotel-pms"
          target="_blank"
          className="grid h-9 w-9 items-center justify-center rounded bg-gray-100"
        >
          <img src={githubMark} alt="Invertocat logo" className="w-6" />
        </a>
      </Box>
    </Backdrop>
  );
}
