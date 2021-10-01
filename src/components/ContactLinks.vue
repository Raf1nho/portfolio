<template>
    <div class="div-contact-social">
      <div class="btn-contact">
        <router-link to='/contact'>
          <Button label="Contact Me" icon="pi pi-send" iconPos="right" />
        </router-link>
      </div>
      <div class="social">
        <a href="https://www.linkedin.com/in/rafael-wos96/" target="_blank"><img class="social-icon" src="../assets/linkedin.svg" alt="Linkedin logo" title="LinkedIn"></a>
        <a href="https://github.com/Raf1nho" target="_blank"><img class="social-icon" src="../assets/github.svg" alt="Linkedin logo" title="Github"></a>
        <a href="../assets/CV.pdf" download><img class="social-icon" src="../assets/download.svg" alt="Download my CV" title="Download my CV"></a>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

/* Telas grandes */
@media (min-width: 1250px) {

  .social {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 40vh;
    
  }
  .social-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 0.8rem
  }

  .btn-contact {
    margin-top: 2rem;
    margin-left: 6rem;
  }
}


/* Telas pequenas */
@media (max-width: 1249px) {

/* Social */

  .div-contact-social {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    justify-content: space-evenly;
  }

  .btn-contact {
  margin-top: 1rem;
    }

    .social {
    width: 200px;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .social-icon {
    width: 35px;
    height: 35px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

}
</style>