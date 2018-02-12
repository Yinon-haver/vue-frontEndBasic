
<template>
    <div>     
        <Navbar/>
        <Jumbotron/>
        <Form/>
    </div>
</template>

<script>

import Navbar from './Navbar.vue'
import Form from './form.vue'
import Jumbotron from './Junbotron.vue'


  export default {
        components : {
            Navbar,
            Jumbotron,
            Form,
        }
       
    }
</script>

<style>

</style>
