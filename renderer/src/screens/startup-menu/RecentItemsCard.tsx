import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import StartupPageContext from "./StartupPageContext";

export default function RecentItemsCard({ fileName }: { fileName: string }) {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const { updateDetailsPanel }: any = React.useContext(StartupPageContext);

  // hanlde main option btn click
  const handleOptionClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // handle open recent project
  const handleClickOpenFile = () => {};

  // hanlde remove from recent display
  const handleRemoveFromRecent = () => {
    confirm("removed!");
  };

  // handle open project folder in file manager or explorer.
  const handleOpenInExplorer = () => {
    confirm("folder opened!");
  };

  // handle open details panel
  const handleExpandDetailsPanel = () => {
    updateDetailsPanel((e: any) => ({
      ...e,
      hidden: false,
      details: { ...e.details, fileName },
    }));
  };

  return (
    <div className="recent-item-card" title={fileName}>
      {isMenuVisible && (
        <ul
          onMouseLeave={() => isMenuVisible && setIsMenuVisible(false)}
          className="optionsMenu"
        >
          <li onClick={handleClickOpenFile}>open</li>
          <li onClick={handleRemoveFromRecent}>remove</li>
          <li onClick={handleOpenInExplorer}>open in File Manager</li>
          <li onClick={handleExpandDetailsPanel}>details</li>
        </ul>
      )}
      <div className="options" onClick={handleOptionClick}>
        <BsThreeDotsVertical />
      </div>
      <HiOutlineDocumentText className="icon" />
      <div className="fileName">{fileName}</div>
    </div>
  );
}
