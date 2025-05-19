import React from "react";
import { Select, Typography } from "antd";
import "./css/custom_select.css"; 

const { Title } = Typography;
const { Option } = Select;

const CustomSelectField = ({ title, placeholder, value, onChange, options }) => {
  return (
    <div style={{ marginTop: 0 }}>
      <Title level={5}>{title}</Title>
      <Select
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ width: "100%", borderRadius: 40 }}
      >
        {options.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelectField;
