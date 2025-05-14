import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './css/searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <Input
        placeholder="Tìm kiếm..."
        suffix={<SearchOutlined />}
        size="large"
        style={{ width: '100%', height: '50px', maxWidth: '1000px', fontWeight: 'bold', textAlign: 'center' }}
        className="custom-search-bar"
      />
    </div>
  );
};

export default SearchBar;