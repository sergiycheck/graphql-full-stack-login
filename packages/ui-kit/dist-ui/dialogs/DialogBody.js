import { jsx as _jsx } from "react/jsx-runtime";
const DialogBody = ({ children, className, }) => {
    return (_jsx("div", { className: `flex w-full px-[24px] ${className || ""}`, children: children }));
};
export { DialogBody };
