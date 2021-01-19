<template>
  <div class="h-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HBox",
};
</script>
<style lang="less" scoped>
.h-box {
  width: 100%;
  box-shadow: 0px 0.1rem 0.3rem 0px rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  margin-top: 1px;
  padding: 0.4rem 0.32rem;
  box-sizing: border-box;
}
</style>