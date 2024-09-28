import * as React from "react"
const CircleSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width={16}
        height={16}
        className="e-font-icon-svg e-fas-dot-circle"
        viewBox="0 0 512 512"
        fill="currentcolor"
        {...props}
    >
        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" />
    </svg>
)
export default CircleSVG