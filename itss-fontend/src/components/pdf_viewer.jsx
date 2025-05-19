import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Typography, Space } from 'antd';
import LoadingScreen from './loading';

// Cấu hình workerSrc với phiên bản cụ thể
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const { Title } = Typography;

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));

  const goToNextPage = () =>
    setPageNumber((prev) => (prev >= numPages ? numPages : prev + 1));

  // Kiểm tra fileUrl trước khi render
  if (!fileUrl || typeof fileUrl !== 'string') {
    return (
      <div style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
        <Title level={3} style={{ textAlign: 'center', marginTop: 30, marginBottom: 20 }}>
          Xem tài liệu PDF
        </Title>
        <div
          style={{
            minHeight: '80vh',
            margin: '0 auto',
            background: '#cccccc',
            padding: '20px',
            textAlign: 'center',
            color: 'white',
            paddingTop: '80px',
          }}
        >
          Vui lòng cung cấp URL file PDF hợp lệ.
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <Title level={3} style={{ textAlign: 'center', marginTop: 30, marginBottom: 20 }}>
        Xem tài liệu PDF
      </Title>

      <div
        style={{
          minHeight: '80vh', // Đồng bộ với loading và error
          margin: '0 auto',
          background: '#cccccc',
          padding: '20px',
          position: 'relative',
        }}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div
              style={{
                textAlign: 'center',
                minHeight: '80vh',
                background: '#cccccc',
                color: 'white',
                paddingTop: '80px',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              {LoadingScreen ? <LoadingScreen /> : <p>Đang tải...</p>}
            </div>
          }
          error={
            <div
              style={{
                textAlign: 'center',
                minHeight: '80vh',
                background: '#cccccc',
                color: 'white',
                paddingTop: '80px',
              }}
            >
              Không thể tải file PDF.
            </div>
          }
        >
          <Page pageNumber={pageNumber} width={760} /> {/* Thêm width để tối ưu hóa kích thước */}
        </Document>
      </div>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Space>
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            Trang trước
          </Button>
          <span>
            Trang {pageNumber} / {numPages || '--'}
          </span>
          <Button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            Trang tiếp
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default PdfViewer;