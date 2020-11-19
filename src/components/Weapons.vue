<template>
  <div>
    <transition-group name="fade" tag="div" class="container">
      <div class="category" v-for="(category, title, index) in weapons" :key="title" :data-index="index">
        <h2>{{ title }}</h2>
        <transition-group name="fade" tag="div" class="weapons">
          <div class="weapon" v-for="weapon in category" :key="weapon.name">
            <div :class="['name', mode, { completed: completed(weapon, mode) }, { required: weapon.required }]"
                 @dblclick="toggleWeaponComplete(mode, weapon, completed(weapon, mode))"
                 v-tippy="{ content: `Double-click to ${ completed(weapon, mode) ? 'reset' : 'complete' } weapon` }">
              {{ weapon.name }}
            </div>

            <div class="progress">
              <div class="camo"
                   v-for="(completed, camo) in weapon.progress[mode]"
                   :key="camo"
                   @click="toggleComplete(mode, weapon, camo, completed)"
                   :content="camoTooltip(title, camo, weapon)"
                   v-tippy="{ placement: 'bottom' }">
                <div :class="['inner', { completed }]">
                  <eva-icon class="completed" name="checkmark" fill="#10ac84"></eva-icon>
                  <eva-icon v-if="completed" class="remove" name="close" fill="#ee5253"></eva-icon>
                  <img :src="require(`../assets/camouflages/${ convertToKebabCase(camo) }.png`)" :alt="camo">
                </div>     
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </transition-group>

    <div v-if="Object.keys(weapons).length === 0" class="finished-placeholder">
      <p>You have completed all camouflage challenges 👏</p>
    </div>
  </div>
</template>

<script>
  import { convertToKebabCase } from '@/utils/utils'

  export default {
    props: ['weapons', 'mode'],

    methods: {
      completed(weapon, mode) {
        return Object.values(weapon.progress[mode]).every(Boolean);
      },

      toggleComplete(mode, weapon, camo, current) {
        this.$store.dispatch('toggleCompleted', { mode, weapon, camo, current });
      },

      toggleWeaponComplete(mode, weapon, current) {
        this.$store.dispatch('toggleWeaponCompleted', { mode, weapon, current });
      },

      camoTooltip(category, camo, weapon) {
        let requirement = this.$store.state.camouflages.find(c => c.name === camo).requirements[category];
        return `${ camo } - ${ requirement[weapon] ? requirement[weapon] : requirement.default }`;
      },

      convertToKebabCase
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;

  .category {
    cursor: default;
    
    + .category {
      margin-top: 75px;

      @media (max-width: $tablet) {
        margin-top: 100px;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 25px;

      @media (max-width: $tablet) {
        font-size: 32px;
        margin-bottom: 35px;
      }
    }

    .weapons {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(5, 1fr);
      width: 100%;

      @media (max-width: $tablet) {
        grid-template-columns: 1fr;
      }

      .weapon {
        position: relative;

        .name {
          $padding: 25px;

          align-items: center;
          background: $elevation-3-color;
          border-radius: $border-radius;
          cursor: pointer;
          display: flex;
          font-weight: 600;
          justify-content: center;
          padding: $padding $padding / 2;
          transition: $transition;
          user-select: none;

          @media (max-width: $tablet) {
            font-size: 24px;
            padding: 15%;
          }

          &.completed {
            background: $yellow;
            color: black;
          }

          &.required {
            $border-size: 5px;

            border-left-width: $border-size;
            border-left-style: solid;
            padding-left: #{ ($padding / 2) - $border-size };

            @media (max-width: $tablet) {
              padding: 15% 15% 15% calc(15% - 5px) // to maintain text center alignment with the extra thick border
            }

            &.ultra {
              border-color: $purple;
            }

            &.aether {
              border-color: $red;
            }
          }
        }

        .progress {
          display: grid;
          gap: 5px;
          grid-template-columns: repeat(7, 1fr);
          grid-template-rows: repeat(2, auto);
          margin-top: 5px;

          .camo {
            user-select: none;

            .inner {
              align-items: center;
              background: $elevation-2-color;
              border-radius: $border-radius;
              cursor: pointer;
              display: flex;
              height: 100%;
              justify-content: center;
              overflow: hidden;
              position: relative;
              transition: $transition;
              width: 100%;

              &:hover {
                @media (min-width: $tablet) {
                  img, p {
                    opacity: .25;
                  }

                  i.completed {
                    opacity: 1;
                  }
                }
              }

              &.completed {
                &:hover {
                  @media (min-width: $tablet) {
                    i.completed { opacity: 0; }
                    i.remove { opacity: 1; }
                  }
                }

                img, p {
                  opacity: .25;
                }

                i {
                  &.completed {
                    opacity: 1;
                  }

                  &.remove {
                    opacity: 0;
                  }
                }
              }

              i {
                left: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
                transition: $transition;
                top: 50%;
                z-index: 2;

                &.completed {
                  opacity: 0;
                }
              }

              img {
                height: auto;
                position: relative;
                width: 100%;
                z-index: 1;
              }

              p {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}

.finished-placeholder {
  color: darken(white, 50%);
  margin-top: 10vh;
  text-align: center;
  width: 100%;

  p {
    font-size: 22px;
    line-height: 1.7;

    @media (max-width: $tablet) {
      font-size: 24px;
    }
  }
}
</style>