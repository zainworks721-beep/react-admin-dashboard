import React from 'react';
import { Layout, Tooltip } from 'antd';
import { GithubOutlined, GlobalOutlined, CodeOutlined } from '@ant-design/icons';
import "./AppFooter.css"

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="premium-dashboard-footer">
            <div className="footer-wrapper">

                {/* Left Side: Brand, Version & System Status */}
                <div className="footer-left">
                    <span className="footer-logo-badge">Pro Admin</span>
                    <span className="footer-copyright">
                        © {new Date().getFullYear()} DevDashboard. All rights reserved.
                    </span>
                    <div className="system-status">
                        <span className="status-dot"></span>
                        <span>Systems Normal</span>
                    </div>
                </div>

                {/* Right Side: Links & Premium Social Buttons */}
                <div className="footer-right">
                    <a href="#docs" className="footer-nav-link">Docs</a>
                    <a href="#api" className="footer-nav-link">API Reference</a>
                    <a href="#privacy" className="footer-nav-link">Privacy</a>

                    <div style={{ display: 'flex', gap: '8px', marginLeft: '12px' }}>
                        <Tooltip title="GitHub Repository">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                                <GithubOutlined style={{ fontSize: '15px' }} />
                            </a>
                        </Tooltip>
                        <Tooltip title="Developer Console">
                            <a href="#console" className="social-icon-btn">
                                <CodeOutlined style={{ fontSize: '15px' }} />
                            </a>
                        </Tooltip>
                        <Tooltip title="Website">
                            <a href="#site" className="social-icon-btn">
                                <GlobalOutlined style={{ fontSize: '15px' }} />
                            </a>
                        </Tooltip>
                    </div>
                </div>

            </div>
        </Footer>
    );
};

export default AppFooter;