
export interface Group1 {

  autoGeneratedDisplayName?;
  sourceTransanctionId;
  isOTC;
  refId_Tag?;
  isOptionRelated?;
  isAutomated?;
  isCompensationBased?;
  isNeutral?;
  isPlan?;
  discretionaryInTrust?;
  isNonBenficialConnection?;
  refId_TwiqTransactionShortcutx?;
  refId_AssestClass?;
}

export interface Group1Values {

  param: Group1;

}
export interface MfcParam {

  columnName: string;
  columnoriginalName?: string;
  value: any;
  instructions: any;
  valueType: any;
  columnType?: any;
  options?: any[];
  nullable?: boolean;
  originalValue?: any;
  isUpdated?: boolean;
  inHeader?: boolean;
  isReadOnly?: boolean;
}

