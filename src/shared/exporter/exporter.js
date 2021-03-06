import { mapKeys } from 'lodash';
import ExporterSchema from '@/shared/exporter/exporter-schema';
import { Excel } from '@/shared/excel/excel';

export default class Exporter {
  constructor(fields, excelFileName) {
    this.schema = new ExporterSchema(fields);
    this.excelFileName = excelFileName;
  }

  transformAndExportAsExcelFile(rows) {
    const exportableData = rows.map((row) => {
      const rowCasted = this.schema.cast(row);
      return this._makeNameHeadersIntoLabels(rowCasted);
    });

    let labels = this.schema.labels;

    if (this.excelFileName == 'shipment') {
      labels = [
        'Id',
        'Items',
        'Shipped',
        'Member',
        'SubscriptionStarted',
        'Name',
        'Address1',
        'Address2',
        'City',
        'StateOrProvince',
        'Zip',
        'Country',
        'Email',
        'Specialization',
        'ShipmentYear',
        'TrackingId',
        'Notes',
        'Created at',
      ];
    }

    return Excel.exportAsExcelFile(exportableData, labels, this.excelFileName + '_' + new Date().getTime());
  }

  _makeNameHeadersIntoLabels(row) {
    return mapKeys(row, (value, key) => {
      return this.schema.labelOf(key);
    });
  }
}
