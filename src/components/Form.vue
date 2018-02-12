<template>
<div>
    <div class="Form">
        <form class="needs-validation" novalidate >
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" >
                        <h1 >Uptime Complaint  </h1>                    
                    <hr>
                    <div style="width: 50%">
                        <label for="Incident ID">Incident ID</label>
                        <input
                                type="text"
                                id="Incident-ID"
                                class="form-control"
                                 placeholder="0000000"
                                 v-model.lazy="UserData.incidentID"
                                 required>     
                    </div>
                </div>
            </div>

            <div class="valid-feedback col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 " style="color: #28a745;"  v-if="(!redError & isSubmitted) " >
              Looks good!  
            </div>
 
            <div class="valid-feedback col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 " style="color: #dc3545;"  v-if="(redError & isSubmitted)  " >
              Please provide a valid Incident ID. 
            </div>
            
              <label class="is-5 title col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 startDate ">Start Date <i class="far fa-calendar-alt"></i></label>
             <div class="row ">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group ">
                    <datepicker  v-model="UserData.StartDate" ></datepicker>
                </div>
            </div>
              <label class="is-5 title col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">End Date <i class="far fa-calendar-alt"></i></label>
             <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group ">
                    <datepicker v-model="UserData.EndDate" ></datepicker>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group" style="width: 310px">
                    <label for="environment/LOB">Environment/LOB</label>
                    <select
                            id="environment/LOB"
                            class="form-control"
                            v-model="UserData.EnvironmentLob">
                            <option v-for="priority in priorities"  >{{priority}}</option>
                    </select>
                </div>
            </div>
            <h4 class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 "> Servers</h4>
                    <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="UserData.SendMail"> Send Mail <i class="far fa-envelope " style="color: #28a745;"></i>
                        </label>
                    </div>
                </div>
            </div>

          
             <!-- click.prevent to page infp -->
            <!-- need to chnge the click handling click.prevent to defult -->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        type="submit"
                        class="btn btn-primary"
                         @click.prevent="submmitToFireBase"
                           >Submit!   
                    </button>
                </div>
            </div>
        </form>
    </div>
     <hr>
      <transition name="fade">
        <!-- <div class="row" v-if="isSubmitted"> -->
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Incident :{{UserData.incidentID}}</p>
                        <p>Start Date:{{UserData.StartDate}}</p>
                        <p>End Date:{{UserData.EndDate}}</p>
                        <p>Message: </p>
                        <p><strong>Send Mail ? : {{UserData.SendMail}} </strong></p>
                        <p>Environment/Lob: {{UserData.EnvironmentLob}}</p>
                    </div>
                </div>
            </div>
        </div>
        </transition>
    </div>
</div>
</template>


<script>
import Datepicker from 'vuejs-datepicker';

    export default{
        components: {
            Datepicker,
            
        },
        data(){
            return{
                StartDate: new Date(),
                EndDate: new Date(),
                UserData :{
                    incidentID:'', 
                    EnvironmentLob:'va',
                    StartDate:'',
                    EndDate:'',
                    SendMail:'',
                },
                redError:false,
                isSubmitted:false,
                errorMessegs:false,
                priorities:['va','ga','uk','sy']
            }
        },
        methods :{
            submmitToFireBase(){
                this.$http.post('https://vue-http-26677.firebaseio.com/data.json',this.UserData).then(response => {
                    console.log(response);
                },error =>{
                    console.log(error);
                }) ;
            },
            submitted(){
                if(this.UserData.incidentID ==''){
                    this.redError=true;
                }
                this.isSubmitted= true;
            },
            checkDate(){
                if(UserData.StartDate<UserData.EndDate){

                }
            }
        },
    }
</script>

<style>
.startDate{
    padding-top: 15px
}
.Form{
    margin-right:400px;
}

</style>
