// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Pattern",
      description:
        "JavaScript, React va Vue uchun zamonaviy frontend patternlar. Arxitektura, best practice va real loyihalar uchun amaliy qo‘llanma.",
      footer: {
        content: '© 2026. By Hojiakbar Nurmuhammadov.',
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NurmuhammadovHojiakbar/patterns",
        },
      ],
      sidebar: [
        {
          label: "Kirish",
          items: [
            {
              label: "Kirish",
              slug: "introduction",
            },
          ],
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
              label: "Prototype Pattern",
              slug: "javascript/design/prototype",
            },
          ],
        },
      ],
    }),
  ],
  server: {
    open: true,
  },
});
