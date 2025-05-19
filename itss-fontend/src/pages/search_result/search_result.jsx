import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Typography, Pagination, Card } from 'antd';
import SearchBar from '../../components/searchbar';
import CustomSelectField from '../../components/custom_select';
import File_Container from '../../components/file_container';
import Logo from '../../assets/logo.png';


const { Title } = Typography;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const [dropdown3, setDropdown3] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQuery();
  const navigate = useNavigate();
  const searchText = query.get('search') || '';

  const options = [
    { label: 'Tùy chọn 1', value: '1' },
    { label: 'Tùy chọn 2', value: '2' },
    { label: 'Tùy chọn 3', value: '3' },
  ];

  const results = Array.from({ length: 20 }, (_, i) => ({
    nganh: 'Ngành ' + (i + 1),
    title: `Kết quả cho "${searchText}" ${i + 1}`,
    date: `2024-05-${(i % 30) + 1}`,
  }));

  const resultsPerPage = 6;
  const paginatedResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handleSearch = (text) => {
    navigate(`/search?search=${encodeURIComponent(text)}`);
  };

  return (
    <div style={{ padding: '24px', height: 'flex' }}>
    <div style={{ textAlign: 'center' }}>
        <img
            src={Logo}
            alt="Logo"
            style={{
            width: '240px',
            height: 'auto',
            objectFit: 'cover',
            }}
        />
    </div>

    
      
    <div style={{ textAlign: 'center', marginBottom: 20, maxWidth: '800px', justifyContent: 'center', margin: '0 auto' }}>
      <SearchBar onSearch={handleSearch} defaultValue={searchText} />
      <Row gutter={16} style={{ marginTop: 0 }} wrap={false}>
        <Col span={24}>
          <Row gutter={16} justify="space-between">
            <Col span={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 1"
                value={dropdown1}
                onChange={setDropdown1}
                options={options}
              />
            </Col>
            <Col span={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 2"
                value={dropdown2}
                onChange={setDropdown2}
                options={options}
              />
            </Col>
            <Col span={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 3"
                value={dropdown3}
                onChange={setDropdown3}
                options={options}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
      
      <div style={{ marginTop: 40, marginBottom: 20 }}>
        <Title level={3}>Kết quả tìm kiếm</Title>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '100%' }}>
        {paginatedResults.map((item, index) => (
          <File_Container
            key={index}
            nganh={item.nganh}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Pagination
          current={currentPage}
          total={results.length}
          pageSize={resultsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default SearchPage;