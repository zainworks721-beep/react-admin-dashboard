import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Avatar, Space, Dropdown } from "antd";
import {
    UserOutlined,
    DashboardOutlined,
    TeamOutlined,
    FileTextOutlined,
    SettingOutlined,
    PlusOutlined,
    MenuOutlined,
    BellOutlined,
    LogoutOutlined,
    DownOutlined
} from "@ant-design/icons";

import "./Navbar.css";

const { Header } = Layout;

const Navbar = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
        { key: "2", icon: <TeamOutlined />, label: "Employees" },
        { key: "3", icon: <FileTextOutlined />, label: "Reports" },
        { key: "4", icon: <SettingOutlined />, label: "Settings" },
    ];

    const profileMenuItems = [
        { key: "p1", icon: <UserOutlined />, label: "My Profile" },
        { key: "p2", icon: <SettingOutlined />, label: "Account Settings" },
        { type: "divider" },
        { key: "p3", icon: <LogoutOutlined />, label: "Logout", danger: true },
    ];

    return (
        <Header className="custom-navbar">

            <div className="nav-brand">
                <div className="logo-icon">D</div>
                <div className="logo-info">
                    <span className="brand-title">DevDashboard</span>
                    <span className="brand-subtitle">Admin Panel</span>
                </div>
            </div>


            <div className="nav-center">
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={menuItems}
                    className="main-menu"
                />
            </div>


            <div className="nav-actions">
                <div className="buttonSet">
                    {children}
                </div>
                <Button type="text" className="icon-btn" icon={<BellOutlined />} />

                <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <div className="user-profile-trigger">
                        <Avatar icon={<UserOutlined />} className="profile-avatar" />
                        <div className="user-details">
                            <span className="user-name">Zain</span>
                            <span className="user-role">Frontend Dev</span>
                        </div>
                        <DownOutlined className="dropdown-chevron" />
                    </div>
                </Dropdown>

                <Button
                    className="mobile-toggle-btn"
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setMobileMenuOpen(true)}
                />
            </div>

            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                className="mobile-drawer"
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={menuItems}
                />
                <div className="mobile-drawer-footer">
                    {children}
                </div>
            </Drawer>
        </Header>
    );
};

export default Navbar;