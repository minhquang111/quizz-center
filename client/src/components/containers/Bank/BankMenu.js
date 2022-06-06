import React from 'react';
import { DownOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Select } from 'antd';
import Search from 'antd/lib/input/Search';

const { Option } = Select;

function BankMenu({ onFilterChange }) {
  const handleSearch = (values) => {
    console.log(values);
  };
  const handleMenuClick = (e) => {
    console.log(e.key);
  };
  const handleOnChange = (value) => {
    console.log(value);
  };
  const handleSubmit = () => {};
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Tạo bằng tay',
          key: '1',
        },
        {
          label: 'Từ file excel',
          key: '2',
        },
        {
          label: 'Từ file markdown',
          key: '3',
        },
      ]}
    />
  );
  return (
    <div className='menu'>
      <div className='option'>
        <Search
          placeholder='Tìm kiếm câu hỏi...'
          style={{ width: 400 }}
          defaultValue=''
          loading={false}
          onSearch={handleSearch}
        />
        <Select
          className='select'
          showSearch
          style={{
            width: 200,
          }}
          size='large'
          placeholder='Search to Select'
          optionFilterProp='children'
          filterOption={(input, option) =>
            option.children
              .toLocaleLowerCase()
              .includes(input.toLocaleLowerCase())
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
          onChange={handleOnChange}
        >
          <Option value='1'>Not Identified</Option>
          <Option value='2'>Closed</Option>
          <Option value='3'>Communicated</Option>
          <Option value='4'>Identified</Option>
          <Option value='5'>Resolved</Option>
          <Option value='6'>Cancelled</Option>
        </Select>
      </div>
      <Dropdown.Button
        className='create-question'
        size='large'
        icon={<DownOutlined />}
        overlay={menu}
        onClick={handleSubmit}
      >
        <PlusSquareOutlined />
        Tạo Câu Hỏi
      </Dropdown.Button>
    </div>
  );
}

export default BankMenu;
