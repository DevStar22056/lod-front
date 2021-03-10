const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    member: {
      name: 'Member',
      label: 'Members',
      menu: 'Members',
      exporterFileName: 'Member_exportados',
      list: {
        menu: 'Members',
        title: 'Members',
      },
      create: {
        success: 'Member salvo com sucesso',
      },
      update: {
        success: 'Member salvo com sucesso',
      },
      destroy: {
        success: 'Member deletado com sucesso',
      },
      destroyAll: {
        success: 'Member(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Member',
      },
      fields: {
        id: 'Id',
        profileImage: 'ProfileImage',
        name: 'Name',
        membershipYearRange: 'MembershipYear',
        membershipYear: 'MembershipYear',
        status: 'Status',
        profileStatus: 'Profile Status',
        subscriptionStatus: 'Subscription Status',
        subscriptionLevel: 'SubscriptionLevel',
        stripeSubscriptionStartedAt: 'Subscription Started',
        stripeSubscriptionId: 'StripeSubscriptionId',
        stripeCustomerId: 'StripeCustomerId',
        practiceAddress1: 'PracticeAddress1',
        practiceAddress2: 'PracticeAddress2',
        practiceAddressCity: 'PracticeAddressCity',
        practiceAddressState: 'PracticeAddressState',
        practiceAddressZipRange: 'PracticeAddressZip',
        practiceAddressZip: 'PracticeAddressZip',
        shipments: 'Shipments',
        payments: 'Payments',
        shippingAddress1: 'ShippingAddress1',
        shippingAddress2: 'ShippingAddress2',
        shippingAddressCity: 'shippingAddressCity',
        shippingAddressState: 'shippingAddressState',
        shippingAddressZipRange: 'shippingAddressZip',
        shippingAddressZip: 'shippingAddressZip',
        profileId: 'profileId',
        profileDescription: 'ProfileDescription',
        profileEmail: 'ProfileEmail',
        profileFacebook: 'ProfileFacebook',
        profileTwitter: 'ProfileTwitter',
        profileWebsite: 'ProfileWebsite',
        profileLastSyncedRange: 'ProfileLastSynced',
        profileLastSynced: 'ProfileLastSynced',
        profileSpecialization: 'ProfileSpecialization',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        status: {
          pending: 'Pending',
          active: 'Active',
          suspended: 'Suspended',
          canceled: 'Canceled',
          denied: 'Denied',
        },
        subscriptionLevel: {
          charter: 'Charter',
          featured: 'Featured',
          distinguished: 'Distinguished',
        },
        practiceAddressState: {
          AK: 'AK',
          AL: 'AL',
          AR: 'AR',
          AS: 'AS',
          AZ: 'AZ',
          CA: 'CA',
          CO: 'CO',
          CT: 'CT',
          DC: 'DC',
          DE: 'DE',
          FL: 'FL',
          GA: 'GA',
          GU: 'GU',
          HI: 'HI',
          IA: 'IA',
          ID: 'ID',
          IL: 'IL',
          IN: 'IN',
          KS: 'KS',
          KY: 'KY',
          LA: 'LA',
          MA: 'MA',
          MD: 'MD',
          ME: 'ME',
          MI: 'MI',
          MN: 'MN',
          MO: 'MO',
          MP: 'MP',
          MS: 'MS',
          MT: 'MT',
          NC: 'NC',
          ND: 'ND',
          NE: 'NE',
          NH: 'NH',
          NJ: 'NJ',
          NM: 'NM',
          NV: 'NV',
          NY: 'NY',
          OH: 'OH',
          OK: 'OK',
          OR: 'OR',
          PA: 'PA',
          PR: 'PR',
          RI: 'RI',
          SC: 'SC',
          SD: 'SD',
          TN: 'TN',
          TX: 'TX',
          UM: 'UM',
          UT: 'UT',
          VA: 'VA',
          VI: 'VI',
          VT: 'VT',
          WA: 'WA',
          WI: 'WI',
          WV: 'WV',
          WY: 'WY',
        },
        shippingAddressState: {
          AK: 'AK',
          AL: 'AL',
          AR: 'AR',
          AS: 'AS',
          AZ: 'AZ',
          CA: 'CA',
          CO: 'CO',
          CT: 'CT',
          DC: 'DC',
          DE: 'DE',
          FL: 'FL',
          GA: 'GA',
          GU: 'GU',
          HI: 'HI',
          IA: 'IA',
          ID: 'ID',
          IL: 'IL',
          IN: 'IN',
          KS: 'KS',
          KY: 'KY',
          LA: 'LA',
          MA: 'MA',
          MD: 'MD',
          ME: 'ME',
          MI: 'MI',
          MN: 'MN',
          MO: 'MO',
          MP: 'MP',
          MS: 'MS',
          MT: 'MT',
          NC: 'NC',
          ND: 'ND',
          NE: 'NE',
          NH: 'NH',
          NJ: 'NJ',
          NM: 'NM',
          NV: 'NV',
          NY: 'NY',
          OH: 'OH',
          OK: 'OK',
          OR: 'OR',
          PA: 'PA',
          PR: 'PR',
          RI: 'RI',
          SC: 'SC',
          SD: 'SD',
          TN: 'TN',
          TX: 'TX',
          UM: 'UM',
          UT: 'UT',
          VA: 'VA',
          VI: 'VI',
          VT: 'VT',
          WA: 'WA',
          WI: 'WI',
          WV: 'WV',
          WY: 'WY',
        },
      },
      new: {
        title: 'Novo Member',
      },
      view: {
        title: 'Visualizar Member',
      },
      importer: {
        title: 'Importar Members',
        fileName: 'member_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    shipment: {
      name: 'Shipment',
      label: 'Shipments',
      menu: 'Shipments',
      exporterFileName: 'Shipment_exportados',
      list: {
        menu: 'Shipments',
        title: 'Shipments',
      },
      create: {
        success: 'Shipment salvo com sucesso',
      },
      update: {
        success: 'Shipment salvo com sucesso',
      },
      destroy: {
        success: 'Shipment deletado com sucesso',
      },
      destroyAll: {
        success: 'Shipment(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Shipment',
      },
      fields: {
        id: 'Id',
        sku: 'Items',
        shipped: 'Shipped',
        member: 'Member',
        shipmentYearRange: 'ShipmentYear',
        shipmentYear: 'ShipmentYear',
        trackingId: 'TrackingId',
        notes: 'Notes',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      new: {
        title: 'Novo Shipment',
      },
      view: {
        title: 'Visualizar Shipment',
      },
      importer: {
        title: 'Importar Shipments',
        fileName: 'shipment_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    sku: {
      name: 'Sku',
      label: 'Skus',
      menu: 'Skus',
      exporterFileName: 'Sku_exportados',
      list: {
        menu: 'Skus',
        title: 'Skus',
      },
      create: {
        success: 'Sku salvo com sucesso',
      },
      update: {
        success: 'Sku salvo com sucesso',
      },
      destroy: {
        success: 'Sku deletado com sucesso',
      },
      destroyAll: {
        success: 'Sku(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Sku',
      },
      fields: {
        id: 'Id',
        yearRange: 'Year',
        year: 'Year',
        name: 'Name',
        description: 'Description',
        photos: 'Photos',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      new: {
        title: 'Novo Sku',
      },
      view: {
        title: 'Visualizar Sku',
      },
      importer: {
        title: 'Importar Skus',
        fileName: 'sku_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    subscriptionPayment: {
      name: 'SubscriptionPayment',
      label: 'SubscriptionPayments',
      menu: 'SubscriptionPayments',
      exporterFileName: 'SubscriptionPayment_exportados',
      list: {
        menu: 'SubscriptionPayments',
        title: 'SubscriptionPayments',
      },
      create: {
        success: 'SubscriptionPayment salvo com sucesso',
      },
      update: {
        success: 'SubscriptionPayment salvo com sucesso',
      },
      destroy: {
        success: 'SubscriptionPayment deletado com sucesso',
      },
      destroyAll: {
        success: 'SubscriptionPayment(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar SubscriptionPayment',
      },
      fields: {
        id: 'Id',
        stripeInvoice: 'StripeInvoice',
        member: 'Member',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      new: {
        title: 'Novo SubscriptionPayment',
      },
      view: {
        title: 'Visualizar SubscriptionPayment',
      },
      importer: {
        title: 'Importar SubscriptionPayments',
        fileName: 'subscriptionPayment_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message: 'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description: 'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description: 'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description: 'Acesso de visualização a todas as entidades',
    },
    memberEditor: {
      label: 'Editor de Members',
      description: 'Acesso de edição aos Members',
    },
    memberViewer: {
      label: 'Visualizador de Members',
      description: 'Acesso de visualização aos Members',
    },
    shipmentEditor: {
      label: 'Editor de Shipments',
      description: 'Acesso de edição aos Shipments',
    },
    shipmentViewer: {
      label: 'Visualizador de Shipments',
      description: 'Acesso de visualização aos Shipments',
    },
    skuEditor: {
      label: 'Editor de Skus',
      description: 'Acesso de edição aos Skus',
    },
    skuViewer: {
      label: 'Visualizador de Skus',
      description: 'Acesso de visualização aos Skus',
    },
    subscriptionPaymentEditor: {
      label: 'Editor de SubscriptionPayments',
      description: 'Acesso de edição aos SubscriptionPayments',
    },
    subscriptionPaymentViewer: {
      label: 'Visualizador de SubscriptionPayments',
      description: 'Acesso de visualização aos SubscriptionPayments',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess: 'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess: 'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess: 'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess: 'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint: 'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint: 'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/modules/home/components/home-page.vue.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf: '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf: '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min: '${path} deve possuir ao menos ${min} caracteres',
      max: '${path} deve possui no máximo ${max} caracteres',
      matches: '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim: '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      invalid: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown: '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size: 'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage: 'Não saia desta página ou a importação será interrompida.',
    completed: {
      success: 'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors: 'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors: 'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint: 'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm: 'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel: 'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload: 'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
