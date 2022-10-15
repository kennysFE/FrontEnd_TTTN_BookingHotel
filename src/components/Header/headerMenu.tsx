import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function HeaderMenu() {
  const navigate = useNavigate();

  // usestate responsive
  const [isHidden, setIsHidden] = useState(true);


  const menu = (
    <Menu
      className=""
      style={{
        width: "240px",
        borderRadius: "10px",
        boxShadow: "0 0 3px 3px rgba(0,0,0,0.1)",
        marginTop: "10px",
        padding: "10px 0",
      }}
      items={[
        {
          key: "1",
          label: (
            <>
              <p
                onClick={() => navigate("/register")}
                className="text-base font-medium m-0"
              >
                Đăng ký
              </p>
            </>
            //
          ),
        },
        {
          key: "2",
          label: (
            <>
              <p
                onClick={() => navigate("/login")}
                className="text-base   m-0 pb-4 pt-3"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                Đăng nhập
              </p>
            </>
          ),
        },
        {
          key: "3",
          label: <p className="text-base   m-0 py-1">Đi đến trang quản trị</p>,
        },
        {
          key: "4",
          label: <p className="text-base   m-0 py-1">Cho thuê nhà</p>,
        },

        {
          key: "5",

          label: <p className="text-base   m-0 py-1">Tổ chức trải nhiệm</p>,
        },
        {
          key: "6",

          label: <p className="text-base   m-0 py-1">Trợ giúp</p>,
        },
      ]}
    />
  );
  return (
    <>
      <div className="userDropDown hidden sm:block">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div
            className="flex text-gray-500 items-center  "
            style={{ padding: "5px 12px" }}
          >
            <FaBars className="text-lg mr-3" />
            <div>
              {" "}
              <img
                className="rounded-full"
                style={{ height: "30px", width: "30px" }}
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div
              className="absolute "
              style={{ top: "113%", zIndex: "2" }}
            ></div>
          </div>
        </Dropdown>

        {/* <div>
                    <FaBars className="text-primary"/>
                  </div> */}
      </div>
    </>
  );
}
