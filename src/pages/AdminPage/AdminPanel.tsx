import React, { useEffect } from "react";
import { useGetAllUsersQuery } from "../../store/api/apiProfileSlice";
import UserRow from "./UserRow";
import { ProjLogo } from "../../ui/icons/ProjLogo";
import ChangeRolePopup from "./CreateRolePopup";
import { openChangeUserPopupOpen } from "../../modules/Rooms/store/roomPopupSlice";
import { useAppDispatch } from "../../store/hooks/hooks";

function AdminPanel() {
  const { data: users, error } = useGetAllUsersQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleChangeRoleClick = () => {
    dispatch(openChangeUserPopupOpen());
  };

  return (
    <>
      <section className="projects">
        <div className="projects__up-container">
          <div className="projects__title-box">
            <ProjLogo />
            <h2 className="projects__title">Панель администратора</h2>
          </div>
          <button className="projects__button" type="button" onClick={handleChangeRoleClick}>
            Назначить роль
          </button>
        </div>
        <table className="table">
          <thead>
            <tr className="table_header">
              <th className="table_head column4">ID</th>
              <th className="table_head column1-1">Почта</th>
              <th className="table_head column2">Имя пользователя</th>
              <th className="table_head column3">Роль</th>
              <th className="table_head column4"></th>
            </tr>
          </thead>

          <tbody>{users && users.map(user => <UserRow user={user} key={user.id} />)}</tbody>
        </table>
      </section>

      <ChangeRolePopup />
    </>
  );
}

export default AdminPanel;
