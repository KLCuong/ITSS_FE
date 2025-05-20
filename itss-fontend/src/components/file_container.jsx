import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const File_Container = ({ nganh, khoa, truong, title, date, onClick }) => {
  return (
    <div
      className="p-6 max-w-xl bg-white shadow-md space-y-1"
      style={{
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "30px",
        paddingRight: "10px",
        marginBottom: "10px",
        marginLeft: "30px",
        marginRight: "auto",
        maxWidth: "1200px",
        width: "100%",
        border: "1px solid #555454FF",
        borderRadius: "20px",
        boxSizing: "border-box"
      }}
      onClick={onClick ? onClick : () => console.log(`${title} clicked`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Text strong style={{ color: "#cf1322", textTransform: "uppercase", letterSpacing: 1 }}>
        {khoa} - {truong}
      </Text>
      <Title level={4} style={{ margin: 0 }}>{title}</Title>
      <Text type="secondary" style={{ fontSize: 12 }}>{nganh} - {date}</Text><br />
    </div>
  );
};


export default File_Container;
