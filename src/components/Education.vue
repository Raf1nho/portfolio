<template>
    <h1>Education</h1>
    <div class="div-general">
    <div class="div-education">
        <h3>Courses</h3>
        <dl>
            <dt>Front-End Development Bootcamp</dt>
            <dd>IGTI - Ongoing</dd>
            <dt>Python Development</dt>
            <dd>Udemy (Geek University) - 64 hours</dd>
            <dt>Spanish</dt>
            <dd>CEU - Centro de Línguas - 480 hours</dd>
            <dt>Java Development</dt>
            <dd>Udemy - Cod3r</dd>
            <dt>Software and Automatic Tests</dt>
            <dd>Udemy - 5 hours</dd>
            <dt>UX & Design Thinking</dt>
            <dd>Udemy - 10 hours</dd>
        </dl>
    </div>
    <div class="div-education">
        <h3>Graduation</h3>
        <dl>
            <dt>Social Communication: Advertising & Marketing</dt>
            <dd>Bachelor's Degree - 2014 to 2018</dd>
            <dd>Universidade UNIAN</dd>
        </dl>
    </div>
    </div>
    <ContactSocial/>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup() {
    onMounted(() => {
        window.scrollTo(0, 0)
    }) 

    return {}
  }
    
}
</script>

<style scoped>

a {
        text-decoration: none;
        color: #dfdfdf;
}

/* Telas grandes */
@media (min-width: 1250px) {

    h1 {
        margin: 5rem 0 1rem 6rem;
        font-size: 2.5rem;
  }
    .div-general {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .div-education {
        margin-left: 6rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        line-height: 2;
    }

    h3 {
        display: inline;
        color: rgb(204, 204, 204);
    }

    dt {
        line-height: 1.5rem;
        font-weight: bold;
        margin: 0.7rem 0;
    }

    dd {
        margin-bottom: 0.5rem;
    }


}

/* Telas pequenas */
@media (max-width: 1249px) {
 h1 {
        margin-bottom: 1rem;
    }

    h3 {
        margin: 1rem 0;
    }

    dt {
        line-height: 1.5rem;
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0.7rem 0;
    }

    dd {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }
}
</style>