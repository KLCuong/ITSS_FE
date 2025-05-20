import React, { useState } from "react";

const data = [
  { name: "Giáo trình Vi sinh ký sinh trùng", type: "Vi sinh ký sinh", price: "VSKS101", stock: "Đại học Y Hà Nội" },
  { name: "Tài liệu Hóa sinh đại cương", type: "Hóa sinh", price: "HS102", stock: "Đại học Y Hà Nội" },
  { name: "Bài giảng Sinh học phân tử", type: "Sinh học", price: "SH103", stock: "Đại học Khoa học Tự nhiên" },
  { name: "Giáo trình Hóa hữu cơ", type: "Hóa học", price: "HH104", stock: "Đại học Khoa học Tự nhiên" },
  { name: "Tài liệu Kỹ thuật nuôi trồng", type: "Nông nghiệp", price: "NN105", stock: "Đại học Nông Lâm" },
  { name: "Sách giáo khoa Vật lý đại cương", type: "Vật lý", price: "VL106", stock: "Đại học Bách Khoa" },
  { name: "Tài liệu Lý thuyết thống kê", type: "Thống kê", price: "TK107", stock: "Đại học Kinh tế Quốc dân" },
  { name: "Giáo trình Quản trị kinh doanh", type: "Quản trị kinh doanh", price: "QTKD108", stock: "Đại học Ngoại thương" },
  { name: "Bài giảng Công nghệ thông tin", type: "Công nghệ thông tin", price: "CNTT109", stock: "Đại học Công nghệ" },
  { name: "Tài liệu Tiếng Anh chuyên ngành", type: "Tiếng Anh", price: "TA110", stock: "Đại học Ngoại ngữ" }
];

const Admin = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 32, backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: 1280, backgroundColor: 'white', borderRadius: 8, padding: 24, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Quản lý sản phẩm</h1>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, gap: 16 }}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            style={{ flexGrow: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={{ padding: '8px 24px', backgroundColor: '#3b82f6', color: 'white', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
            Thêm sản phẩm
          </button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
          <thead style={{ backgroundColor: '#e5e7eb' }}>
            <tr>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '25%', textAlign: 'left' }}>Tên sản phẩm</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Môn học</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Mã môn học</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Trường</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'center' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} style={{ cursor: 'pointer', backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb' }}>
                <td style={{ padding: 12, border: '1px solid #ccc' }}>{item.name}</td>
                <td style={{ padding: 12, border: '1px solid #ccc' }}>{item.type}</td>
                <td style={{ padding: 12, border: '1px solid #ccc' }}>{item.price}</td>
                <td style={{ padding: 12, border: '1px solid #ccc' }}>{item.stock}</td>
                <td style={{ padding: 12, border: '1px solid #ccc', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 12 }}>
                  <button title="Sửa" style={{ color: '#fbbf24', fontSize: 20, border: 'none', background: 'none', cursor: 'pointer' }}>✏️</button>
                  <button title="Xóa" style={{ color: '#ef4444', fontSize: 20, border: 'none', background: 'none', cursor: 'pointer' }}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default Admin;
