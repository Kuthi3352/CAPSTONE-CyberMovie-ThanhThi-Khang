import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3010,},
    resolve:{
      alias:{
        "@":path.resolve(__dirname,"./src"),
        "assets":path.resolve(__dirname,"./src/assets"),
        "components":path.resolve(__dirname,"./src/components"),
        "constant":path.resolve(__dirname,"./src/constant"),
        "hooks":path.resolve(__dirname,"./src/hooks"),
        "pages":path.resolve(__dirname,"./src/pages"),
        "router":path.resolve(__dirname,"./src/router"),
        "schemas":path.resolve(__dirname,"./src/schemas"),
        "services":path.resolve(__dirname,"./src/services"),
        "store":path.resolve(__dirname,"./src/store"),
        "type":path.resolve(__dirname,"./src/type"),
        "utils":path.resolve(__dirname,"./src/utils"),
      }
    }

})
