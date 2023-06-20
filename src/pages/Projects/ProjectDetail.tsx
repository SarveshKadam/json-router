import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../constants/projects.json";
const ProjectDetail = () => {
  const { id } = useParams();
  const data = projects.find((project) => String(project?.id) === id);
  return (
    <div className="project">
      <h2 className="project-title">{data?.title}</h2>
      <p className="project-body">{data?.body}</p>
      <Link to={`/projects/${id}/settings`}>
      <button className="button">
        <img src="/icons/settings.svg" alt="" /> <span>Settings</span>
      </button>
      </Link>
    </div>
  );
};

export default ProjectDetail;
