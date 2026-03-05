/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Smart Farm. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H18l-.5 3h-2v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.14 12.14 0 01-8.8-4.47 4.28 4.28 0 001.33 5.71 4.25 4.25 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54 12.1 12.1 0 008.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5a4.9 4.9 0 011.7 1.1 4.9 4.9 0 011.1 1.7c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5a4.9 4.9 0 01-1.1 1.7 4.9 4.9 0 01-1.7 1.1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5a4.9 4.9 0 01-1.7-1.1 4.9 4.9 0 01-1.1-1.7c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5a4.9 4.9 0 011.1-1.7 4.9 4.9 0 011.7-1.1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.5.5 3.6 1a7 7 0 00-2.5 2.5C.5 5.5.2 6.6.1 8 0 9.3 0 9.7 0 12c0 2.3 0 2.7.1 4 .1 1.4.4 2.5 1 3.4a7 7 0 002.5 2.5c.9.6 2 .9 3.4 1 1.3.1 1.7.1 4 .1s2.7 0 4-.1c1.4-.1 2.5-.4 3.4-1a7 7 0 002.5-2.5c.6-.9.9-2 .9-3.4.1-1.3.1-1.7.1-4s0-2.7-.1-4c-.1-1.4-.4-2.5-1-3.4a7 7 0 00-2.5-2.5c-.9-.6-2-.9-3.4-1C14.7 0 14.3 0 12 0zM12 5.8a6.2 6.2 0 106.2 6.2A6.21 6.21 0 0012 5.8zm0 10.2a4 4 0 114-4 4.01 4.01 0 01-4 4zm6.4-11.8a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
