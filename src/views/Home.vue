<template>
  <transition name="fade">
    <div class="container" v-if="show">
      <h1>ColdWar<span>.now.sh</span></h1>
      <h2>Simple, lightweight & intuitive camouflage tracker for Call of Duty: Black Ops Cold War</h2>

      <div class="buttons">
        <button @click="$router.push('/ultra')" class="ultra">Track DM Ultra<eva-icon name="arrow-forward" fill="white"></eva-icon></button>
        <button @click="$router.push('/aether')" class="aether">Track Dark Aether<eva-icon name="arrow-forward" fill="white"></eva-icon></button>
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

  span {
    color: rgba($text-color, .5);
  }
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

    i {
      margin-left: 8px;
      position: relative;
      top: 2px;
      transition: $transition;
    }
  }
}
</style>