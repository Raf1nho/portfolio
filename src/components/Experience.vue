<template>

        <h1>Experience</h1>
    <div class="div-experience">
        <dl v-for="exp in experience" :key="exp.id" class="dl-experience">
            <div class="job-title">
                <Button :id="'btn-' + exp.id" @click="activate(exp.id)" :icon="active === exp.id? 'pi pi-eye-slash' : 'pi pi-eye'" title="See activities"/>
                <dt >{{exp.job}} | {{exp.company}} <br> {{exp.period}}</dt>
            </div>
            <div class="job-content">
            <dd :id="'desc-' + exp.id" :class="{active}" v-if="active === exp.id">
                {{exp.activities}}</dd>
            <dd v-if="exp.link && active === exp.id">See my projects there by <a :href="exp.link" target="_blank"> <strong style="color:#0072bc">clicking here.</strong> </a></dd>
            </div>
            
        </dl>
    </div>

    <ContactSocial/>

</template>

<script>
import { ref } from 'vue'
import experience from "../experience.json";

export default {
    data() {
        return {
            experience: experience
        }
    },
    setup() {
        const active = ref(0)
        
        function activate(id) {
            if (active.value != id) {
                active.value = id
            } else {
                active.value = false
            }
        }        

        return { active, activate}
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

    .div-experience {
        margin-left: 6rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .dl-experience {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

  .job-title {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      margin-top: 0.5rem;
      margin-right: 3.5rem;
  }
    
    dt {
        margin-left: 1rem;
    }
    dd {
        line-height: 1.8;
        margin-bottom: 1rem;
        max-width: 95%;
        text-align: justify;
    }

}

/* Telas pequenas */
@media (max-width: 700px) {
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
        line-height: 1.5rem;
    }

    .job-title {
        display: flex;
        align-items: center;
    }

    Button {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    cursor: pointer;
}
}


    
</style>