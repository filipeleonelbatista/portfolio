import styles from '../styles/components/ModalComponent.module.css'

export default function ModalComponent({ id, open, children, onClose, }) {
  if (open) {
    return (
      <div id={id} className={styles.overlay}>
        <div className={styles.modal}>
          <button
            onClick={onClose}
            type="button"
            className={styles.closeButton}
          >
            X
          </button>

          {children}

        </div>
      </div>
    )
  } else {
    return <></>
  }
}