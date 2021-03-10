import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class SkuPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.skuRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.skuImport,
    );
    this.skuAutocomplete = permissionChecker.match(
      Permissions.values.skuAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.skuCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.skuEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.skuDestroy,
    );
  }
}
