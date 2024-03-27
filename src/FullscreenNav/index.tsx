import { useState } from "react";
import { createPortal } from "react-dom";
import {
  MdMenu,
  MdClose,
  MdLogout,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";

import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { NavLink, INavLinkProps } from "@inubekit/navlink";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledSeparatorLine,
  StyledDetails,
  StyledSummary,
  StyledFooter,
} from "./styles";

interface IFNavSection {
  name: string;
  links: { [key: string]: INavLinkProps };
}

interface IFNavSection {
  navigation: IFNavigation;
}

interface IFNavigation {
  title: string;
  sections: { [key: string]: IFNavSection };
}

interface IFNav {
  portalId: string;
  navigation: IFNavigation;
  logoutPath: string;
  logoutTitle: string;
}

const MultiSections = ({ navigation }: IFNav) => {
  const sections = Object.keys(navigation.sections);

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (section === openSection) {
      setOpenSection("");
      return;
    }
    setOpenSection(section);
  };

  return (
    <Stack direction="column">
      {sections.map((section) => (
        <Stack key={section}>
          <StyledDetails
            id={section}
            open={section === openSection}
            onClick={(e: PointerEvent) => {
              e.preventDefault();
              toggleSection(section);
            }}
          >
            <StyledSummary>
              <Text
                margin="0px 16px"
                type="title"
                size="small"
                appearance={section === openSection ? "primary" : "gray"}
              >
                {section.toUpperCase()}
              </Text>
              <span>
                <Icon
                  appearance="dark"
                  icon={
                    section === openSection ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )
                  }
                  size="24px"
                />
              </span>
            </StyledSummary>
            <Stack direction="column">
              {Object.values(navigation.sections[section].links).map(
                (linkValue) => (
                  <NavLink
                    key={linkValue.id}
                    id={linkValue.id}
                    label={linkValue.label}
                    icon={linkValue.icon}
                    path={linkValue.path}
                    onClick={(e: PointerEvent) => e.stopPropagation()}
                  />
                )
              )}
            </Stack>
          </StyledDetails>
        </Stack>
      ))}
    </Stack>
  );
};

const TwoSections = ({ navigation }: IFNavSection) => {
  const navigationSectionValues = Object.values(navigation.sections);

  return (
    <Stack direction="column">
      {navigationSectionValues.map((sectionValue) => (
        <Stack
          key={sectionValue.name}
          direction="column"
          margin="s0 s0 s300 s0"
        >
          <Text
            as="h2"
            type="title"
            size="small"
            appearance="gray"
            padding="16px"
          >
            {sectionValue.name}
          </Text>
          <Stack direction="column">
            {Object.values(sectionValue.links).map((linkValue) => (
              <NavLink
                key={linkValue.id}
                id={linkValue.id}
                label={linkValue.label}
                icon={linkValue.icon}
                path={linkValue.path}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation }: IFNavSection) => {
  const sectionValue = Object.values(navigation.sections)[0];

  return (
    <Stack direction="column">
      {Object.values(sectionValue.links).map((linkValue) => (
        <NavLink
          key={linkValue.id}
          id={linkValue.id}
          label={linkValue.label}
          icon={linkValue.icon}
          path={linkValue.path}
        />
      ))}
    </Stack>
  );
};

const sectionsComponents: {
  [key: number]: ({ navigation }: IFNavSection) => JSX.Element;
  default: (props: IFNav) => JSX.Element;
} = {
  1: OneSection,
  2: TwoSections,
  default: MultiSections,
};

const FullscreenMenu = (
  props: Omit<IFNav, "portalId"> & { onClose: () => void }
) => {
  const { navigation, logoutTitle, logoutPath, onClose } = props;

  const sections = Object.keys(navigation.sections);

  const SectionComponent =
    sectionsComponents[sections.length] || sectionsComponents.default;

  return (
    <StyledFullscreenNav>
      <Grid templateColumns="1fr auto" padding="s400 s300 s200 s200">
        <Text type="title" size="small" appearance="gray">
          {navigation.title}
        </Text>
        <Icon
          appearance="dark"
          icon={<MdClose />}
          onClick={() => onClose()}
          size="24px"
          cursorHover={true}
        />
      </Grid>
      <SectionComponent navigation={navigation} name={""} links={{}} />
      <StyledSeparatorLine />
      <NavLink
        id="logoutPath"
        label={logoutTitle}
        icon={<MdLogout />}
        path={logoutPath}
      />
      <StyledFooter>
        <Text type="label" size="medium" appearance="gray">
          ©2023 - Inube
        </Text>
      </StyledFooter>
    </StyledFullscreenNav>
  );
};

const FullscreenNav = (props: IFNav) => {
  const { portalId, navigation, logoutTitle, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return (
    <>
      <StyledContDropMenu>
        <Icon
          appearance="dark"
          icon={<MdMenu />}
          onClick={() => setIsMenuOpen(true)}
          size="24px"
          cursorHover={true}
        />
      </StyledContDropMenu>
      {isMenuOpen &&
        createPortal(
          <FullscreenMenu
            navigation={navigation}
            logoutPath={logoutPath}
            logoutTitle={logoutTitle}
            onClose={() => setIsMenuOpen(false)}
          />,
          node
        )}
    </>
  );
};
export { FullscreenNav };
export type { IFNav, IFNavigation, IFNavSection };
