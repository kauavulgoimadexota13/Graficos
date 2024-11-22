import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/quantidade-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const usuarios = Object.values(dados)

    const data = [
        {
            x: redes,
            y: usuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Quantidade de usuários por rede social',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickangle: -45,
            tickfont: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 16
            }
        },
        yaxis: {
            title: 'Número de Usuários (Bilhões)',
            tickfont: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`A rede social com o maior número de usuários atualmente é o <span>Facebook</span>, seguida do <span>WhatsApp</span> e <span>Instagram</span>. <br>O número de usuários em cada rede reflete a popularidade e o alcance global de cada plataforma.`)
}

quantidadeUsuarios()

