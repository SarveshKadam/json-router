import { Link, useParams } from "react-router-dom";
import projects from "../../constants/projects.json";

const Settings = () => {
  const { id } = useParams();
  const data = projects?.find((project) => String(project?.id) === id);
  return (
    <>
      <h2>{data?.title} Settings</h2>
      <Link to=".." relative="path">
        <button>Back</button>
      </Link>
    </>
  );
};

export default Settings;
