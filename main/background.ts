import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import "./services";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    autoHideMenuBar: true,
  });

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.webContents.send("ping", "whoooooooh!");
  });

  if (isProd) {
    await mainWindow.loadURL("app://./startupMenu.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/startupMenu`);
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});