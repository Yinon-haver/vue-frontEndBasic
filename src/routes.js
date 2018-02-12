import Home from './components/Home.vue'
import Info from './components/Info.vue'
import Result from './components/Result.vue'

export const routes = [
    {path : '/info', component: Info},
    {path:'/', component: Home},
    {path:'/result', component: Result}
    // {path : '/user/', component: User, children: [
    //     {path : '', component : UserStart },
    //     {path : ':id', component : UserDetail },
    //     {path : ':id/edit', component : UserEdit },
        
    // ]}

];