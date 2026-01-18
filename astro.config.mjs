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
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://patterns.uz/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://patterns.uz",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
      ],
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
            label: "Arxitektura",
            link: "/architecture",
            icon: "puzzle",
            items: [
              {
                label: "Umumiy",
                items: [
                  { label: "Kirish", slug: "architecture" },
                  {
                    label: "Clean Architecture",
                    slug: "architecture/general/clean-architecture",
                  },
                ],
              },
              {
                label: "Frontend",
                items: [
                  { label: "MVC", slug: "architecture/frontend/mvc" },
                  { label: "MVVM", slug: "architecture/frontend/mvvm" },
                  { label: "MVP", slug: "architecture/frontend/mvp" },
                  { label: "Flux", slug: "architecture/frontend/flux" },
                  {
                    label: "Atomic Design",
                    slug: "architecture/frontend/atomic-design",
                  },
                  { label: "FSD", slug: "architecture/frontend/fsd" },
                ],
              },
              {
                label: "Backend",
                items: [
                  {
                    label: "Microservices",
                    slug: "architecture/backend/microservices",
                  },
                  {
                    label: "Hexagonal",
                    slug: "architecture/backend/hexagonal",
                  },
                  { label: "CQRS", slug: "architecture/backend/cqrs" },
                  {
                    label: "Event-Driven",
                    slug: "architecture/backend/event-driven",
                  },
                ],
              },
            ],
          },
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
                  {
                    label: "Browser Hints",
                    slug: "javascript/performance/browser-hints",
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
