import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Button = React.forwardRef((props, ref) => {
    return (_jsx("button", { className: "text-white bg-gray-800 hover:bg-gray-900 \n      focus:outline-none focus:ring-4 focus:ring-gray-300\n      font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 \n    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700", ref: ref, ...props }));
});
Button.displayName = "Button";
