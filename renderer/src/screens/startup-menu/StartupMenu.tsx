import React from "react";
import Image from "next/image";
import Logo from "../../images/wide-logo-light.png";
import { BiFolderOpen, BiMessageAltAdd, BiStoreAlt } from "react-icons/bi";
import MenuOptionItem from "./MenuOptionItem";
import StartupPageContext from "./StartupPageContext";
import RecentItemsCard from "./RecentItemsCard";
import RIDetailsPanel from "./RIDetailsPanel";

export const StartupMenu = () => {
  const [detailsPanel, setDetailsPanel] = React.useState({
    hidden: true,
    details: {
      fileName: "untitled",
      dateCreated: "12 Jan 2021 12:23",
      dateModified: "13 Jan 2021 12:23",
      size: "120Kb",
      folderLocation: "C://mixproject/mygroup",
    },
  });

  const updateDetailsPanel = (callbackFunc) => {
    setDetailsPanel(callbackFunc(detailsPanel));
  };
  
  return (
    <StartupPageContext.Provider value={{ detailsPanel, updateDetailsPanel }}>
      <div className="startup-menu">
        <Image src={Logo} alt="This is Image" height={70} width={280} />
        <div className="menu-options">
          <MenuOptionItem
            Icon={BiMessageAltAdd}
            title="New Project"
            active
            extraProps={{
              onClick: () => {
                console.log("Hello Roshan Kuma");
              },
            }}
          />
          <MenuOptionItem Icon={BiFolderOpen} title="Open Project" />
          <MenuOptionItem Icon={BiStoreAlt} title="From Store" />
        </div>
        <div className="next-title">Recent Project:</div>
        <div className="recent-projects">
          <RecentItemsCard fileName="Roshan Kumar" />
          <RecentItemsCard fileName="Rahul Kumar" />
          <RecentItemsCard fileName="Roshan Kumar" />
          <RecentItemsCard fileName="Roshan Kumar" />
        </div>

        {detailsPanel.hidden || <RIDetailsPanel />}
      </div>
    </StartupPageContext.Provider>
  );
};
