import { BrowserRouter } from "react-router-dom";
import {
  MdVpnKey,
  MdMeetingRoom,
  MdContacts,
  MdStarBorder,
  MdBadge,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdLogout,
} from "react-icons/md";

import { FullscreenNav, IFNav } from "..";

import { props } from "../props";

const story = {
  title: "navigation/FullscreenNav",
  components: [FullscreenNav],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const WithLogo = (args: IFNav) => <FullscreenNav {...args} />;

WithLogo.args = {
  portalId: "portals",
  navigation: {
    title: "MENU",
    sections: {
      administrative: {
        name: "Administrative",
        links: {
          privileges: {
            id: "privileges",
            label: "Privileges",
            icon: <MdVpnKey />,
            path: "/privileges",
          },
          accounting: {
            id: "accounting",
            label: "Accounting",
            icon: <MdMeetingRoom />,
            path: "/accounting",
          },
          contacts: {
            id: "contacts",
            label: "Contacts",
            icon: <MdContacts />,
            path: "/contacts",
          },
          crm: {
            id: "crm",
            label: "CRM",
            icon: <MdStarBorder />,
            path: "/crm",
          },
        },
      },
      request: {
        name: "Request",
        links: {
          documents: {
            id: "documents",
            label: "Documents",
            icon: <MdBadge />,
            path: "/documents",
          },
          marketing: {
            id: "marketing",
            label: "Marketing",
            icon: <MdStarBorder />,
            path: "/marketing",
          },
          savings: {
            id: "savings",
            label: "Savings",
            icon: <MdAccountBalanceWallet />,
            path: "/savings",
          },
          credit: {
            id: "credit",
            label: "Credit",
            icon: <MdAccountBalance />,
            path: "/credit",
          },
        },
      },
    },
  },
  actions: [
    {
      id: "action1",
      label: "Action 1",
      icon: <MdLogout />,
      action: () => console.log("Action 1 triggered"),
    },
    {
      id: "action2",
      label: "Action 2",
      icon: <MdLogout />,
      action: () => console.log("Action 2 triggered"),
    },
  ],
  footerLogo: "https://i.imgur.com/YYrs6cF.png",
};

export default story;
export { WithLogo };
