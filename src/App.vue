<template>
  <div id="app" :style="{ overflowY: mobileNav ? 'hidden' : null }">
    <transition name="slidedown">
      <div class="notice" v-if="showNotice">
        <p>If you like this site, show your appreciation by <a href="https://www.buymeacoffee.com/emilcarlsson">buying me a beer</a> 🍺</p>
        <eva-icon name="close" fill="white" width="16" height="16" @click="showNotice = false"></eva-icon>
      </div>
    </transition>

    <nav class="container">
      <router-link to="/" class="logo">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><g><path d="M88.2,18C64.8,18.3,50,6.1,50,6.1S35.2,18.3,11.8,18c0,0-9.6,63,38.2,76C97.8,80.9,88.2,18,88.2,18z M50,79    c-31.6-8.6-25.2-50.2-25.2-50.2C40.2,29.1,50,21,50,21s9.8,8.1,25.2,7.8C75.2,28.8,81.6,70.5,50,79z"/><polygon points="50,36.5 45.6,45.4 35.8,46.8 42.9,53.7 41.2,63.5 50,58.9 58.8,63.5 57.1,53.7 64.2,46.8 54.4,45.4   "/></g></g></svg>
        </div>
        <p><span>Cold War</span></p>
      </router-link>
      <div>
        <router-link to="/ultra">DM Ultra</router-link>
        <router-link to="/aether">Dark Aether</router-link>
        <router-link to="/settings" class="icon settings" content="Settings" v-tippy="{ placement: 'bottom' }">
          <eva-icon name="settings-2-outline" fill="white"></eva-icon>
        </router-link>
      </div>
      <eva-icon class="mobile-nav-toggle" name="menu" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
    </nav>

    <transition name="fade">
      <nav class="mobile" v-if="mobileNav">
        <div class="header">
          <router-link to="/" class="logo">
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><g><path d="M88.2,18C64.8,18.3,50,6.1,50,6.1S35.2,18.3,11.8,18c0,0-9.6,63,38.2,76C97.8,80.9,88.2,18,88.2,18z M50,79    c-31.6-8.6-25.2-50.2-25.2-50.2C40.2,29.1,50,21,50,21s9.8,8.1,25.2,7.8C75.2,28.8,81.6,70.5,50,79z"/><polygon points="50,36.5 45.6,45.4 35.8,46.8 42.9,53.7 41.2,63.5 50,58.9 58.8,63.5 57.1,53.7 64.2,46.8 54.4,45.4   "/></g></g></svg>
            </div>
            <p><span>Cold War</span></p>
          </router-link>
          <eva-icon name="close" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
        </div>
        <div>
          <router-link to="/ultra">DM Ultra</router-link>
          <router-link to="/aether">Dark Aether</router-link>
        </div>
        <div class="footer">
          <router-link to="/settings">Settings</router-link>
          <router-link to="/about">About</router-link>
          <a href="https://github.com/carlssonemil/coldwar">GitHub</a>

          <div class="info">
            <div>
              <p>Looking for other camouflage trackers? 😎</p>

              <div class="buttons">
                <a href="https://coldwar.vercel.app/">
                  <img :src="require(`./assets/coldwar.png`)">
                  <span>Cold War</span>
                </a>
                <a href="https://vanguard.emca.app/">
                  <img :src="require(`./assets/vanguard.png`)">
                  <span>Vanguard</span>
                </a>
              </div>
            </div>
          </div>

          <a href="https://www.buymeacoffee.com/emilcarlsson" class="button">Support me by buying me a beer 🍺</a>
        </div>
      </nav>
    </transition>

    <main>
      <router-view/>
    </main>

    <footer class="container">
      <div>Made by <a href="https://emilcarlsson.se/">Emil Carlsson</a></div>
      
      <div>
        <router-link to="/about">About</router-link>
        <a href="https://github.com/carlssonemil/coldwar">GitHub</a>
      </div>
    </footer>

    <notifications position="top center">
      <template slot="body" slot-scope="props">
        <div class="notification" :class="props.item.type" @click="props.close">
          <p class="title">{{ props.item.title }}</p>
          <eva-icon class="remove" name="close" fill="white" width="18" height="18"></eva-icon>
        </div>
      </template>
    </notifications>

    <Debug v-if="!production" />

    <!--<Popup :id="'forced-url-change'">
      <p>Due to a forced URL change by our hosting provider, all stored progress has unfortunately been reset. Since the progress is stored locally in your browser and tied directly to the URL there is no currently known solution to recover the stored data. We're sorry for the inconvenience.</p>
    </Popup>-->
  </div>
</template>

<script>
import Debug from '@/components/Debug.vue'
//import Popup from '@/components/Popup.vue'

export default {
  components: {
    Debug,
    //Popup
  },

  data() {
    return {
      production: process.env.NODE_ENV === 'production',
      mobileNav: false,
      showNotice: false
    }
  },

  watch: {
    $route() {
      this.mobileNav = false;
    }
  },

  async beforeCreate() {
    await this.$store.dispatch('getStoredData');
  },

  mounted() {
    setTimeout(() => {
      this.showNotice = true;
    }, 15000);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import '@/scss/main';

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
