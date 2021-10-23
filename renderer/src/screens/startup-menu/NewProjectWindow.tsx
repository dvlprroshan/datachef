import React, { useState } from "react";

export default function NewProjectWindow(): React.ReactElement {
  const [isHidden, setIsHidden] = useState(false);
  return isHidden ? <></> : <div className="newpro-win">Hello </div>;
}
