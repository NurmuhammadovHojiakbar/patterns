// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightScrollToTop from "starlight-scroll-to-top";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Pattern",
      description:
        "JavaScript, React va Vue uchun zamonaviy frontend patternlar. Arxitektura, best practice va real loyihalar uchun amaliy qo‘llanma.",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NurmuhammadovHojiakbar/patterns",
        },
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: "JavaScript Patternlar",
            link: "/introduction",
            icon: "open-book",
            items: [
              {
                label: "Kirish",
                slug: "introduction",
              },
              {
                label: "Design Patterns",
                items: [
                  {
                    label: "Singleton Pattern",
                    slug: "javascript/design/singleton",
                  },
                  {
                    label: "Proxy Pattern",
                    slug: "javascript/design/proxy",
                  },
                  {
                    label: "Factory Pattern",
                    slug: "javascript/design/factory",
                  },
                  {
                    label: "Module Pattern",
                    slug: "javascript/design/module",
                  },
                  {
                    label: "Observer Pattern",
                    slug: "javascript/design/observer",
                  },
                  {
                    label: "Prototype Pattern",
                    slug: "javascript/design/prototype",
                  },
                ],
              },
              {
                label: "Rendering Patterns",
                items: [
                  {
                    label: "Islands Architecture",
                    slug: "javascript/rendering/islands-architecture",
                  },
                ],
              },
              {
                label: "Performance Patterns",
                items: [
                  {
                    label: "Bundle Splitting",
                    slug: "javascript/performance/bundle-splitting",
                  },
                  {
                    label: "Tree Shaking",
                    slug: "javascript/performance/tree-shaking",
                  },
                ],
              },
            ],
          },
          {
            label: "React Patternlar",
            link: "/react",
            icon: "open-book",
            items: [],
          },
          {
            label: "Vue Patternlar",
            link: "/vue",
            icon: "open-book",
            items: [],
          },
        ]),
        starlightScrollToTop(),
      ],
    }),
  ],
  server: {
    open: true,
  },
});
