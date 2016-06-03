import Markdown from "./../lib/md-parser.js";
import sampleText from "./../../sample.md";
import scrollToY from "./../lib/scroll-to-y.js";

export default {
  data() {
    return {
      content: "",
      headingList: [],
      currentIndex: "",
      scrollItems: [],
    };
  },

  created() {
    const md = new Markdown(sampleText, { "data-toc-heading": true });
    this.content = md.toHTML();
    this.headingList = md.headingList;
  },


  ready() {
    const scrollItems = document.querySelectorAll("[data-toc-heading='true']");
    this.scrollItems = scrollItems;

    window.addEventListener("scroll", () => {
      const baseTop = window.pageYOffset + 50;

      Array.prototype.forEach.call(scrollItems, (elm, i) => {
        if (baseTop > elm.offsetTop) {
          this.currentIndex = i;
        }
        if (baseTop === 0) this.currentIndex = 0;
      });
    });
  },

  methods: {
    onTocItemClick(index) {
      this.currentIndex = index;
      const targetY = this.scrollItems[index].offsetTop;
      scrollToY(targetY, 2000, "easeInOutQuint");
    }

  }
};
