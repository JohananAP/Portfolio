import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="mt-12 flex max-w-screen-2xl flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >
          &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/">
            Johanan Abhishek Prabhurai
          </a>
          . All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
