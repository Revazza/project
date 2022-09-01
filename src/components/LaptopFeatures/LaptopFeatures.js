import LaptopCpu from './CPU/LaptopCpu';
import styles from './LaptopFeatures.module.scss';
import LaptopModel from './LaptopModel/LaptopModel';
import LaptopRam from './RAM/LaptopRam';
import UploadFile from './UploadFile/UploadFile';

function LaptopFeatures() {
  return (
    <form className={styles.wrapper}>
      <UploadFile />
      <LaptopModel />
      <LaptopCpu />
      <LaptopRam />
    </form>
  )
}

export default LaptopFeatures;
