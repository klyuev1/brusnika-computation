import { useState, useEffect } from 'react';
import { Project } from '../../Projects/consts/IProject';

export const useProjectFromLocalStorage = (projectID: string) => {
  const [foundProject, setFoundProject] = useState<Project | undefined>();

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      const storedProjectsParsed: Project[] = JSON.parse(storedProjects);
      const project = storedProjectsParsed.find(project => project.id?.toString() === projectID);
      setFoundProject(project);
    }
  }, [projectID]);

  return foundProject;
};