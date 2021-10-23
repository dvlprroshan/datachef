import * as fs from "fs";

// all method of jsonDatabase function
interface jsonDatabaseMethods {
  setProps: (propsName: string, data: any) => void;
  getProps: (propsName: string) => any;
  updateProps: (propsName: string, callback: (data: any) => any) => void;
  toString: () => string;
  save: () => void;
}

const jsonDatabase: (
  fileSrc: string,
  defaultTemplate?: object
) => jsonDatabaseMethods = (fileSrc, defaultTemplate = {}) => {
  // if file is not exist then create it.
  if (!fs.existsSync(fileSrc))
    fs.writeFileSync(fileSrc, JSON.stringify(defaultTemplate));
  // convert file to real object
  let mainObject = JSON.parse(fs.readFileSync(fileSrc).toString());

  return {
    //   set properties
    setProps(propsName: string, data: any) {
      mainObject[propsName] = data;
    },
    // getting properties
    getProps(propsName) {
      return mainObject[propsName];
    },
    // first get properties and then set properties
    updateProps(propsName, callback) {
      this.setProps(propsName, callback(this.getProps(propsName)));
    },
    // convert to string
    toString() {
      return JSON.stringify(mainObject);
    },
    // save object in file
    save() {
      fs.writeFileSync(fileSrc, JSON.stringify(mainObject));
    },
  };
};

export default jsonDatabase;
