import React, { Suspense } from "react";
const Dashboard = React.lazy(() => import("./pages/Dashboard/index"));
const Analysis = React.lazy(() => import("./pages/Dashboard/Analysis"));
const Monitor = React.lazy(() => import("./pages/Dashboard/Monitor"));
const Workplace = React.lazy(() => import("./pages/Dashboard/Workplace"));
const List = React.lazy(() => import("./pages/Projects/List"));
const ProjectSetting = React.lazy(() => import("./pages/Projects/Settings"));
const ProjectDetail = React.lazy(
  () => import("./pages/Projects/ProjectDetail")
);
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

type Props = {
  locale: string;
};
const BaseLayout = ({ locale}: Props) => {
  const renderComponent = (key: string) => {
    switch (key) {
      case "user.login":
        return <Login />;
      case "dashboard":
        return <Dashboard />;
      case "dashboard.analysis":
        return <Analysis />;
      case "dashboard.monitor":
        return <Monitor />;
      case "dashboard.workplace":
        return <Workplace />;
      case "projects":
        return <List />;
      case "projects.list":
        return <List />;
      case "projects.details":
        return <ProjectDetail />;
      case "projects.settings":
        return <ProjectSetting />;
      default:
        return <NotFound />;
    }
  };
  return (
    <>
      <Suspense fallback="Loading...">{renderComponent(locale)}</Suspense>
    </>
  );
};

export default BaseLayout;

BaseLayout.defaultProps = {
  locale: ""
}
