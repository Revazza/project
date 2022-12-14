import React, { useEffect, useState } from "react";
import styles from "./Teams.module.scss";
import Dropdown from "../../UI/Dropdown/Dropdown";

function Teams(props) {
  const [teamID, setTeamID] = useState(-1);
  const [teams, setTeams] = useState();
  const [positionID, setPositionID] = useState(-1);
  const [positions, setPositions] = useState();

  const handleTeamchange = (event) => {
    const id = +event.target.id;
    setTeamID(id);
    setPositionID(-1);
    localStorage.setItem("position_id", JSON.stringify(-1));
  };

  const handlePositionChange = (event) => {
    setPositionID(+event.target.id);
  };

  const handleTeamData = (data) => {
    setTeams(data);
  };
  const handlePositionData = (data) => {
    setPositions(data);
  };

  useEffect(() => {
    const storageTeam = localStorage.getItem("team_id");
    const storagePos = localStorage.getItem("position_id");
    if (!storageTeam) {
      localStorage.setItem("team_id", teamID);
    } else {
      if (teamID !== -1) {
        localStorage.setItem("team_id", teamID);
      } else {
        const id = JSON.parse(localStorage.getItem("team_id"));
        setTeamID(id);
      }
    }
    if (!storagePos) {
      localStorage.setItem("position_id", positionID);
    } else {
      if (positionID !== -1) {
        localStorage.setItem("position_id", positionID);
      } else {
        const id = JSON.parse(localStorage.getItem("position_id"));
        setPositionID(id);
      }
    }
  }, [teamID, positionID]);

  const teamTitle =
    teamID === -1 ? "თიმი" : teams?.find((team) => team.id === teamID).name;
  const positionTitle =
    positionID === -1
      ? "პოზიცია"
      : positions?.find((pos) => pos.id === positionID).name;
  const filteredPositions = positions?.filter((pos) => pos.team_id === teamID);

  return (
    <React.Fragment>
      <div
        className={
          props.teamHasError
            ? `${styles.dropdown_wrapper} ${styles.error}`
            : styles.dropdown_wrapper
        }
        id={styles.teams}
      >
        <Dropdown url="/teams" title={teamTitle} onFetchData={handleTeamData}>
          {teams?.map((team) => {
            return (
              <li key={team.id} id={team.id} onClick={handleTeamchange}>
                {team.name}
              </li>
            );
          })}
        </Dropdown>
      </div>
      {teamID !== -1 && (
        <div
          className={
            props.posHasError
              ? `${styles.dropdown_wrapper} ${styles.error}`
              : styles.dropdown_wrapper
          }
          id={styles.positions}
        >
          <Dropdown
            url="/positions"
            title={positionTitle}
            onFetchData={handlePositionData}
          >
            {filteredPositions?.map((pos) => {
              return (
                <li key={pos.id} id={pos.id} onClick={handlePositionChange}>
                  {pos.name}
                </li>
              );
            })}
          </Dropdown>
        </div>
      )}
    </React.Fragment>
  );
}

export default Teams;
