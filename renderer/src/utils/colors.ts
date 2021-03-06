export function getColor(color: string) {
  let colorName = color.split("-")[0];
  let weight = color.split("-")[1];
  let colors = {
    primary: "#e5e2fe #d1cdff #9e95f5 #7367f0 #4839eb",
    secondary: "#e9ebee #c8cccf #aaaeb1 #82868b #696d71",
    success: "#ceffe4 #88ffbd #94e6b9 #28c76f #1f9c57",
    warning: "#ffe9d4 #ffdeac #ffb976 #ff9f43 #ff8510",
    danger: "#fcdfe0 #f6b4b5 #f58d8e #ea5455 #e42728",
    info: "#d9fbff #aaf6ff #46ebff #00cfe8 #00a1b5",
  };
  return colors[colorName].split(" ")[+weight / 100 - 1];
}
