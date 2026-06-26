import { jsxs, jsx } from "react/jsx-runtime";
function PageBanner({ title, subtitle, image }) {
  return /* @__PURE__ */ jsxs("section", { className: "page-banner", children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: "", loading: "eager" }),
    /* @__PURE__ */ jsxs("div", { className: "banner-inner container-x", children: [
      /* @__PURE__ */ jsx("h1", { children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { children: subtitle })
    ] })
  ] });
}
export {
  PageBanner as P
};
