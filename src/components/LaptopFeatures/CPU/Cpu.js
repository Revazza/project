import styles from "./Cpu.module.scss";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";

function Cpu() {
  const [title, setTitle] = useState("CPU");
  const [cpus, setCpus] = useState();

  const handleCpuChange = (event) => {
    const id = +event.target.id;

    const cpuTitle = cpus.find((x) => x.id === id).name;
    setTitle(cpuTitle);
    localStorage.setItem("laptop_cpu", JSON.stringify(cpuTitle));
  };

  const handleCpuData = (data) => {
    setCpus(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("laptop_cpu")) {
      const obj = {
        hasError:false,
        value:''
      }
      localStorage.setItem("laptop_cpu", JSON.stringify(obj));
    } else {
      const data = JSON.parse(localStorage.getItem("laptop_cpu"));

      if (data.value !== "") {
        setTitle(data.value);
      }
    }
  }, [cpus]);

  return (
    <div className={styles.wrapper}>
      <Dropdown url="/cpus" onFetchData={handleCpuData} title={title}>
        {cpus?.map((cpu) => {
          return (
            <li key={cpu.id} id={cpu.id} onClick={handleCpuChange}>
              {cpu.name}
            </li>
          );
        })}
      </Dropdown>
    </div>
  );
}
export default Cpu;
