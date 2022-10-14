import React from "react";
import { Outlet } from "react-router-dom";
// import { Pagination } from 'antd';
import PageFooter from "../../components/Footer/PageFooter";


type Props = {};

export const Home = (props: Props) => {
  return <div>Home
    {/* <Pagination defaultCurrent={1} total={50} />;
    <PageFooter /> */}
    < Outlet />
  </div>;
};
