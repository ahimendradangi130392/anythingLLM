// vite.config.js
import { defineConfig } from "file:///D:/anythingLLM/frontend/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "url";

// postcss.config.js
import tailwind from "file:///D:/anythingLLM/frontend/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/anythingLLM/frontend/node_modules/autoprefixer/lib/autoprefixer.js";

// tailwind.config.js
var tailwind_config_default = {
  darkMode: "false",
  content: {
    relative: true,
    files: [
      "./src/components/**/*.{js,jsx}",
      "./src/hooks/**/*.js",
      "./src/models/**/*.js",
      "./src/pages/**/*.{js,jsx}",
      "./src/utils/**/*.js",
      "./src/*.jsx",
      "./index.html",
      "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    extend: {
      rotate: {
        "270": "270deg",
        "360": "360deg"
      },
      colors: {
        "black-900": "#141414",
        accent: "#3D4147",
        "sidebar-button": "#31353A",
        sidebar: "#25272C",
        "historical-msg-system": "rgba(255, 255, 255, 0.05);",
        "historical-msg-user": "#2C2F35",
        outline: "#4E5153",
        "primary-button": "#46C8FF",
        secondary: "#2C2F36",
        "dark-input": "#18181B",
        "mobile-onboarding": "#2C2F35",
        "dark-highlight": "#1C1E21",
        "dark-text": "#222628",
        description: "#D2D5DB",
        "x-button": "#9CA3AF"
      },
      backgroundImage: {
        "preference-gradient": "linear-gradient(180deg, #5A5C63 0%, rgba(90, 92, 99, 0.28) 100%);",
        "chat-msg-user-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%);",
        "selected-preference-gradient": "linear-gradient(180deg, #313236 0%, rgba(63.40, 64.90, 70.13, 0) 100%);",
        "main-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "modal-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "sidebar-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "login-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "menu-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "menu-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "workspace-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "workspace-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "switch-selected": "linear-gradient(146deg, #5B616A 0%, #3F434B 100%)"
      },
      fontFamily: {
        sans: [
          "plus-jakarta-sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      animation: {
        sweep: "sweep 0.5s ease-in-out"
      },
      keyframes: {
        sweep: {
          "0%": { transform: "scaleX(0)", transformOrigin: "bottom left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "bottom left" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }
    }
  },
  // Required for rechart styles to show since they can be rendered dynamically and will be tree-shaken if not safe-listed.
  safelist: [
    {
      pattern: /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern: /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern: /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern: /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern: /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern: /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    }
  ],
  plugins: []
};

// postcss.config.js
var postcss_config_default = {
  plugins: [tailwind(tailwind_config_default), autoprefixer]
};

// vite.config.js
import react from "file:///D:/anythingLLM/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dns from "dns";
import { visualizer } from "file:///D:/anythingLLM/frontend/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/anythingLLM/frontend/vite.config.js";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: "localhost"
  },
  define: {
    "process.env": process.env
  },
  css: {
    postcss: postcss_config_default
  },
  plugins: [
    react(),
    visualizer({
      template: "treemap",
      // or sunburst
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "bundleinspector.html"
      // will be saved in project's root
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        }
      }
    ]
  },
  build: {
    rollupOptions: {
      external: [
        // Reduces transformation time by 50% and we don't even use this variant, so we can ignore.
        /@phosphor-icons\/react\/dist\/ssr/
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicG9zdGNzcy5jb25maWcuanMiLCAidGFpbHdpbmQuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcYW55dGhpbmdMTE1cXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFueXRoaW5nTExNXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hbnl0aGluZ0xMTS9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJ1cmxcIlxuaW1wb3J0IHBvc3Rjc3MgZnJvbSBcIi4vcG9zdGNzcy5jb25maWcuanNcIlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgZG5zIGZyb20gXCJkbnNcIlxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIlxuXG5kbnMuc2V0RGVmYXVsdFJlc3VsdE9yZGVyKFwidmVyYmF0aW1cIilcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIlxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBcInByb2Nlc3MuZW52XCI6IHByb2Nlc3MuZW52XG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3NcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICB0ZW1wbGF0ZTogXCJ0cmVlbWFwXCIsIC8vIG9yIHN1bmJ1cnN0XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICAgIGZpbGVuYW1lOiBcImJ1bmRsZWluc3BlY3Rvci5odG1sXCIgLy8gd2lsbCBiZSBzYXZlZCBpbiBwcm9qZWN0J3Mgcm9vdFxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9jZXNzOiBcInByb2Nlc3MvYnJvd3NlclwiLFxuICAgICAgICBzdHJlYW06IFwic3RyZWFtLWJyb3dzZXJpZnlcIixcbiAgICAgICAgemxpYjogXCJicm93c2VyaWZ5LXpsaWJcIixcbiAgICAgICAgdXRpbDogXCJ1dGlsXCIsXG4gICAgICAgIGZpbmQ6IC9efi4rLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6ICh2YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UoL15+LywgXCJcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAvLyBSZWR1Y2VzIHRyYW5zZm9ybWF0aW9uIHRpbWUgYnkgNTAlIGFuZCB3ZSBkb24ndCBldmVuIHVzZSB0aGlzIHZhcmlhbnQsIHNvIHdlIGNhbiBpZ25vcmUuXG4gICAgICAgIC9AcGhvc3Bob3ItaWNvbnNcXC9yZWFjdFxcL2Rpc3RcXC9zc3IvXG4gICAgICBdXG4gICAgfSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlXG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIGdsb2JhbDogXCJnbG9iYWxUaGlzXCJcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXVxuICAgIH1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcYW55dGhpbmdMTE1cXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFueXRoaW5nTExNXFxcXGZyb250ZW5kXFxcXHBvc3Rjc3MuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hbnl0aGluZ0xMTS9mcm9udGVuZC9wb3N0Y3NzLmNvbmZpZy5qc1wiO2ltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IFt0YWlsd2luZCh0YWlsd2luZENvbmZpZyksIGF1dG9wcmVmaXhlcl0sXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhbnl0aGluZ0xMTVxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYW55dGhpbmdMTE1cXFxcZnJvbnRlbmRcXFxcdGFpbHdpbmQuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hbnl0aGluZ0xMTS9mcm9udGVuZC90YWlsd2luZC5jb25maWcuanNcIjsvKiogQHR5cGUge2ltcG9ydCgndGFpbHdpbmRjc3MnKS5Db25maWd9ICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhcmtNb2RlOiAnZmFsc2UnLFxuICBjb250ZW50OiB7XG4gICAgcmVsYXRpdmU6IHRydWUsXG4gICAgZmlsZXM6IFtcbiAgICAgIFwiLi9zcmMvY29tcG9uZW50cy8qKi8qLntqcyxqc3h9XCIsXG4gICAgICBcIi4vc3JjL2hvb2tzLyoqLyouanNcIixcbiAgICAgIFwiLi9zcmMvbW9kZWxzLyoqLyouanNcIixcbiAgICAgIFwiLi9zcmMvcGFnZXMvKiovKi57anMsanN4fVwiLFxuICAgICAgXCIuL3NyYy91dGlscy8qKi8qLmpzXCIsXG4gICAgICBcIi4vc3JjLyouanN4XCIsXG4gICAgICBcIi4vaW5kZXguaHRtbFwiLFxuICAgICAgJy4vbm9kZV9tb2R1bGVzL0B0cmVtb3IvKiovKi57anMsdHMsanN4LHRzeH0nXG4gICAgXVxuICB9LFxuICB0aGVtZToge1xuICAgIGV4dGVuZDoge1xuICAgICAgcm90YXRlOiB7XG4gICAgICAgIFwiMjcwXCI6IFwiMjcwZGVnXCIsXG4gICAgICAgIFwiMzYwXCI6IFwiMzYwZGVnXCJcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgXCJibGFjay05MDBcIjogXCIjMTQxNDE0XCIsXG4gICAgICAgIGFjY2VudDogXCIjM0Q0MTQ3XCIsXG4gICAgICAgIFwic2lkZWJhci1idXR0b25cIjogXCIjMzEzNTNBXCIsXG4gICAgICAgIHNpZGViYXI6IFwiIzI1MjcyQ1wiLFxuICAgICAgICBcImhpc3RvcmljYWwtbXNnLXN5c3RlbVwiOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XCIsXG4gICAgICAgIFwiaGlzdG9yaWNhbC1tc2ctdXNlclwiOiBcIiMyQzJGMzVcIixcbiAgICAgICAgb3V0bGluZTogXCIjNEU1MTUzXCIsXG4gICAgICAgIFwicHJpbWFyeS1idXR0b25cIjogXCIjNDZDOEZGXCIsXG4gICAgICAgIHNlY29uZGFyeTogXCIjMkMyRjM2XCIsXG4gICAgICAgIFwiZGFyay1pbnB1dFwiOiBcIiMxODE4MUJcIixcbiAgICAgICAgXCJtb2JpbGUtb25ib2FyZGluZ1wiOiBcIiMyQzJGMzVcIixcbiAgICAgICAgXCJkYXJrLWhpZ2hsaWdodFwiOiBcIiMxQzFFMjFcIixcbiAgICAgICAgXCJkYXJrLXRleHRcIjogXCIjMjIyNjI4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIiNEMkQ1REJcIixcbiAgICAgICAgXCJ4LWJ1dHRvblwiOiBcIiM5Q0EzQUZcIlxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRJbWFnZToge1xuICAgICAgICBcInByZWZlcmVuY2UtZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1QTVDNjMgMCUsIHJnYmEoOTAsIDkyLCA5OSwgMC4yOCkgMTAwJSk7XCIsXG4gICAgICAgIFwiY2hhdC1tc2ctdXNlci1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKTtcIixcbiAgICAgICAgXCJzZWxlY3RlZC1wcmVmZXJlbmNlLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzEzMjM2IDAlLCByZ2JhKDYzLjQwLCA2NC45MCwgNzAuMTMsIDApIDEwMCUpO1wiLFxuICAgICAgICBcIm1haW4tZ3JhZGllbnRcIjogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjM0Q0MTQ3IDAlLCAjMkMyRjM1IDEwMCUpXCIsXG4gICAgICAgIFwibW9kYWwtZ3JhZGllbnRcIjogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjM0Q0MTQ3IDAlLCAjMkMyRjM1IDEwMCUpXCIsXG4gICAgICAgIFwic2lkZWJhci1ncmFkaWVudFwiOiBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVCNjE2QSAwJSwgIzNGNDM0QiAxMDAlKVwiLFxuICAgICAgICBcImxvZ2luLWdyYWRpZW50XCI6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKVwiLFxuICAgICAgICBcIm1lbnUtaXRlbS1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjM0Q0MTQ3IDAlLCAjMkMyRjM1IDEwMCUpXCIsXG4gICAgICAgIFwibWVudS1pdGVtLXNlbGVjdGVkLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1QjYxNkEgMCUsICMzRjQzNEIgMTAwJSlcIixcbiAgICAgICAgXCJ3b3Jrc3BhY2UtaXRlbS1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjM0Q0MTQ3IDAlLCAjMkMyRjM1IDEwMCUpXCIsXG4gICAgICAgIFwid29ya3NwYWNlLWl0ZW0tc2VsZWN0ZWQtZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVCNjE2QSAwJSwgIzNGNDM0QiAxMDAlKVwiLFxuICAgICAgICBcInN3aXRjaC1zZWxlY3RlZFwiOiBcImxpbmVhci1ncmFkaWVudCgxNDZkZWcsICM1QjYxNkEgMCUsICMzRjQzNEIgMTAwJSlcIlxuICAgICAgfSxcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgc2FuczogW1xuICAgICAgICAgIFwicGx1cy1qYWthcnRhLXNhbnNcIixcbiAgICAgICAgICBcInVpLXNhbnMtc2VyaWZcIixcbiAgICAgICAgICBcInN5c3RlbS11aVwiLFxuICAgICAgICAgIFwiLWFwcGxlLXN5c3RlbVwiLFxuICAgICAgICAgIFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsXG4gICAgICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAgICAgXCJSb2JvdG9cIixcbiAgICAgICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICAgICBcIkFyaWFsXCIsXG4gICAgICAgICAgJ1wiTm90byBTYW5zXCInLFxuICAgICAgICAgIFwic2Fucy1zZXJpZlwiLFxuICAgICAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgICAgICdcIlNlZ29lIFVJIEVtb2ppXCInLFxuICAgICAgICAgICdcIlNlZ29lIFVJIFN5bWJvbFwiJyxcbiAgICAgICAgICAnXCJOb3RvIENvbG9yIEVtb2ppXCInXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgc3dlZXA6IFwic3dlZXAgMC41cyBlYXNlLWluLW91dFwiXG4gICAgICB9LFxuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgIHN3ZWVwOiB7XG4gICAgICAgICAgXCIwJVwiOiB7IHRyYW5zZm9ybTogXCJzY2FsZVgoMClcIiwgdHJhbnNmb3JtT3JpZ2luOiBcImJvdHRvbSBsZWZ0XCIgfSxcbiAgICAgICAgICBcIjEwMCVcIjogeyB0cmFuc2Zvcm06IFwic2NhbGVYKDEpXCIsIHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFkZUluOiB7XG4gICAgICAgICAgXCIwJVwiOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICBcIjEwMCVcIjogeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFkZU91dDoge1xuICAgICAgICAgIFwiMCVcIjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgXCIxMDAlXCI6IHsgb3BhY2l0eTogMCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIFJlcXVpcmVkIGZvciByZWNoYXJ0IHN0eWxlcyB0byBzaG93IHNpbmNlIHRoZXkgY2FuIGJlIHJlbmRlcmVkIGR5bmFtaWNhbGx5IGFuZCB3aWxsIGJlIHRyZWUtc2hha2VuIGlmIG5vdCBzYWZlLWxpc3RlZC5cbiAgc2FmZWxpc3Q6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAvXihiZy0oPzpzbGF0ZXxncmF5fHppbmN8bmV1dHJhbHxzdG9uZXxyZWR8b3JhbmdlfGFtYmVyfHllbGxvd3xsaW1lfGdyZWVufGVtZXJhbGR8dGVhbHxjeWFufHNreXxibHVlfGluZGlnb3x2aW9sZXR8cHVycGxlfGZ1Y2hzaWF8cGlua3xyb3NlKS0oPzo1MHwxMDB8MjAwfDMwMHw0MDB8NTAwfDYwMHw3MDB8ODAwfDkwMHw5NTApKSQvLFxuICAgICAgdmFyaWFudHM6IFsnaG92ZXInLCAndWktc2VsZWN0ZWQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC9eKHRleHQtKD86c2xhdGV8Z3JheXx6aW5jfG5ldXRyYWx8c3RvbmV8cmVkfG9yYW5nZXxhbWJlcnx5ZWxsb3d8bGltZXxncmVlbnxlbWVyYWxkfHRlYWx8Y3lhbnxza3l8Ymx1ZXxpbmRpZ298dmlvbGV0fHB1cnBsZXxmdWNoc2lhfHBpbmt8cm9zZSktKD86NTB8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8OTUwKSkkLyxcbiAgICAgIHZhcmlhbnRzOiBbJ2hvdmVyJywgJ3VpLXNlbGVjdGVkJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAvXihib3JkZXItKD86c2xhdGV8Z3JheXx6aW5jfG5ldXRyYWx8c3RvbmV8cmVkfG9yYW5nZXxhbWJlcnx5ZWxsb3d8bGltZXxncmVlbnxlbWVyYWxkfHRlYWx8Y3lhbnxza3l8Ymx1ZXxpbmRpZ298dmlvbGV0fHB1cnBsZXxmdWNoc2lhfHBpbmt8cm9zZSktKD86NTB8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8OTUwKSkkLyxcbiAgICAgIHZhcmlhbnRzOiBbJ2hvdmVyJywgJ3VpLXNlbGVjdGVkJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAvXihyaW5nLSg/OnNsYXRlfGdyYXl8emluY3xuZXV0cmFsfHN0b25lfHJlZHxvcmFuZ2V8YW1iZXJ8eWVsbG93fGxpbWV8Z3JlZW58ZW1lcmFsZHx0ZWFsfGN5YW58c2t5fGJsdWV8aW5kaWdvfHZpb2xldHxwdXJwbGV8ZnVjaHNpYXxwaW5rfHJvc2UpLSg/OjUwfDEwMHwyMDB8MzAwfDQwMHw1MDB8NjAwfDcwMHw4MDB8OTAwfDk1MCkpJC8sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAvXihzdHJva2UtKD86c2xhdGV8Z3JheXx6aW5jfG5ldXRyYWx8c3RvbmV8cmVkfG9yYW5nZXxhbWJlcnx5ZWxsb3d8bGltZXxncmVlbnxlbWVyYWxkfHRlYWx8Y3lhbnxza3l8Ymx1ZXxpbmRpZ298dmlvbGV0fHB1cnBsZXxmdWNoc2lhfHBpbmt8cm9zZSktKD86NTB8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8OTUwKSkkLyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC9eKGZpbGwtKD86c2xhdGV8Z3JheXx6aW5jfG5ldXRyYWx8c3RvbmV8cmVkfG9yYW5nZXxhbWJlcnx5ZWxsb3d8bGltZXxncmVlbnxlbWVyYWxkfHRlYWx8Y3lhbnxza3l8Ymx1ZXxpbmRpZ298dmlvbGV0fHB1cnBsZXxmdWNoc2lhfHBpbmt8cm9zZSktKD86NTB8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8OTUwKSkkLyxcbiAgICB9LFxuICBdLFxuICBwbHVnaW5zOiBbXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UCxTQUFTLG9CQUFvQjtBQUMxUixTQUFTLGVBQWUsV0FBVzs7O0FDRGdPLE9BQU8sY0FBYztBQUN4UixPQUFPLGtCQUFrQjs7O0FDQXpCLElBQU8sMEJBQVE7QUFBQSxFQUNiLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7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
