var app = new Vue({
    el: '#root',
    data: {
        dischi: [],
        generi: [],
        genere_selezionato: ''
    },
    mounted() {
        //appena vue è pronto, faccio la chiamata ajax
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                // gestisco la risposta
                // salvo tutti i dischi
                this.dischi = risposta.data.response;

                // BONUS 1: recupero tutti i generi
                this.dischi.forEach(disco => {
                    if(!this.generi.includes(disco.genre)) {
                        this.generi.push(disco.genre);
                    }
                });

                // BONUS 2: ordino i dischi per anno di uscita
                this.dischi.sort(function(disco1, disco2) {
                    return parseInt(disco1.year) - parseInt(disco2.year);
                });
            });


    }

});
