import axios from 'axios';

const filterDocuments = async ({ year_id, department_id, course_id }) => {
  try {
    console.log('Đang lọc tài liệu với các thông số:', {
      year_id,
      department_id,
      course_id
    });
    const response = await axios.get('http://localhost:3000/api/user/documents/filter', {
      params: {
        year_id,
        department_id,
        course_id
      }
    });

    console.log('Kết quả lọc tài liệu:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lọc tài liệu:', error);
    return [];
  }
};

const searchDocuments = async (keyword = '') => {
  try {
    console.log('Đang tìm kiếm với từ khóa:', keyword);

    const response = await axios.get('http://localhost:3000/api/user/documents/search', {
      params: {
        keyword
      }
    });

    console.log('Kết quả trả về từ API tìm kiếm:', response.data);
    return response.data?.data || [];
  } catch (error) {
    console.error('Lỗi khi gọi API tìm kiếm:', error);
    return [];
  }
};


export { filterDocuments, searchDocuments };