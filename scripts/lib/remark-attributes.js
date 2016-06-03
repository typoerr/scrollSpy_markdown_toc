// 参考: https://github.com/wooorm/remark-slug/blob/master/index.js
// TODO: headingだけなので改良したい
// TOOD: github-slugでidの重複を解消

var visit = require("unist-util-visit");
/**
 * Patch `value` on `context` at `key`, if
 * `context[key]` does not already exist.
 *
 * @param {Object} context - Context to patch.
 * @param {string} key - Key to patch at.
 * @param {*} value - Value to patch.
 */
function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

/**
 * This plugin can be used as `remark.use(plugin, {attrs: { id: "foo" }})`.
 *
 * @param {Object} options - attributes.
 */
function attacher(processor, options) {
  const attrs = options.attrs || {};

  function transformer(ast) {
    visit(ast, "heading", function (node) {
      const data = patch(node, "data", {});
      patch(data, "htmlAttributes", {});

      for (const key of Object.keys(attrs)) {
        patch(data.htmlAttributes, key, attrs[key]);
      }
    });
  }

  return transformer;
}

export default attacher;
