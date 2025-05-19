import React from 'react';
import './docdetails.css';
import PdfViewer from '../../components/pdf_viewer';
import TestPdf from '../../assets/test.pdf';


const DocumentCard = () => {
  return (
    <div className="detail-document-card">
      <div className="detail-category-label">VIỆN KINH TẾ VÀ QUẢN LÝ</div>
      <h1 className="detail-document-title">Tài liệu môn Đạo đức kinh doanh</h1>
      <div className="detail-document-info">
        <div className="detail-author">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="author"
            className="detail-author-avatar"
          />
          <span className="detail-author-name">Hậu Văn Vở</span>
        </div>
        <div className="detail-meta-info">
          <span>13/11/2024</span>
          <span>•</span>
          <span>0 COMMENT</span>
        </div>
      </div>
      <p className="detail-document-desc">
        Dưới đây là file tài liệu môn Đạo đức kinh doanh mà mình
        sưu tầm được. Các bạn nhấn vào nút để tải file về nhé.
      </p>
      <div className="detail-document-pdf">
          <PdfViewer fileUrl={TestPdf} />
      </div>
      <div class="detail-download-wrapper">
        <button className="detail-download-button"
          onClick={() => {
          const link = document.createElement('a');
          link.href = TestPdf;
          link.download = 'tai-lieu-em3310.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        >
          Tải xuống: Tài liệu EM3310 – Mô phỏng hoạt động kinh doanh
        </button>
      </div>
      
    </div>
  );
};

export default DocumentCard;
