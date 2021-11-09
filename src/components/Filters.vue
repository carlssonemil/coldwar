<template>
  <div class="filters">
    <div class="select" v-if="'category' in filters">
      <label for="category">Category</label>
      <select id="category" v-model="filters.category" @change="filterChange()">
        <option value="null">All</option>
        <option v-for="(category, index) in categoryOptions" :key="index" :value="category">
          {{ category }}
        </option>
      </select>
      <eva-icon name="chevron-down" fill="white"></eva-icon>
    </div>

    <div class="checkbox" v-if="'hideCompleted' in filters">
      <label for="hideCompleted" :class="{ checked: filters.hideCompleted }">
        <input id="hideCompleted" type="checkbox" v-model="filters.hideCompleted" @change="filterChange()">
        <span>Hide completed</span>
      </label>
    </div>

    <div class="checkbox" v-if="'hideNonRequired' in filters">
      <label for="hideNonRequired" :class="{ checked: filters.hideNonRequired }">
        <input id="hideNonRequired" type="checkbox" v-model="filters.hideNonRequired" @change="filterChange()">
        <span>Hide non required</span>
      </label>
    </div>

    <div class="symbols" v-if="showSymbols">
      <eva-icon class="info" 
                name="question-mark-circle" 
                fill="white" 
                v-tippy="{ placement: 'bottom' }" 
                :content="'You only need to complete the number of base guns there are for each category to earn the Diamond camouflage. For example, the Assault Rifles requires 5 Gold camouflages to reward the Diamond camouflage.'"></eva-icon>
      <div class="info mobile">
        <eva-icon name="question-mark-circle" fill="white"></eva-icon>
        <p>You only need to complete the number of base guns there are for each category to earn the Diamond camouflage. For example, the Assault Rifles requires 5 Gold camouflages to reward the Diamond camouflage.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filters',

  props: ['type', 'showSymbols'],

  computed: {
    filters() {
      return { ...this.$store.state.filters[this.type] };
    },

    categoryOptions() {
      return Array.from(new Set(this.$store.state.weapons.map(i => i.category)));
    }
  },

  methods: {
    filterChange() {
      let type = this.type;
      let filters = this.filters;

      this.$store.dispatch('setFilters', { type, filters });
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  align-items: center;
  display: flex;
  margin-bottom: 50px;

  @media (max-width: $tablet) {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 75px;
  }

  > *:not(:first-child) {
    margin-left: 50px;

    @media (max-width: $tablet) {
      margin-left: 0;
      margin-top: 25px;
    }
  }

  > .checkbox:nth-last-of-type(2) {
    flex: 1 1 auto;
  }

  

  .symbols {
    cursor: default;

    @media (max-width: $tablet) {
      margin-top: 35px;
    }

    .info {
      cursor: pointer;
      opacity: .5;
      transition: $transition;

      &:hover {
        opacity: .75;
      }

      &.mobile {
        align-items: center;
        background: darken($elevation-9-color, 10%);
        border-radius: $border-radius;
        cursor: default;
        display: none;
        margin-top: 15px;
        padding: 25px;
        position: relative;

        i {
          align-items: center;
          background: $background-color;
          border-radius: 100%;
          display: flex;
          height: 28px;
          justify-content: center;
          left: 0;
          position: absolute;
          top: 0;
          transform: scale(150%) translate(-25%, -25%);
          width: 28px;

          ::v-deep svg {
            position: relative;
            top: -1px;
          }
        }

        &:hover {
          opacity: .5;
        }
      }

      @media (max-width: $tablet) {
        &:not(.mobile) {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
    }
  }

  button {
    align-self: flex-end;
  }
}
</style>