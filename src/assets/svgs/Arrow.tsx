import { keyOfColor } from '@/styles/theme/color';
import { Theme } from 'react-toastify';
import { ThemeProps } from 'styled-components';

type directionType = 'left' | 'right' | 'top' | 'bottom';

interface Props {
  direction: directionType;
  color: keyOfColor;
}

export const Arrow = ({ direction, color }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M10.875 19.3L4.275 12.7C4.175 12.6 4.104 12.4916 4.062 12.375C4.02067 12.2583 4 12.1333 4 12C4 11.8666 4.02067 11.7416 4.062 11.625C4.104 11.5083 4.175 11.4 4.275 11.3L10.875 4.69996C11.0583 4.51663 11.2873 4.42063 11.562 4.41196C11.8373 4.40396 12.075 4.49996 12.275 4.69996C12.475 4.88329 12.5793 5.11229 12.588 5.38696C12.596 5.66229 12.5 5.89996 12.3 6.09996L7.4 11H18.575C18.8583 11 19.096 11.0956 19.288 11.287C19.4793 11.479 19.575 11.7166 19.575 12C19.575 12.2833 19.4793 12.5206 19.288 12.712C19.096 12.904 18.8583 13 18.575 13H7.4L12.3 17.9C12.4833 18.0833 12.5793 18.3166 12.588 18.6C12.596 18.8833 12.5 19.1166 12.3 19.3C12.1167 19.5 11.8833 19.6 11.6 19.6C11.3167 19.6 11.075 19.5 10.875 19.3Z"
        fill={color}
      />
    </svg>
  );
};
