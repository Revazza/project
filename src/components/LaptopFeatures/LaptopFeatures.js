import styles from './LaptopFeatures.module.scss';
import UploadFile from './UploadFile/UploadFile';

function LaptopFeatures() {
  return (
    <form className={styles.wrapper}>
      <UploadFile />
      <button type='submit'>asdsad</button>
    </form>
  )
}

export default LaptopFeatures;
