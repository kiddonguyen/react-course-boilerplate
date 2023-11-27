import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
function createPortalWrapper() {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
    containerClassName = "",
    bodyClassName = "",
    containerStyle = {},
    bodyStyle = {},
    onClose = () => {},
    overlay = true,
    children,
}) => {
    const portalRef = useRef(null);
    useEffect(() => {
        document.body.appendChild(portalWrapperElm);
        portalRef.current = portalWrapperElm;
        return () => {
            // Cleanup: Remove the portal wrapper when unmounting
            document.body.removeChild(portalRef.current);
        };
    }, []);
    const renderContent = (
        <div className={containerClassName} style={containerStyle}>
            {overlay && (
                <div
                    className="absolute inset-0 bg-black overlay bg-opacity-20"
                    onClick={onClose}
                ></div>
            )}
            <div className={bodyClassName} style={bodyStyle}>
                {children}
            </div>
        </div>
    );
    // If the portal ref is null, then the portal wrapper element has not yet been created.
    // In this case, we can't render the portal.
    if (portalRef.current === null) {
        return null;
    }
    return createPortal(renderContent, portalRef.current);
};
Portal.propTypes = {
    containerClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    onClose: PropTypes.func,
    children: PropTypes.node,
    overlay: PropTypes.bool,
};

export default Portal;
