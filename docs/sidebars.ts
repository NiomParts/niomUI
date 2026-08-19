import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/usage",
        "getting-started/styling",
      ],
    },
    {
      type: "category",
      label: "Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Atoms",
          collapsed: false,
          items: [
            "components/atoms/badge",
            "components/atoms/button",
            "components/atoms/card",
            "components/atoms/checkbox",
            "components/atoms/icon",
            "components/atoms/image",
            "components/atoms/input",
            "components/atoms/label",
            "components/atoms/rating",
            "components/atoms/select",
            "components/atoms/skeleton",
            "components/atoms/slider",
            "components/atoms/textarea",
          ],
        },
        {
          type: "category",
          label: "Molecules",
          collapsed: false,
          items: [
            "components/molecules/accordion",
            "components/molecules/checkbox-group",
            "components/molecules/color-list",
            "components/molecules/drawer",
            "components/molecules/input-field",
            "components/molecules/price-filter",
            "components/molecules/product-card",
            "components/molecules/toaster",
          ],
        },
        {
          type: "category",
          label: "Organisms",
          collapsed: false,
          items: [
            "components/organisms/product-grid",
            "components/organisms/table",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Customization",
      collapsed: false,
      items: ["customization/colors", "customization/table-stripes"],
    },
  ],
};

export default sidebars;
