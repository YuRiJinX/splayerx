<template>
  <div class="Info">
    <div class="brief-info">
      {{ value }}
    </div>
  </div>
</template>;

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
.Info {
  order: 2;
  .functionality {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .brief-info {
    font-size: 18px;
  }
}
</style>
