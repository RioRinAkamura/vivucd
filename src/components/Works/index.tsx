import { Button, Modal } from "antd";
import React, { useState } from "react";

const Works = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const showModal = () => {
    setVisible(true);
  };
  return (
    <div>
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="Khám phá Côn Đảo ngay nào"
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={null}
            destroyOnClose={true}
            width={800}
          >
            <iframe
              title="Khám phá Côn Đảo ngay nào"
              width="100%"
              height="350"
              src="https://www.youtube.com/watch?v=5kT9LrDLoT4"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Works;
