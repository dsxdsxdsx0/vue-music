<template>
  <div class="my-header">
    <div class="icon"></div>
    <h1 class="title">Chicken Music</h1>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .my-header
    position relative
    width 100%
    height 44px
    text-align center
    color $color-theme
    font-size 0
    .icon
      display inline-block
      vertical-align top
      margin-top 6px
      margin-right 9px
      width 30px
      height 32px
      background-size 30px 32px
      background-repeat no-repeat
      bg-image('logo')
    .title
      display inline-block
      vertical-align top
      line-height 44px
      font-size $font-size-large

</style>
