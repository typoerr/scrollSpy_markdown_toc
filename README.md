# scrollSpy markdown toc

Vue.jsをつかったScrollSpyのサンプル実装

実際につくる場合にはtocとmarkdownのview、wrapperコンポーネントで別けてeventを親でハンドリングするのがコンポーネント設計的にはよいと思う。

Vue.js 1.xだと動的にテンプレートを生成できないので、markdownからhtmlにparseしてぶっ込んでいる。2.0から`render`メソッドが加わるのでASTからそのままテンプレートを生成できそう。

ScrollSpyのサンプル実装をいくつか見たが、だいたいidでお互いを参照している。その場合idを一意にするために[github-slugger: Generate a slug just like GitHub does for markdown headings.](https://github.com/Flet/github-slugger)とか使うのが良さそう。今回は配列のindexで実装できたので、一意性を確保する必要はなかった。



