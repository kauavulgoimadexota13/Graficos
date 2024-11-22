
import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesSociaisMinhaEscola() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas-minha-escola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent',
            textfont: { color: '#FFFFFF' }  // Garantindo que o texto dentro do gráfico seja branco
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais favoritas na Escola',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Dentro da escola, o <span>Instagram</span> é a rede social mais favorita, seguida de perto pelo <span>WhatsApp</span>. <br>Enquanto o <span>Facebook</span> está presente, ele não é a plataforma preferida pelos estudantes.`)
}

redesSociaisMinhaEscola()
