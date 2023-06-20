import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import projects from "../../constants/projects.json";

const list = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((item) => (
          <Link to={`/projects/${item.id}`} key={item?.id}>
            <Card title={item.title} body={item.body} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default list;