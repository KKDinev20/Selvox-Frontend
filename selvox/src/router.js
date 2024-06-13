import { createWebHistory, createRouter } from "vue-router" 
import LandingPage from "./pages/LandingPage.vue"
import  Register  from './pages/Login.vue';

const links = [
    {
    path: "/",     
    name: "HomePage",     
    component: LandingPage,
    },
    {
    path: "/login",     
    name: "Register",     
    component: Register,
    },
    
    
    ]
    
    
    const router = createRouter({   
    history: createWebHistory(),  
     routes: links, 
    })  
    
export default router