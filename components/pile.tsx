export function Pile({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={className}>
      <svg
        width="192"
        height="208"
        viewBox="0 0 192 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2930_33"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="112"
          width="192"
          height="96"
        >
          <path
            d="M144 208H48C21.4903 208 0 186.51 0 160C0 133.49 21.4903 112 48 112H144C170.51 112 192 133.49 192 160C192 186.51 170.51 208 144 208Z"
            fill="white"
          />
        </mask>
        <g
          mask="url(#mask0_2930_33)"
          className="hover:-translate-y-1 transition ease-in-out duration-200"
        >
          <mask
            id="mask1_2930_33"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="112"
            width="192"
            height="96"
          >
            <path
              d="M191.99 208H0.01C0.00447715 208 0 207.996 0 207.99V112.01C0 112.004 0.00447715 112 0.01 112H191.99C191.996 112 192 112.004 192 112.01V207.99C192 207.996 191.996 208 191.99 208Z"
              fill="url(#paint0_linear_2930_33)"
            />
          </mask>
          <g mask="url(#mask1_2930_33)">
            <path
              d="M86.8101 116.192C92.3006 113.543 98.6994 113.543 104.19 116.192L187.532 156.397C190.548 157.852 190.548 162.148 187.532 163.603L104.19 203.808C98.6994 206.457 92.3006 206.457 86.8101 203.808L3.46807 163.603C0.452045 162.148 0.452052 157.852 3.46808 156.397L86.8101 116.192Z"
              fill="#F7931A"
              fillOpacity="1"
            />
          </g>
        </g>
        <mask
          id="mask2_2930_33"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="56"
          width="192"
          height="96"
        >
          <path
            d="M144 152H48C21.4903 152 0 130.51 0 104C0 77.4903 21.4903 56 48 56H144C170.51 56 192 77.4903 192 104C192 130.51 170.51 152 144 152Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_2930_33)">
          <mask
            id="mask3_2930_33"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="56"
            width="192"
            height="96"
          >
            <path
              d="M191.99 152H0.01C0.00447715 152 0 151.996 0 151.99V56.01C0 56.0045 0.00447715 56 0.01 56H191.99C191.996 56 192 56.0045 192 56.01V151.99C192 151.996 191.996 152 191.99 152Z"
              fill="url(#paint1_linear_2930_33)"
            />
          </mask>
          <g
            mask="url(#mask3_2930_33)"
            className="hover:-translate-y-1 transition ease-in-out duration-200"
          >
            <path
              d="M86.8101 60.1921C92.3006 57.5434 98.6994 57.5434 104.19 60.1921L187.532 100.397C190.548 101.852 190.548 106.148 187.532 107.603L104.19 147.808C98.6994 150.457 92.3006 150.457 86.8101 147.808L3.46807 107.603C0.452045 106.148 0.452052 101.852 3.46808 100.397L86.8101 60.1921Z"
              fill="#FC6432"
              fillOpacity="1"
            />
          </g>
        </g>
        <g filter="url(#filter0_ii_2930_33)">
          <mask
            id="mask4_2930_33"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="192"
            height="96"
          >
            <path
              d="M144 96H48C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0H144C170.51 0 192 21.4903 192 48C192 74.5097 170.51 96 144 96Z"
              fill="white"
            />
          </mask>
          <g
            mask="url(#mask4_2930_33)"
            className="hover:-translate-y-1 transition ease-in-out duration-200"
          >
            <path
              d="M86.8101 4.19209C92.3006 1.54339 98.6994 1.54339 104.19 4.19209L187.532 44.3973C190.548 45.8523 190.548 50.1477 187.532 51.6027L104.19 91.808C98.6994 94.457 92.3006 94.457 86.8101 91.808L3.46807 51.6027C0.452045 50.1477 0.452052 45.8523 3.46808 44.3973L86.8101 4.19209Z"
              fill="#622DBC"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_ii_2930_33"
            x="1.20605"
            y="2.20557"
            width="188.588"
            height="91.5894"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"
            />
            <feBlend
              mode="overlay"
              in2="shape"
              result="effect1_innerShadow_2930_33"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_2930_33"
              result="effect2_innerShadow_2930_33"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2930_33"
            x1="96"
            y1="208"
            x2="96"
            y2="112"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25" stopColor="white" />
            <stop offset="0.308948" stopColor="#FDFDFD" />
            <stop offset="0.356918" stopColor="#F7F7F7" />
            <stop offset="0.3956" stopColor="#EDEDED" />
            <stop offset="0.426681" stopColor="#E0E0E0" />
            <stop offset="0.451852" stopColor="#D1D1D1" />
            <stop offset="0.4728" stopColor="#BFBFBF" />
            <stop offset="0.491215" stopColor="#ABABAB" />
            <stop offset="0.508785" stopColor="#969696" />
            <stop offset="0.5272" stopColor="#808080" />
            <stop offset="0.548148" stopColor="#6A6A6A" />
            <stop offset="0.573318" stopColor="#535353" />
            <stop offset="0.6044" stopColor="#3D3D3D" />
            <stop offset="0.643081" stopColor="#272727" />
            <stop offset="0.691052" stopColor="#131313" />
            <stop offset="0.75" stopColor="#080808" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2930_33"
            x1="96"
            y1="152"
            x2="96"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25" stopColor="white" />
            <stop offset="0.308948" stopColor="#FDFDFD" />
            <stop offset="0.356918" stopColor="#F7F7F7" />
            <stop offset="0.3956" stopColor="#EDEDED" />
            <stop offset="0.426681" stopColor="#E0E0E0" />
            <stop offset="0.451852" stopColor="#D1D1D1" />
            <stop offset="0.4728" stopColor="#BFBFBF" />
            <stop offset="0.491215" stopColor="#ABABAB" />
            <stop offset="0.508785" stopColor="#969696" />
            <stop offset="0.5272" stopColor="#808080" />
            <stop offset="0.548148" stopColor="#6A6A6A" />
            <stop offset="0.573318" stopColor="#535353" />
            <stop offset="0.6044" stopColor="#3D3D3D" />
            <stop offset="0.643081" stopColor="#272727" />
            <stop offset="0.691052" stopColor="#131313" />
            <stop offset="0.75" stopColor="#080808" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
