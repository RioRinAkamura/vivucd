import { Anchor, Drawer, Button, Menu } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo1.png";

const { Link } = Anchor;
const { SubMenu } = Menu;

const AppHeader = () => {
  const { t, i18n } = useTranslation();

  const [visible, setVisible] = useState<boolean>(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const language = (
    <i className="fas fa-globe" style={{ fontSize: 16, opacity: 0.9 }}></i>
  );

  const onLanguageChange = (lang: string) => {
    console.log("tranlate", lang);
    i18n.changeLanguage(lang);
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Anchor targetOffset={65}>
              <Link
                className="headerMenu"
                href="#home"
                title={t("navbar.home")}
              />
              <Link
                className="headerMenu"
                href="#about"
                title={t("navbar.about")}
              />
              <Link className="headerMenu" href="#booking" title="Dịch vụ" />
              <Link className="headerMenu" href="#pricing" title="Thuê xe" />
              <Link className="headerMenu" href="#faq" title="FAQ" />
              <Link className="headerMenu" href="#contact" title="Liên hệ" />
            </Anchor>
            <Menu expandIcon=" " style={{}}>
              <SubMenu
                style={{ textAlign: "right", width: 38 }}
                title={language}
              >
                <Menu.Item>Tiếng Việt</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
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
            <Menu>
              <SubMenu title={language}>
                <Menu.Item onClick={() => onLanguageChange("vi")}>
                  Tiếng Việt
                </Menu.Item>
                <Menu.Item onClick={() => onLanguageChange("en")}>
                  English
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
