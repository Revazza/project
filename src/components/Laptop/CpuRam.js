import useFetch from "../../hooks/useFetch";
import laptopStyles from "./Laptop.module.scss";

function CpuRam(props) {
  const { data: brands } = useFetch(`/brands`);

  const brand = brands?.find((x) => x.id === props.laptop?.brand_id)?.name;
  console.log(props.laptop);

  const cpu = props.laptop?.cpu;

  return (
    <div className={laptopStyles.cpu_ram}>
      <div className={laptopStyles.ram}>
        <div className={laptopStyles.detailed_info} id={laptopStyles.ramInfo}>
          <p className={laptopStyles.firstP}>ლეპტოპის სახელი: </p>
          <p>{props.laptop?.name}</p>
        </div>
        <div className={laptopStyles.detailed_info} id={laptopStyles.ramInfo}>
          <p className={laptopStyles.firstP}>ლეპტოპის ბრენდი: </p>
          <p>{brand}</p>
        </div>
        <div className={laptopStyles.detailed_info} id={laptopStyles.ramInfo}>
          <p className={laptopStyles.firstP}>RAM: </p>
          <p>{props.laptop?.ram}</p>
        </div>
        <div className={laptopStyles.detailed_info} id={laptopStyles.ramInfo}>
          <p className={laptopStyles.firstP}>მეხსიერების ტიპი: </p>
          <p>{props.laptop?.hard_drive_type}</p>
        </div>
      </div>
      <div className={laptopStyles.cpu}>
        <div className={laptopStyles.detailed_info} id={laptopStyles.cpuInfo}>
          <p className={laptopStyles.firstP}> CPU: </p>
          <p>{cpu?.name}</p>
        </div>
        <div className={laptopStyles.detailed_info} id={laptopStyles.cpuInfo}>
          <p className={laptopStyles.firstP}>CPU-ს ბირთვი: </p>
          <p>{cpu?.cores}</p>
        </div>
        <div className={laptopStyles.detailed_info} id={laptopStyles.cpuInfo}>
          <p className={laptopStyles.firstP}> CPU-ს ნაკადი: </p>
          <p>{cpu?.threads}</p>
        </div>
      </div>
    </div>
  );
}

export default CpuRam;
