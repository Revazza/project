import styles from './LaptopFeatures.module.scss';
import LaptopModel from './LaptopModel/LaptopModel';
import UploadFile from './UploadFile/UploadFile';

function LaptopFeatures() {
  return (
    <form className={styles.wrapper}>
      <UploadFile />
      <LaptopModel />
    </form>
  )
}

export default LaptopFeatures;
