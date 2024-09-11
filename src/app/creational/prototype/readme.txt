O padrão Prototype é um padrão de projeto criacional que permite criar novos objetos copiando/clonando instâncias existentes, em vez de criar novos objetos do zero. Isso é especialmente útil quando o custo de criação de um objeto é caro ou quando o processo de criação envolve muitos parâmetros complexos.

src/
├── app/
│   ├── prototipo/
│   │   ├── documento.ts              # Documento (Produto)
│   │   ├── documento-prototipo.ts    # Interface Prototype
│   │   ├── documento-texto.ts        # Produto Concreto
│   │   ├── documento-imagem.ts       # Produto Concreto
│   │   └── prototipo.component.ts    # Componente Angular (Cliente)
└── ...
