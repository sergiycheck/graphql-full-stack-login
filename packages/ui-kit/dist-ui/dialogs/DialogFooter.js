import { jsx as _jsx } from "react/jsx-runtime";
const DialogFooter = ({ children, className, }) => {
    return (_jsx("div", { className: `mb-[24px] mt-[8px] flex items-center justify-end gap-[8px] px-[24px] ${className || ""}`, children: children }));
};
export { DialogFooter };
