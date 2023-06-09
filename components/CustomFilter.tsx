import React from "react";

interface IProps {
  title: string;
}

const CustomFilter = ({ title }: IProps) => {
  return <div>{title}</div>;
};

export default CustomFilter;
