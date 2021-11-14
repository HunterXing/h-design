<template>
  <div class="doc-example">
    <div class="opr-btns">
      <span class="opr-btn" @click="toggle">{{ state.msg }}</span>
    </div>

    <div class="example-content">
      <slot></slot>
    </div>

    <div class="example-source" v-show="state.codeVisible">
      <pre><code class="language-xml" v-html="state.codePre"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { reactive, watchEffect } from 'vue';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

const props = defineProps({
  code: { type: String, default: '' }
});

const state = reactive({
  codeVisible: false,
  msg: '展开代码',
  codePre: ''
});

watchEffect(() => {
  if (props.code)
    state.codePre = hljs.highlight(props.code, { language: 'xml' }).value;
});

const toggle = () => {
  state.codeVisible = !state.codeVisible;
  state.msg = state.codeVisible ? '收起代码' : '展开代码';
};
</script>

<style lang="scss">
.doc-example {
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  overflow: hidden;

  .opr-btns {
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    height: 3em;
    line-height: 3em;
    border-bottom: 1px solid #ddd;

    .opr-btn {
      color: #666;
      cursor: pointer;
      user-select: none;
    }
  }

  .example-content {
    padding: 1em;
    min-height: 60px;
  }

  .example-source {
    margin: 0;
    padding-bottom: 1em;
    border-top: 1px solid rgb(167, 157, 157);
    border-radius: 0;
    background-color: #272C35;
  }

  pre {
    padding: 0;
    margin: 0;
    font-size: 16px;
    code {
      color: #ccc;
    }
  }
}
</style>
