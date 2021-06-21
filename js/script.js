// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const mex = new Vue (
    {
        el: '#mex',
        data: {
            message: 'Hello Brothers!!',
            myImage:''
        },
        
         methods:{
          myFunction: function () {	
              this.myImage = "https://i.pinimg.com/736x/18/31/dc/1831dcb1afa6f816efb2c992d33e3f14.jpg";
          }
         }
    }
);