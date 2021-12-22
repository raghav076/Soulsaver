import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import './modal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
};

export default function FadeInModal({isOpen, handleClose, component}) {

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Fade in={isOpen}>
          <Box sx={style}>
            <div className="close__icon__container"><CloseIcon className="icon" onClick={handleClose} /></div>
            {component}
          </Box>
        </Fade>
      </Modal>
  );
}
