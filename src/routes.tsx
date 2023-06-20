import React from "react";
import { Navigate, Route } from "react-router-dom";
import { SubmeuProps } from "./config";
import BaseLayout from "./BaseLayout";
import routesData from "./constants/routesData.json";
import AuthWrapper from "./AuthWrapper";

const generateRoute = (routes: SubmeuProps[]) => {
  return routes.map((route) => (
    <React.Fragment key={route.locale}>
      <Route
        path={route.path}
        element={
          route.redirect ? (
            <Navigate to={route.redirect} replace />
          ) : (
            <AuthWrapper accessTo={route.accessTO}>
              <BaseLayout locale={route?.locale} />
            </AuthWrapper>
          )
        }
      />
      {route.routes && generateRoute(route.routes)}
    </React.Fragment>
  ));
};

export const routes: React.ReactNode = generateRoute(routesData);
