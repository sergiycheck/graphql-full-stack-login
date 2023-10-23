import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useId } from "react";
import { DialogBody } from "./DialogBody";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";
const Dialog = ({ children, isVisible, onClose }) => {
    const scrim = useId();
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }
    }, [isVisible]);
    if (!isVisible)
        return null;
    const handleClose = (e) => {
        e.target.id === scrim && onClose();
    };
    return (_jsx("div", { id: scrim, onClick: handleClose, className: `fixed inset-0 z-20 flex bg-gray-800/50`, children: _jsx("div", { className: "z-50 flex  flex-col items-center justify-center overflow-hidden", children: _jsx("div", { className: "absolute left-1/2 top-1/2 z-10 flex w-11/12 min-w-[280px] max-w-[580px] -translate-y-1/2 -translate-x-1/2 animate-fade-in flex-col gap-[16px] rounded-[28px] bg-indigo-50 pt-[24px] dark:bg-gray-900", children: children }) }) }));
};
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
export { Dialog };
