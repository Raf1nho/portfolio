<template>
    <h1>Contact</h1>
    <p>Send a message and I will respond as soon as possible.</p>
    <ul>
        <li><strong>E-mail: </strong> <a href="mailto:rafaelwos96@gmail.com">rafaelwos96@gmail.com</a> </li>
        <li><strong>Phone: </strong> <a href="tel:+5511957444991">+55 11 957444991</a></li>
    </ul>
    <p>If you prefer, reach me through this channels: </p>

    <div class="div-contact-social">
     <div class="social">
        <a href="https://www.linkedin.com/in/rafael-wos96/" target="_blank"><img class="social-icon" src="../assets/linkedin.svg" alt="Linkedin logo" title="LinkedIn"></a>
        <a href="https://github.com/Raf1nho" target="_blank"><img class="social-icon" src="../assets/github.svg" alt="Linkedin logo" title="Github"></a>
        <a href="https://twitter.com/raf1nho" target="_blank" ><img class="social-icon" src="../assets/twitter.svg" alt="Download my CV" title="Twitter"></a>
      </div>
    </div>
      
</template>

<script>
export default {
    
}
</script>

<style scoped>
    h1 {
        margin-bottom: 1rem;
    }
    a {
        text-decoration: none;
        color: #0072bc;
    }
    ul {
        padding: 0;
        margin: 1.5rem 0 ;
    }
    li {
        list-style: none;
        margin-bottom: 1rem;
    }

/* Telas grandes */
@media (min-width: 700px) {

    h1 {
        margin: 5rem 0 1rem 6rem;
        font-size: 2.5rem;
  }

    p, li {
        margin-left: 6rem;
    }

  .social {
    margin-left: 10rem;
    position: absolute;
    display: flex;
    flex-direction: row;
  }

    a {
        margin-left: .3rem;
    }

  .social-icon {
        width: 40px;
        margin: 1.5rem 1rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
}

/* Telas pequenas */
@media (max-width: 700px) {

        .div-contact-social {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
        .social {
        width: 200px;
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .social-icon {
        width: 40px;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
}
</style>