import React from 'react';

const Openlytics = (props) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 12.7091C6.824 13.4067 9.14792 13.2323 10.9718 12.1858C13.7075 10.6162 15.2759 8 19.7968 8C24.3176 8 28 11.3939 28 16.3717H24.462C24.4706 13.4825 22.4603 11.4882 19.7085 11.4882C16.9567 11.4882 16.1625 13.0658 14.59 14.0172C13.0176 14.9685 10.9076 15.4283 8.942 15.238C7.99594 15.1464 6.58667 14.7378 5.412 13.93C5.11043 13.7226 4.63976 13.3156 4 12.7091Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 19.9995C6.824 19.3019 9.14792 19.4763 10.9718 20.5227C13.7075 22.0924 15.2759 24.7086 19.7968 24.7086C24.3176 24.7086 28 21.3147 28 16.3369H24.462C24.4706 19.2261 22.4603 21.2204 19.7085 21.2204C16.9567 21.2204 16.1625 19.6428 14.59 18.6914C13.0176 17.7401 10.9076 17.2803 8.942 17.4706C7.99594 17.5621 6.58667 17.9708 5.412 18.7786C5.11043 18.986 4.63976 19.393 4 19.9995Z"
          fill="url(#paint1_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8.7712"
          y1="15.8203"
          x2="16.631"
          y2="15.8203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDD745" />
          <stop offset="1" stopColor="#E93A5A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="8.7712"
          y1="16.8883"
          x2="16.631"
          y2="16.8883"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDD745" />
          <stop offset="1" stopColor="#E93A5A" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="24" height="16.7086" fill="white" transform="translate(4 8)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Openlytics;
