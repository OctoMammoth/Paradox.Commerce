import React from 'react'
import Svg, {Path, Ellipse} from 'react-native-svg'

const SVGPoint = ({style}) => {
   return (
      <Svg
         style={style}
         width="100"
         height="57"
         viewBox="0 0 100 57"
         fill="none">
         <Path
            d="M17.5832 10.25C17.5832 13.308 13.7224 17.165 11.7015 18.9744C11.0102 19.5933 9.98944 19.5933 9.2982 18.9744C7.27728 17.165 3.4165 13.308 3.4165 10.25C3.4165 6.10786 6.58782 2.75 10.4998 2.75C14.4119 2.75 17.5832 6.10786 17.5832 10.25Z"
            fill="#3367EF"
         />
         <Path
            d="M11.7015 18.9744L13.3691 20.8369L11.7015 18.9744ZM15.0832 10.25C15.0832 10.8817 14.6 12.0305 13.4235 13.5498C12.3383 14.9512 10.9935 16.2527 10.0338 17.1119L13.3691 20.8369C14.4304 19.8867 16.0264 18.355 17.3768 16.6111C18.636 14.985 20.0832 12.6763 20.0832 10.25L15.0832 10.25ZM10.9658 17.1119C10.0062 16.2527 8.66133 14.9512 7.57616 13.5498C6.39971 12.0305 5.9165 10.8817 5.9165 10.25H0.916504C0.916504 12.6763 2.36369 14.985 3.62286 16.6111C4.97331 18.355 6.56927 19.8867 7.63058 20.8369L10.9658 17.1119ZM5.9165 10.25C5.9165 7.35202 8.10124 5.25 10.4998 5.25V0.25C5.0744 0.25 0.916504 4.86371 0.916504 10.25H5.9165ZM10.4998 5.25C12.8984 5.25 15.0832 7.35202 15.0832 10.25L20.0832 10.25C20.0832 4.86371 15.9253 0.25 10.4998 0.25V5.25ZM10.0338 17.1119C10.2919 16.8808 10.7078 16.8808 10.9658 17.1119L7.63058 20.8369C9.27111 22.3058 11.7286 22.3058 13.3691 20.8369L10.0338 17.1119Z"
            fill="#3367EF"
         />
         <Ellipse
            cx="10.5"
            cy="10.25"
            rx="2.125"
            ry="2.25"
            fill="white"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="5"
         />
         <Path
            d="M106.5 56L80.8941 29.9869C75.4664 24.4728 66.5949 24.4071 61.0861 29.8401L44.5387 46.1599C39.0299 51.5929 30.1585 51.5272 24.7308 46.0131L10.5 31.556"
            stroke="#3367EF"
            strokeWidth="2"
            strokeLinecap="round"
         />
      </Svg>
   )
}

export default SVGPoint
