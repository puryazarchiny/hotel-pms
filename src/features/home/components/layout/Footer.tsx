import { Wrapper } from "@/features/home";

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <div className="CONTAINER | grid grid-cols-[1fr_auto_1fr]">
          <div className="SPACER | rounded-b-2xl bg-gray-300"></div>
          <div className="BACKDROP | bg-gray-300">
            <p className="rounded-t-2xl bg-gray-200 p-3 text-gray-700">
              Made with ❤️ by{" "}
              <a
                href="https://github.com/puryazarchiny"
                target="_blank"
                className="bg-gray-700 font-caveat text-xl"
              >
                Purya Zarchiny
              </a>
            </p>
          </div>
          <div className="SPACER | rounded-b-2xl bg-gray-300"></div>
        </div>
      </Wrapper>
    </footer>
  );
}
