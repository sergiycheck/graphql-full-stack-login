import { FC, ReactNode } from "react";

interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, className }: CardHeaderProps) => {
  return <div className={`uk-flex uk-flex-row ${className || ""}`}>{children}</div>;
};

export { CardHeader };
