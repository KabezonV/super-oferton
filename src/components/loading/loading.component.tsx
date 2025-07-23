// Vendors
import React from "react";
// Style
import "./styles/loading.component.css";
// Types
import { LoadingComponentPropsType } from "./types/loading.component.type";

const LoadingComponent = ({
  loadingText,
}: LoadingComponentPropsType): React.ReactElement => {
  const loadingCustomText = "Cargando...";

  return (
    <div className="loader-container">
      <div className="loader" />
      <h2>{loadingText ?? loadingCustomText}</h2>
    </div>
  );
};

export { LoadingComponent };
