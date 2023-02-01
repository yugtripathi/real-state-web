export default function Ellipse2(props: Ellipse2Props) {
  return (
    <div>
      <div
        className="opacity-50 left-0 top-0 absolute w-[771px] h-[1163px] [filter:blur(400px)]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 771 1163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_13_3)">
            <ellipse
              cx="101.5"
              cy="455"
              rx="269.5"
              ry="308"
              fill="#7A4DFB"
             />
          </g>
          <defs>
            <filter
              id="filter0_f_13_3"
              x="-568"
              y="-253"
              width="1339"
              height="1416"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
               />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_13_3"
               />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Ellipse2.defaultProps = {};

interface Ellipse2Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
