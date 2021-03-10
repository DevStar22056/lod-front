import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ShipmentPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.shipmentRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.shipmentImport,
    );
    this.shipmentAutocomplete = permissionChecker.match(
      Permissions.values.shipmentAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.shipmentCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.shipmentEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.shipmentDestroy,
    );
    this.ship = permissionChecker.match(
      Permissions.values.shipmentShip,
    );
  }
}
