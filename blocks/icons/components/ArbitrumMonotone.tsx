import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ArbitrumMonotone: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ArbitrumMonotone"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_8547_11033)">
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z"
              fill="var(--surface-tertiary)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.02206 6.4834L9.44362 3.92956C9.61165 3.83254 9.80225 3.78223 9.99629 3.78223C10.1903 3.78223 10.381 3.8333 10.549 3.93032L14.9757 6.48939C15.1435 6.58639 15.2828 6.7258 15.3797 6.89359C15.4766 7.06144 15.5277 7.25176 15.5278 7.44557L15.5306 12.5588C15.5307 12.753 15.4796 12.9437 15.3826 13.1118C15.2856 13.2799 15.146 13.4195 14.9779 13.5165L10.5564 16.0696C10.3883 16.1666 10.1977 16.2177 10.0036 16.2177C9.80959 16.2177 9.61899 16.1666 9.45096 16.0696L5.02425 13.5106C4.85647 13.4136 4.71714 13.2742 4.62023 13.1064C4.52333 12.9385 4.47225 12.7482 4.47213 12.5544L4.46936 7.44107C4.46929 7.24698 4.52033 7.05628 4.61735 6.88816C4.71437 6.72004 4.85396 6.58044 5.02206 6.4834ZM7.99995 14.168C7.97838 14.194 7.96364 14.2249 7.95686 14.2579C7.9817 14.2923 8.01585 14.3188 8.05526 14.3345C8.62735 14.6613 9.19839 14.9896 9.76841 15.3193C9.8304 15.3593 9.90262 15.3806 9.97641 15.3806C10.0502 15.3806 10.1224 15.3593 10.1844 15.3193C10.5714 15.095 10.9582 14.8704 11.3448 14.6454C11.4687 14.5854 11.586 14.5125 11.6946 14.428C11.7122 14.386 11.691 14.3537 11.6706 14.3225C11.6678 14.3182 11.665 14.3138 11.6623 14.3095C11.5758 14.1708 11.4876 14.0332 11.3995 13.8956C11.372 13.8528 11.3446 13.81 11.3172 13.7671C11.1769 13.5475 11.0371 13.3275 10.8974 13.1075C10.625 12.6788 10.3527 12.2501 10.0762 11.824C10.0581 11.8012 10.0477 11.7733 10.0463 11.7442C10.0449 11.7151 10.0527 11.6863 10.0686 11.6619C10.2379 11.3781 10.4057 11.0934 10.5735 10.8087C10.7135 10.5711 10.8536 10.3335 10.9945 10.0964C11.0375 10.0245 11.0447 10.025 11.0904 10.0964C11.309 10.4385 11.5264 10.7816 11.7438 11.1245C11.8805 11.3403 12.0171 11.5559 12.1541 11.7713C12.2684 11.9513 12.3826 12.1315 12.4967 12.3116C12.7266 12.6746 12.9566 13.0376 13.1885 13.3994C13.193 13.4063 13.1972 13.4135 13.2015 13.4208C13.2219 13.4554 13.2428 13.4908 13.2877 13.502C13.3883 13.4667 13.4833 13.4172 13.5697 13.3548C13.5806 13.349 13.5921 13.3438 13.6035 13.3385C13.6473 13.3184 13.6919 13.2979 13.716 13.2501C13.7151 13.2069 13.6993 13.1653 13.6711 13.1325C13.5194 12.8879 13.3679 12.6431 13.2166 12.398L12.0956 10.5847C11.877 10.2301 11.6579 9.87582 11.4385 9.52172C11.4192 9.5001 11.4072 9.47287 11.4043 9.44402C11.4013 9.41512 11.4076 9.38608 11.4222 9.36101C11.6884 8.90994 11.9547 8.45892 12.2212 8.00804C12.2624 7.93799 12.2699 7.93895 12.3111 8.00417C12.4266 8.18709 12.544 8.36903 12.6613 8.55095C12.7232 8.64707 12.7852 8.74318 12.8469 8.83943C13.3781 9.66321 13.9076 10.4881 14.4352 11.314C14.4513 11.3392 14.4672 11.3644 14.4831 11.3897C14.5326 11.4681 14.582 11.5466 14.6357 11.622C14.6383 11.6258 14.641 11.6302 14.6438 11.6348C14.6589 11.6599 14.6773 11.6905 14.7172 11.6519C14.7271 11.6197 14.7308 11.5858 14.728 11.5521C14.7291 10.1853 14.7291 8.81832 14.728 7.45139C14.7324 7.37267 14.7141 7.29432 14.6754 7.22564C14.6366 7.15693 14.5791 7.10079 14.5094 7.06378C14.4862 7.0508 14.4634 7.03721 14.4405 7.02361C14.4212 7.01215 14.402 7.00069 14.3825 6.98958C13.787 6.6482 13.1918 6.30627 12.5969 5.9637C12.3723 5.83444 12.1475 5.70551 11.9226 5.57658C11.3579 5.2527 10.793 4.92878 10.2318 4.5994C10.1515 4.54554 10.057 4.51678 9.96032 4.51678C9.86367 4.51678 9.76919 4.54554 9.68891 4.5994C9.36314 4.79296 9.03477 4.98212 8.70638 5.17129C8.6046 5.22992 8.50281 5.28855 8.40111 5.34731C8.07769 5.53416 7.75463 5.72166 7.43158 5.90915C6.7925 6.28006 6.15342 6.65097 5.51155 7.01686C5.41343 7.06304 5.33134 7.13762 5.27603 7.2309C5.22071 7.32423 5.19469 7.43198 5.20129 7.54024C5.2074 8.47384 5.20657 9.40749 5.20574 10.3411C5.20546 10.6641 5.20517 10.9871 5.20517 11.31C5.2032 11.3468 5.20407 11.3836 5.2078 11.4202C5.20848 11.4245 5.20885 11.4291 5.20923 11.4338C5.21098 11.4557 5.21288 11.4793 5.24762 11.4793C5.25164 11.4733 5.25571 11.4673 5.25978 11.4613C5.26775 11.4496 5.27571 11.4379 5.28335 11.426C6.01958 10.2898 6.75299 9.15195 7.48367 8.01228C7.62991 7.77986 7.84878 7.60214 8.10632 7.50678C8.38908 7.40382 8.68888 7.35552 8.9897 7.36442C9.14399 7.36578 9.29843 7.37097 9.45289 7.37616C9.51279 7.37817 9.57269 7.38019 9.63259 7.38198C9.63497 7.38207 9.63748 7.38194 9.64005 7.38181C9.65211 7.38119 9.66538 7.38051 9.67245 7.40202L5.67341 13.8158C5.71601 13.8403 5.75801 13.8644 5.79955 13.8882C5.90249 13.9471 6.00261 14.0044 6.10194 14.0631C6.1342 14.0818 6.15227 14.077 6.16812 14.0463C6.17336 14.0364 6.17927 14.0267 6.18519 14.0171C6.1873 14.0137 6.18941 14.0103 6.19149 14.0068C7.09012 12.5246 7.98866 11.0423 8.88711 9.55993C9.31121 8.86072 9.73481 8.16128 10.1579 7.46171C10.1666 7.43936 10.1819 7.42023 10.2019 7.40686C10.2218 7.3935 10.2453 7.38658 10.2693 7.387C10.6803 7.38751 11.0912 7.38571 11.5019 7.38392C11.652 7.38327 11.8021 7.38261 11.9521 7.38207C11.9537 7.38207 11.9554 7.38198 11.957 7.3819C11.967 7.38138 11.9781 7.3808 11.9879 7.39806C11.9831 7.40662 11.9782 7.41557 11.9732 7.42476C11.9619 7.44531 11.9499 7.46707 11.9373 7.48844C10.6246 9.71488 9.31218 11.9414 7.99995 14.168Z"
              fill="var(--icon-primary)"
            />
          </g>
          <defs>
            <clipPath id="clip0_8547_11033">
              <path
                d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArbitrumMonotone;
