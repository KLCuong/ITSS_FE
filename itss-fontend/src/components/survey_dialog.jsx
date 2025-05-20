import React, { useState } from "react";
import { Modal, Select, Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./css/survey_dialog.css"; // Thêm file CSS riêng
import CustomSelectField from "./custom_select";
import vienlist from "../data/facilities"; 
import departments from "../data/departments";
import years from "../data/years";


const { Title, Text } = Typography;
const { Option } = Select;

const SurveyDialog = ({ visible, onClose, onSave }) => {
  const [khoa, setKhoa] = useState("");
  const [nganh, setNganh] = useState("");
  const [vien, setVien] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);



  return (
    <Modal
      open={visible}
      onCancel={() => {
        onSave(null); // Gọi API với data = null
        onClose();    // Sau đó đóng dialog
      }}
      footer={null}
      closable={false}
      centered
      width={480}
      className="custom-modal"
      styles={{
        body: {
          padding: 0,
          borderRadius: 32,
          overflow: "hidden",
        },
        mask: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div style={{ padding: "30px", backgroundColor: "#ddd" }}>
        <CloseOutlined
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            fontSize: 18,
            cursor: "pointer",
          }}
        />
        <Text>
          Để dễ dàng đưa ra tài liệu hợp với bạn hơn, hãy hoàn thành khảo sát này
          trước nha
        </Text>
        <div style={{ marginTop: 20 }}>
          <CustomSelectField
            title="Bạn là sinh viên viện nào?"
            placeholder="Mình là sinh viên thuộc viện ....."
            value={vien}
            onChange={(value) => {
              setVien(value);
              setSelectedDepartments(departments[value] || []);
              setNganh(""); // reset ngành khi đổi viện
            }}
            options={vienlist.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <CustomSelectField
            title="Bạn là sinh viên ngành/khoa nào?"
            placeholder="Mình là sinh viên ngành ....."
            value={nganh}
            onChange={(value) => setNganh(value)}
            options={selectedDepartments || []}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <CustomSelectField
            title="Bạn là sinh viên khóa bao nhiêu?"
            placeholder="Mình là sinh viên khóa ....."
            value={khoa}
            onChange={(value) => setKhoa(value)}
            options={years.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
          />
        </div>
        
        
        

        <Button
          type="primary"
          style={{
            marginTop: 32,
            width: "100%",
            borderRadius: 40,
            backgroundColor: "#f5222d",
            fontWeight: "bold",
          }}
          onClick={() => {
            onSave({ khoa, nganh, vien });
            
            }}
        >
          Lưu thông tin
        </Button>
      </div>
    </Modal>
  );
};

export default SurveyDialog;