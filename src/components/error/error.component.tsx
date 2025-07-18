// Vendors
import React from "react";
// Constants
import "./styles/error.component.css";
// Style
import { errorProps } from "./constants/error.constant";
// Types
import { ErrorComponentPropsType } from "./types/error.component.type";

const ErrorComponent = ({
  title,
  description,
}: ErrorComponentPropsType): React.ReactElement => {
  return (
    <div className="frem">
      <h2>{title ?? errorProps.title}</h2>
      <h5>{description ?? errorProps.description}</h5>
    </div>
  );
};

export { ErrorComponent };
