import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

// import 'primeflex/primeflex.css';



//components
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Image from 'primevue/image';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import Avatar from 'primevue/avatar';
import Textarea from 'primevue/textarea';



const app = createApp(App);
app.use(PrimeVue);


app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);

app.component('CascadeSelect', CascadeSelect);
app.component('Carousel', Carousel);
app.component('Tag', Tag);
app.component('Image', Image);
app.component('Card', Card);
app.component('Avatar', Avatar);
app.component('Rating', Rating);
app.component('Textarea', Textarea);

app.component('Badge', Badge);
app.directive('badge', BadgeDirective);

app.use(router);
app.mount('#app');
