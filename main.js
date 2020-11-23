var app = new Vue({
    el: '#root',
    data: {
        dischi: []
    },
    mounted() {
        //appena vue è pronto, faccio la chiamata ajax
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((risposta) => {
                // gestisco la risposta
                this.dischi = risposta.data.response;
            });

    }

});
