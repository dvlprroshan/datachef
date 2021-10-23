import React from "react";
import StartupPageContext from "./StartupPageContext";
import { RiCloseCircleLine } from "react-icons/ri";

export default function RIDetailsPanel() {
  const { detailsPanel, updateDetailsPanel }: any =
    React.useContext(StartupPageContext);

  const handleClose = () => {
    updateDetailsPanel((obj: any) => ({ ...obj, hidden: true }));
  };
  return (
    <div className="details-panel">
      <div className="box-wrapper">
        <RiCloseCircleLine onClick={handleClose} className="closeIcon" />

        <table>
          <thead>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(detailsPanel.details).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e}</td>
                  <td>{detailsPanel.details[e]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
