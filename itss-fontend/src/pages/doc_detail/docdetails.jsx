import React from 'react';
import { useLocation } from 'react-router-dom';  // import useLocation
import './docdetails.css';
import PdfViewer from '../../components/pdf_viewer';

const DocumentCard = () => {
  const location = useLocation();
  const { fileUrl, title, categoryLabel } = location.state || {};

  return (
    <div className="detail-document-card">
    <div className="detail-category-label">{categoryLabel || 'Không rõ viện'}</div>      <h1 className="detail-document-title">{title || "Tiêu đề không rõ"}</h1>
      {/* Các phần khác có thể điều chỉnh nếu muốn */}
      <div className="detail-document-pdf">
        {fileUrl ? (
          <PdfViewer fileUrl={fileUrl} />
        ) : (
          <p>Không có tài liệu để hiển thị</p>
        )}
      </div>
      <div className="detail-download-wrapper">
        {fileUrl && (
          <button
            className="detail-download-button"
            onClick={() => {
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download = `${title || 'tai-lieu'}.pdf`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Tải xuống: {title || 'Tài liệu'}
          </button>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;
