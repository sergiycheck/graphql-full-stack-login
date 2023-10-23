import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const DialogHeader = ({ icon, headline, text, }) => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex items-center justify-center px-[24px] dark:text-white", children: icon }), _jsx("div", { className: "flex items-center justify-center px-[24px] text-headline-small dark:text-white", children: headline }), _jsx("p", { className: "flex items-center justify-center px-[24px] text-body-medium text-gray-500", children: text })] }));
};
export { DialogHeader };
