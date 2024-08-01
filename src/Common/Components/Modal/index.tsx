// Common/Components/Modal.tsx
import React, { ElementType } from "react";
import ModalHeader from "./ModalHeader";
import { ModalBody, ModalFooter, ModalTitle } from "./ModalContent";
import { ModalContextProvider } from "./ModalContext";

interface ModalProps {
    show: boolean;
    onHide: () => void;
    className?: string;
    children: React.ReactNode;
    as?: ElementType;
    id?: string;
    placement?: string;
    dialogClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
    show,
    onHide,
    children,
    className = '',
    placement,
    id = "defaultModal",
    dialogClassName = '',
    as: Component = "div",
    ...props
}) => {
    if (!show) return null; // Only render if the modal should be shown

    return (
        <React.Fragment>
            <div
                {...props}
                id={id}
                className={`fixed inset-0 z-[1050] flex items-center justify-center ${className}`}
            >
                <ModalContextProvider show={show} onHide={onHide}>
                    <Component className={`bg-white rounded shadow-lg relative ${dialogClassName}`}>
                        {children}
                    </Component>
                </ModalContextProvider>
            </div>
            <div
                onClick={onHide}
                className="fixed inset-0 bg-slate-900/40 dark:bg-zink-800/70 z-[1049] backdrop-overlay"
                id="backDropDiv"
            ></div>
        </React.Fragment>
    );
};

export default Object.assign(Modal, {
    Header: ModalHeader,
    Title: ModalTitle,
    Body: ModalBody,
    Footer: ModalFooter
});
