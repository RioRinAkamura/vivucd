import { Button, Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Câu hỏi thường gặp (FAQ)</h2>
          <p>
            Dưới đây là một số câu hỏi thường gặp khi du khách đến với Côn Đảo
          </p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Di chuyển đến Côn Đảo mất khoảng bao lâu?" key="1">
            <p>
              Để đi đến Côn Đảo, bạn có thể di chuyển bằng máy bay từ TP.HCM,
              Cần Thơ, Hà Nội, Hải Phòng, Đà Nẵng hoặc tàu thủy từ Vũng Tàu, Cần
              Thơ
            </p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>
              Postea ceteros corrumpit ius te, eos epicuri intellegebat
              consequuntur et. Sint quot suscipiantur ea nam. Nam pericula
              evertitur ut, per et quod nostro, autem augue id has. Virtute
              epicurei quo te, pri et novum essent senserit.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>
              Eu veritus ancillae suavitate per, cum in appellantur efficiantur.
              Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii
              oblique interesset ea. Suas quidam volumus id eam, id populo
              euripidis temporibus pri. At eum quas putent iriure, fugit tritani
              sed ad. Per ad magna possim aliquam, est aeque exerci verear an,
              qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat
              omittam evertitur ad, meliore gubergren voluptatum at mel.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper
              consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea
              velit facete nec.
            </p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>
              Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne
              oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam
              qui at. Aliquip habemus fierent qui at. No facete omnesque
              argumentum sea, est tale error nihil ad.
            </p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>
              Erant vitae alterum in mel, viris rationibus argumentum eu sea.
              Per ei diceret constituto, ei qui simul intellegam, ut eos dolor
              ceteros. Altera contentiones et eam. Discere alienum intellegat te
              duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti
              nam, quo cu magna possit patrioque.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Hotline</h3>
          <p>0869.315.579</p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
