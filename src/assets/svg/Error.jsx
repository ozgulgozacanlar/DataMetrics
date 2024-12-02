import * as React from 'react';

const Error = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <ellipse
      cx={256}
      cy={256}
      rx={256}
      ry={255.832}
      style={{
        fill: '#e04f5f',
      }}
    />
    <path
      d="M3.98-427.615h55.992v285.672H3.98z"
      style={{
        fill: '#fff',
      }}
      transform="rotate(134.999 32.003 32.001)"
    />
    <path
      d="M-110.828-312.815h285.672v55.992h-285.672z"
      style={{
        fill: '#fff',
      }}
      transform="rotate(134.999 32.003 32.001)"
    />
  </svg>
);
export default Error;
