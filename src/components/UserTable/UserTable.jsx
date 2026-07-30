import React from 'react';
import { Table, Select, DatePicker, Space, Tag, Input, Avatar, Button } from 'antd';
import {
    SearchOutlined,
    UserOutlined,
    MoreOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import './UserTable.css';

const UserTable = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
            render: (id) => <span className="table-id">#{id}</span>
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <Space size={12}>
                    <Avatar icon={<UserOutlined />} className="table-avatar" />
                    <span className="user-name-text">{text}</span>
                </Space>
            )
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (role) => <span className="role-text">{role}</span>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag
                    className={`custom-status-tag ${status.toLowerCase()}`}
                    icon={status === 'Active' ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Button type="text" icon={<MoreOutlined />} className="action-icon-btn" />
            ),
        }
    ];

    const data = [
        { key: '1', name: 'Zain', role: 'React Developer', status: 'Active' },
        { key: '2', name: 'Ali', role: 'UI/UX Designer', status: 'Active' },
        { key: '3', name: 'Usman', role: 'QA Tester', status: 'Inactive' },
    ];

    return (
        <div className="table-container">
            {/* Table Header Controls */}
            <div className="table-toolbar">
                <Space size={12} className="toolbar-left" wrap>
                    <Input
                        placeholder="Search team member..."
                        prefix={<SearchOutlined className="search-icon" />}
                        className="dark-input"
                    />
                    <Select defaultValue="all" className="dark-select" popupClassName="dark-select-dropdown">
                        <Select.Option value="all">All Roles</Select.Option>
                        <Select.Option value="dev">Developer</Select.Option>
                        <Select.Option value="designer">Designer</Select.Option>
                    </Select>
                    <DatePicker placeholder="Filter by Date" className="dark-datepicker" />
                </Space>
            </div>

            {/* Main Table */}
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 3, className: 'custom-pagination' }}
                className="dark-table"
            />
        </div>
    );
};

export default UserTable;