import styles from "./LaptopBrands.module.scss";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";

function LaptopBrands() {
  const [brands, setBrands] = useState();
  const [title, setTitle] = useState("ბრენდი");

  const handleBrandChange = (event) => {
    const id = +event.target.id;
    const newBrand = brands.find((x) => x.id === id).name;
    setTitle(newBrand);

    localStorage.setItem("laptop_brand_id", JSON.stringify(id));
  };
  const handleBrandsData = (data) => {
    setBrands(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("laptop_brand_id")) {
      localStorage.setItem("laptop_brand_id", JSON.stringify(-1));
    } else {
      const brandID = JSON.parse(localStorage.getItem("laptop_brand_id"));

      if (brandID === -1) {
        setTitle("ბრენდი");
      } else {
        const brandTitle = brands?.find((x) => x.id === brandID).name;
        setTitle(brandTitle);
      }
    }
  }, [brands]);

  return (
    <div className={styles.wrapper}>
      <Dropdown url="/brands" title={title} onFetchData={handleBrandsData}>
        {brands?.map((brand) => {
          return (
            <li onClick={handleBrandChange} key={brand.id} id={brand.id}>
              {brand.name}
            </li>
          );
        })}
      </Dropdown>
    </div>
  );
}

export default LaptopBrands;
