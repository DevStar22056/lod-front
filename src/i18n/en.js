const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
  },

  app: {
    title: 'LOD Admin',
  },

  entities: {
    member: {
      name: 'member',
      label: 'Members',
      menu: 'Members',
      exporterFileName: 'member_export',
      list: {
        menu: 'Members',
        title: 'Members',
      },
      create: {
        success: 'Member saved successfully',
      },
      update: {
        success: 'Member saved successfully',
      },
      destroy: {
        success: 'Member deleted successfully',
      },
      destroyAll: {
        success: 'Member(s) deleted successfully',
      },
      edit: {
        title: 'Edit Member',
      },
      fields: {
        id: 'Id',
        isInternational: 'International',
        profileImage: 'Profile Image',
        name: 'Name',
        firstName: 'First Name',
        lastName: 'Last Name',
        location: 'Location',
        membershipYearRange: 'Membership Year',
        membershipYear: 'Membership Year',
        status: 'Status',
        profileStatus: 'Profile Status',
        subscriptionStatus: 'Subscription Status',
        subscriptionLevel: 'Membership Level',
        subscriptionRenewsAt: 'Renewal Date',
        subscriptionRenewsAtRange: 'Renewal Date',
        stripeSubscriptionStartedAt: 'Subscription Started',
        additionalCrystals: 'Additional Crystals',
        additionalPlaques: 'Additional Plaques',
        stripeSubscriptionId: 'Stripe Sub Id',
        stripeCustomerId: 'Stripe Cust Id',
        practiceAddress1: 'Practice Address1',
        practiceAddress2: 'Practice Address2',
        practiceAddressCity: 'Practice City',
        practiceAddressState: 'Practice State/Province',
        practiceAddressZipRange: 'Practice Zip',
        practiceAddressZip: 'Practice Zip',
        practiceAddressCountry: 'Practice Country',
        shipments: 'Shipments',
        payments: 'Payments',
        shippingAddress1: 'Shipping Address1',
        shippingAddress2: 'Shipping Address2',
        shippingAddressCity: 'Shipping City',
        shippingAddressState: 'Shipping State/Province',
        shippingAddressZipRange: 'Shipping Zip',
        shippingAddressZip: 'Shipping Zip',
        shippingAddressCountry: 'Shipping Country',
        profileId: 'Profile ID',
        slug: 'Slug',
        profileDescription: 'Biography',
        profileEmail: 'Email',
        profileFacebook: 'Facebook',
        profileTwitter: 'Twitter',
        profileWebsite: 'Website',
        profileLastSyncedRange: 'Profile Last Synced',
        profileLastSynced: 'Profile Last Synced',
        profileSpecialization: 'Area of Practice',
        profileAvvoReview: 'Profile Avvo Review',
        profileAvvoRating: 'Profile Avvo Rating',
        profileGoogleReview: 'Profile Google Review',
        profileGoogleRating: 'Profile Google Rating',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        activedAt: 'Actived at',
        activedBy: 'Actived by',
      },
      enumerators: {
        status: {
          pending: 'Pending',
          active: 'Active',
          suspended: 'Suspended',
          canceled: 'Canceled',
          denied: 'Denied',
        },
        subscriptionStatus: {
          trialing: 'trialing',
          active: 'active',
          past_due: 'past_due',
          unpaid: 'unpaid',
          canceled: 'canceled',
        },
        subscriptionLevel: {
          charter: 'Charter',
          featured: 'Featured',
          distinguished: 'Distinguished',
        },
      },
      new: {
        title: 'New Member',
      },
      view: {
        title: 'View Member',
      },
      importer: {
        title: 'Import Members',
        fileName: 'member_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      addNote: {
        header: 'Internal Notes',
        title: 'Add Note',
        note: 'Note',
        updatedAt: 'Updated at',
        createdById: 'User ID',
      },
    },

    shipment: {
      name: 'shipment',
      label: 'Shipments',
      menu: 'Shipments',
      exporterFileName: 'shipment_export',
      list: {
        menu: 'Shipments',
        title: 'Shipments',
      },
      create: {
        success: 'Shipment saved successfully',
      },
      update: {
        success: 'Shipment saved successfully',
      },
      destroy: {
        success: 'Shipment deleted successfully',
      },
      destroyAll: {
        success: 'Shipment(s) deleted successfully',
      },
      ship: {
        success: 'Shipment shipped successfully',
      },
      shipAll: {
        success: 'Shipment(s) shipped succesfully',
      },
      edit: {
        title: 'Edit Shipment',
      },
      fields: {
        id: 'Id',
        sku: 'Items',
        shipped: 'Shipped',
        member: 'Member',
        shipmentYearRange: 'Shipment Year',
        shipmentYear: 'Shipment Year',
        trackingId: 'TrackingId',
        notes: 'Notes',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Shipment',
      },
      view: {
        title: 'View Shipment',
      },
      importer: {
        title: 'Import Shipments',
        fileName: 'shipment_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      markAsShippedLabel: 'Ship',
      markShipmentAsShippedConfirm: 'Mark {0} shipment(s) as shipped?',
    },

    sku: {
      name: 'sku',
      label: 'Skus',
      menu: 'Skus',
      exporterFileName: 'sku_export',
      list: {
        menu: 'Skus',
        title: 'Skus',
      },
      create: {
        success: 'Sku saved successfully',
      },
      update: {
        success: 'Sku saved successfully',
      },
      destroy: {
        success: 'Sku deleted successfully',
      },
      destroyAll: {
        success: 'Sku(s) deleted successfully',
      },
      edit: {
        title: 'Edit Sku',
      },
      fields: {
        id: 'Id',
        yearRange: 'Year',
        year: 'Year',
        name: 'Name',
        description: 'Description',
        photos: 'Photos',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Sku',
      },
      view: {
        title: 'View Sku',
      },
      importer: {
        title: 'Import Skus',
        fileName: 'sku_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    subscriptionPayment: {
      name: 'subscriptionPayment',
      label: 'Subscription Payments',
      menu: 'Payments',
      exporterFileName: 'subscriptionPayment_export',
      list: {
        menu: 'SubscriptionPayments',
        title: 'Payments',
      },
      create: {
        success: 'Payment saved successfully',
      },
      update: {
        success: 'SubscriptionPayment saved successfully',
      },
      destroy: {
        success: 'SubscriptionPayment deleted successfully',
      },
      destroyAll: {
        success: 'SubscriptionPayment(s) deleted successfully',
      },
      edit: {
        title: 'Edit SubscriptionPayment',
      },
      fields: {
        id: 'Id',
        stripeInvoice: 'Stripe Invoice Id',
        member: 'Member',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New SubscriptionPayment',
      },
      view: {
        title: 'View SubscriptionPayment',
      },
      importer: {
        title: 'Import SubscriptionPayments',
        fileName: 'subscriptionPayment_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount: 'Already have an account? Sign in.',
    signinWithAnotherAccount: 'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message: 'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    memberEditor: {
      label: 'Member Editor',
      description: 'Edit access to Members',
    },
    memberViewer: {
      label: 'Member Viewer',
      description: 'View access to Members',
    },
    shipmentEditor: {
      label: 'Shipment Editor',
      description: 'Edit access to Shipments',
    },
    shipmentViewer: {
      label: 'Shipment Viewer',
      description: 'View access to Shipments',
    },
    skuEditor: {
      label: 'Sku Editor',
      description: 'Edit access to Skus',
    },
    skuViewer: {
      label: 'Sku Viewer',
      description: 'View access to Skus',
    },
    subscriptionPaymentEditor: {
      label: 'SubscriptionPayment Editor',
      description: 'Edit access to SubscriptionPayments',
    },
    subscriptionPaymentViewer: {
      label: 'SubscriptionPayment Viewer',
      description: 'View access to SubscriptionPayments',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess: 'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess: 'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint: 'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists: 'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success: 'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown: '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage: 'Do not navigate away from this page or import will be stopped.',
    completed: {
      success: 'Import completed. All rows were successfully imported.',
      someErrors: 'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm: 'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel: 'Only excel (.xlsx) files are allowed',
      invalidFileUpload: 'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
