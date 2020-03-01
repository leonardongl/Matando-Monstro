new Vue({
    el: "#app",
    data: {
        jogando: false,
        jogoFinalizado: false,
        guerreiroVida: 100,
        monstroVida: 100,
        guerreiroLogCor: '#44f',
        monstroLogCor: '#f44',
        guerreiroCorVida: 'green',
        monstroCorVida: 'green',
        logs: []
    },
    methods: {
        mudarJogando() {
            this.jogando = !this.jogando
            this.jogoFinalizado = false
            this.guerreiroVida = 100
            this.monstroVida = 100
            this.atualizarCorVida()
            this.logs = []
        },
        atacar() {
            var golpeMonstro = Math.floor(Math.random() * (10 + 1) + 3)
            var golpeGuerreiro = Math.floor(Math.random() * (10 + 1))
            this.guerreiroVida = this.guerreiroVida - golpeMonstro
            this.monstroVida = this.monstroVida - golpeGuerreiro
            this.novoLog(this.guerreiroLogCor, 'O guerreiro fez um ataque: ', golpeGuerreiro)
            this.novoLog(this.monstroLogCor, 'O monstro fez um ataque: ', golpeMonstro)
            this.atualizarCorVida()
            this.verificar()
        },
        especial() {
            var golpeMonstro = Math.floor(Math.random() * (10 + 1) + 3)
            var golpeGuerreiro = Math.floor(Math.random() * (10 + 1) + 6)
            this.guerreiroVida = this.guerreiroVida - golpeMonstro
            this.monstroVida = this.monstroVida - golpeGuerreiro
            this.novoLog(this.guerreiroLogCor, 'O guerreiro fez um ataque especial: ', golpeGuerreiro)
            this.novoLog(this.monstroLogCor, 'O monstro fez um ataque: ', golpeMonstro)
            this.atualizarCorVida()
            this.verificar()
        },
        curar() {
            var golpeMonstro = Math.floor(Math.random() * (10 + 1) + 3)
            var curaGuerreiro = Math.floor(Math.random() * (10 + 1) + 5)
            this.guerreiroVida = this.guerreiroVida + curaGuerreiro
            this.guerreiroVida = this.guerreiroVida - golpeMonstro
            this.novoLog(this.guerreiroLogCor, 'O guerreiro se curou: ', curaGuerreiro)
            this.novoLog(this.monstroLogCor, 'O monstro fez um ataque: ', golpeMonstro)
            this.atualizarCorVida()
            this.verificar()
        },
        atualizarCorVida() {
            if (this.guerreiroVida < 20) {
                this.guerreiroCorVida = 'red'
            } else {
                this.guerreiroCorVida = 'green'
            }
            if (this.monstroVida < 20) {
                this.monstroCorVida = 'red'
            } else {
                this.monstroCorVida = 'green'
            }
        },
        novoLog(cor, mensagem, valor) {
            this.logs.push({
                cor: cor,
                mensagem: mensagem,
                valor: valor
            })
        },
        verificar() {
            if (this.guerreiroVida > 100) {
                this.guerreiroVida = 100
            } else if (this.guerreiroVida < 1){
                this.guerreiroVida = 0
                this.jogoFinalizado = true
            }
            if (this.monstroVida > 100) {
                this.monstroVida = 100
            } else if (this.monstroVida < 1){
                this.monstroVida = 0
                this.jogoFinalizado = true
            }
        }
    }
});