import React, { useEffect } from "react";
import { ProfileViewWithRole, useDeleteUserMutation, useGetUserQuery } from "../../store/api/apiProfileSlice";

export interface UserProps {
  user: ProfileViewWithRole;
}

function UserRow({ user }: UserProps) {
  const { data: myUser } = useGetUserQuery();
  const [handleDeleteProject] = useDeleteUserMutation();
  let allRoles = "";

  user.roles.forEach(role => {
    allRoles += role.value + " ";
  });

  function onDelete() {
    handleDeleteProject(user);
  }

  return (
    <tr className="table_row" key={user.id}>
      <td className="table_d column4">{user.id}</td>
      <td className="table_d column1">{user.email}</td>
      <td className="table_d column2">{user.name}</td>
      <td className="table_d column3">{allRoles}</td>
      <td className="table_d column4">
        {myUser?.email === user.email ? (
          <button className="table__delete_disabled" type="button" disabled />
        ) : (
          <button className="table__delete" type="button" onClick={onDelete} />
        )}
      </td>
    </tr>
  );
}

export default UserRow;
