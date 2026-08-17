import type { SVGprops } from "@type/components/atoms";

export const Menu = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" fill={color} />
  </svg>
);

export const Cross = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    fill={color}
    viewBox="-4.5 -4.5 24 24"
    id="cross"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
    />
  </svg>
);

export const Cart = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.83179 4.38657H3.34341C4.20256 4.38657 4.96125 4.94691 5.21392 5.76808L8.27786 15.7259C8.53053 16.547 9.28921 17.1074 10.1484 17.1074H17.1114C17.9373 17.1074 18.6743 16.5889 18.9534 15.8116L20.9925 10.1312C21.679 8.21867 20.2616 6.20383 18.2295 6.20383H10.66"
      stroke={color}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
    />
    <circle cx={10.1707} cy={20.5322} r={1.46779} fill={color} />
    <circle cx={17.0204} cy={20.5322} r={1.46779} fill={color} />
  </svg>
);

export const Heart = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  fill = "none",
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528zm-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656z"
      fill={color}
    />
  </svg>
);

export const ArrowDown = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    transform="rotate(180)"
    {...props}
  >
    <title>{"arrow-line"}</title>
    <path
      d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

export const ArrowUp = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"arrow-line"}</title>
    <path
      d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

export const ArrowRight = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    transform="rotate(90)"
    {...props}
  >
    <title>{"arrow-line"}</title>
    <path
      d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

export const ArrowLeft = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    transform="rotate(-90)"
    {...props}
  >
    <title>{"arrow-line"}</title>
    <path
      d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

export const Search = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    fill={color}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M11.1922 12.6064C10.0236 13.4816 8.57234 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.57234 13.4816 10.0236 12.6064 11.1922L15.7071 14.2929L14.2929 15.7071L11.1922 12.6064ZM5.58579 8.41421L4.17157 9.82843C2.60948 8.26633 2.60948 5.73367 4.17157 4.17157C5.73367 2.60948 8.26633 2.60948 9.82843 4.17157L8.41421 5.58579C7.63316 4.80474 6.36683 4.80474 5.58579 5.58579C4.80474 6.36684 4.80474 7.63316 5.58579 8.41421Z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export const Check = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 8.25 6.5 11.75 13 4.75"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Eye = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.75 12s3.25-6.25 9.25-6.25S21.25 12 21.25 12 18 18.25 12 18.25 2.75 12 2.75 12Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M12 14.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const EyeOff = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 4 16 16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M9.88 5.95A8.5 8.5 0 0 1 12 5.75c6 0 9.25 6.25 9.25 6.25a16.2 16.2 0 0 1-2.38 3.2M14.12 18.05a8.5 8.5 0 0 1-2.12.2C6 18.25 2.75 12 2.75 12a16.2 16.2 0 0 1 2.38-3.2"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M10.1 10.1a2.75 2.75 0 0 0 3.8 3.8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const Star = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  strokeWidth = 1,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    id="star"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <polygon
      id="primary"
      points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
      style={{
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: strokeWidth,
      }}
    />
  </svg>
);

export const StarFilled = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon
      points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
      style={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: props.strokeWidth || 1,
      }}
    />
  </svg>
);

export const HalfStarFilled = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs></defs>
    <linearGradient id="halfGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="50%" stopColor={color} />
      <stop offset="50%" stopColor="transparent" />
    </linearGradient>
    <polygon
      points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
      style={{
        fill: "url(#halfGradient)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: props.strokeWidth || 1,
      }}
    />

    <polygon
      points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
      fill="none"
      stroke={color}
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoginIcon = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M28,4H12a2,2,0,0,0-2,2H28V30H12V20.2H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <path
      d="M15.12,18.46a1,1,0,1,0,1.41,1.41l5.79-5.79L16.54,8.29a1,1,0,0,0-1.41,1.41L18.5,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1H18.5Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

export const Profile = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill="none"
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12}
      cy={7}
      r={5}
      stroke={color}
      strokeWidth={props.strokeWidth || 2}
    />
    <path
      d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
      stroke={color}
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DropDown = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="-6.5 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"dropdown"}</title>
    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
  </svg>
);

export const GoogleLogo = ({
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="-3 0 262 262"
    {...props}
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);

export const GitHubLogo = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width || size}
    height={height || size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"GitHub Logo"}</title>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

export const WhatsAppLogo = ({
  color = "#67C15E",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 48 48"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Icons"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Color-" transform="translate(-700.000000, -360.000000)">
        <path
          d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
          fill={color}
          id="Whatsapp"
        ></path>
      </g>
    </g>
  </svg>
);

export const FacebookLogo = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <title>{"Facebook Logo"}</title>
    {/* Background Circle */}
    <path
      fill={color}
      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
    />
    {/* Inner White 'f' Letter */}
    <path
      fill="#ffffff"
      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
    />
  </svg>
);

export const InstagramLogo = ({
  color = "#C13584", // Default to official Instagram pink/magenta
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <title>{"Instagram Logo"}</title>
    {/* Background Circle */}
    <circle cx="24" cy="24" r="20" fill={color} />
    {/* Outer Camera Body */}
    <path
      fill="#ffffff"
      d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
    />
    {/* Inner Camera Lens Ring */}
    <path
      fill="#ffffff"
      d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
    />
    {/* Camera Flash Dot */}
    <path
      fill="#ffffff"
      d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
    />
  </svg>
);

export const TikTokLogo = ({
  color = "none", // Default to current text color
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => {
  // Check if background is dark to dynamically adapt the central note core
  const isDarkBg = color === "black" || color === "#000000";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://w3.org"
      xmlnsXlink="http://w3.org"
      aria-label="TikTok"
      role="img"
      {...props}
    >
      <title>{"TikTok Logo"}</title>

      {/* Dynamic Background Container Card */}
      <rect rx="15%" height="512" width="512" fill={color} />

      <defs>
        {/* Exact native coordinate path definition for the TikTok glyph */}
        <path
          id="tiktok-note"
          d="M219 200a117 117 0 1 0 101 115v-128a150 150 0 0 0 88 28v-63a88 88 0 0 1-88-88h-64v252a54 54 0 1 1-37-51z"
        />

        {/* Custom SVG filter to replicate real chromatic aberration blending */}
        <filter id="tiktok-glitch-blend">
          <feBlend mode="screen" in="SourceGraphic" in2="BackgroundImage" />
        </filter>
      </defs>

      {/* Isolated Graphic Layer */}
      <g filter="url(#tiktok-glitch-blend)" style={{ isolation: "isolate" }}>
        {/* 1. Cyan Offset Under-Layer (Shifted Up and Left) */}
        <use
          xlinkHref="#tiktok-note"
          fill="#25F4EE"
          x="-14"
          y="-10"
          style={{ mixBlendMode: isDarkBg ? "screen" : "multiply" }}
        />

        {/* 2. Red/Magenta Offset Under-Layer (Shifted Down and Right) */}
        <use
          xlinkHref="#tiktok-note"
          fill="#FE2C55"
          x="14"
          y="10"
          style={{ mixBlendMode: isDarkBg ? "screen" : "multiply" }}
        />

        {/* 3. High-Contrast Center Core (Locks the icon shape in place) */}
        <use
          xlinkHref="#tiktok-note"
          fill={isDarkBg ? "#FFFFFF" : "#000000"}
          x="0"
          y="0"
        />
      </g>
    </svg>
  );
};

export const PaypalLogo = ({
  color = "var(--color-tertiary)",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <title>{"PayPal Logo"}</title>
    {/* Background Circle */}
    <circle cx={24} cy={24} r={20} fill={color} />

    {/* Monochromatic Layer 1 */}
    <path
      d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z"
      fill="white"
      fillOpacity={0.6}
    />

    {/* Monochromatic Layer 2 */}
    <path
      d="M31.3009 17.6871C31.1506 17.6434 30.9955 17.6036 30.8364 17.5678C30.6766 17.5328 30.5127 17.5018 30.3441 17.4748C29.754 17.3793 29.1074 17.334 28.4147 17.334H22.5676C22.4237 17.334 22.2869 17.3666 22.1644 17.4254C21.8948 17.5551 21.6944 17.8104 21.6459 18.1229L20.402 26.0013L20.3662 26.2311C20.4481 25.7126 20.8911 25.3308 21.4168 25.3308H23.6055C27.9041 25.3308 31.2699 23.5851 32.2537 18.5349C32.2831 18.3854 32.3078 18.2398 32.33 18.0975C32.0811 17.9655 31.8115 17.8525 31.5212 17.7563C31.4496 17.7324 31.3757 17.7094 31.3009 17.6871Z"
      fill="white"
      fillOpacity={0.8}
    />

    {/* Monochromatic Layer 3 */}
    <path
      d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6402 33.3381H19.2458L20.4022 26.0014L21.6461 18.1231Z"
      fill="white"
    />
  </svg>
);
export const MCBLogo = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 444.26 180.24"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    {...props}
  >
    <title>{"Mastercard Logo"}</title>
    <g id="_1_COL_-_BLACK_80_blk">
      <g>
        {/* Left Side Red Venn-Diagram Curves */}
        <g fill={color}>
          <path d="m46.67,121.39H0c22.31,35.79,65.66,58.84,110.88,58.85,13.43,0,26.53-1.94,39.05-5.78-6.48,1.4-13.11,2.11-19.85,2.1-37.31-.04-70.65-22.09-83.4-55.17Zm126.41,9.47c-14.3,18.33-35.93,28.84-59.42,28.84-17.69,0-34.34-5.93-47.71-16.86,16.3,17.96,39.7,28.11,65.49,28.11,31.05,0,58.72-14.92,74.37-40.09h-32.72Z" />
          <path d="m177.45,12.58C156.3-.87,127.16-3.12,123.19,3.86c-5.04,6.77-8.13,13.75-12.75,21.72,0,0,32.68-11.82,67.01-13.01Z" />
          <path d="m82.51,67.94c.06-.49.12-.97.18-1.45,1.43-10.2,5.98-20.41,11.65-29.81-14.27,5.54-39.76,16.18-53.12,26.43-2.43,25.61,12.2,59.06,45.54,74.06,5.71,2.62,18.32,7.37,36.16,8.16.67.03,1.3.03,1.98.05.03,0,.02,0,.04,0-.68-.36-1.31-.7-1.99-1.08-6.81-3.79-14.06-8.87-20.61-15.53-13.15-13.34-23.2-33.38-19.83-60.85Zm23.96-35.88c-7.24,11.3-13.37,24.11-14.44,35.58-.04.45-.08.89-.11,1.32-2.02,25.42,7.59,42.45,19.99,54.22,10.32,9.75,22.69,15.52,31.56,18.49-7.74-7.46-12.34-16.8-13.42-27.4h0v-.04c-.3-2.94-.33-5.96-.08-9.06.07-.86.16-1.72.27-2.59,3.2-29.69,25.85-51.87,26.03-52.05,16.05-17.98,34.83-28.91,42.45-32.91-29.57-1.64-61.34,3.33-92.23,14.43Z" />
        </g>

        {/* Right Side Corporate "mastercard" Typography Group */}
        <g fill="#58595b">
          <path d="m282.99,37.1h-17.13c-2.81,0-3.29.62-4.82,5.08l-21.96,66.09-22.95-67.5c-1.01-3.04-1.78-3.67-5.07-3.67h-19.77s-1.3.61.06,1.35c0,0,1.82.83,1.96,2.6v76.8c-.18,1.69-1.96,2.49-1.96,2.49-.46.25-.61.48-.61.69,0,.39.59.68.59.68h13.01c.88,0,1.64-.77,1.64-1.66v-62.55l21.33,59.78c1.39,3.79,2.02,4.44,4.43,4.44h10.28c2.42,0,3.72-.68,4.45-2.41.23-.67,21.69-61.8,21.69-61.8v62.55c0,1.03.91,1.66,1.65,1.66h13.14s1.64-.02,1.7-1.75v-1.34h0V38.75c0-.89-.76-1.65-1.65-1.65Z" />
          <path d="m436.27,81.01c-3.44-2.55-5.31-3.3-11.03-4.7,4.57-1.01,6.08-1.65,8.49-3.55,4.06-3.17,6.73-9.01,6.73-14.98,0-6.34-3.05-12.93-7.63-16.1-4.67-3.42-9.88-4.56-20.41-4.56h-34.49s-1.29.61.07,1.34c0,0,1.81.88,1.93,2.3v77.18c-.21,1.66-1.94,2.44-1.94,2.44-1.34.72-.04,1.36-.04,1.36h36.39c10.13,0,16.11-1.66,21.55-5.84,5.73-4.32,8.38-10.16,8.38-17.51s-3.04-13.71-7.99-17.38Zm-12.69,27.01c-2.65,2.28-5.58,3.19-11.92,3.19h-15.61v-63.7h15.98c7.24,0,11.93,5.08,11.93,12.83s-8.3,11.58-16.92,11.58h-1.09v.03s-1.3-.05-1.45,1.12v9.34s-.22,1.63,1.54,1.58v.02h3.41c9.37,0,18.3,4.49,18.3,13.37,0,4.19-1.53,8.25-4.19,10.65Z" />
          <path d="m362.43,39.39c-5.35-2.16-14.08-3.55-22.46-3.55-26.39,0-43.77,17.88-43.77,45.02,0,13.68,4.29,24.32,12.26,31.47,2.48,2.32,5.88,4.93,10.27,7.06.5.27,1.61.79,3.21,1.39,2.54.99,5.38,1.79,8.52,2.32,8.14,1.46,19.86,1.54,33.37-4.38.08-.02.2-.08.33-.12.02-.02.07-.05.1-.07h.02c.12-.06.18-.1.18-.1,1.56-.74,1.5-2.72,1.5-2.72h0c.03-.14.03-.3.03-.46v-8.62c0-.12-.02-.24-.03-.36v-2.97c-.23-2.75-3.19-.42-3.19-.42-5.36,3.8-12.01,6.03-19.21,5.9-18.04-.32-28.54-11.29-30.67-25.52-.12-1.27-.19-2.57-.19-3.91,0-18.27,12.3-31,30.32-30.83,10.48.1,17.01,3.44,19.8,5.02.21.12.37.22.5.32.36.29.79.69,1.12,1.26,0,0,.15.3.36.53.65.74,1.19-.31,1.19-.31v-11.76c0-2.03-1.02-3.17-3.55-4.19Z" />
        </g>
      </g>
    </g>
  </svg>
);

export const MasterCard = ({
  color = "currentColor", // Default to official Mastercard red
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.2116 2.00977H11.4316V15.9898H19.2116V2.00977Z"
      fill="#FF5F00"
    />
    <path
      d="M11.9209 9.00086C11.9209 6.27086 13.1709 3.69086 15.3209 2.01086C11.4609 -1.01914 5.87093 -0.349143 2.84093 3.51086C-0.189065 7.37086 0.480935 12.9609 4.34093 15.9909C7.56094 18.5209 12.1009 18.5209 15.3309 15.9909C13.1809 14.3109 11.9309 11.7309 11.9309 9.00086H11.9209Z"
      fill="#EB001B"
    />
    <path
      d="M29.7003 9.00004C29.7003 13.91 25.7203 17.89 20.8103 17.89C18.8203 17.89 16.8803 17.22 15.3203 15.99C19.1803 12.95 19.8503 7.36004 16.8103 3.50004C16.3703 2.94004 15.8703 2.44004 15.3203 2.01004C19.1803 -1.01996 24.7703 -0.359962 27.8003 3.51004C29.0303 5.08004 29.7003 7.01004 29.7003 9.00004Z"
      fill="#F79E1B"
    />
    <path
      d="M28.8516 14.5102V14.2202H28.9716V14.1602H28.6816V14.2202H28.8016V14.5102H28.8616H28.8516ZM29.4216 14.5102V14.1602H29.3316L29.2316 14.4002L29.1316 14.1602H29.0416V14.5102H29.1016V14.2502L29.2016 14.4702H29.2716L29.3716 14.2502V14.5102H29.4416H29.4216Z"
      fill="#F79E1B"
    />
  </svg>
);

export const PlusIcon = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    id="plus"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <path
      id="primary"
      d="M5,12H19M12,5V19"
      style={{
        fill: "none",
        stroke: "white",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: props.strokeWidth || 3,
      }}
    />
  </svg>
);

export const MinusIcon = ({
  color = "currentColor",
  size = 24,
  height = size,
  width = size,
  ...props
}: SVGprops) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    id="minus"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <path
      id="primary"
      d="M19,12H5"
      style={{
        fill: "none",
        stroke: "white",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: props.strokeWidth || 3,
      }}
    />
  </svg>
);
