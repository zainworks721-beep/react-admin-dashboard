import React from 'react';
import { Card, Progress, Tag, Row, Col, } from 'antd';
import { 
  CheckCircleOutlined, 
  FireOutlined, 
  ArrowUpOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';
import './StatCards.css';

const StatCards = () => {
  return (
    <div className="stats-container">
      <Row gutter={[20, 20]}>
     
        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card" bordered={false}>
            <div className="card-header">
              <span className="card-title">Task Progress</span>
              <Tag color="processing" icon={<ClockCircleOutlined />} className="custom-tag green">
                In Progress
              </Tag>
            </div>

            <div className="card-body circle-layout">
              <div className="progress-wrapper">
                <Progress 
                  type="circle" 
                  percent={80} 
                  strokeColor={{
                    '0%': '#6366f1',
                    '100%': '#a855f7',
                  }}
                  trailColor="rgba(255, 255, 255, 0.08)"
                  strokeWidth={10}
                  width={100}
                />
              </div>

              <div className="card-details">
                <h3 className="stat-number">16 / 20</h3>
                <p className="stat-desc">Tasks Completed</p>
                <span className="stat-trend positive">
                  <ArrowUpOutlined /> +12% this week
                </span>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card" bordered={false}>
            <div className="card-header">
              <span className="card-title">Project Performance</span>
              <Tag color="warning" icon={<FireOutlined />} className="custom-tag orange">
                High Priority
              </Tag>
            </div>

            <div className="card-body linear-layout">
              <div className="stat-value-group">
                <span className="stat-main-text">60% Completed</span>
                <span className="stat-sub-text">Target: 85%</span>
              </div>

              <Progress 
                percent={60} 
                showInfo={false}
                strokeColor={{
                  '0%': '#3b82f6',
                  '100%': '#06b6d4',
                }}
                trailColor="rgba(255, 255, 255, 0.08)"
                strokeWidth={12}
                className="custom-line-progress"
              />

              <div className="card-footer-info">
                <span>Deadline: <b>3 days left</b></span>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card" bordered={false}>
            <div className="card-header">
              <span className="card-title">Team Efficiency</span>
              <Tag color="success" icon={<CheckCircleOutlined />} className="custom-tag teal">
                Optimal
              </Tag>
            </div>

            <div className="card-body linear-layout">
              <div className="stat-value-group">
                <span className="stat-main-text">92% Score</span>
                <span className="stat-sub-text">Top Performer</span>
              </div>

              <Progress 
                percent={92} 
                showInfo={false}
                strokeColor={{
                  '0%': '#10b981',
                  '100%': '#34d399',
                }}
                trailColor="rgba(255, 255, 255, 0.08)"
                strokeWidth={12}
              />

              <div className="card-footer-info">
                <span>Avg. Response: <b>18 mins</b></span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StatCards;