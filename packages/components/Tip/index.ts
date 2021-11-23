import { createApp } from "vue";
import TipComponent from "./h-tip.vue";
export interface TipProps {
  message?: string;
  type?: "normal";
  icon?: string;
  continued?: number;
  showClose: boolean;
}
const HTip = ({ message, type, icon, continued, showClose }: TipProps): any => {
  return new Promise(() => {
    const domId = "tip-" + new Date().getTime();
    // 实例化组件，createApp第二个参数是props
    const TipInstance = createApp(TipComponent, {
      message: message,
      type,
      icon,
      continued,
      showClose,
      id: domId, // 当前实例挂载dom的id
    });
    // 创建一个挂载容器
    const parentNode = document.createElement("div");
    parentNode.id = domId;
    document.body.appendChild(parentNode);
    // 挂载组件
    TipInstance.mount(parentNode);
  });
};

export default HTip;
