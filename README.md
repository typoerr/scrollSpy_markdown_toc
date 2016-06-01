# vue-loaderを使ったときのサンプル環境

[Introduction | Introduction](http://vue-loader.vuejs.org/en/index.html)

## 備忘録・感想

### 単一ファイルコンポーネント

手軽にjadeやCSS moduleを使ったscoped CSS環境を構築出来て良い。

VSCodeで書く場合シンタックスはpluginでサポートされているが、Editorの機能が死ぬのでJavaScriptだけは別で書いてsrc属性で読み込むのがよさそう。またはVue-loader(単一ファイル)を諦めてそれぞれのloaderで環境をつくるか。

### webpack-dev-serverとHMR

webpackのHMRを使う場合はdevServerの設定をwebpack.config.jsではなくコマンドで`--hot`を付けないと動作しない。また動作も不安定でうまく更新されない場合がある。

サンプルではsetIntervalのcountが不規則になる。またApp.vueのstateを更新しても反映されない等。反映される挙動がつかめずこだわりもないのでHMRは諦めても良いかもしれない。