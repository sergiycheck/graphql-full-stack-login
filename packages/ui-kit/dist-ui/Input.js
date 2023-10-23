import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Input = React.forwardRef((props, ref) => {
    return (_jsx("input", { className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg \n      bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 \n      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 \n      dark:focus:border-blue-500", ref: ref, ...props }));
});
Input.displayName = "Input";
