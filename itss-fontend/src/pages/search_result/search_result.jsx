import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Row,
  Col,
  Typography,
  Pagination,
  Card,
  Space,
  Divider,
  Spin,
  Empty,
} from 'antd';
import SearchBar from '../../components/searchbar';
import CustomSelectField from '../../components/custom_select';
import File_Container from '../../components/file_container';
import { searchDocuments } from '../../providers/filter_provider';

const { Title } = Typography;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const [dropdown3, setDropdown3] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = useQuery();
  const navigate = useNavigate();
  const searchText = query.get('search') || '';

  const resultsPerPage = 6;
  const paginatedResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Fetch API khi từ khoá thay đổi
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchDocuments(searchText);
        setResults(data);
        setCurrentPage(1); // reset về trang 1 khi có kết quả mới
      } catch (error) {
        console.error('Lỗi khi tìm kiếm:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchText]);

  const handleSearch = (text) => {
    navigate(`/search?search=${encodeURIComponent(text)}`);
  };

  const options = [
    { label: 'Tùy chọn 1', value: '1' },
    { label: 'Tùy chọn 2', value: '2' },
    { label: 'Tùy chọn 3', value: '3' },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
      {/* Search & Filters */}
      <Card style={{ padding: '24px', marginBottom: 32 }}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <SearchBar onSearch={handleSearch} defaultValue={searchText} />

          <Row gutter={16}>
            <Col xs={24} md={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 1"
                value={dropdown1}
                onChange={setDropdown1}
                options={options}
              />
            </Col>
            <Col xs={24} md={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 2"
                value={dropdown2}
                onChange={setDropdown2}
                options={options}
              />
            </Col>
            <Col xs={24} md={8}>
              <CustomSelectField
                placeholder="Chọn bộ lọc 3"
                value={dropdown3}
                onChange={setDropdown3}
                options={options}
              />
            </Col>
          </Row>
        </Space>
      </Card>

      {/* Kết quả */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Kết quả tìm kiếm cho "{searchText}"
        </Title>
        <Divider />

        {loading ? (
            <div style={{ textAlign: 'center', padding: 50 }}>
              <Spin size="large" />
            </div>
          ) : results.length === 0 ? (
            <Empty description="Không tìm thấy kết quả nào" />
          ) : (
            <>
              {paginatedResults.map((doc, idx) => (
                <Row key={doc.id || idx} gutter={[16, 16]}>
                  <Col span={24}>
                    <File_Container
                      key={idx}
                      title={doc.title}
                      nganh={doc?.Course?.name || 'Không rõ ngành'}
                      khoa={doc?.Course?.Department?.name || 'Không rõ khoa'}
                      truong={doc?.Course?.Department?.Faculty?.name || 'Không rõ trường'}
                      date={new Date(doc.createdAt).toLocaleDateString('vi-VN')}
                      onClick={() => navigate('/docdetail', { 
                        state: { 
                          fileUrl: doc.fileUrl, 
                          title: doc.title,
                          categoryLabel: doc?.Course?.Department?.Faculty?.name || 'Không rõ viện'
                        } 
                      })}
                    />
                  </Col>
                </Row>
              ))}
            </>
          )}
      </div>

      {/* Phân trang */}
      {results.length > resultsPerPage && (
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Pagination
            current={currentPage}
            total={results.length}
            pageSize={resultsPerPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
