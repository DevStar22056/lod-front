export class GenericModel {
  static get fields() {
    throw new Error('Not implemented');
  }

  static presenter(row, fieldName) {
    if (!this.fields[fieldName]) {
      throw new Error(`${fieldName} not found`);
    }

    let result;
    if (fieldName == 'sku') {
      result = [];
      for (let item of row[this.fields[fieldName].name]) {
        let label;
        if (item.shipmentSku && item.shipmentSku.quantity)
          label = `${item.shipmentSku.quantity} x ${item.name}`;
        else
          label = item.name;
        result.push({
          id: item.id,
          label: label
        })
      }
    }

    else if (fieldName == 'activedBy' || fieldName == 'updatedBy') {
      if (row[this.fields[fieldName].name]) {
        result = {
          id: row[this.fields[fieldName].name].id,
          label: row[this.fields[fieldName].name].fullName
        };
      }
    }

    else {
      result = this.fields[fieldName].forPresenter(
        row[this.fields[fieldName].name],
      );
    }

    return result;
  }
}
