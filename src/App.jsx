import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center flex-col w-sm border h-screen">
        <h1 className="container text-center text-[2rem] uppercase mb-[20px]">
          my app
        </h1>

        <div
          className={`max-w-sm p-6  border border-gray-200 rounded-lg shadow ${
            dark ? "dark:" : ""
          }dark:bg-gray-200 dark:border-gray-700`}
        >
          <a href="#">
            <h5
              class={`mb-2 text-2xl font-bold tracking-tight text-gray-900 text-gray-${
                dark ? 200 : 700
              }`}
            >
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p
            class={`mb-3 font-normal text-gray-700 dark:text-gray-${
              dark ? 200 : 700
            }`}
          >
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <div className="btns">
          <button
            className="border px-8 py-2 rounded-[10px] "
            onClick={() => setDark(true)}
          >
            Dark
          </button>
          <button
            className="border px-8 py-2 rounded-[10px] "
            onClick={() => setDark(false)}
          >
            Light
          </button>
          <button
            className="border px-8 py-2 rounded-[10px] "
            onClick={() => setDark(!dark)}
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
