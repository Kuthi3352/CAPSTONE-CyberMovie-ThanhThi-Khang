import { AccoutDatVe, Tabs } from "components";
import { AccountInfo } from "./AccountInfo";

export const AccountTemplate = () => {
  return (
    <div className="no-header">
      <Tabs className="pt-20"
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
    </div>
  );
};
