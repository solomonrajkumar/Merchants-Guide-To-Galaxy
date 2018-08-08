export class Context {

  private static context: Context;

  private constructor() {}

  public static getInstance(): Context {
    if(this.context == null) {
      this.context = new Context();
    }
    return this.context;
  }

  private initMap = {
    _itemValueMap: {},
    _creditMultiplierMap: {}
  };

  itemValueMap() {
    return this.initMap._itemValueMap;
  }

  creditMultiplierMap() {
    return this.initMap._creditMultiplierMap;
  }
  
  itemValue(key: string): string {
    return this.initMap._itemValueMap[key];
  }

  creditMultiplier(key: string): string {
    return this.initMap._creditMultiplierMap[key];
  }

  updateItemValueMap(key: string, value: string) {
    this.initMap._itemValueMap[key] = value;
  }

  updateCreditMultiplierMap(key: string, value: number) {
    this.initMap._creditMultiplierMap[key] = value;
  }

}
