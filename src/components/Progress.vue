<template>
  <div class="progress">
    <transition name="fade">
      <div :class="['completed', type]"
           v-show="completed">
        <h2 v-if="type === 'ultra'">DM Ultra unlocked! 🥳</h2>
        <h2 v-if="type === 'aether'">Dark Aether unlocked! 🥳</h2>
      </div>
    </transition>

    <transition name="slideup">
      <div class="bars" v-show="show">
        <div :class="['progress', type]"
             :content="`Progress towards the ${ type === 'ultra' ? 'DM Ultra' : 'Dark Aether' } camouflage`"
             v-tippy="{ maxWidth: 500 }">
          <div class="bar" :style="{ width: progress + '%' }"></div>
          <label>{{ type === 'ultra' ? 'DM Ultra' : 'Dark Aether' }} progress: <span>{{ progress }}%</span></label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Confetti from '@/confetti'
  import { roundToTwoDecimals } from '@/utils/utils'

  export default {
    props: ['type'],

    data() {
      return {
        show: false,
        completed: false,
      }
    },

    computed: {
      progress() {
        return this.roundToTwoDecimals(this.calculateProgress([...this.$store.state.weapons]) * 100);
      }
    },

    watch: {
      progress(newValue) {
        if (newValue === 100) {
          this.handleCompleted();
        }
      }
    },

    methods: {
      calculateProgress(weapons) {
        const categories = ['Assault Rifle', 'Launcher', 'Light Machine Gun', 'Melee', 'Pistol', 'Shotgun', 'Sniper Rifle', 'Special', 'Sub Machine Gun', 'Tactical Rifle'];
        const progress = {};

        categories.forEach(category => {
          const categoryWeapons = weapons.filter(weapon => weapon.category === category);
          const required = categoryWeapons.filter(weapon => !weapon.dlc).length * 7; // 7 for the number of camouflages
          const completed = categoryWeapons.reduce((a, weapon) => a + Object.values(weapon.progress[this.type]).reduce((b, progress) => b + progress, 0), 0);
          progress[category] = completed / required > 1 ? 1 : completed / required;
        });
        
        return this.average(Object.values(progress))
      },

      average(arr) {
        return arr.reduce((p, c) => p + c, 0) / arr.length;
      },

      handleCompleted() {
        const DURATION = 10000,
              LENGTH   = 120;

        new Confetti({
          width: document.body.clientWidth,
          height: window.innerHeight,
          length: LENGTH,
          duration: DURATION
        });

        document.body.style.overflowY = 'hidden';
        this.completed = true;

        setTimeout(() => {
          this.completed = false;
          document.body.style.overflowY = 'visible';
          let canvas = document.querySelector('canvas');
          canvas.parentNode.removeChild(canvas);
        }, DURATION);
      },

      roundToTwoDecimals,
    },

    mounted() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    }
  }
</script>

<style lang="scss" scoped>
.completed {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: $transition;
  width: 100%;
  z-index: 100;

  &.ultra {
    background: $purple;
  }

  &.aether {
    background: $red;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 2;
    text-align: center;

    @media (max-width: $tablet) {
      font-size: 20px;
    }
  }
}

.bars {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  user-select: none;
  width: 100%;
  z-index: 10;

  .progress {
    background: $elevation-4-color;
    display: block;
    height: 35px;
    position: relative;
    width: 100%;

    &.ultra {
      .bar {
        background: $purple;
      }
    }

    &.aether {
      .bar {
        background: $red;
      }
    }

    .bar {
      display: block;
      height: 100%;
      transition: $transition;
    }

    label {
      font-size: 12px;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      white-space: nowrap;

      span {
        font-weight: 600;
      }
    }
  }
}
</style>