<template>
  <html >
    <!-- <div class='mobile-menu'>
        <i @click='showMenu' class="pi pi-bars showMenu"></i>
        <nav v-if='navShow' class="nav-mobile">
          <router-link class='nav-link' to='/portfolio'>Home</router-link>
          <router-link class='nav-link' to='/skills'>Skills</router-link>
          <router-link class='nav-link' to='/experience'>Experience</router-link>
          <router-link class='nav-link' to='/education'>Education</router-link>
          <router-link class='nav-link' to='/contact'>Contact</router-link>
        </nav>
    </div> -->
    <TabMenu class='mobile-menu' :model="items"/>
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
  </html>
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

    let items = [
                {label: 'About', icon: 'pi pi-home', to: '/portfolio'},
                {label: 'Skills', icon: 'pi pi-thumbs-up', to: '/skills'},
                {label: 'Experience', icon: 'pi pi-star-o', to: '/experience'},
                {label: 'Education', icon: 'pi pi-pencil', to: '/education'},
                {label: 'Contact', icon: 'pi pi-send', to: '/contact'}
            ]
    
    // const swipeHandler = (direction) => {
    //   if (direction == 'left') {
    //     router.replace("/skills")
    //     console.log("swipe left")
    //   } else if (direction == 'right') {
    //     router.replace("/experience")
    //     console.log("swipe right")
    //   } 
      
    // }

    return { showMenu, navShow, items }
  }
 
}
</script>

<style>

* {
  margin: 0;
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
@media (min-width: 1250px) {
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
    width: 100%;
  }
  .nav-link:not(.home){
    margin-left: 5rem;
  }

  .mobile-menu {
    display: none;
  }

  .showMenu {
    display: none !important;
  }

  .about {
    margin-top: 1rem;
  }

}

 


/* Telas pequenas */
@media (max-width: 1249px) {
  html {
    margin-bottom: 50px;
  }

  body {
    margin: 7vw 7vw;
  }
  .p-tabmenu {
    width: 100%;
    background-color: #dfdfdf;
  }
  .p-tabmenu-nav {
    display: flex;
    justify-content: space-evenly;
  }

  .p-menuitem-link {
    flex-direction: column;
    padding: 6px !important; 
    
  }
  .p-highlight {
    -webkit-touch-callout:none !important;
    -webkit-user-select:none !important;
    -khtml-user-select:none !important;
    -moz-user-select:none !important;
    -ms-user-select:none !important;
    user-select:none !important;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  .p-button {
    position: inherit !important;
  }

  .p-menuitem-text {
    margin-top: 4px;
    font-size: 0.8rem;
  }
  .p-menuitem-icon {
    margin-right: 0 !important;
  }

  .mobile-menu {
    position: fixed;
    bottom: 0px;
    right: 0px;
    
  }

  .nav-desk{
    display: none
  }
  
}
</style>
