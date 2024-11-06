import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const InboxBell: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="InboxBell"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.36 5.32051L13.711 6.25689L14.1438 6.09464L14.3007 5.65978L13.36 5.32051ZM20.3848 5.3336L19.4426 5.66871L19.597 6.10273L20.0271 6.26747L20.3848 5.3336ZM27.6096 20.7373L26.7644 21.2718L26.769 21.279L26.7736 21.2861L27.6096 20.7373ZM27.6212 22.4382L26.7781 21.9002L26.7735 21.9077L27.6212 22.4382ZM26.9436 23.0594L26.4777 22.1746L26.4777 22.1746L26.9436 23.0594ZM26.016 23.2833L26.0218 22.2833H26.016V23.2833ZM7.72401 23.2833V22.2833L7.71818 22.2833L7.72401 23.2833ZM6.79641 23.0594L7.26229 22.1746L7.26229 22.1746L6.79641 23.0594ZM6.11884 22.4382L6.96656 21.9077L6.96183 21.9002L6.11884 22.4382ZM5.87003 21.5863L4.87005 21.5795L5.87003 21.5863ZM6.13039 20.7373L6.96635 21.2861L6.97104 21.279L6.9756 21.2718L6.13039 20.7373ZM7.63162 13.1416H8.63162L8.63162 13.1403L7.63162 13.1416ZM8.33176 9.90579L9.243 10.3177L8.33176 9.90579ZM10.3341 7.16251L11.0091 7.90034L10.3341 7.16251ZM13.3328 5.33074L12.979 4.39542L12.979 4.39542L13.3328 5.33074ZM14.3007 5.65978C14.6327 4.73922 15.6217 3.99996 16.87 3.99996V1.99996C14.8461 1.99996 13.0595 3.2062 12.4193 4.98125L14.3007 5.65978ZM16.87 3.99996C18.1226 3.99996 19.1137 4.74403 19.4426 5.66871L21.3269 4.99848C20.6922 3.214 18.9004 1.99996 16.87 1.99996V3.99996ZM27.1084 13.2367C27.1084 9.21727 24.4323 5.81276 20.7424 4.39973L20.0271 6.26747C23.0457 7.42341 25.1084 10.1505 25.1084 13.2367H27.1084ZM27.1084 13.9868V13.2367H25.1084V13.9868H27.1084ZM28.4548 20.2029C27.8917 19.3123 27.1084 17.4558 27.1084 13.9868H25.1084C25.1084 17.7648 25.9649 20.0073 26.7644 21.2718L28.4548 20.2029ZM28.8699 21.5795C28.8666 21.0825 28.7169 20.6018 28.4456 20.1885L26.7736 21.2861C26.8391 21.3859 26.8693 21.4917 26.87 21.5931L28.8699 21.5795ZM28.4641 22.9761C28.7301 22.5593 28.8733 22.0766 28.8699 21.5795L26.87 21.5931C26.8707 21.6945 26.842 21.8002 26.7782 21.9002L28.4641 22.9761ZM27.4095 23.9443C27.8404 23.7174 28.2091 23.3838 28.4688 22.9687L26.7735 21.9077C26.7099 22.0093 26.6109 22.1045 26.4777 22.1746L27.4095 23.9443ZM26.0102 24.2833C26.4963 24.2861 26.9789 24.171 27.4095 23.9443L26.4777 22.1746C26.3442 22.2449 26.1865 22.2843 26.0218 22.2833L26.0102 24.2833ZM7.72401 24.2833H26.016V22.2833H7.72401V24.2833ZM6.33053 23.9443C6.7611 24.171 7.24368 24.2861 7.72983 24.2833L7.71818 22.2833C7.55349 22.2843 7.39582 22.2449 7.26229 22.1746L6.33053 23.9443ZM5.27115 22.9687C5.53094 23.3838 5.89961 23.7174 6.33053 23.9443L7.26229 22.1746C7.12911 22.1045 7.03011 22.0093 6.96653 21.9077L5.27115 22.9687ZM4.87005 21.5795C4.86668 22.0766 5.00986 22.5593 5.27585 22.9761L6.96183 21.9002C6.89801 21.8002 6.86932 21.6945 6.87001 21.5931L4.87005 21.5795ZM5.29442 20.1885C5.02312 20.6018 4.87343 21.0825 4.87005 21.5795L6.87001 21.5931C6.8707 21.4917 6.90085 21.3859 6.96635 21.2861L5.29442 20.1885ZM6.63162 13.9868C6.63162 17.4558 5.84831 19.3123 5.28517 20.2029L6.9756 21.2718C7.77512 20.0073 8.63162 17.7648 8.63162 13.9868H6.63162ZM6.63162 13.1416V13.9868H8.63162V13.1416H6.63162ZM7.42051 9.49392C6.89894 10.6479 6.6299 11.8882 6.63162 13.143L8.63162 13.1403C8.6303 12.1746 8.8371 11.2157 9.243 10.3177L7.42051 9.49392ZM9.65911 6.42467C8.70428 7.29816 7.94194 8.34027 7.42051 9.49392L9.243 10.3177C9.64904 9.41931 10.2476 8.59697 11.0091 7.90034L9.65911 6.42467ZM12.979 4.39542C11.7426 4.8631 10.6138 5.55135 9.65911 6.42467L11.0091 7.90034C11.7708 7.20354 12.68 6.64684 13.6866 6.26607L12.979 4.39542ZM13.009 4.38414C12.999 4.38789 12.989 4.39165 12.979 4.39542L13.6866 6.26607C13.6948 6.26299 13.7029 6.25993 13.711 6.25689L13.009 4.38414Z"
            fill="currentColor"
          />
          <path
            d="M16.87 26.9999C19.0791 26.9999 20.87 25.3475 20.87 23.3091H12.87C12.87 25.3475 14.6609 26.9999 16.87 26.9999Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default InboxBell;
