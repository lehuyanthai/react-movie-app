import React, { useEffect, useState, useRef } from "react";
import './modal.scss'
import PropTypes from "prop-types";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = props =>{
    const contentRef = useRef(null)

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }
    
    return (
        <div className="modal__content" onClick={closeModal}>
            <i className="bx bx-x"></i>
        </div>
    )
}

ModalContent.prototype = {
    onClose: PropTypes.func
}

export default Modal;
