<template>
  <!-- <html v-touch:swipe.(direction)="swipeHandler"> -->
    <div>
        <i @click='showMenu' class="pi pi-bars showMenu"></i>
        <nav v-if='navShow' class="nav-mobile">
          <router-link class='nav-link' to='/portfolio'>Home</router-link>
          <router-link class='nav-link' to='/skills'>Skills</router-link>
          <router-link class='nav-link' to='/experience'>Experience</router-link>
          <router-link class='nav-link' to='/education'>Education</router-link>
          <router-link class='nav-link' to='/contact'>Contact</router-link>
        </nav>
    </div>
    <div>
        <nav class="nav-desk">
          <router-link class='nav-link home' to='/portfolio'>Home</router-link>
          <router-link class='nav-link' to='/skills'>Skills</router-link>
          <router-link class='nav-link' to='/experience'>Experience</router-link>
          <router-link class='nav-link' to='/education'>Education</router-link>
          <router-link class='nav-link' to='/contact'>Contact</router-link>
        </nav>
    </div>
    <router-view></router-view>
  <!-- </html> -->
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'Portfolio',
  setup() {
    const navShow = ref(false)

    const showMenu = () => {
      if (!navShow.value) {
        navShow.value = true
      } else {
        navShow.value = false
      }
    } 
    
    // const swipeHandler = (direction) => {
    //   if (direction == 'left') {
    //     router.replace("/skills")
    //     console.log("swipe left")
    //   } else if (direction == 'right') {
    //     router.replace("/experience")
    //     console.log("swipe right")
    //   } 
      
    // }

    return { showMenu, navShow }
  }
 
}
</script>

<style>
* {
  margin: 0
}

html {
  background-color: #252525;
  font-family: 'Poppins', sans-serif;
  font-display: swap;
  color: #dfdfdf;
  font-size: 18px;
  height:100vh;
}

.nav-link {
    text-decoration: none;
    color: #dfdfdf;
  }

.router-link-active, a {
  text-decoration: none;
}

/* Telas grandes */
@media (min-width: 700px) {
  body {
  margin: 15vh 20vw ;
  -ms-overflow-style: none;  /* IE e Edge */
  scrollbar-width: none; /* IE and Edge */
}

::-webkit-scrollbar {
  display: none;
}

  /* NAV */
  .nav-desk {
    position: sticky;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    width: 95%;
  }
  .nav-link:not(.home){
    margin-left: 6rem;
  }

  .nav-mobile {
    display: none;
  }

  .showMenu {
    display: none !important;
  }

}

/* Telas pequenas */
@media (max-width: 700px) {
   body {
  margin: 7vw 7vw;
}

/* NAV */
  .showMenu {
    cursor: pointer;
    margin-bottom: 1rem;
    
  }
  .nav-mobile {  
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .nav-mobile .nav-link {
    margin-left: 0px;
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  .nav-desk{
    display: none
  }
  /* About */
  .description {
    font-size:1rem;
    margin-top: 0.2rem;
  }
  .about {
    margin-top: 1rem;
    font-size:0.8rem;
  }
}
</style>
