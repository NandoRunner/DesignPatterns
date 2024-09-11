O padrão Builder (Construtor) é um padrão de projeto criacional que permite construir objetos complexos passo a passo. Ele desacopla a construção do objeto da sua representação, permitindo que o mesmo processo de construção crie representações diferentes.

src/
├── app/
│   ├── pedido/
│   │   ├── pedido-builder.ts   # Builder
│   │   ├── pedido.ts           # Produto
│   │   └── pedido.component.ts # Cliente (Componente Angular)
└── ...
