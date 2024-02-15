import { defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "copyright",
      title: "Copyright",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
