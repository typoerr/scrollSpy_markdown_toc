import Markdown from "./../lib/md-parser.js";
import sampleText from "./../../sample.md";

export default {
  data() {
    return {
      content: "",
      headingList: [],
    };
  },

  created() {
    const md = new Markdown(sampleText, { "data-toc-heading": true });
    this.content = md.toHTML();
    this.headingList = md.headingList;
  },


  ready() {
    const headers = document.querySelectorAll("[data-toc-heading='true']");
  }
};
