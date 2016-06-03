import remark from "remark";
import html from "remark-html";
import hljs from "remark-highlight.js";
import attrAtcher from "./remark-attributes.js";

export default class Markdown {
  /**
  * @param {string} markdown
  */
  constructor(markdown, headingAttrs) {
    this.raw = markdown;
    this.ast = remark.parse(markdown, this._parseOption);
    this.headingAttrs = {attrs: headingAttrs};
    this._parseOption = {
      breaks: true,
      setext: true,
    };
  }

  /**
   * headerの文字列を配列で返す
   *
   * @returns {Array}
   */
  get headingList() {
    const headers = [];

    function getValue(node) {
      for (const cnode of node.children) {
        if (cnode.value) {
          return cnode.value;
        } else {
          return getValue(cnode);
        }
      }
    }

    this.ast.children.forEach(node => {
      if (node.type === "heading") headers.push(getValue(node));
    });

    return headers;
  }

  /**
   * @returns html
   */
  toHTML() {
    return remark.use(attrAtcher, this.headingAttrs)
      .use([html, hljs]).process(this.raw, this._parseOption);
  }
}