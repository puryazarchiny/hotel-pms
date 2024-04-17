import { Link } from "react-router-dom";

import githubMark from "@/assets/images/github-mark.svg";
import { Wrapper } from "@/features/home";

export function Header() {
  return (
    <header>
      <Wrapper>
        <div className="CONTAINER | grid grid-cols-[auto_1fr_auto]">
          <div className="BACKDROP | bg-gray-300">
            <Link
              to="/"
              className="flex rounded-br-2xl bg-gray-200 p-3 font-caveat text-3xl text-gray-700"
            >
              🛎️ Hotel PMS
            </Link>
          </div>
          <div className="SPACER | rounded-t-2xl bg-gray-300"></div>
          <div className="BACKDROP | bg-gray-300">
            <div className="CONTAINER | rounded-bl-2xl bg-gray-200 p-3">
              <a
                href="https://github.com/puryazarchiny/hotel-pms"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-100 bg-gray-100 hover:bg-gray-200"
              >
                <img src={githubMark} alt="Invertocat logo" className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
