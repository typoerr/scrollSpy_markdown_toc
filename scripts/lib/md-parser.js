import remark from "remark";
import remarkHTML from "remark-html";

export default class Markdown {
  /**
  * @param {string} markdown
  */
  constructor(markdown) {
    this.raw = markdown;
    this.ast = remark.parse(markdown, this._parseOption);
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
    return remark.use(remarkHTML).process(this.raw, this._parseOption);
  }
}