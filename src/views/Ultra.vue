<template>
  <transition name="fade">
    <div class="container" v-show="show">
      <Filters :type="'ultra'" :showSymbols="true" />
      <Weapons :weapons="weapons" :mode="'ultra'" />
      <Progress :type="'ultra'" />
    </div>
  </transition>
</template>

<script>
  import Filters from '@/components/Filters.vue'
  import Progress from '@/components/Progress.vue'
  import Weapons from '@/components/Weapons.vue'

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

        let { hideNonRequired, hideCompleted, category } = this.$store.state.filters.ultra;

        if (hideNonRequired) weapons = weapons.filter(w => w.required);
        if (hideCompleted) weapons = weapons.filter(w => !Object.values(w.progress.ultra).every(Boolean));
        if (category && category !== 'null') weapons = weapons.filter(w => w.category === category);

        return this.groupBy(weapons, weapon => weapon.category);
      }
    },

    methods: {
      // TODO: Move to utils file
      groupBy(list, keyGetter) {
        const map = {};
        list.forEach(item => {
          const key = keyGetter(item);

          if (!map[key]) {
            map[key] = [item];
          } else {
            map[key].push(item);
          }
        });
        return map;
      }
    },

    mounted () {
      this.show = true;
    },
  }
</script>

<style lang="scss" scoped>

</style>