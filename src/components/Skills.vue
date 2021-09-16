<template>
    <h1>Skills</h1>
    <p class="introduction">Technologies I study and can use:</p>
    <div class="container">
    <div class="skills">
        <div class="div-skill html5">
            <font-awesome-icon class="icon" :icon="['fab', 'html5']" />
            <p>HTML5</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'css3-alt']" />
            <p>CSS3</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'bootstrap']" />
            <p>Bootstrap</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'js-square']" />
            <p>Javascript</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'vuejs']" />
            <p>Vue.Js</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'python']" />
            <p>Python</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'angular']" />
            <p>Angular</p>
        </div>
        <div class="div-skill">
            <font-awesome-icon class="icon" :icon="['fab', 'git-alt']" />
            <p>Git</p>
        </div>
    </div>
    </div>
        <p class="introduction other">Other skills:</p>
        <div class="container">
        <div class="skills">
            <div class="div-skill">
                <font-awesome-icon class="icon" :icon="['fas', 'table']" />
                <p>Excel</p>
            </div>
            <div class="div-skill">
                <font-awesome-icon class="icon" :icon="['fas', 'search']" />
                <p>SEO</p>
            </div>
            <div class="div-skill">
                <img class="icon" src="../assets/photoshop.svg" alt="">
                <p>Adobe Photoshop</p>
            </div>
            <div class="div-skill">
                <img class="icon" src="../assets/audition.svg" alt="">
                <p>Adobe Audition</p>
            </div>
        </div>
        </div>

    
    <ContactSocial/>
</template>

<script>

export default {

    setup() {
        
    }
    
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #dfdfdf;
    }

/* Telas grandes */
@media (min-width: 700px) {

    h1 {
        margin: 5rem 0 1rem 6rem;
        font-size: 2.5rem;
    }

    .introduction {
        margin-left: 6rem;
    }

    .other {
        margin-top: 2rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .skills {
        width: 60%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .div-skill{
        text-align: center;
        margin-top: 2rem;
        margin-right: 2rem;
    }

    .div-skill:not(.html5) {
        margin-left: 2rem;
        
    }

    .icon {
        height: 50px;
        width: 50px;
    }
}

/* Telas pequenas */
@media (max-width: 700px) {

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .skills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .div-skill{
        text-align: center;
        margin-top: 2rem;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        flex: 1 0 1;
        align-self: auto;

    }

    .icon {
        height: 40px;
        width: 40px;
    }

    .other {
        margin-top: 2rem;
    }

}

</style>