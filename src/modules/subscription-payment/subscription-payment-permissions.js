import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class SubscriptionPaymentPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.subscriptionPaymentRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.subscriptionPaymentImport,
    );
    this.subscriptionPaymentAutocomplete = permissionChecker.match(
      Permissions.values.subscriptionPaymentAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.subscriptionPaymentCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.subscriptionPaymentEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.subscriptionPaymentDestroy,
    );
  }
}
