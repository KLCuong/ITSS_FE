"use client";
import { Input, Button, Space, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    if (!keyword.trim()) {
      message.warning("Vui lòng nhập từ khóa!");
      return;
    }
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/api/search?q=${encodeURIComponent(keyword)}`
      );
      setResults(response.data); // kết quả trả về
      message.success("Tìm kiếm thành công!");
    } catch (err) {
      console.error(err);
      message.error("Đã xảy ra lỗi khi tìm kiếm");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4 w-full">
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onPressEnter={handleSearch}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          loading={loading}
          onClick={handleSearch}
        >
          Tìm kiếm
        </Button>
      </Space.Compact>
      {/* Hiển thị kết quả (ví dụ đơn giản) */}
      <div className="mt-4">
        {results.map((item, index) => (
          <div key={index} className="border p-2 my-2 rounded shadow">
            {item.title || JSON.stringify(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
