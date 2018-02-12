<template>
<div>
    <div class="container">
    <button @click="fetchData"> 
        Get data
    </button>
    <table class="table table-hover" >
        <thead>
            <tr>
            <th scope="col">number</th>
            <th scope="col">incidentID</th>
            <th scope="col">StartDate</th>
            <th scope="col">EndDate</th>
            <th scope="col">EnvironmentLob</th>
            <th scope="col">SendMail</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user,index) in usersGetInput">
                <th scope="row">{{index+1}}</th>
                <td class="bg-primary">{{user.incidentID}}</td>
                <td class="bg-success">{{user.StartDate}}</td>
                <td class="bg-warning"> {{user.EndDate}}</td>
                <td class="bg-danger">{{user.EnvironmentLob}}</td>
                <td class="bg-info">{{user.SendMail}} </td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
              UserData :{
                    incidentID:'', 
                    EnvironmentLob:'va',
                    StartDate:'',
                    EndDate:'',
                    SendMail:'',
                },
              usersGetInput:[],
        }
    },
    methods:{
        fetchData(){
            this.$http.get('https://vue-http-26677.firebaseio.com/data.json').then(response => {
               return response.json()
            }).then(data => {
                const resultArray=[];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.usersGetInput=resultArray;
            })
        }

    }
}
    
</script>

<style>

</style>
