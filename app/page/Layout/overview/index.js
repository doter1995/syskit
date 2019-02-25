import React, { Component } from "react";
import os from "os";
import osName from "os-name";
import electron from "electron";

export default class index extends Component {
  render() {
    let info = {
      type: os.type(),
      homedir: os.homedir(),
      userInfo: os.userInfo()
    };
    console.log(electron.powerMonitor);
    return (
      <div>
        <div key="1">
          <div className="title">电脑信息</div>
          <div className="info">
            {osName(os.platform(), os.release())},{os.release()}
          </div>
        </div>
        <div key="2">
          <div>处理器</div>
          <div>{`${os.cpus()[0].model} ${os.cpus().length}核`}</div>
        </div>
        <div key="3">
          <div>内存</div>
          <div>{info.userInfo.username}</div>
          aaa
        </div>
      </div>
    );
  }
}
