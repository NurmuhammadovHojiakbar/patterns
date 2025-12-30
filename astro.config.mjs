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
              slug: "javascript/introduction",
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
              label: "Factory Pattern",
              slug: "javascript/design/factory",
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
