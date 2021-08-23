import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import "./LayoutMenu.css";
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Button, Spin } from 'antd';
import {
  BarChartOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LayoutMenu(props) {
  const { children } = props;


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {
        children
      }
    </Layout>
  );
}

LayoutMenu.propTypes = {};

export default LayoutMenu;
