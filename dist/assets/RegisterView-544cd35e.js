import{r as i,o as d,c as n,d as e,k as t,v as l,m as p}from"./index-990deeeb.js";const m={class:"w-50"},u=e("h1",{class:"display-1"},"Register",-1),c={class:"form-group"},f=e("label",{for:"email"},"Correo electronico",-1),_=e("small",{id:"emailHelp",class:"form-text text-muted"},"Nunca compartiremos tu email con nadie",-1),v={class:"form-group"},w=e("label",{for:"password"},"Contraseña",-1),b={class:"form-group"},h=e("label",{for:"password"},"Confirme Contraseña",-1),y=e("button",{type:"submit",class:"btn btn-primary"},"Enviar",-1),V={__name:"RegisterView",setup(C){const a=i({email:"",password:""});return(r,s)=>(d(),n("div",m,[u,e("form",{onSubmit:s[3]||(s[3]=p((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"]))},[e("div",c,[f,t(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.email=o),type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Introduce tu email"},null,512),[[l,a.value.email]]),_]),e("div",v,[w,t(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>a.value.password=o),type:"password",class:"form-control",id:"password",placeholder:"Contraseña"},null,512),[[l,a.value.password]])]),e("div",b,[h,t(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>a.value.password=o),type:"password",class:"form-control",id:"passwordconfirm",placeholder:"Contraseña"},null,512),[[l,a.value.password]])]),y],32)]))}};export{V as default};
