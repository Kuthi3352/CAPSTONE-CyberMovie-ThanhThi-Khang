import { AccoutDatVe, Tabs } from "components";
import { AccountInfo } from "./AccountInfo";
import styled from "styled-components";

export const AccountTemplate = () => {
  return (
    <Container className="no-header">
      <Tabs
        className="pt-20"
        tabPosition="left"
        items={[
          {
            key: "accountInfo",
            label: "Thông tin tài khoản",
            children: <AccountInfo />,
          },
          {
            key: "accountHistoryBooking",
            label: "Lịch sử đặt vé",
            children: <AccoutDatVe />,
          },
        ]}
      />
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 90px !important;
`;
