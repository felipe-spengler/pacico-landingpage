import imgPrensa from '../assets/img_prensa.png';
import imgRobo from '../assets/img_robo.png';
import imgMisturador from '../assets/img_misturador.png';
import imgDosadora from '../assets/img_dosadora.png';
import heroFactory from '../assets/hero_factory.png';

export interface Product {
    id: string;
    name: string;
    subtitle: string;
    category: string;
    image: string;
    highlight?: boolean;
}

export const categories = ['Todos', 'Máquinas', 'Acessórios'];

export const products: Product[] = [
    {
        id: '1',
        name: 'Máquina de Bloco e Paver',
        subtitle: 'Vibro-prensas automáticas de alta performance.',
        category: 'Máquinas',
        image: imgPrensa,
        highlight: true,
    },
    {
        id: '2',
        name: 'Robô Empilhador',
        subtitle: 'Automação na paletização de blocos.',
        category: 'Máquinas',
        image: imgRobo,
        highlight: true,
    },
    {
        id: '3',
        name: 'Misturador de Concreto',
        subtitle: 'Misturador eficiente para traço perfeito.',
        category: 'Acessórios',
        image: imgMisturador,
    },
    {
        id: '4',
        name: 'Misturador Helicoidal',
        subtitle: 'Ideal para mistura contínua de média produção.',
        category: 'Acessórios',
        image: imgMisturador,
    },
    {
        id: '5',
        name: 'Central Dosadora de Agregados',
        subtitle: 'Agilidade e precisão para formulações.',
        category: 'Acessórios',
        image: imgDosadora,
    },
    {
        id: '6',
        name: 'Central To Go',
        subtitle: 'Solução compacta integrando misturador e prensagem.',
        category: 'Máquinas',
        image: imgDosadora,
    },
    {
        id: '7',
        name: 'Esteira Lisa / Taliscada',
        subtitle: 'Transporte mecânico para a linha de produção.',
        category: 'Acessórios',
        image: imgPrensa,
    },
    {
        id: '8',
        name: 'Ponte Rolante',
        subtitle: 'Içamento e logística industrial coberta.',
        category: 'Acessórios',
        image: heroFactory,
    },
    {
        id: '9',
        name: 'Pórtico Rolante',
        subtitle: 'Soluções logísticas para uso externo.',
        category: 'Acessórios',
        image: imgRobo,
    },
    {
        id: '10',
        name: 'Prensa Rotativa – Tubos',
        subtitle: 'Sistema mecânico rotativo para fabricação de tubos.',
        category: 'Máquinas',
        image: imgPrensa,
    },
];
