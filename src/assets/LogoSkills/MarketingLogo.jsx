import React from "react";

const MarketingLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#marketing_svg__a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.5 24a23.909 23.909 0 0 0-6.002-15.877l.623-.623H48.5v-3H44V0h-3v5.379l-.623.623A23.909 23.909 0 0 0 24.5 0C11.245 0 .5 10.745.5 24s10.745 24 24 24 24-10.745 24-24Zm-3 0c0 11.598-9.402 21-21 21s-21-9.402-21-21 9.402-21 21-21c5.26 0 10.067 1.933 13.75 5.128l-4.968 4.969A13.941 13.941 0 0 0 24.5 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14c0-3.326-1.16-6.38-3.096-8.782l4.968-4.969A20.919 20.919 0 0 1 45.5 24Zm-21-11c2.497 0 4.8.832 6.645 2.233l-4.903 4.904A5.874 5.874 0 0 1 25.5 18h-2a5.884 5.884 0 0 1-5 5v2a5.884 5.884 0 0 1 5 5h2a5.884 5.884 0 0 1 5-5v-2a5.874 5.874 0 0 1-2.137-.742l4.904-4.903A10.952 10.952 0 0 1 35.5 24c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11Z"
          fill="url(#marketing_svg__b)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="marketing_svg__b"
          x1="28.532"
          y1="-6.387"
          x2="-4.052"
          y2="4.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FEA435"></stop>
          <stop offset="1" stop-color="#BD4CF2"></stop>
        </linearGradient>
        <clipPath id="marketing_svg__a">
          <path fill="#fff" transform="translate(.5)" d="M0 0h48v48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default MarketingLogo;
