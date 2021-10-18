<template>
  <transition name="fade">
    <div class="container" v-show="show">
      <Filters :type="'aether'" :showSymbols="true" />
      <Weapons :weapons="weapons" :mode="'aether'" />
      <Progress :type="'aether'" />
    </div>
  </transition>
</template>

<script>
  import Filters from '@/components/Filters.vue'
  import Progress from '@/components/Progress.vue'
  import Weapons from '@/components/Weapons.vue'

  import { groupBy } from '@/utils/utils'

  export default {
    components: {
      Filters,
      Progress,
      Weapons
    },

    data() {
      return {
        show: false
      }
    },

    computed: {
      weapons() {
        let weapons = this.$store.state.weapons;

        let { hideCompleted, hideNonRequired, category } = this.$store.state.filters.aether;

        if (hideCompleted) weapons = weapons.filter(w => !Object.values(w.progress.aether).every(Boolean));

        if (hideNonRequired) {
          weapons = weapons.filter(weapon => {
            const categoryWeapons = weapons.filter(w => w.category === weapon.category);
            const required = categoryWeapons.filter(w => !w.dlc).length * 7;
            const completed = categoryWeapons.reduce((a, w) => a + Object.values(w.progress.aether).reduce((b, progress) => b + progress, 0), 0);

            if (completed === required && !Object.values(weapon.progress.aether).every(Boolean)) {
              return false;
            } else {
              return true;
            }
          });
        }

        if (category && category !== 'null') weapons = weapons.filter(w => w.category === category);

        return this.groupBy(weapons, weapon => weapon.category);
      }
    },

    methods: {
      groupBy
    },

    mounted () {
      this.show = true;
    },
  }
</script>

<style lang="scss" scoped>

</style>