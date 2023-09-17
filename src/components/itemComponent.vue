<template>
    <div class="mb-4">
        <div class="card text-dark card-has-bg click-col"
            style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
            <img class="card-img d-none" src="https://source.unsplash.com/600x300/?tech,street"
                alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?">
            <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                    <small class="card-meta mb-2">{{ props.name }}</small>
                    <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">{{ descipcion }}</a></h4>
                    <small><i class="far fa-clock"></i> {{ props.cantidad }}</small>
                </div>
                <div class="card-footer">
                    <div class="media">
                        <img class="mr-3 rounded-circle"
                            src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                            alt="Generic placeholder image" style="max-width:50px"/>
                        <div class="media-body">
                            <h6 class="my-0 text-dark d-block">{{ props.name }}</h6>
                            <small>{{ props.comprado }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div id="wrapper" class="m-3 d-flex p-3 justify-content-center gap-3">
        <div>
            <h3 class="text-center">Articulo: <code>{{ name }}</code></h3>
            <p class="text-center">Id: <code>{{ descipcion }}</code></p>
        </div>
        <div>
            <p class="text-center">Cantidad: <code>{{ cantidad }}</code></p>
            <p class="text-center"><code>{{ comprado }}</code></p>
        </div>
    </div> -->
</template>

<script setup>
import { ref } from 'vue';
const descipcion = ref('Descricción no trabajada aún');
const props = defineProps(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        comprado: {
            type: Boolean,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        }
    }
);
</script>
<style scoped>
body{
/* Created with https://www.css-gradient.com */
background: #161616;
}
h1{
  color:#fff;
}
.lead{
  color:#aaa;
}

.wrapper{margin:10vh}

.card{
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
 overflow:hidden;
 border-radius:20px;
 min-height:450px;
   box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);

 @media (max-width: 768px) {
  min-height:100px;
}

@media (max-width: 420px) {
  min-height:100px;
}

 &.card-has-bg{
 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:120%;
  background-repeat:no-repeat;
  background-position: center center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    -webkit-filter: grayscale(1);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);}

  &:hover {
    transform: scale(0.98);
     box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    background-size:130%;
     transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

    .card-img-overlay {
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
      background: rgb(156, 209, 255);
     background: linear-gradient(0deg, rgba(39, 226, 255, 0.5) 0%, rgba(39, 226, 255, 1) 100%);
     }
  }
}
 .card-footer{
  background: none;
   border-top: none;
    .media{
     img{
       border:solid 3px rgba(255,255,255,0.3);
     }
   }
 }
  .card-title{font-weight:800}
 .card-meta{color:rgba(0,0,0,0.3);
  text-transform:uppercase;
   font-weight:500;
   letter-spacing:2px;}
 .card-body{ 
   transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
 

  }
 &:hover {
   .card-body{
     margin-top:30px;
     transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   }
 cursor: pointer;
 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
 background: rgb(255,186,33);
background: linear-gradient(0deg, rgba(255,186,33,0.3785889355742297) 0%, rgba(255,186,33,1) 100%);
}
}
@media (max-width: 767px){
  
}
</style>