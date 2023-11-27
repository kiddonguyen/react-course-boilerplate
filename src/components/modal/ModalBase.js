import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";
/**
 * Renders a modal component.
 *
 * @param {boolean} visible - Determines if the modal is visible.
 * @param {function} onClose - Callback function triggered when the modal is closed.
 * @param {ReactNode} children - The content to be rendered inside the modal.
 * @param {string} bodyClassName - Additional CSS classes for the modal body.
 * @return {ReactNode} The rendered modal component.
 */
const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
    return (
        <>
            <CSSTransition
                in={visible}
                timeout={250}
                classNames="zoom"
                unmountOnExit
            >
                {(status) => (
                    <Portal
                        visible={status !== "exited"}
                        onClose={onClose}
                        containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
                        bodyStyle={{ transition: "all 250ms" }}
                        bodyClassName={`relative z-10 content ${bodyClassName}`}
                    >
                        {children}
                    </Portal>
                )}
            </CSSTransition>
        </>
    );
};

export default ModalBase;
