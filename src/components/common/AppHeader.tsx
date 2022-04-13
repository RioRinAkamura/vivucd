import { Anchor, Drawer, Button } from "antd";
import React, { useState } from "react";
import logo from "../../assets/images/logo1.png";

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="" height={64} />
          </div>
        </a>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link className="headerMenu" href="#home" title="Trang chủ" />
            <Link className="headerMenu" href="#about" title="Giới thiệu" />
            <Link className="headerMenu" href="#booking" title="Dịch vụ" />
            <Link className="headerMenu" href="#pricing" title="Thuê xe" />
            <Link className="headerMenu" href="#faq" title="FAQ" />
            <Link className="headerMenu" href="#contact" title="Liên hệ" />
            {/* <Link className="headerMenu" href="" title="">
              <i className="fas fa-globe"></i>
            </Link> */}
            {/* <Link className="headerMenu" href="/" title="Hotline: 0983400222" /> */}
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Anchor targetOffset={65}>
              <Link href="#home" title="Trang chủ" />
              <Link href="#about" title="Giới thiệu" />
              <Link href="#booking" title="Dịch vụ" />
              <Link href="#pricing" title="Thuê xe" />
              <Link href="#faq" title="FAQ" />
              <Link href="#contact" title="Liên hệ" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
