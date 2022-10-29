<template>
  <div class="footer-box">
    <div>
      <span>友情链接：</span>
      <a href="https://github.com/fxss5201" target="_blank" class="link-item">Github</a>
      <a href="https://blog.csdn.net/fxss5201" target="_blank" class="link-item">CSDN</a>
      <a href="https://juejin.cn/user/3702810892856808" target="_blank" class="link-item">稀土掘金</a>
      <a href="https://github.com/vueBlog" target="_blank" class="link-item">vueBlog</a>
    </div>
    <div>
      <span>Powered by<a href="https://github.com/fxss5201" target="_blank" class="link-item" style="margin: 0px 10px">fxss5201</a>© 2019-{{end}}</span>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="link-item" style="margin: 0px 10px">晋ICP备17012454号</a>
    </div>
  </div>
</template>

<script setup>
const end = new Date().getFullYear()
</script>

<style lang="scss">
.footer-box {
  color: var(--c-text);
  text-align: center;
  line-height: 1.7;
}
.link-item + .link-item {
  color: var(--c-text-accent);
  margin-left: 10px;
}
</style>
