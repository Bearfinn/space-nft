import { FunctionComponent } from "react";
import IconObjective from "components/Explore/Objective";

interface RadarProps {
  onObjectiveClick: (distance: number) => void;
}

const coordinates = [
  {
    x: 321,
    y: 280,
    distance: 0,
  },
  {
    x: 290,
    y: 280,
    distance: 0,
  },
];

const Radar: FunctionComponent<RadarProps> = ({ onObjectiveClick }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 635 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.85" filter="url(#filter0_bii_319_3476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M317 257C289.386 257 267 279.386 267 307L217 307C217 293.868 219.587 280.864 224.612 268.732C229.638 256.599 237.003 245.575 246.289 236.289C255.575 227.003 266.599 219.637 278.732 214.612C290.864 209.587 303.868 207 317 207C330.132 207 343.136 209.587 355.268 214.612C367.401 219.638 378.425 227.003 387.711 236.289C396.997 245.575 404.362 256.599 409.388 268.732C414.413 280.864 417 293.868 417 307L367 307C367 279.386 344.614 257 317 257Z"
          fill="white"
          fillOpacity="0.1"
        />
      </g>
      <g opacity="0.85" filter="url(#filter1_bii_319_3476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.468 168.76C173.492 167.688 174.529 166.628 175.579 165.579C178.481 162.677 181.467 159.869 184.534 157.158C181.467 159.869 178.48 162.677 175.579 165.579C174.529 166.628 173.492 167.688 172.468 168.76ZM467 307C467 287.302 463.12 267.796 455.582 249.597C448.044 231.399 436.995 214.863 423.066 200.934C409.137 187.005 392.601 175.956 374.403 168.418C356.204 160.88 336.698 157 317 157C297.302 157 277.796 160.88 259.598 168.418C241.399 175.956 224.863 187.005 210.934 200.934C197.005 214.863 185.956 231.399 178.418 249.597C170.88 267.796 167 287.302 167 307H215C215 293.605 217.638 280.341 222.764 267.966C227.89 255.591 235.404 244.347 244.875 234.875C254.347 225.403 265.591 217.89 277.966 212.764C290.342 207.638 303.605 205 317 205C330.395 205 343.659 207.638 356.034 212.764C368.409 217.89 379.653 225.404 389.125 234.875C398.596 244.347 406.11 255.591 411.236 267.966C416.362 280.341 419 293.605 419 307H467Z"
          fill="#DADADA"
          fillOpacity="0.1"
        />
      </g>
      <g opacity="0.85" filter="url(#filter2_bii_319_3476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.224 230.463C122.173 254.728 117 280.736 117 307L165 307C165 287.039 168.932 267.274 176.57 248.832C184.209 230.391 195.405 213.634 209.52 199.52C223.634 185.405 240.391 174.209 258.832 166.57C277.274 158.932 297.039 155 317 155C336.961 155 356.726 158.932 375.168 166.57C393.609 174.209 410.366 185.405 424.48 199.52C438.595 213.634 449.791 230.391 457.43 248.832C465.068 267.274 469 287.039 469 307L517 307C517 280.736 511.827 254.729 501.776 230.463C491.725 206.198 476.993 184.15 458.421 165.579C439.85 147.007 417.802 132.275 393.537 122.224C369.272 112.173 343.264 107 317 107C290.736 107 264.728 112.173 240.463 122.224C216.198 132.275 194.15 147.007 175.579 165.579C157.007 184.15 142.275 206.198 132.224 230.463Z"
          fill="#AAAAAA"
          fillOpacity="0.1"
        />
      </g>
      <g opacity="0.85" filter="url(#filter3_bii_319_3476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M563 307C563 274.695 556.637 242.706 544.274 212.86C531.912 183.014 513.792 155.895 490.948 133.052C468.105 110.209 440.986 92.0884 411.14 79.7257C381.294 67.363 349.305 61.0001 317 61.0001C284.695 61.0001 252.706 67.363 222.86 79.7257C193.014 92.0883 165.895 110.209 143.052 133.052C120.209 155.895 102.088 183.014 89.7257 212.86C77.363 242.706 71 274.695 71 307H115.1C115.1 280.486 120.322 254.232 130.469 229.736C140.615 205.241 155.487 182.983 174.235 164.235C192.983 145.487 215.241 130.615 239.736 120.469C264.232 110.322 290.486 105.1 317 105.1C343.514 105.1 369.768 110.322 394.264 120.469C418.759 130.615 441.017 145.487 459.765 164.235C478.513 182.983 493.385 205.241 503.531 229.736C513.678 254.232 518.9 280.486 518.9 307H563Z"
          fill="#797979"
          fillOpacity="0.1"
        />
      </g>
      <g opacity="0.85" filter="url(#filter4_bii_319_3476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.8361 192.195C24.7597 228.593 17 267.603 17 307L69.2 307C69.2 274.458 75.6096 242.236 88.0627 212.171C100.516 182.107 118.769 154.789 141.779 131.779C164.789 108.769 192.107 90.5158 222.171 78.0627C252.236 65.6096 284.458 59.2 317 59.2C349.542 59.2 381.765 65.6096 411.829 78.0627C441.893 90.5158 469.211 108.769 492.221 131.779C515.231 154.789 533.484 182.107 545.937 212.171C558.39 242.236 564.8 274.458 564.8 307L617 307C617 267.603 609.24 228.593 594.164 192.195C579.087 155.797 556.99 122.726 529.132 94.868C501.274 67.0104 468.203 44.9126 431.805 29.8362C395.407 14.7598 356.397 7.00004 317 7.00003C277.603 7.00003 238.593 14.7598 202.195 29.8361C165.797 44.9126 132.726 67.0104 104.868 94.868C77.0104 122.726 54.9125 155.797 39.8361 192.195Z"
          fill="#7A7A7A"
          fillOpacity="0.1"
        />
      </g>

      {coordinates.map(({ x, y, distance }) => {
        return (
          <g
            transform={`translate(${x} ${y})`}
            key={`${x},${y}`}
            className="hover:cursor-pointer"
          >
            <IconObjective onClick={() => onObjectiveClick(distance)} />
          </g>
        );
      })}

      {/* Right wing */}
      <g transform="translate(359 239)">
        <IconObjective onClick={() => onObjectiveClick(1)} />
      </g>
      <g transform="translate(397 205)">
        <IconObjective onClick={() => onObjectiveClick(2)} />
      </g>
      <g transform="translate(434 172)">
        <IconObjective onClick={() => onObjectiveClick(3)} />
      </g>
      <g transform="translate(466 140)">
        <IconObjective onClick={() => onObjectiveClick(4)} />
      </g>
      <g transform="translate(507 106)">
        <IconObjective onClick={() => onObjectiveClick(5)} />
      </g>

      {/* Middle wing */}
      <g transform="translate(307 219)">
        <IconObjective onClick={() => onObjectiveClick(1)} />
      </g>
      <g transform="translate(307 172)">
        <IconObjective onClick={() => onObjectiveClick(2)} />
      </g>
      <g transform="translate(307 116)">
        <IconObjective onClick={() => onObjectiveClick(3)} />
      </g>
      <g transform="translate(307 69)">
        <IconObjective onClick={() => onObjectiveClick(4)} />
      </g>
      <g transform="translate(307 22)">
        <IconObjective onClick={() => onObjectiveClick(5)} />
      </g>

      {/* Left wing */}
      <g transform="translate(253 239)">
        <IconObjective onClick={() => onObjectiveClick(1)} />
      </g>
      <g transform="translate(220 205)">
        <IconObjective onClick={() => onObjectiveClick(2)} />
      </g>
      <g transform="translate(181 172)">
        <IconObjective onClick={() => onObjectiveClick(3)} />
      </g>
      <g transform="translate(147 142)">
        <IconObjective onClick={() => onObjectiveClick(4)} />
      </g>
      <g transform="translate(107 106)">
        <IconObjective onClick={() => onObjectiveClick(5)} />
      </g>
      <defs>
        <filter
          id="filter0_bii_319_3476"
          x="187"
          y="177"
          width="260"
          height="160"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_3476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_319_3476"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.890196 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_319_3476"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.572549 0 0 0 0 0.823529 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_319_3476"
            result="effect3_innerShadow_319_3476"
          />
        </filter>
        <filter
          id="filter1_bii_319_3476"
          x="137"
          y="127"
          width="360"
          height="210"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_3476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_319_3476"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.878431 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_319_3476"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.572549 0 0 0 0 0.823529 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_319_3476"
            result="effect3_innerShadow_319_3476"
          />
        </filter>
        <filter
          id="filter2_bii_319_3476"
          x="87"
          y="77.0001"
          width="460"
          height="260"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_3476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_319_3476"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.890196 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_319_3476"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.572549 0 0 0 0 0.823529 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_319_3476"
            result="effect3_innerShadow_319_3476"
          />
        </filter>
        <filter
          id="filter3_bii_319_3476"
          x="41"
          y="31.0001"
          width="552"
          height="306"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_3476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_319_3476"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.890196 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_319_3476"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.572549 0 0 0 0 0.823529 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_319_3476"
            result="effect3_innerShadow_319_3476"
          />
        </filter>
        <filter
          id="filter4_bii_319_3476"
          x="-13"
          y="-23"
          width="660"
          height="360"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_3476"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_319_3476"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.890196 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_319_3476"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.572549 0 0 0 0 0.823529 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_319_3476"
            result="effect3_innerShadow_319_3476"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Radar;
