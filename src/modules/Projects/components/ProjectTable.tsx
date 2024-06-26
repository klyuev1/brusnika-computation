import React from "react";
import { useEffect } from "react";
import Project from "./Project";
import { useGetProjectsQuery } from "../api/apiProjectSlice";

function ProjectTable() {
  const { data: projects, error } = useGetProjectsQuery();

  useEffect(() => {
    if (projects) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <table className="table">
      <thead>
        <tr className="table_header">
          <th className="table_head column1">Наименование проекта</th>
          <th className="table_head column1-1">Регион</th>
          <th className="table_head column2">Наружняя температура</th>
          <th className="table_head column3">Дата создания</th>
          <th className="table_head column4"></th>
        </tr>
      </thead>

      <tbody>{projects && projects.map(project => <Project project={project} key={project.id} />)}</tbody>
    </table>
  );
}

export default ProjectTable;
