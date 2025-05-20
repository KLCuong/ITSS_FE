import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./css/searchbar.css";

const SearchBar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (text.trim() !== "") {
      navigate(`/search?search=${encodeURIComponent(text.trim())}`);
    }
  };
  return (
    <div className="search-bar-container">
      <Input
        placeholder="Tìm kiếm..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={handleSearch}
        suffix={
          <SearchOutlined
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        }
        size="large"
        style={{
          width: "100%",
          height: "50px",
          maxWidth: "1000px",
          fontWeight: "bold",
          textAlign: "center",
        }}
        className="custom-search-bar"
      />
    </div>
  );
};

export default SearchBar;
