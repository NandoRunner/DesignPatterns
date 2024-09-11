O Factory Method é um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, permitindo que as subclasses alterem o tipo de objeto que será criado. Ao contrário do padrão Abstract Factory, o Factory Method foca em uma única fábrica e a criação de um único produto em vez de múltiplos produtos relacionados.

src/
├── app/
│   ├── notificacao/
│   │   ├── notificacao.ts             # Interface do Produto
│   │   ├── notificacao-email.service.ts  # Produto Concreto: Notificação por Email
│   │   ├── notificacao-sms.service.ts  # Produto Concreto: Notificação por SMS
│   │   ├── notificacao.factory.ts       # Serviço Factory Method
│   │   └── notificacao.component.ts   # Cliente (Componente Angular)
└── ...
