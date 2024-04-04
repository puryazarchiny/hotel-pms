import { Backdrop, Spacer, Wrapper } from "@/features/home";

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <div className="grid grid-cols-[1fr_auto_1fr]">
          <Spacer className="rounded-b-xl" />

          <Backdrop>
            <p className="rounded-t-xl bg-gray-200 p-3 text-gray-700">
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

          <Spacer className="rounded-b-xl" />
        </div>
      </Wrapper>
    </footer>
  );
}
