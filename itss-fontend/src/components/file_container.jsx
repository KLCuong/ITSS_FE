import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const File_Container = ({ nganh, title, date, onClick }) => {
  return (
    <div
      className="p-6 max-w-xl bg-white shadow-md space-y-1"
       style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "30px",
            marginBottom: "10px",
            marginLeft: "30px",
            marginRight: "auto",
            maxWidth: "1200px",
            border: "1px solid #555454FF",
            borderRadius: "20px",
            boxSizing: "border-box"
        }}
        onClick={onClick ? onClick : console.log(`${title} clicked`)} 
    >
      <Text
        strong
        style={{
          color: "#cf1322", // đỏ đậm hơn Ant Design "danger"
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {nganh}
      </Text>
      <Title level={4} style={{ margin: 0 }}>
        {title}
      </Title>
      <Text type="secondary" style={{ fontSize: 12 }}>
        {date}
      </Text>
    </div>
  );
};

export default File_Container;
