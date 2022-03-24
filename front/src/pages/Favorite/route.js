import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'

const SVGRoute = ({style}) => {
   return (
      <Svg
         style={style}
         width="59"
         height="73"
         viewBox="0 0 59 73"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <Path
            d="M38.1544 59.3825L33.4076 59.4176C25.7357 59.4745 19.4471 53.3459 19.3063 45.6751L19.0475 31.5859C18.9067 23.9151 12.6181 17.7865 4.94619 17.8434L-16.6329 18.0033"
            stroke="#3367EF"
            strokeWidth="2"
            strokeLinecap="round"
         />
         <Circle
            opacity="0.5"
            cx="43.8262"
            cy="58.4338"
            r="10.2538"
            transform="rotate(-135 43.8262 58.4338)"
            fill="#3367EF"
         />
         <Circle
            cx="43.8262"
            cy="58.4338"
            r="6.665"
            transform="rotate(-135 43.8262 58.4338)"
            fill="#03A4FF"
         />
      </Svg>
   )
}

export default SVGRoute
