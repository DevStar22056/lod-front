import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class MemberPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.memberRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.memberImport,
    );
    this.memberAutocomplete = permissionChecker.match(
      Permissions.values.memberAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.memberCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.memberEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.memberDestroy,
    );
    this.note = permissionChecker.match(
      Permissions.values.memberNote,
    );
  }
}
