import { BrowserRouter } from "react-router-dom";

import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
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

const WithoutSections = (args: IFNav) => <FullscreenNav {...args} />;

WithoutSections.args = {
  portalId: "portals",
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        name: "Administrate",
        links: {
          privileges: {
            id: "privileges",
            label: "Privileges",
            icon: <MdKey />,
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
            icon: <MdPhone />,
            path: "/contacts",
          },
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
  logoutPath: "/logout",
  logoutTitle: "logout",
};

export default story;
export { WithoutSections };
