/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string // interface和type的区别是：interface可以多次定义，最终属性会合并在一起
  }
}
