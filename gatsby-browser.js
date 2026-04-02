import { initSal } from "./src/utils/sal"

export const onInitialClientRender = () => {
  initSal()
}

export const onRouteUpdate = () => {
  initSal()
}