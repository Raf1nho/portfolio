<template>
<div class="home">
    <div class="photo">
      <img src="../assets/profile.webp" alt="Imagem de perfil">
    </div>
    <div class="introduction">
        <h1 class="title" >Hi, I'm Rafael</h1>
        <h2 class="description">Frontend Developer</h2>
        <div>
          <p class="about">A person that likes to learn, code and create things that actually work! Also passionate about fixing stuff.</p>
        </div>
    </div>
    
</div>
    <ContactSocial/>
</template>

<script>

export default {
}
</script>


<style scoped>

/* Telas grandes */
@media (min-width: 700px) {

  .home {
    margin: 5rem 6rem 0 6rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 250px;
    height: 250px;
  }

  .introduction {
    margin-right: 6rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }

  .title {
    font-size: 2.5rem;
  }

  .description {
    margin: 1rem 0 1rem 0;
    color: rgb(204, 204, 204);
  }

  .about {
    max-width: 500px
  }
}

/* Telas pequenas */
@media (max-width: 700px) {

  .home {
    display:  flex;
    flex-direction: column;
    align-items: center;
  }
  .photo {
    margin-bottom: 1rem;
  }

  img {
    width: 200px;
    height: 200px;
  }
}

</style>