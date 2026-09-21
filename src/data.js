 
export const products = [
    {
        id: 1,
        name: "Nexus Phone X1",
        category: "smartphones",
        price: 4299.90,
        description:
            "Smartphone premium com tela AMOLED de 6.7 polegadas, câmera avançada e alto desempenho para tarefas do dia a dia.",
        specifications: {
            screen: "6.7\" AMOLED 120Hz",
            processor: "Nexus A1",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5000 mAh"
        }
    },

    {
        id: 2,
        name: "Nexus Phone Lite",
        category: "smartphones",
        price: 2199.90,
        description:
            "Smartphone compacto e equilibrado, ideal para quem busca desempenho e praticidade.",
        specifications: {
            screen: "6.4\" AMOLED 90Hz",
            processor: "Nexus B2",
            ram: "8 GB",
            storage: "128 GB",
            battery: "4500 mAh"
        }
    },

    {
        id: 3,
        name: "Nexus ProBook 14",
        category: "notebooks",
        price: 5899.90,
        description:
            "Notebook profissional com alto desempenho para desenvolvimento, produtividade e criação de conteúdo.",
        specifications: {
            screen: "14\" IPS Full HD",
            processor: "Intel Core i7",
            ram: "16 GB",
            storage: "512 GB SSD",
            battery: "70 Wh"
        }
    },

    {
        id: 4,
        name: "Nexus UltraBook 16",
        category: "notebooks",
        price: 7499.90,
        description:
            "Notebook de alto desempenho com tela ampla e hardware desenvolvido para tarefas exigentes.",
        specifications: {
            screen: "16\" IPS 2.5K",
            processor: "AMD Ryzen 7",
            ram: "32 GB",
            storage: "1 TB SSD",
            battery: "80 Wh"
        }
    },

    {
        id: 5,
        name: "Nexus Sound Pro",
        category: "audio",
        price: 899.90,
        description:
            "Headphone sem fio com cancelamento ativo de ruído e bateria de longa duração.",
        specifications: {
            type: "Over-ear",
            connectivity: "Bluetooth 5.3",
            battery: "40 horas",
            microphone: "Integrado",
            noiseCancellation: "Ativo"
        }
    },

    {
        id: 6,
        name: "Nexus Buds",
        category: "audio",
        price: 499.90,
        description:
            "Fones de ouvido totalmente sem fio com som de alta qualidade e estojo compacto.",
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.3",
            battery: "8 horas",
            microphone: "Integrado",
            noiseCancellation: "Passivo"
        }
    },

    {
        id: 7,
        name: "Nexus Mechanical K1",
        category: "peripherals",
        price: 449.90,
        description:
            "Teclado mecânico compacto desenvolvido para produtividade e jogos.",
        specifications: {
            type: "Mecânico",
            connection: "USB-C",
            switches: "Red",
            layout: "ABNT2",
            lighting: "RGB"
        }
    },

    {
        id: 8,
        name: "Nexus Mouse M1",
        category: "peripherals",
        price: 249.90,
        description:
            "Mouse ergonômico de alta precisão com sensor de alta resolução.",
        specifications: {
            sensor: "26.000 DPI",
            connection: "Wireless / USB-C",
            buttons: "6",
            battery: "70 horas",
            weight: "72 g"
        }
    }
];

export const categories = [
    {
        id: "smartphones",
        name: "Smartphones",
        description: "Celulares e dispositivos móveis"
    },
    {
        id: "notebooks",
        name: "Notebooks",
        description: "Desempenho para trabalho e estudo"
    },
    {
        id: "audio",
        name: "Áudio",
        description: "Fones e equipamentos de áudio"
    },
    {
        id: "peripherals",
        name: "Periféricos",
        description: "Acessórios para seu setup"
    }
];