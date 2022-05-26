import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "悦兮小栈",
  description: "悦兮小栈",

  base: "/blovey/",

  theme,
});
