export default function Ellipse3(props: Ellipse3Props) {
  return (
    <div>
      <div
        className="opacity-50 absolute w-[805px] h-[1361px] left-[635px] top-[221px] [filter:blur(400px)]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 805 1361"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_13_4)">
            <ellipse
              cx="686"
              cy="680.5"
              rx="286"
              ry="280.5"
              fill="#4FE7D4"
             />
          </g>
          <defs>
            <filter
              id="filter0_f_13_4"
              x="0"
              y="0"
              width="1372"
              height="1361"
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
                result="effect1_foregroundBlur_13_4"
               />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Ellipse3.defaultProps = {};

interface Ellipse3Props {}

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
