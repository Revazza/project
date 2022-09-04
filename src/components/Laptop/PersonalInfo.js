import useFetch from "../../hooks/useFetch";
import laptopStyles from "./Laptop.module.scss";

function PersonalInfo(props) {
  const { data: teams } = useFetch("/teams");
  const { data: positions } = useFetch("/positions");

  const position = positions?.find((pos) => pos.id === props?.user.position_id)?.name;

  const team = teams?.find((x) =>x.id === props?.user.team_id)?.name;
  
  return (
    <div className={laptopStyles.laptop_img_owner}>
      <div className={laptopStyles.laptop_img}>
        <img src={`https://pcfy.redberryinternship.ge/${props.laptopImg}`} />
      </div>
      <div className={laptopStyles.owner_info}>
        <div className={laptopStyles.detailed_info}>
          <p className={laptopStyles.firstP}>სახელი: </p>
          <p>{props.user?.name} {props.user?.surname}</p>
        </div>
        <div className={laptopStyles.detailed_info}>
          <p className={laptopStyles.firstP}>თიმი: </p>
          <p>{team}</p>
        </div>
        <div className={laptopStyles.detailed_info}>
          <p className={laptopStyles.firstP}>პოზიცია: </p>
          <p>{position}</p>
        </div>
        <div className={laptopStyles.detailed_info}>
          <p className={laptopStyles.firstP}>მეილი: </p>
          <p>{props.user?.email}</p>
        </div>
        <div className={laptopStyles.detailed_info}>
          <p className={laptopStyles.firstP}>ტელ.ნომერი: </p>
          <p>{props.user?.phone_number}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
