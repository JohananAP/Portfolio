export function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <svg
      width="30"
      height="33"
      viewBox="0 0 30 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="33" fill="" />
      <line
        x1="0.729621"
        y1="9.57941"
        x2="14.7296"
        y2="0.579411"
        stroke="black"
      />
      <line x1="1.5" y1="9" x2="1.5" y2="25" stroke="black" />
      <line
        x1="1.24807"
        y1="24.5659"
        x2="15.2481"
        y2="32.5659"
        stroke="black"
      />
      <line
        x1="14.7519"
        y1="32.5659"
        x2="28.7519"
        y2="24.5659"
        stroke="black"
      />
      <line x1="28.5" y1="25" x2="28.5" y2="9" stroke="black" />
      <line
        x1="14.2572"
        y1="0.571254"
        x2="29.2572"
        y2="9.57125"
        stroke="black"
      />
      <line
        x1="6.11739"
        y1="15.7773"
        x2="12.3787"
        y2="19.3545"
        stroke="black"
      />
      <line x1="18.5" y1="3" x2="18.5" y2="30" stroke="black" />
      <line x1="12.5" y1="2" x2="12.5" y2="27" stroke="black" />
      <line x1="23.5" y1="19" x2="23.5" y2="28" stroke="black" />
      <line x1="23.5" y1="11" x2="23.5" y2="15" stroke="black" />
      <line x1="6.5" y1="11" x2="6.5" y2="28" stroke="black" />
    </svg>
  );
}

export function BWLogo() {
  return (
    <svg
      width="38"
      height="41"
      viewBox="0 0 38 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="38" height="41" fill="" />
      <line
        x1="1.22962"
        y1="11.8294"
        x2="18.7296"
        y2="0.579411"
        stroke="black"
      />
      <line x1="1.5" y1="11" x2="1.5" y2="31" stroke="black" />
      <line
        x1="1.74807"
        y1="30.5659"
        x2="19.2481"
        y2="40.5659"
        stroke="black"
      />
      <line
        x1="18.7519"
        y1="40.5659"
        x2="36.2519"
        y2="30.5659"
        stroke="black"
      />
      <line x1="36.5" y1="31" x2="36.5" y2="11" stroke="black" />
      <line
        x1="18.0072"
        y1="0.571254"
        x2="36.7572"
        y2="11.8213"
        stroke="black"
      />
      <line
        x1="8.24803"
        y1="21.5659"
        x2="15.2484"
        y2="25.5653"
        stroke="black"
      />
      <line x1="22.5" y1="3" x2="22.5" y2="38" stroke="black" />
      <line x1="15.5" y1="3" x2="15.5" y2="31" stroke="black" />
      <line x1="29.5" y1="22" x2="29.5" y2="34" stroke="black" />
      <line x1="29.5" y1="13" x2="29.5" y2="18" stroke="black" />
      <line x1="8.5" y1="15" x2="8.5" y2="34" stroke="black" />
      <path d="M19 1L36.3205 11V31L19 41L1.67949 31V11L19 1Z" fill="black" />
      <line
        x1="1.22962"
        y1="11.8294"
        x2="18.7296"
        y2="0.579411"
        stroke="white"
      />
      <line x1="1.5" y1="11" x2="1.5" y2="31" stroke="white" />
      <line
        x1="1.74807"
        y1="30.5659"
        x2="19.2481"
        y2="40.5659"
        stroke="white"
      />
      <line
        x1="18.7519"
        y1="40.5659"
        x2="36.2519"
        y2="30.5659"
        stroke="white"
      />
      <line x1="36.5" y1="31" x2="36.5" y2="11" stroke="white" />
      <line
        x1="18.0072"
        y1="0.571254"
        x2="36.7572"
        y2="11.8213"
        stroke="white"
      />
      <line
        x1="8.24803"
        y1="21.5659"
        x2="15.2484"
        y2="25.5653"
        stroke="white"
      />
      <line x1="22.5" y1="3" x2="22.5" y2="38" stroke="white" />
      <line x1="15.5" y1="3" x2="15.5" y2="31" stroke="white" />
      <line x1="29.5" y1="22" x2="29.5" y2="34" stroke="white" />
      <line x1="29.5" y1="13" x2="29.5" y2="18" stroke="white" />
      <line x1="8.5" y1="15" x2="8.5" y2="34" stroke="white" />
    </svg>
  );
}
