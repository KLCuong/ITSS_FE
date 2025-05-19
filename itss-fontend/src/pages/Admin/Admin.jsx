import React, { useState } from "react";

const data = [
  { name: "Google Pixel 7", type: "Điện thoại", price: "18,000,000 VNĐ", stock: 25 },
  { name: "HP Spectre", type: "Laptop", price: "35,000,000 VNĐ", stock: 12 },
  { name: "Anker PowerBank", type: "Phụ kiện", price: "1,200,000 VNĐ", stock: 200 },
  { name: "LG OLED TV", type: "Tivi", price: "40,000,000 VNĐ", stock: 5 },
  { name: "Huawei Mate 50", type: "Điện thoại", price: "20,000,000 VNĐ", stock: 35 },
  { name: "Asus ROG", type: "Laptop", price: "45,000,000 VNĐ", stock: 8 },
  { name: "Beats Studio", type: "Tai nghe", price: "5,000,000 VNĐ", stock: 90 },
  { name: "Canon EOS R6", type: "Máy ảnh", price: "50,000,000 VNĐ", stock: 3 },
  { name: "Nintendo Switch", type: "Game", price: "10,000,000 VNĐ", stock: 45 },
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
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Loại</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Giá bán</th>
              <th style={{ padding: 12, border: '1px solid #ccc', width: '16.66%', textAlign: 'left' }}>Kho hàng</th>
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
