<template>
  <transition name="fade">
    <div class="container" v-if="show">
      <h1>Cold War</h1>
      <h2>Simple, lightweight & intuitive camouflage tracker for Call of Duty: Black Ops Cold War</h2>

      <div class="buttons">
        <button @click="$router.push('/ultra')" class="ultra"><span>Track DM Ultra</span><eva-icon name="arrow-forward" fill="white"></eva-icon></button>
        <button @click="$router.push('/aether')" class="aether"><span>Track Dark Aether</span><eva-icon name="arrow-forward" fill="white"></eva-icon></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  mounted () {
    this.show = true;
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-top: 75px;
}

h2 {
  font-size: 20px;
  line-height: 1.5;
  margin: 30px auto 0;
  max-width: 450px;
}

.buttons {
  margin-top: 40px;

  button {
    align-items: center;
    display: inline-flex;
    color: $text-color;
    justify-content: center;
    padding: 12px 24px;

    @media (max-width: $mobile) {
      display: flex;
    }

    + button {
      margin-left: 20px;

      @media (max-width: $mobile) {
        margin-top: 20px;
        margin-left: 0;
      }
    }

    &:hover {
      transform: translateY(-5%);

      i {
        transform: translateX(7.5%);
      }
    }

    &.ultra {
      background: $purple;
    }

    &.aether {
      background: $red;
    }

    span {
      white-space: nowrap;
    }

    i {
      margin-left: 8px;
      position: relative;
      top: 2px;
      transition: $transition;
    }
  }
}
</style>