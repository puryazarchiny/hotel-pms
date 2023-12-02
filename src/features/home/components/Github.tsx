import githubMark from "@/assets/images/github-mark.svg";

export function Github() {
  return (
    <a
      href="https://github.com/puryazarchiny/hotel-pms"
      target="_blank"
      className="flex h-9 w-9 items-center justify-center rounded bg-gray-100"
    >
      <img src={githubMark} alt="Invertocat logo" className="w-6" />
    </a>
  );
}
